
import React, { useState } from 'react';
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
  Cloud,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  const safetyStats = {
    incidentsAvoided: 47,
    safetyScore: 94,
    trainingsCompleted: 156,
    complianceRate: 98
  };

  const climateStats = {
    avgTemperature: 24,
    optimalDays: 22,
    weatherWarnings: 3,
    productivityImpact: 5
  };

  const workerStats = {
    totalWorkers: 127,
    activeToday: 89,
    onLeave: 12,
    avgSafetyScore: 87,
    topPerformers: 23
  };

  const systemStats = {
    uptime: 99.8,
    alerts: 12,
    dataPoints: 2847,
    lastBackup: '2 hours ago'
  };

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
                  Aegis - Panel Administrador
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Aegis Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Period Selector */}
        <div className="mb-8">
          <div className="flex gap-2">
            {(['week', 'month', 'year'] as const).map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                onClick={() => setSelectedPeriod(period)}
                className="capitalize"
              >
                {period === 'week' ? 'Semana' : period === 'month' ? 'Mes' : 'Año'}
              </Button>
            ))}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{workerStats.totalWorkers}</div>
                  <p className="text-gray-600 dark:text-gray-300">Trabajadores Totales</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{safetyStats.safetyScore}%</div>
                  <p className="text-gray-600 dark:text-gray-300">Puntuación Seguridad</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{safetyStats.incidentsAvoided}</div>
                  <p className="text-gray-600 dark:text-gray-300">Incidentes Evitados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{systemStats.uptime}%</div>
                  <p className="text-gray-600 dark:text-gray-300">Tiempo Actividad</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Safety Statistics */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Shield className="h-5 w-5 text-green-500" />
                Estadísticas de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Entrenamientos Completados</span>
                <span className="font-semibold text-gray-900 dark:text-white">{safetyStats.trainingsCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Tasa de Cumplimiento</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {safetyStats.complianceRate}%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Incidentes Evitados</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{safetyStats.incidentsAvoided}</span>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Puntuación General</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{safetyStats.safetyScore}%</span>
                </div>
                <Progress value={safetyStats.safetyScore} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Climate Impact */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Cloud className="h-5 w-5 text-blue-500" />
                Impacto Climático
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Temperatura Promedio</span>
                <span className="font-semibold text-gray-900 dark:text-white">{climateStats.avgTemperature}°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Días Óptimos</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{climateStats.optimalDays}/30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Alertas Meteorológicas</span>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  {climateStats.weatherWarnings}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Impacto en Productividad</span>
                <span className="font-semibold text-red-600 dark:text-red-400">-{climateStats.productivityImpact}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Worker Statistics */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Users className="h-5 w-5 text-purple-500" />
                Estadísticas de Trabajadores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Activos Hoy</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{workerStats.activeToday}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">En Permiso</span>
                <span className="font-semibold text-gray-900 dark:text-white">{workerStats.onLeave}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Mejor Rendimiento</span>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {workerStats.topPerformers}
                </Badge>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Puntuación Promedio</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{workerStats.avgSafetyScore}%</span>
                </div>
                <Progress value={workerStats.avgSafetyScore} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Management */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Settings className="h-5 w-5 text-gray-500" />
                Gestión del Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Configuración General</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Parámetros del sistema</p>
                </div>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurar
                </Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Notificaciones</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Alertas y avisos</p>
                </div>
                <Button size="sm" variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Gestionar
                </Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Permisos</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Control de acceso</p>
                </div>
                <Button size="sm" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Revisar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Backup completado</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{systemStats.lastBackup}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">3 nuevos trabajadores registrados</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Hace 4 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{systemStats.alerts} alertas pendientes</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Requieren atención</p>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Reportes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
