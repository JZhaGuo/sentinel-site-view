
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, ArrowLeft, Eye, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyMap from '@/components/SafetyMap';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';

const SupervisorDashboard = () => {
  const workers = [
    { name: 'Juan Pérez', score: 70, avatar: '👷' },
    { name: 'María Gómez', score: 40, avatar: '👷‍♀️' },
    { name: 'Carlos Ruíz', score: 85, avatar: '👷' }
  ];

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
                  Supervisores
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-600 dark:text-gray-400">Home</span>
              <span className="text-gray-600 dark:text-gray-400">Dashboard</span>
              <span className="text-gray-600 dark:text-gray-400">Reports</span>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Workers Overview */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {workers.map((worker, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{worker.avatar}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{worker.name}</h3>
                  <Progress value={worker.score} className="mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{worker.score}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Alerts */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              Alertas de seguridad en el sitio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <span className="font-medium text-gray-900 dark:text-white">2 incidentes</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Performance Table */}
          <div className="lg:col-span-3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-4 text-gray-600 dark:text-gray-400">Nombre</th>
                        <th className="text-left py-4 text-gray-600 dark:text-gray-400">Horas trabajadas</th>
                        <th className="text-left py-4 text-gray-600 dark:text-gray-400">Tareas completadas</th>
                        <th className="text-left py-4 text-gray-600 dark:text-gray-400">Eficiencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-4 text-gray-900 dark:text-white">Juan Pérez</td>
                        <td className="py-4 text-gray-900 dark:text-white">30</td>
                        <td className="py-4 text-gray-900 dark:text-white">21 h</td>
                        <td className="py-4 text-gray-900 dark:text-white">43%</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-4 text-gray-900 dark:text-white">María Gómez</td>
                        <td className="py-4 text-gray-900 dark:text-white">40</td>
                        <td className="py-4 text-gray-900 dark:text-white">40 c</td>
                        <td className="py-4 text-gray-900 dark:text-white">85%</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-gray-900 dark:text-white">Carlos Ruiz</td>
                        <td className="py-4 text-gray-900 dark:text-white">85</td>
                        <td className="py-4 text-gray-900 dark:text-white">35 c</td>
                        <td className="py-4 text-gray-900 dark:text-white">45%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="space-y-8">
            <ClimateWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
