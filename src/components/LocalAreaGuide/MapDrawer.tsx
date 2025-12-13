import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Attraction } from '@/data/attractions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface MapDrawerProps {
  attraction: Attraction | null;
  isOpen: boolean;
  onClose: () => void;
  nearbyAttractions: Attraction[];
}

// Approximate coordinates for Southern Illinois locations
const locationCoordinates: Record<string, [number, number]> = {
  // Default center - Marion, IL
  'default': [-88.9331, 37.7306],
  'marion': [-88.9331, 37.7306],
  'carbondale': [-89.2168, 37.7273],
  'murphysboro': [-89.3351, 37.7645],
  'makanda': [-89.2201, 37.6192],
  'alto pass': [-89.3173, 37.5703],
  'cobden': [-89.2534, 37.5312],
  'herod': [-88.4512, 37.5703],
  'harrisburg': [-88.5406, 37.7384],
  'golconda': [-88.4867, 37.3673],
  'elizabethtown': [-88.3056, 37.4462],
  'pomona': [-89.3473, 37.6392],
  'ava': [-89.4901, 37.8884],
  'anna': [-89.2470, 37.4603],
  'herrin': [-89.0273, 37.8034],
  'benton': [-88.9201, 38.0048],
  'lake of egypt': [-88.9531, 37.6806],
  'shawnee national forest': [-88.6700, 37.4800],
  'giant city state park': [-89.1851, 37.6006],
  'garden of the gods': [-88.3800, 37.5400],
  'ferne clyffe': [-88.9700, 37.5300],
  'dixon springs': [-88.6700, 37.4200],
  'cave-in-rock': [-88.1634, 37.4673],
  'paducah': [-88.6001, 37.0834],
  'creal springs': [-88.8312, 37.6145],
  'eddyville': [-88.5673, 37.4956],
  'tunnel hill': [-88.8345, 37.5678],
  'ozark': [-88.7734, 37.5012],
  'pope county': [-88.5500, 37.4100],
  'carterville': [-89.0770, 37.7603],
};

const getCoordinates = (location: string): [number, number] => {
  const lowerLocation = location.toLowerCase();
  for (const [key, coords] of Object.entries(locationCoordinates)) {
    if (lowerLocation.includes(key)) {
      return coords;
    }
  }
  return locationCoordinates['default'];
};

