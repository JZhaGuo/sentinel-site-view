
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Thermometer, Wind, Eye } from 'lucide-react';

const ClimateWidget = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
          <Cloud className="h-5 w-5 text-blue-500" />
          Environment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
              <Thermometer className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Temperature</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900 dark:text-white">24°C</p>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
              Normal
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <Wind className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Wind Speed</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900 dark:text-white">12 km/h</p>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
              Safe
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <Eye className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Visibility</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900 dark:text-white">10 km</p>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
              Clear
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClimateWidget;
