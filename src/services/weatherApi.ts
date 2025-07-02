import axios from 'axios';
import { WeatherData, SearchResult } from '@/types/weather';

<<<<<<< HEAD
// Open-Meteo base URL
const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
// Nominatim base URL para busca de cidades
const GEOCODE_BASE_URL = 'https://nominatim.openstreetmap.org/search';

export const weatherService = {
  // Buscar clima atual e previsão por coordenadas
  getWeatherByCoords: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await axios.get(WEATHER_BASE_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        hourly: 'temperature_2m,relative_humidity_2m,precipitation,weathercode',
        daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode',
        current_weather: true,
        timezone: 'auto',
=======
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'your-api-key-here';
const BASE_URL = 'http://api.weatherapi.com/v1';

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const weatherService = {
  // Buscar clima atual e previsão por cidade
  getWeatherData: async (city: string): Promise<WeatherData> => {
    const response = await weatherApi.get('/forecast.json', {
      params: {
        q: city,
        days: 7,
        aqi: 'no',
        alerts: 'no',
>>>>>>> a182b95 (Base Inicial)
      },
    });
    return response.data;
  },

<<<<<<< HEAD
  // Buscar cidades por nome usando Nominatim
  searchCities: async (query: string): Promise<SearchResult[]> => {
    const response = await axios.get(GEOCODE_BASE_URL, {
      params: {
        q: query,
        format: 'json',
        addressdetails: 1,
        limit: 5,
=======
  // Buscar clima por coordenadas
  getWeatherByCoords: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await weatherApi.get('/forecast.json', {
      params: {
        q: `${lat},${lon}`,
        days: 7,
        aqi: 'no',
        alerts: 'no',
      },
    });
    return response.data;
  },

  // Buscar cidades por nome
  searchCities: async (query: string): Promise<SearchResult[]> => {
    const response = await weatherApi.get('/search.json', {
      params: {
        q: query,
>>>>>>> a182b95 (Base Inicial)
      },
    });
    return response.data;
  },
};

export default weatherService; 