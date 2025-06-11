
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Shield, TrendingUp, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';

const WorkerDashboard = () => {
  const workerData = {
    name: 'John Smith',
    id: 'W001',
    safetyScore: 87,
    alerts: [
      { type: 'warning', message: 'Approaching crane danger zone', time: '2 min ago' },
      { type: 'info', message: 'Safety briefing completed', time: '1 hour ago' }
    ],
    safetyHistory: [
      { date: '2024-01-15', score: 92, incidents: 0 },
      { date: '2024-01-14', score: 85, incidents: 1 },
      { date: '2024-01-13', score: 88, incidents: 0 },
      { date: '2024-01-12', score: 94, incidents: 0 },
      { date: '2024-01-11', score: 81, incidents: 2 }
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
              <h1 className="text-3xl font-bold text-white">Worker Dashboard</h1>
            </div>
            <p className="text-gray-300">Welcome back, {workerData.name} ({workerData.id})</p>
          </div>
          <Badge className="bg-blue-600">Worker View</Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Safety Score */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Shield className="h-5 w-5 text-blue-400" />
                  Safety Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-400">{workerData.safetyScore}</div>
                  <div className="flex-1">
                    <Progress value={workerData.safetyScore} className="h-3" />
                    <p className="text-sm text-gray-400 mt-2">
                      {workerData.safetyScore >= 90 ? 'Excellent' : 
                       workerData.safetyScore >= 80 ? 'Good' : 
                       workerData.safetyScore >= 70 ? 'Fair' : 'Needs Improvement'}
                    </p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
              </CardContent>
            </Card>

            {/* Current Alerts */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workerData.alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'warning' ? 'bg-orange-400' : 'bg-blue-400'
                      }`} />
                      <div className="flex-1">
                        <p className="text-white">{alert.message}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety History */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Safety History (Last 5 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workerData.safetyHistory.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{day.date}</p>
                        <p className="text-sm text-gray-400">{day.incidents} incidents</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={day.score} className="w-20 h-2" />
                        <span className={`font-bold ${
                          day.score >= 90 ? 'text-green-400' : 
                          day.score >= 80 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {day.score}
                        </span>
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

            {/* Quick Stats */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Today's Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Hours Worked</span>
                  <span className="text-white font-bold">6.5h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Safety Checks</span>
                  <span className="text-green-400 font-bold">3/3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Incidents</span>
                  <span className="text-green-400 font-bold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Zone Warnings</span>
                  <span className="text-yellow-400 font-bold">2</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Report Emergency
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Request Safety Check
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  View Safety Guidelines
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
