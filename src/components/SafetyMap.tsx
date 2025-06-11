
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, Truck, Hammer, X } from 'lucide-react';

interface Worker {
  id: string;
  name: string;
  position: { x: number; y: number };
  status: 'safe' | 'warning' | 'danger';
  department: string;
  lastUpdate: string;
}

interface Machine {
  id: string;
  name: string;
  type: 'excavator' | 'crane' | 'forklift' | 'bulldozer';
  position: { x: number; y: number };
  dangerRadius: number;
  status: 'active' | 'idle' | 'maintenance';
  operator: string;
}

// Simulated data with x,y coordinates (percentages of container)
const workers: Worker[] = [
  { id: 'W001', name: 'John Smith', position: { x: 25, y: 35 }, status: 'safe', department: 'Construction', lastUpdate: '2 min ago' },
  { id: 'W002', name: 'Maria Garcia', position: { x: 45, y: 60 }, status: 'warning', department: 'Safety', lastUpdate: '1 min ago' },
  { id: 'W003', name: 'David Chen', position: { x: 70, y: 25 }, status: 'safe', department: 'Engineering', lastUpdate: '3 min ago' },
  { id: 'W004', name: 'Sarah Johnson', position: { x: 15, y: 70 }, status: 'danger', department: 'Construction', lastUpdate: '30 sec ago' },
  { id: 'W005', name: 'Mike Thompson', position: { x: 80, y: 55 }, status: 'safe', department: 'Maintenance', lastUpdate: '1 min ago' },
];

const machines: Machine[] = [
  { id: 'M001', name: 'Excavator Alpha', type: 'excavator', position: { x: 35, y: 40 }, dangerRadius: 8, status: 'active', operator: 'Mike Wilson' },
  { id: 'M002', name: 'Crane Beta', type: 'crane', position: { x: 60, y: 30 }, dangerRadius: 12, status: 'active', operator: 'Lisa Brown' },
  { id: 'M003', name: 'Forklift Gamma', type: 'forklift', position: { x: 20, y: 65 }, dangerRadius: 5, status: 'idle', operator: 'Tom Davis' },
  { id: 'M004', name: 'Bulldozer Delta', type: 'bulldozer', position: { x: 75, y: 45 }, dangerRadius: 10, status: 'maintenance', operator: 'Anna White' },
];

const SafetyMap = () => {
  const [selectedItem, setSelectedItem] = useState<Worker | Machine | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'danger':
        return 'bg-red-500';
      case 'active':
        return 'bg-red-600';
      case 'idle':
        return 'bg-gray-500';
      case 'maintenance':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getMachineIcon = (type: string) => {
    switch (type) {
      case 'excavator':
        return '🚜';
      case 'crane':
        return '🏗️';
      case 'forklift':
        return '🚛';
      case 'bulldozer':
        return '🚧';
      default:
        return '🚛';
    }
  };

  const getDangerZoneColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'border-red-500 bg-red-500/20';
      case 'idle':
        return 'border-gray-500 bg-gray-500/10';
      case 'maintenance':
        return 'border-yellow-500 bg-yellow-500/15';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-blue-50">
        {/* Grid pattern to simulate map */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#6b7280" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Simulated terrain features */}
        <div className="absolute top-20 left-10 w-32 h-20 bg-green-300/40 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/60 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-16 bg-amber-200/30 rounded-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-32 bg-gray-300/40 rounded-lg"></div>
      </div>

      {/* Danger Zones */}
      {machines.map((machine) => (
        <div
          key={`danger-${machine.id}`}
          className={`absolute border-2 rounded-full ${getDangerZoneColor(machine.status)} pointer-events-none`}
          style={{
            left: `${machine.position.x - machine.dangerRadius}%`,
            top: `${machine.position.y - machine.dangerRadius}%`,
            width: `${machine.dangerRadius * 2}%`,
            height: `${machine.dangerRadius * 2}%`,
          }}
        />
      ))}

      {/* Worker Markers */}
      {workers.map((worker) => (
        <div
          key={worker.id}
          className={`absolute w-6 h-6 rounded-full border-2 border-white cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform ${getStatusColor(worker.status)}`}
          style={{
            left: `${worker.position.x}%`,
            top: `${worker.position.y}%`,
          }}
          onClick={() => setSelectedItem(worker)}
        />
      ))}

      {/* Machine Markers */}
      {machines.map((machine) => (
        <div
          key={machine.id}
          className={`absolute w-8 h-8 rounded border-2 border-white cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform flex items-center justify-center text-white text-sm ${getStatusColor(machine.status)}`}
          style={{
            left: `${machine.position.x}%`,
            top: `${machine.position.y}%`,
          }}
          onClick={() => setSelectedItem(machine)}
        >
          {getMachineIcon(machine.type)}
        </div>
      ))}

      {/* Stats Panel */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Card className="bg-background/95 backdrop-blur">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">Workers Active</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-green-500">Safe: {workers.filter(w => w.status === 'safe').length}</Badge>
              <Badge className="bg-yellow-500">Warning: {workers.filter(w => w.status === 'warning').length}</Badge>
              <Badge className="bg-red-500">Danger: {workers.filter(w => w.status === 'danger').length}</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-background/95 backdrop-blur">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="h-5 w-5 text-orange-500" />
              <span className="font-semibold">Equipment Status</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-red-600">Active: {machines.filter(m => m.status === 'active').length}</Badge>
              <Badge className="bg-gray-500">Idle: {machines.filter(m => m.status === 'idle').length}</Badge>
              <Badge className="bg-yellow-600">Maintenance: {machines.filter(m => m.status === 'maintenance').length}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-10">
        <Card className="bg-background/95 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Map Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-green-500 border border-white"></div>
              <span>Safe Worker</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-yellow-500 border border-white"></div>
              <span>Warning Worker</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-red-500 border border-white"></div>
              <span>Danger Worker</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 bg-red-600 border border-white rounded flex items-center justify-center text-white text-xs">🚜</div>
              <span>Active Equipment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-red-500/20 border-2 border-red-500"></div>
              <span>Danger Zone</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detail Panel */}
      {selectedItem && (
        <div className="absolute bottom-4 left-4 right-4 z-20 max-w-md mx-auto">
          <Card className="bg-background/95 backdrop-blur">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  {'department' in selectedItem ? (
                    <Users className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Hammer className="h-5 w-5 text-orange-500" />
                  )}
                  {selectedItem.name}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {'department' in selectedItem ? (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ID:</span>
                    <span className="text-sm">{selectedItem.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Department:</span>
                    <span className="text-sm">{selectedItem.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <Badge className={getStatusColor(selectedItem.status)}>
                      {selectedItem.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Last Update:</span>
                    <span className="text-sm">{selectedItem.lastUpdate}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type:</span>
                    <span className="text-sm capitalize">{selectedItem.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Operator:</span>
                    <span className="text-sm">{selectedItem.operator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <Badge className={getStatusColor(selectedItem.status)}>
                      {selectedItem.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Danger Radius:</span>
                    <span className="text-sm">{selectedItem.dangerRadius * 10}m</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SafetyMap;
