
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, AlertTriangle, Trophy, ArrowLeft, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyMap from '@/components/SafetyMap';
import ClimateWidget from '@/components/ClimateWidget';

const SupervisorDashboard = () => {
  const teamData = {
    totalWorkers: 5,
    activeAlerts: 3,
    safetyLeaderboard: [
      { name: 'David Chen', id: 'W003', score: 94, department: 'Engineering' },
      { name: 'Mike Thompson', id: 'W005', score: 92, department: 'Maintenance' },
      { name: 'John Smith', id: 'W001', score: 87, department: 'Construction' },
      { name: 'Maria Garcia', id: 'W002', score: 82, department: 'Safety' },
      { name: 'Sarah Johnson', id: 'W004', score: 75, department: 'Construction' }
    ],
    recentAlerts: [
      { worker: 'Sarah Johnson', message: 'Entered danger zone near Bulldozer Delta', time: '30 sec ago', severity: 'high' },
      { worker: 'Maria Garcia', message: 'Close proximity to Excavator Alpha', time: '1 min ago', severity: 'medium' },
      { worker: 'John Smith', message: 'Completed safety checkpoint', time: '5 min ago', severity: 'info' }
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
              <h1 className="text-3xl font-bold text-white">Supervisor Dashboard</h1>
            </div>
            <p className="text-gray-300">Real-time oversight of construction site safety</p>
          </div>
          <Badge className="bg-orange-600">Team View</Badge>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-800/50 border-gray-700 h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Eye className="h-5 w-5 text-blue-400" />
                  Live Site Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[520px] p-0">
                <SafetyMap />
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white">Team Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">Active Workers</span>
                  </div>
                  <span className="text-white font-bold">{teamData.totalWorkers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-400" />
                    <span className="text-gray-300">Active Alerts</span>
                  </div>
                  <span className="text-orange-400 font-bold">{teamData.activeAlerts}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300">Avg Safety Score</span>
                  </div>
                  <span className="text-green-400 font-bold">86</span>
                </div>
              </CardContent>
            </Card>

            {/* Climate Widget */}
            <ClimateWidget />

            {/* Recent Alerts */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white">Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teamData.recentAlerts.map((alert, index) => (
                    <div key={index} className="p-3 bg-gray-700/50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.severity === 'high' ? 'bg-red-400' : 
                          alert.severity === 'medium' ? 'bg-orange-400' : 'bg-blue-400'
                        }`} />
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{alert.worker}</p>
                          <p className="text-gray-300 text-xs">{alert.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Leaderboard */}
        <div className="mt-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Safety Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {teamData.safetyLeaderboard.map((worker, index) => (
                  <Card key={worker.id} className="bg-gray-700/50 border-gray-600">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {index === 0 && <Trophy className="h-5 w-5 text-yellow-400" />}
                        {index === 1 && <Trophy className="h-5 w-5 text-gray-300" />}
                        {index === 2 && <Trophy className="h-5 w-5 text-orange-400" />}
                        {index > 2 && <span className="text-gray-400 font-bold">#{index + 1}</span>}
                      </div>
                      <h3 className="text-white font-semibold text-sm">{worker.name}</h3>
                      <p className="text-gray-400 text-xs">{worker.department}</p>
                      <div className={`text-lg font-bold mt-2 ${
                        worker.score >= 90 ? 'text-green-400' : 
                        worker.score >= 80 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {worker.score}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
