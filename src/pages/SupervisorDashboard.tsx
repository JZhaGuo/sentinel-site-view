
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, ArrowLeft, Eye, AlertTriangle, Clock, Wrench, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyMap from '@/components/SafetyMap';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';

const SupervisorDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'semana' | 'mes' | 'total'>('semana');

  const workers = [
    { name: 'Juan Pérez', score: 70, avatar: '👷', hoursWeek: 38, hoursMonth: 152, hoursTotal: 1840, tasksCompleted: 12, efficiency: 85 },
    { name: 'María Gómez', score: 40, avatar: '👷‍♀️', hoursWeek: 35, hoursMonth: 140, hoursTotal: 1650, tasksCompleted: 8, efficiency: 72 },
    { name: 'Carlos Ruíz', score: 85, avatar: '👷', hoursWeek: 40, hoursMonth: 160, hoursTotal: 2100, tasksCompleted: 15, efficiency: 92 }
  ];

  const machines = [
    { name: 'Excavadora Alpha', type: 'Excavadora', hoursWeek: 35, hoursMonth: 140, nextMaintenance: '3 días', status: 'Activa', operator: 'Mike Wilson' },
    { name: 'Grúa Beta', type: 'Grúa', hoursWeek: 28, hoursMonth: 112, nextMaintenance: '1 semana', status: 'Activa', operator: 'Lisa Brown' },
    { name: 'Montacargas Gamma', type: 'Montacargas', hoursWeek: 20, hoursMonth: 80, nextMaintenance: '5 días', status: 'Inactiva', operator: 'Tom Davis' },
    { name: 'Bulldozer Delta', type: 'Bulldozer', hoursWeek: 0, hoursMonth: 45, nextMaintenance: 'Hoy', status: 'Mantenimiento', operator: 'Anna White' }
  ];

  const getStatsForPeriod = () => {
    switch (selectedPeriod) {
      case 'semana':
        return {
          totalHours: workers.reduce((sum, w) => sum + w.hoursWeek, 0),
          avgEfficiency: Math.round(workers.reduce((sum, w) => sum + w.efficiency, 0) / workers.length),
          machineHours: machines.reduce((sum, m) => sum + m.hoursWeek, 0)
        };
      case 'mes':
        return {
          totalHours: workers.reduce((sum, w) => sum + w.hoursMonth, 0),
          avgEfficiency: Math.round(workers.reduce((sum, w) => sum + w.efficiency, 0) / workers.length),
          machineHours: machines.reduce((sum, m) => sum + m.hoursMonth, 0)
        };
      case 'total':
        return {
          totalHours: workers.reduce((sum, w) => sum + w.hoursTotal, 0),
          avgEfficiency: Math.round(workers.reduce((sum, w) => sum + w.efficiency, 0) / workers.length),
          machineHours: 2500
        };
    }
  };

  const stats = getStatsForPeriod();

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
                  Aegis - Dashboard Supervisor
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-600 dark:text-gray-400">Inicio</span>
              <span className="text-gray-600 dark:text-gray-400">Dashboard</span>
              <span className="text-gray-600 dark:text-gray-400">Reportes</span>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Period Selector */}
        <div className="mb-8">
          <div className="flex gap-2">
            {(['semana', 'mes', 'total'] as const).map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                onClick={() => setSelectedPeriod(period)}
                className="capitalize"
              >
                {period === 'total' ? 'Total' : period}
              </Button>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stats.totalHours}h
              </div>
              <p className="text-gray-600 dark:text-gray-300">Horas Trabajadas</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stats.avgEfficiency}%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Eficiencia Promedio</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {stats.machineHours}h
              </div>
              <p className="text-gray-600 dark:text-gray-300">Horas Maquinaria</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {workers.filter(w => w.score >= 70).length}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Trabajadores Seguros</p>
            </CardContent>
          </Card>
        </div>

        {/* Safety Map */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              Mapa de Seguridad en Tiempo Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 relative">
              <SafetyMap />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Workers Performance Table */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Rendimiento del Equipo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-600 dark:text-gray-400">Trabajador</th>
                      <th className="text-left py-3 text-gray-600 dark:text-gray-400">Horas</th>
                      <th className="text-left py-3 text-gray-600 dark:text-gray-400">Eficiencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workers.map((worker, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 text-gray-900 dark:text-white">{worker.name}</td>
                        <td className="py-3 text-gray-900 dark:text-white">
                          {selectedPeriod === 'semana' ? worker.hoursWeek : 
                           selectedPeriod === 'mes' ? worker.hoursMonth : 
                           worker.hoursTotal}h
                        </td>
                        <td className="py-3">
                          <Badge className={worker.efficiency >= 85 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : 
                                          worker.efficiency >= 75 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                                          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}>
                            {worker.efficiency}%
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Machinery Status */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Estado de Maquinaria
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {machines.map((machine, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{machine.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Operador: {machine.operator}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Horas {selectedPeriod}: {selectedPeriod === 'semana' ? machine.hoursWeek : machine.hoursMonth}h
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={machine.status === 'Activa' ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : 
                                      machine.status === 'Inactiva' ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200" :
                                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}>
                        {machine.status}
                      </Badge>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Revisión: {machine.nextMaintenance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Safety Alerts and Climate */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Alertas de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-900 dark:text-white">Sarah Johnson en zona peligrosa (Bulldozer Delta)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-900 dark:text-white">María Gómez cerca de zona de riesgo (Excavadora Alpha)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-900 dark:text-white">Bulldozer Delta requiere mantenimiento urgente</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <ClimateWidget />
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
