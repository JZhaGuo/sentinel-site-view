
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Shield, Clock, Activity, Target, TrendingUp, AlertTriangle, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';
import WorkerCalendar from '@/components/WorkerCalendar';
import LanguageCourses from '@/components/LanguageCourses';

const WorkerDashboard = () => {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'calendar' | 'courses'>('dashboard');

  // Worker data (simulated for Juan Pérez)
  const workerData = {
    name: 'Juan Pérez',
    id: 'EMP001',
    department: 'Construcción',
    position: 'Operador de Maquinaria Pesada',
    safetyScore: 85,
    currentActivity: 'Operando Excavadora Alpha en Sector 2',
    hoursToday: 6.5,
    hoursWeek: 38,
    hoursMonth: 152,
    tasksCompleted: 12,
    tasksTotal: 15,
    efficiency: 85,
    lastIncident: 'Hace 45 días',
    certifications: ['Operador Certificado', 'Seguridad Básica', 'Primeros Auxilios'],
    currentShift: 'Mañana (07:00 - 15:00)',
    location: 'Sector 2 - Zona de Excavación'
  };

  // Safety alerts for this worker
  const personalAlerts = [
    { type: 'info', message: 'Recuerda usar el EPP completo en todo momento', time: '8:30 AM' },
    { type: 'warning', message: 'Mantén distancia segura de la grúa en funcionamiento', time: '10:15 AM' },
    { type: 'success', message: 'Completaste la inspección de seguridad matutina', time: '7:45 AM' }
  ];

  // Recent activities
  const recentActivities = [
    { time: '14:30', activity: 'Inspección de maquinaria completada', status: 'completed' },
    { time: '12:00', activity: 'Pausa para almuerzo', status: 'break' },
    { time: '10:30', activity: 'Excavación Sector 2 - Fase 3', status: 'in-progress' },
    { time: '08:00', activity: 'Revisión de seguridad matutina', status: 'completed' },
    { time: '07:00', activity: 'Inicio de turno', status: 'completed' }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800 dark:bg-gray-900/20 dark:border-gray-800 dark:text-gray-200';
    }
  };

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'break':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (activeSection === 'calendar') {
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
                    Aegis - Mi Calendario
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveSection('dashboard')}
                >
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveSection('courses')}
                >
                  Cursos
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <WorkerCalendar />
        </div>
      </div>
    );
  }

  if (activeSection === 'courses') {
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
                    Aegis - Cursos de Idiomas
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveSection('dashboard')}
                >
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveSection('calendar')}
                >
                  Calendario
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <LanguageCourses />
        </div>
      </div>
    );
  }

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
                  Aegis - Dashboard Trabajador
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setActiveSection('calendar')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Mi Calendario
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveSection('courses')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Cursos
              </Button>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            ¡Hola, {workerData.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {workerData.position} - {workerData.department}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Activity */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <Activity className="h-6 w-6 text-blue-500" />
                  Actividad Actual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-gray-900 dark:text-white">En curso</span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium">{workerData.currentActivity}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Turno: {workerData.currentShift} | Ubicación: {workerData.location}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{workerData.hoursToday}h</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Hoy</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{workerData.hoursWeek}h</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Esta Semana</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Statistics */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <Target className="h-6 w-6 text-green-500" />
                  Mis Estadísticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {workerData.safetyScore}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Puntuación de Seguridad</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${workerData.safetyScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {workerData.efficiency}%
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Eficiencia</p>
                    <Progress value={workerData.efficiency} className="mt-2" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {workerData.tasksCompleted}/{workerData.tasksTotal}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Tareas Completadas</p>
                    <Progress value={(workerData.tasksCompleted / workerData.tasksTotal) * 100} className="mt-2" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      {workerData.hoursMonth}h
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Horas Este Mes</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Último incidente: {workerData.lastIncident}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities Timeline */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <Clock className="h-6 w-6 text-orange-500" />
                  Actividades Recientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${getActivityStatusColor(activity.status)}`}></div>
                        {index < recentActivities.length - 1 && <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mt-2"></div>}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 dark:text-white">{activity.activity}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="space-y-8">
            {/* Personal Safety Alerts */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Alertas Personales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalAlerts.map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}>
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium">{alert.message}</span>
                        <span className="text-xs opacity-70">{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
                  <Shield className="h-5 w-5 text-green-500" />
                  Mis Certificaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {workerData.certifications.map((cert, index) => (
                    <Badge key={index} className="w-full justify-center py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Climate Widget */}
            <ClimateWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
