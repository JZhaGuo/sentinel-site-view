
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Clock, MapPin, Users, AlertCircle } from 'lucide-react';

const WorkerCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Simulated work schedule data
  const workSchedule = [
    { 
      date: '2024-01-15', 
      shift: 'Mañana', 
      time: '07:00-15:00', 
      location: 'Sector A - Excavación',
      task: 'Operación de maquinaria pesada',
      team: ['Juan Pérez', 'Carlos Ruíz'],
      status: 'confirmed'
    },
    { 
      date: '2024-01-16', 
      shift: 'Mañana', 
      time: '07:00-15:00', 
      location: 'Sector B - Construcción',
      task: 'Instalación de estructuras',
      team: ['María Gómez', 'Ana López'],
      status: 'confirmed'
    },
    { 
      date: '2024-01-17', 
      shift: 'Tarde', 
      time: '15:00-23:00', 
      location: 'Sector C - Mantenimiento',
      task: 'Revisión de equipos',
      team: ['Carlos Ruíz'],
      status: 'pending'
    },
    { 
      date: '2024-01-18', 
      shift: 'Descanso', 
      time: '-', 
      location: '-',
      task: 'Día libre',
      team: [],
      status: 'rest'
    },
    { 
      date: '2024-01-19', 
      shift: 'Mañana', 
      time: '07:00-15:00', 
      location: 'Sector A - Excavación',
      task: 'Capacitación de seguridad',
      team: ['Juan Pérez', 'María Gómez', 'Carlos Ruíz'],
      status: 'training'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'rest':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'training':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmado';
      case 'pending':
        return 'Pendiente';
      case 'rest':
        return 'Descanso';
      case 'training':
        return 'Capacitación';
      default:
        return 'Indefinido';
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
          <Clock className="h-5 w-5 text-blue-500" />
          Mi Calendario de Trabajo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calendar */}
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>

          {/* Schedule Details */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Próximos Turnos</h4>
            {workSchedule.map((schedule, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {schedule.date}
                  </span>
                  <Badge className={getStatusColor(schedule.status)}>
                    {getStatusText(schedule.status)}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{schedule.shift} ({schedule.time})</span>
                  </div>
                  
                  {schedule.location !== '-' && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{schedule.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <AlertCircle className="h-4 w-4 mt-0.5" />
                    <span>{schedule.task}</span>
                  </div>
                  
                  {schedule.team.length > 0 && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>Equipo: {schedule.team.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Resumen Semanal</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">32h</div>
              <div className="text-gray-600 dark:text-gray-400">Horas Programadas</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">4</div>
              <div className="text-gray-600 dark:text-gray-400">Días de Trabajo</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">1</div>
              <div className="text-gray-600 dark:text-gray-400">Capacitación</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">1</div>
              <div className="text-gray-600 dark:text-gray-400">Día de Descanso</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerCalendar;
