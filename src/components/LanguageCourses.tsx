
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Users, Clock, Calendar, Star, Play } from 'lucide-react';

const LanguageCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Simulated courses data
  const availableCourses = [
    {
      id: 'spanish-basic',
      title: 'Español Básico para Principiantes',
      level: 'Principiante',
      instructor: 'Ana López',
      duration: '8 semanas',
      schedule: 'Lunes y Miércoles 16:00-17:00',
      participants: 12,
      maxParticipants: 15,
      progress: 65,
      description: 'Aprende los conceptos básicos del español para comunicarte en el trabajo.',
      nextClass: '2024-01-15 16:00',
      enrolled: true,
      rating: 4.8
    },
    {
      id: 'spanish-intermediate',
      title: 'Español Intermedio',
      level: 'Intermedio',
      instructor: 'Carlos Méndez',
      duration: '10 semanas',
      schedule: 'Martes y Jueves 17:00-18:00',
      participants: 8,
      maxParticipants: 12,
      progress: 45,
      description: 'Mejora tu fluidez y vocabulario técnico en español.',
      nextClass: '2024-01-16 17:00',
      enrolled: false,
      rating: 4.6
    },
    {
      id: 'safety-spanish',
      title: 'Terminología de Seguridad en Español',
      level: 'Especializado',
      instructor: 'María Santos',
      duration: '6 semanas',
      schedule: 'Viernes 15:00-16:30',
      participants: 15,
      maxParticipants: 20,
      progress: 80,
      description: 'Vocabulario especializado en seguridad laboral y prevención de riesgos.',
      nextClass: '2024-01-19 15:00',
      enrolled: true,
      rating: 4.9
    },
    {
      id: 'english-basic',
      title: 'Inglés Básico para Trabajadores',
      level: 'Principiante',
      instructor: 'John Smith',
      duration: '12 semanas',
      schedule: 'Lunes y Viernes 18:00-19:00',
      participants: 6,
      maxParticipants: 15,
      progress: 0,
      description: 'Inglés básico para comunicación internacional en proyectos.',
      nextClass: '2024-01-22 18:00',
      enrolled: false,
      rating: 4.5
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Especializado':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white">
          <BookOpen className="h-5 w-5 text-blue-500" />
          Cursos de Idiomas Disponibles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* My Enrolled Courses */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Mis Cursos Actuales</h4>
            <div className="grid gap-4">
              {availableCourses.filter(course => course.enrolled).map((course) => (
                <div key={course.id} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 dark:text-white">{course.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{course.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.schedule}
                        </span>
                      </div>
                    </div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Progreso del curso</span>
                      <span className="font-medium text-gray-900 dark:text-white">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Próxima clase: {formatDate(course.nextClass)}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Courses */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Cursos Disponibles</h4>
            <div className="grid gap-4">
              {availableCourses.filter(course => !course.enrolled).map((course) => (
                <div key={course.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 dark:text-white">{course.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{course.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {course.schedule}
                        </span>
                      </div>
                    </div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{course.participants}/{course.maxParticipants} participantes</span>
                      <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={course.participants >= course.maxParticipants}
                    >
                      {course.participants >= course.maxParticipants ? 'Completo' : 'Inscribirse'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Recursos de Aprendizaje</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Play className="h-4 w-4 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">Videos tutoriales</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Material de estudio</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-gray-700 dark:text-gray-300">Grupos de práctica</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageCourses;
