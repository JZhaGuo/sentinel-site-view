
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Settings, 
  ArrowLeft, 
  BarChart3, 
  Download, 
  Users, 
  AlertTriangle, 
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';

const AdminDashboard = () => {
  const systemMetrics = [
    { label: 'Total Workers', value: '5', icon: Users, color: 'text-blue-600' },
    { label: 'Safety Score', value: '86', icon: Shield, color: 'text-green-600' },
    { label: 'Total Incidents', value: '15', icon: AlertTriangle, color: 'text-orange-600' },
    { label: 'Equipment Units', value: '4', icon: BarChart3, color: 'text-purple-600' }
  ];

  const departments = [
    { name: 'Construction', score: 81, workers: 2 },
    { name: 'Engineering', score: 94, workers: 1 },
    { name: 'Maintenance', score: 92, workers: 1 },
    { name: 'Safety', score: 82, workers: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Clean Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
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
                  System Analytics
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Configuration & insights</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Admin
              </Badge>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* System Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {systemMetrics.map((metric, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Department Performance */}
          <div className="lg:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <BarChart3 className="h-6 w-6 text-purple-500" />
                  Department Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {dept.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {dept.workers} workers
                        </p>
                      </div>
                      <Badge className={`${
                        dept.score >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        dept.score >= 80 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {dept.score}
                      </Badge>
                    </div>
                    <Progress value={dept.score} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="space-y-8">
            <ClimateWidget />
            
            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
                  <Settings className="h-5 w-5 text-gray-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-6">
                  Emergency Broadcast
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-6">
                  System Settings
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-6">
                  User Management
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
