
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Shield, AlertTriangle, Clock, CheckCircle, MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClimateWidget from '@/components/ClimateWidget';
import ThemeToggle from '@/components/ThemeToggle';

const WorkerDashboard = () => {
  const [currentTask, setCurrentTask] = useState('Instalación de estructura metálica - Sector B');
  const [taskProgress, setTaskProgress] = useState(65);

  const workerInfo = {
    name: 'Juan Carlos Pérez',
    id: 'W001',
    department: 'Construcción',
    shift: 'Turno Mañana (07:00 - 15:00)',
    location: 'Sector B - Zona 3',
    safetyScore: 87,
    tasksToday: 3,
    tasksCompleted: 2,
    hoursToday: 5.5,
    totalHours: 36,
    weeklyGoal: 40
  };

  const recentActivities = [
    { time: '14:30', action: 'Inicio tarea: Instalación estructura', status: 'en-progreso' },
    { time: '13:15', action: 'Completado: Revisión de seguridad', status: 'completado' },
    { time: '12:00', action: 'Pausa almuerzo', status: 'pausa' },
    { time: '10:45', action: 'Completado: Preparación de materiales', status: 'completado' },
    { time: '09:30', action: 'Check-in de seguridad matutino', status: 'completado' },
    { time: '07:00', action: 'Inicio de jornada laboral', status: 'completado' }
  ];

  const getActivityIcon = (status: string) => {
    switch (status) {
      case 'completado':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'en-progreso':
        return <Activity className="h-4 w-4 text-blue-500" />;
      case 'pausa':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'completado':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'en-progreso':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'pausa':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      default:
        return 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600';
    }
  };

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
                  Aegis - Panel Trabajador
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{workerInfo.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{workerInfo.department} - {workerInfo.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400">Inicio</span>
              <Link to="/worker/profile">
                <span className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer">Perfil</span>
              </Link>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Current Status */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6 text-center">
              <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Actividad Actual</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{currentTask}</p>
              <Progress value={taskProgress} className="mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">{taskProgress}% completado</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Horas Hoy</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{workerInfo.hoursToday}h</div>
              <Progress value={(workerInfo.hoursToday / 8) * 100} className="mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">de 8h programadas</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ubicación</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{workerInfo.location}</p>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Zona Segura
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center p-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{workerInfo.totalHours}</div>
            <p className="text-gray-600 dark:text-gray-400">Horas esta semana</p>
            <Progress value={(workerInfo.totalHours / workerInfo.weeklyGoal) * 100} className="mt-2" />
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center p-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{workerInfo.tasksCompleted}</div>
            <p className="text-gray-600 dark:text-gray-400">Tareas completadas hoy</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">de {workerInfo.tasksToday} programadas</p>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center p-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{workerInfo.safetyScore}</div>
            <p className="text-gray-600 dark:text-gray-400">Puntuación Seguridad</p>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-1">
              Excelente
            </Badge>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</div>
            <p className="text-gray-600 dark:text-gray-400">Días sin incidentes</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">¡Sigue así!</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Activity Log */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Activity className="h-5 w-5 text-blue-500" />
                Actividad de Hoy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${getActivityColor(activity.status)}`}>
                  {getActivityIcon(activity.status)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Safety & Quick Actions */}
          <div className="space-y-6">
            {/* Safety Score Card */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <Shield className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{workerInfo.safetyScore}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Puntuación de Seguridad</p>
                <Progress value={workerInfo.safetyScore} className="max-w-md mx-auto h-3 mb-4" />
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Rendimiento Excelente
                </Badge>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4">
                  🚨 Emergencia
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-4 border-gray-300 dark:border-gray-600">
                  🔍 Solicitar revisión
                </Button>
                <Button variant="outline" className="w-full rounded-xl py-4 border-gray-300 dark:border-gray-600">
                  📋 Reportar incidencia
                </Button>
              </CardContent>
            </Card>

            <ClimateWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
