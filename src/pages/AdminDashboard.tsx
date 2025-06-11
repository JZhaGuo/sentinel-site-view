
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
  Shield,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';

const AdminDashboard = () => {
  const systemData = {
    totalIncidents: 15,
    averageSafetyScore: 86,
    activeWorkers: 5,
    equipmentUnits: 4,
    monthlyTrends: [
      { month: 'Jan', incidents: 12, score: 84 },
      { month: 'Feb', incidents: 8, score: 87 },
      { month: 'Mar', incidents: 15, score: 86 },
      { month: 'Apr', incidents: 6, score: 91 },
      { month: 'May', incidents: 10, score: 88 }
    ],
    departmentStats: [
      { name: 'Construction', workers: 2, avgScore: 81, incidents: 8 },
      { name: 'Engineering', workers: 1, avgScore: 94, incidents: 1 },
      { name: 'Maintenance', workers: 1, avgScore: 92, incidents: 2 },
      { name: 'Safety', workers: 1, avgScore: 82, incidents: 4 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <p className="text-gray-300">System analytics and configuration management</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-purple-600">System View</Badge>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Workers</p>
                  <p className="text-2xl font-bold text-white">{systemData.activeWorkers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Avg Safety Score</p>
                  <p className="text-2xl font-bold text-green-400">{systemData.averageSafetyScore}</p>
                </div>
                <Shield className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Incidents</p>
                  <p className="text-2xl font-bold text-orange-400">{systemData.totalIncidents}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Equipment Units</p>
                  <p className="text-2xl font-bold text-blue-400">{systemData.equipmentUnits}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Trends */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  Monthly Safety Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemData.monthlyTrends.map((month, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-12 text-center">
                        <span className="text-white font-medium">{month.month}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">Safety Score</span>
                          <span className="text-green-400 font-bold">{month.score}</span>
                        </div>
                        <Progress value={month.score} className="h-2" />
                      </div>
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{month.incidents}</p>
                        <p className="text-gray-400 text-xs">incidents</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Department Analytics */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  Department Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemData.departmentStats.map((dept, index) => (
                    <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium">{dept.name}</h3>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {dept.workers} workers
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Avg Score</p>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${
                              dept.avgScore >= 90 ? 'text-green-400' : 
                              dept.avgScore >= 80 ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {dept.avgScore}
                            </span>
                            <Progress value={dept.avgScore} className="flex-1 h-2" />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Incidents</p>
                          <span className="text-orange-400 font-bold text-lg">{dept.incidents}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Climate Widget */}
            <ClimateWidget />

            {/* System Settings */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Settings className="h-5 w-5 text-gray-400" />
                  System Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Alert Thresholds
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  User Management
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Equipment Settings
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Backup & Export
                </Button>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Download className="h-5 w-5 text-blue-400" />
                  Export Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Safety Report (PDF)
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Incident Log (CSV)
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Worker Data (Excel)
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Emergency Broadcast
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  System Maintenance
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