const MapDrawer = ({ attraction, isOpen, onClose, nearbyAttractions }: MapDrawerProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(() => 
    localStorage.getItem('mapbox_token') || ''
  );
  const [tokenInput, setTokenInput] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const saveToken = () => {
    localStorage.setItem('mapbox_token', tokenInput);
    setMapboxToken(tokenInput);
  };

  useEffect(() => {
    if (!isOpen || !mapboxToken || !attraction) return;

    let initTimer: NodeJS.Timeout;

    // Small delay to ensure the Sheet container is fully rendered
    initTimer = setTimeout(() => {
      if (!mapContainer.current) return;

      const coords = getCoordinates(attraction.location);
      
      mapboxgl.accessToken = mapboxToken;
      
      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/outdoors-v12',
          center: coords,
          zoom: 10,
          pitch: 30,
        });

        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );

        map.current.on('load', () => {
          setIsMapReady(true);
          
          // Add main attraction marker
          const mainMarkerEl = document.createElement('div');
          mainMarkerEl.className = 'main-marker';
          mainMarkerEl.innerHTML = `
            <div style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #2563eb, #1d4ed8);
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3" fill="#2563eb"/>
              </svg>
            </div>
          `;

          new mapboxgl.Marker(mainMarkerEl)
            .setLngLat(coords)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div style="padding: 8px; max-width: 200px;">
                  <strong style="font-size: 14px; color: #1d4ed8;">${attraction.name}</strong>
                  <p style="margin: 4px 0 0; font-size: 12px; color: #666;">${attraction.location}</p>
                </div>
              `)
            )
            .addTo(map.current!);

          // Add nearby attraction markers
          nearbyAttractions.forEach((nearby, index) => {
            const nearbyCoords = getCoordinates(nearby.location);
            // Add slight offset to prevent overlap
            const offset = [(Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05];
            
            const markerEl = document.createElement('div');
            markerEl.innerHTML = `
              <div style="
                width: 28px;
                height: 28px;
                background: #B87333;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                color: white;
              ">
                ${index + 1}
              </div>
            `;

            new mapboxgl.Marker(markerEl)
              .setLngLat([nearbyCoords[0] + offset[0], nearbyCoords[1] + offset[1]])
              .setPopup(
                new mapboxgl.Popup({ offset: 20 }).setHTML(`
                  <div style="padding: 8px; max-width: 180px;">
                    <strong style="font-size: 13px;">${nearby.name}</strong>
                    <p style="margin: 4px 0 0; font-size: 11px; color: #666;">${nearby.location}</p>
                    ${nearby.distance ? `<p style="margin: 2px 0 0; font-size: 11px; color: #888;">${nearby.distance}</p>` : ''}
                  </div>
                `)
              )
              .addTo(map.current!);
          });
        });
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    }, 100);

    return () => {
      clearTimeout(initTimer);
      map.current?.remove();
      setIsMapReady(false);
    };
  }, [isOpen, mapboxToken, attraction, nearbyAttractions]);

  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  const handleRecenter = () => {
    if (map.current && attraction) {
      const coords = getCoordinates(attraction.location);
      map.current.flyTo({ center: coords, zoom: 10 });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:w-[540px] sm:max-w-xl p-0 overflow-hidden">
        <SheetHeader className="p-4 pb-2 border-b bg-card">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <MapPin className="h-5 w-5 text-sivr-blue" />
            {attraction?.name || 'Location Map'}
          </SheetTitle>
          {attraction && (
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Navigation className="h-3.5 w-3.5" />
              {attraction.location}
              {attraction.distance && ` • ${attraction.distance}`}
            </p>
          )}
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-80px)]">
          {!mapboxToken ? (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="max-w-sm space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-sivr-blue/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-sivr-blue" />
                </div>
                <h3 className="font-display text-lg font-semibold">Enable Interactive Map</h3>
                <p className="text-sm text-muted-foreground">
                  To view the interactive map, please enter your Mapbox public token. 
                  You can get one free at{' '}
                  <a 
                    href="https://mapbox.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sivr-blue hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1..."
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="text-sm"
                  />
                  <Button 
                    onClick={saveToken} 
                    className="w-full bg-sivr-blue hover:bg-sivr-blue/90"
                    disabled={!tokenInput.startsWith('pk.')}
                  >
                    Enable Map
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Map Container */}
              <div className="relative flex-1 min-h-[300px]">
                <div 
                  ref={mapContainer} 
                  className="absolute inset-0 w-full h-full"
                  style={{ minHeight: '300px' }}
                />
                
                {/* Custom Zoom Controls */}
                <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handleZoomIn}
                    className="h-10 w-10 shadow-lg"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handleZoomOut}
                    className="h-10 w-10 shadow-lg"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handleRecenter}
                    className="h-10 w-10 shadow-lg"
                  >
                    <Navigation className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Attraction Details & Nearby */}
              <div className="border-t bg-card p-4 max-h-[320px] overflow-y-auto space-y-4">
                {/* About This Location */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">About This Location</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {attraction?.description}
                  </p>
                  
                  {/* Highlights */}
                  {attraction?.highlights && attraction.highlights.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {attraction.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {attraction?.website && (
                      <a
                        href={attraction.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-sivr-blue transition-colors hover:text-sivr-copper"
                      >
                        Visit Website
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {attraction?.phone && (
                      <a
                        href={`tel:${attraction.phone}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-sivr-blue"
                      >
                        {attraction.phone}
                      </a>
                    )}
                  </div>
                </div>

                {/* Nearby Points of Interest */}
                {nearbyAttractions.length > 0 && (
                  <div className="pt-3 border-t">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Nearby Activities</h4>
                    <div className="space-y-2">
                      {nearbyAttractions.slice(0, 5).map((nearby, index) => (
                        <div 
                          key={nearby.id}
                          className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sivr-copper text-white text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{nearby.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{nearby.location}</p>
                          </div>
                          {nearby.website && (
                            <a
                              href={nearby.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 p-1.5 text-sivr-blue hover:text-sivr-copper transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MapDrawer;
