
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Shield, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';

const WorkerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Trabajadores
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400">Home</span>
              <span className="text-gray-600 dark:text-gray-400">Activity</span>
              <span className="text-gray-600 dark:text-gray-400">Profile</span>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-12 text-center">
            <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">36</div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Horas trabajadas</p>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-12 text-center">
            <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">12</div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Tareas completadas</p>
          </Card>
        </div>

        {/* Achievements Section */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Logros desbloqueados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🏆</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🔧</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="text-2xl">👷</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Safety Score */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
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
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <ClimateWidget />
            
            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-6">
                  Emergencia
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-6 border-gray-300 dark:border-gray-600">
                  Solicitar revisión
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
