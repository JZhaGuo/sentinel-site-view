
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, Truck, Hammer, X } from 'lucide-react';

interface Worker {
  id: string;
  name: string;
  position: [number, number];
  status: 'safe' | 'warning' | 'danger';
  department: string;
  lastUpdate: string;
}

interface Machine {
  id: string;
  name: string;
  type: 'excavator' | 'crane' | 'forklift' | 'bulldozer';
  position: [number, number];
  dangerRadius: number;
  status: 'active' | 'idle' | 'maintenance';
  operator: string;
}

// Simulated data
const workers: Worker[] = [
  { id: 'W001', name: 'John Smith', position: [-74.006, 40.7128], status: 'safe', department: 'Construction', lastUpdate: '2 min ago' },
  { id: 'W002', name: 'Maria Garcia', position: [-74.0065, 40.7130], status: 'warning', department: 'Safety', lastUpdate: '1 min ago' },
  { id: 'W003', name: 'David Chen', position: [-74.007, 40.7125], status: 'safe', department: 'Engineering', lastUpdate: '3 min ago' },
  { id: 'W004', name: 'Sarah Johnson', position: [-74.0055, 40.7135], status: 'danger', department: 'Construction', lastUpdate: '30 sec ago' },
];

const machines: Machine[] = [
  { id: 'M001', name: 'Excavator Alpha', type: 'excavator', position: [-74.0063, 40.7132], dangerRadius: 15, status: 'active', operator: 'Mike Wilson' },
  { id: 'M002', name: 'Crane Beta', type: 'crane', position: [-74.0068, 40.7128], dangerRadius: 25, status: 'active', operator: 'Lisa Brown' },
  { id: 'M003', name: 'Forklift Gamma', type: 'forklift', position: [-74.0058, 40.7133], dangerRadius: 8, status: 'idle', operator: 'Tom Davis' },
];

const SafetyMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedItem, setSelectedItem] = useState<Worker | Machine | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-74.006, 40.7128],
      zoom: 18,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      addMarkersAndZones();
    });
  };

  const addMarkersAndZones = () => {
    if (!map.current) return;

    // Add danger zones
    machines.forEach((machine) => {
      const dangerZone = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: machine.position
        },
        properties: {
          radius: machine.dangerRadius
        }
      };

      map.current!.addSource(`danger-zone-${machine.id}`, {
        type: 'geojson',
        data: dangerZone as any
      });

      map.current!.addLayer({
        id: `danger-zone-${machine.id}`,
        type: 'circle',
        source: `danger-zone-${machine.id}`,
        paint: {
          'circle-radius': {
            stops: [
              [0, 0],
              [20, machine.dangerRadius * 2]
            ],
            base: 2
          },
          'circle-color': machine.status === 'active' ? '#ef4444' : '#f59e0b',
          'circle-opacity': 0.3,
          'circle-stroke-width': 2,
          'circle-stroke-color': machine.status === 'active' ? '#dc2626' : '#d97706',
          'circle-stroke-opacity': 0.8
        }
      });
    });

    // Add worker markers
    workers.forEach((worker) => {
      const el = document.createElement('div');
      el.className = 'worker-marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      
      switch (worker.status) {
        case 'safe':
          el.style.backgroundColor = '#10b981';
          break;
        case 'warning':
          el.style.backgroundColor = '#f59e0b';
          break;
        case 'danger':
          el.style.backgroundColor = '#ef4444';
          break;
      }

      el.addEventListener('click', () => setSelectedItem(worker));

      new mapboxgl.Marker(el)
        .setLngLat(worker.position)
        .addTo(map.current!);
    });

    // Add machine markers
    machines.forEach((machine) => {
      const el = document.createElement('div');
      el.className = 'machine-marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '4px';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.fontSize = '16px';
      el.style.color = 'white';
      
      switch (machine.status) {
        case 'active':
          el.style.backgroundColor = '#dc2626';
          break;
        case 'idle':
          el.style.backgroundColor = '#6b7280';
          break;
        case 'maintenance':
          el.style.backgroundColor = '#f59e0b';
          break;
      }

      // Add machine type icon
      switch (machine.type) {
        case 'excavator':
          el.innerHTML = '🚜';
          break;
        case 'crane':
          el.innerHTML = '🏗️';
          break;
        case 'forklift':
          el.innerHTML = '🚛';
          break;
        case 'bulldozer':
          el.innerHTML = '🚧';
          break;
      }

      el.addEventListener('click', () => setSelectedItem(machine));

      new mapboxgl.Marker(el)
        .setLngLat(machine.position)
        .addTo(map.current!);
    });
  };

  useEffect(() => {
    if (mapboxToken && !showTokenInput) {
      initializeMap();
    }
    
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, showTokenInput]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'safe':
      case 'idle':
        return 'bg-green-500';
      case 'warning':
      case 'maintenance':
        return 'bg-yellow-500';
      case 'danger':
      case 'active':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (showTokenInput) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Safety Map Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your Mapbox public token to initialize the safety monitoring map.
              Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
            </p>
            <input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full p-2 border border-input rounded-md"
            />
            <Button onClick={handleTokenSubmit} className="w-full">
              Initialize Safety Map
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-background">
      {/* Map Container */}
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Stats Panel */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Card className="bg-background/95 backdrop-blur">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">Workers Active</span>
            </div>
            <div className="flex gap-2">
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
            <div className="flex gap-2">
              <Badge className="bg-red-500">Active: {machines.filter(m => m.status === 'active').length}</Badge>
              <Badge className="bg-gray-500">Idle: {machines.filter(m => m.status === 'idle').length}</Badge>
              <Badge className="bg-yellow-500">Maintenance: {machines.filter(m => m.status === 'maintenance').length}</Badge>
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
              <div className="w-5 h-5 bg-red-500 border border-white rounded flex items-center justify-center text-white text-xs">🚜</div>
              <span>Active Equipment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-red-500/30 border-2 border-red-600"></div>
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
                    <Badge className={getStatusBadgeColor(selectedItem.status)}>
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
                    <Badge className={getStatusBadgeColor(selectedItem.status)}>
                      {selectedItem.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Danger Radius:</span>
                    <span className="text-sm">{selectedItem.dangerRadius}m</span>
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
