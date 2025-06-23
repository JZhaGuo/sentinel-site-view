
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';

const WorkerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Clean Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Welcome back, John
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Worker ID: W001</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Worker
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Safety Score - Primary Focus */}
        <Card className="mb-12 bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full mb-6">
              <Shield className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">87</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Safety Score</p>
            <Progress value={87} className="max-w-md mx-auto h-3 mb-6" />
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Good Performance
            </Badge>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Alerts */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    Approaching crane danger zone
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2 minutes ago</p>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    Safety briefing completed
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">1 hour ago</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <ClimateWidget />
            
            {/* Today's Stats */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Today
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Hours</span>
                  <span className="font-semibold text-gray-900 dark:text-white">6.5h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Incidents</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Warnings</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">2</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-6">
                  Report Emergency
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-6">
                  Request Safety Check
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
