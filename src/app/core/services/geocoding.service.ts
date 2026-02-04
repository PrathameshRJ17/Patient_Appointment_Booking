import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GeocodingResult {
  latitude: number;
  longitude: number;
  formatted_address: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) {}

  // Using OpenStreetMap Nominatim API with better formatting
  geocodeAddress(address: string, city: string, state: string, zipCode: string): Promise<GeocodingResult> {
    // Format address more precisely for Indian addresses
    const addressParts = [];
    if (address) addressParts.push(address);
    if (zipCode) addressParts.push(zipCode); // Put zipcode before city for better accuracy
    if (city) addressParts.push(city);
    if (state) addressParts.push(state);
    addressParts.push('India'); // Always add country
    
    const fullAddress = addressParts.join(', ');
    const encodedAddress = encodeURIComponent(fullAddress);
    
    // Use more specific parameters for better accuracy
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1&countrycodes=in&addressdetails=1`;

    console.log('Geocoding address:', fullAddress);

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Geocoding response:', data);
        if (data && data.length > 0) {
          const result = data[0];
          return {
            latitude: parseFloat(result.lat),
            longitude: parseFloat(result.lon),
            formatted_address: result.display_name
          };
        } else {
          throw new Error('Address not found');
        }
      });
  }

  // Specific method for Indian pin codes
  async geocodePinCode(pinCode: string): Promise<GeocodingResult> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${pinCode}+India&limit=1&countrycodes=in&addressdetails=1`;
    
    console.log('Geocoding pin code:', pinCode);
    
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Pin code geocoding response:', data);
        if (data && data.length > 0) {
          const result = data[0];
          return {
            latitude: parseFloat(result.lat),
            longitude: parseFloat(result.lon),
            formatted_address: result.display_name
          };
        } else {
          throw new Error('Pin code not found');
        }
      });
  }

  // Fallback method using a simple geocoding approach
  async geocodeAddressSimple(address: string, city: string, state: string): Promise<GeocodingResult> {
    try {
      return await this.geocodeAddress(address, city, state, '');
    } catch (error) {
      // Return approximate coordinates for major cities as fallback
      const cityCoords = this.getCityCoordinates(city, state);
      if (cityCoords) {
        return cityCoords;
      }
      throw new Error('Unable to geocode address');
    }
  }

  private getCityCoordinates(city: string, state: string): GeocodingResult | null {
    // Remove hardcoded city coordinates - use external geocoding only
    return null;
  }
}