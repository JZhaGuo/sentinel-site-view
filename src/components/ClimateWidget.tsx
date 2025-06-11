
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Thermometer, Wind, CloudRain, Sun } from 'lucide-react';

interface ClimateData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  weatherCondition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  warnings: string[];
}

const ClimateWidget = () => {
  const [climateData, setClimateData] = useState<ClimateData>({
    temperature: 22,
    windSpeed: 8,
    humidity: 65,
    weatherCondition: 'sunny',
    warnings: []
  });

  // Simulate real-time climate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = 18 + Math.random() * 20; // 18-38°C
      const newWind = Math.random() * 25; // 0-25 km/h
      const newHumidity = 40 + Math.random() * 40; // 40-80%
      
      const conditions: ClimateData['weatherCondition'][] = ['sunny', 'cloudy', 'rainy', 'stormy'];
      const newCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      const warnings: string[] = [];
      if (newTemp > 35) warnings.push('Extreme Heat Warning');
      if (newTemp < 5) warnings.push('Cold Weather Alert');
      if (newWind > 20) warnings.push('High Wind Advisory');
      if (newCondition === 'stormy') warnings.push('Storm Warning');
      
      setClimateData({
        temperature: Math.round(newTemp),
        windSpeed: Math.round(newWind),
        humidity: Math.round(newHumidity),
        weatherCondition: newCondition,
        warnings
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    switch (climateData.weatherCondition) {
      case 'sunny': return <Sun className="h-6 w-6 text-yellow-400" />;
      case 'cloudy': return <Sun className="h-6 w-6 text-gray-400" />;
      case 'rainy': return <CloudRain className="h-6 w-6 text-blue-400" />;
      case 'stormy': return <CloudRain className="h-6 w-6 text-red-400" />;
      default: return <Sun className="h-6 w-6" />;
    }
  };

  const getTemperatureColor = () => {
    if (climateData.temperature > 35) return 'text-red-400';
    if (climateData.temperature > 25) return 'text-orange-400';
    if (climateData.temperature < 5) return 'text-blue-400';
    return 'text-green-400';
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          {getWeatherIcon()}
          Climate Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Temperature */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">Temperature</span>
          </div>
          <span className={`font-bold ${getTemperatureColor()}`}>
            {climateData.temperature}°C
          </span>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">Wind Speed</span>
          </div>
          <span className={`font-bold ${climateData.windSpeed > 20 ? 'text-red-400' : 'text-green-400'}`}>
            {climateData.windSpeed} km/h
          </span>
        </div>

        {/* Humidity */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CloudRain className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">Humidity</span>
          </div>
          <span className="font-bold text-blue-400">{climateData.humidity}%</span>
        </div>

        {/* Weather Warnings */}
        {climateData.warnings.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span className="text-red-400 font-semibold">Active Warnings</span>
            </div>
            {climateData.warnings.map((warning, index) => (
              <Badge key={index} className="bg-red-600/20 text-red-400 border-red-600">
                {warning}
              </Badge>
            ))}
          </div>
        )}

        {climateData.warnings.length === 0 && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-sm">No weather warnings</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClimateWidget;
