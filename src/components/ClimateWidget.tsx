
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CloudSun, Wind, Thermometer } from 'lucide-react';

const ClimateWidget = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
          <CloudSun className="h-5 w-5 text-blue-500" />
          Clima
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Thermometer className="h-5 w-5 text-orange-500" />
            <span className="text-gray-600 dark:text-gray-300">Temperatura</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">24°C</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wind className="h-5 w-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">Viento</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">12 km/h</span>
        </div>
        
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 w-full justify-center">
            Condiciones óptimas
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClimateWidget;
