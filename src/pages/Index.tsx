
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Settings, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const roles = [
    {
      title: 'Worker',
      description: 'Personal safety dashboard',
      icon: HardHat,
      path: '/worker',
      color: 'from-blue-500 to-blue-600',
      badge: 'Personal'
    },
    {
      title: 'Supervisor',
      description: 'Team oversight & monitoring',
      icon: Users,
      path: '/supervisor',
      color: 'from-orange-500 to-orange-600',
      badge: 'Team'
    },
    {
      title: 'Admin',
      description: 'System analytics & settings',
      icon: Settings,
      path: '/admin',
      color: 'from-purple-500 to-purple-600',
      badge: 'System'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            SafetyMap Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Construction site safety management designed for modern teams
          </p>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-sm font-medium">
            Live Simulation
          </Badge>
        </div>
      </div>

      {/* Role Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <Card key={role.title} className="group bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${role.color}`} />
              <CardHeader className="text-center pt-12 pb-6">
                <div className="mx-auto w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <role.icon className="h-10 w-10 text-gray-600 dark:text-gray-300" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {role.title}
                </CardTitle>
                <Badge variant="outline" className="mx-auto border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                  {role.badge}
                </Badge>
              </CardHeader>
              <CardContent className="text-center px-8 pb-12">
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {role.description}
                </p>
                <Link to={role.path}>
                  <Button className="group/btn w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl py-6 text-lg font-medium transition-all duration-200">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Features */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">
            Everything you need for safety
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Real-time Tracking', icon: '📍' },
              { title: 'Smart Alerts', icon: '🚨' },
              { title: 'Weather Monitoring', icon: '🌤️' },
              { title: 'Safety Analytics', icon: '📊' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
