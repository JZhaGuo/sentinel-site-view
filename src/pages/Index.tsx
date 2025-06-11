
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Settings, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const roles = [
    {
      title: 'Worker Dashboard',
      description: 'View personal alerts, safety score, and behavior history',
      icon: HardHat,
      path: '/worker',
      color: 'bg-blue-600 hover:bg-blue-700',
      badge: 'Personal View'
    },
    {
      title: 'Supervisor Dashboard',
      description: 'Monitor all workers, machines, and real-time alerts',
      icon: Users,
      path: '/supervisor',
      color: 'bg-orange-600 hover:bg-orange-700',
      badge: 'Team View'
    },
    {
      title: 'Admin Dashboard',
      description: 'System analytics, reports, and configuration settings',
      icon: Settings,
      path: '/admin',
      color: 'bg-purple-600 hover:bg-purple-700',
      badge: 'System View'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">SafetyMap Pro</h1>
          </div>
          <p className="text-xl text-gray-300">Construction Site Safety Management System</p>
          <Badge className="mt-4 bg-green-600">Live Simulation</Badge>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <Card key={role.title} className="bg-gray-800/50 border-gray-700 backdrop-blur hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <role.icon className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">{role.title}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto border-gray-600 text-gray-300">
                  {role.badge}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6">{role.description}</p>
                <Link to={role.path}>
                  <Button className={`w-full ${role.color} text-white font-semibold`}>
                    Access Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Real-time Tracking', desc: 'Live worker & equipment monitoring' },
            { title: 'Safety Alerts', desc: 'Instant notifications for hazards' },
            { title: 'Climate Monitoring', desc: 'Environmental condition tracking' },
            { title: 'Analytics Dashboard', desc: 'Comprehensive safety reports' }
          ].map((feature, idx) => (
            <Card key={idx} className="bg-gray-800/30 border-gray-700 text-center">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
