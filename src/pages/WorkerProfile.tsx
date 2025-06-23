
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Star, Gift, Trophy, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const WorkerProfile = () => {
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);
  
  const workerStats = {
    name: 'John Smith',
    id: 'W001',
    stars: 47,
    level: 'Safety Champion',
    safetyScore: 87,
    daysWithoutIncident: 45,
    completedTrainings: 12
  };

  const achievements = [
    { name: 'First Week', icon: Star, earned: true },
    { name: 'Safety Star', icon: Award, earned: true },
    { name: 'Team Player', icon: Trophy, earned: true },
    { name: 'Perfect Month', icon: Star, earned: false }
  ];

  const prizes = [
    { name: 'Extra Break Time', cost: 20, available: true },
    { name: 'Preferred Parking', cost: 35, available: true },
    { name: 'Gift Card $25', cost: 50, available: false },
    { name: 'Day Off', cost: 100, available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/worker">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {workerStats.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Worker Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {workerStats.level}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Stars & Level */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-0">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
              <Star className="h-10 w-10 text-yellow-600 dark:text-yellow-400 fill-current" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {workerStats.stars} ⭐
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Stars Earned</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <Card className="bg-white dark:bg-gray-800 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-xl ${
                  achievement.earned 
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                    : 'bg-gray-50 dark:bg-gray-700 opacity-50'
                }`}>
                  <achievement.icon className={`h-6 w-6 ${
                    achievement.earned ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                  }`} />
                  <span className={`font-medium ${
                    achievement.earned ? 'text-gray-900 dark:text-white' : 'text-gray-500'
                  }`}>
                    {achievement.name}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Prize Exchange */}
          <Card className="bg-white dark:bg-gray-800 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                <Gift className="h-5 w-5 text-purple-500" />
                Prize Exchange
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {prizes.map((prize, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  prize.available 
                    ? 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20' 
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-medium ${
                        prize.available ? 'text-gray-900 dark:text-white' : 'text-gray-500'
                      }`}>
                        {prize.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {prize.cost} stars
                      </p>
                    </div>
                    <Button
                      size="sm"
                      disabled={!prize.available || workerStats.stars < prize.cost}
                      className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
                    >
                      Redeem
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <Card className="mt-8 bg-white dark:bg-gray-800 border-0">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Performance Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {workerStats.daysWithoutIncident}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Days Without Incident</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {workerStats.safetyScore}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Safety Score</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {workerStats.completedTrainings}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Trainings Completed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerProfile;
