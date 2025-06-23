
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Settings, 
  Users, 
  BarChart3, 
  Shield,
  Download,
  Bell,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const AdminProfile = () => {
  const adminStats = {
    name: 'Sarah Johnson',
    role: 'Safety Administrator',
    department: 'Operations',
    lastLogin: '2 hours ago'
  };

  const systemStats = [
    { label: 'Total Users', value: '124', icon: Users },
    { label: 'Active Alerts', value: '8', icon: Bell },
    { label: 'System Health', value: '98%', icon: Database },
    { label: 'Avg Safety Score', value: '86', icon: Shield }
  ];

  const quickActions = [
    { label: 'User Management', icon: Users, color: 'blue' },
    { label: 'System Settings', icon: Settings, color: 'gray' },
    { label: 'Export Reports', icon: Download, color: 'green' },
    { label: 'Analytics Dashboard', icon: BarChart3, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {adminStats.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Administrator Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Admin
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Admin Info */}
        <Card className="mb-8 bg-white dark:bg-gray-800 border-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {adminStats.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{adminStats.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{adminStats.department}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last login: {adminStats.lastLogin}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="bg-white dark:bg-gray-800 border-0">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 rounded-xl"
                >
                  <action.icon className="h-5 w-5" />
                  {action.label}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white dark:bg-gray-800 border-0">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                <p className="font-medium text-gray-900 dark:text-white mb-1">
                  System backup completed
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">1 hour ago</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                <p className="font-medium text-gray-900 dark:text-white mb-1">
                  New user registered
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">3 hours ago</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
                <p className="font-medium text-gray-900 dark:text-white mb-1">
                  Safety alert resolved
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">5 hours ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
