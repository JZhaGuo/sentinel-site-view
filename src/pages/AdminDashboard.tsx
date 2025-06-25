
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import ThemeToggle from '@/components/ThemeToggle';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Administrador
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Company Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* System Settings */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">General</p>
                <p className="text-gray-600 dark:text-gray-400">Notifications</p>
                <p className="text-gray-600 dark:text-gray-400">Permissions</p>
              </div>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-end justify-center space-x-2">
                {/* Simple chart representation */}
                <div className="w-8 h-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-8 h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-8 h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-8 h-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-8 h-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">Users</p>
              <p className="text-gray-600 dark:text-gray-400">Roles</p>
            </div>
            
            {/* Chart */}
            <div className="h-48 flex items-end justify-center space-x-4">
              <div className="w-12 h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-12 h-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-12 h-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-12 h-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-12 h-40 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
