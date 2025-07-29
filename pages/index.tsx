import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  Users, 
  Search, 
  MapPin, 
  Calendar, 
  Star,
  Heart,
  Share,
  Wifi,
  Car,
  Coffee,
  Waves,
  Globe,
  Menu
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProperties = [
    {
      id: 1,
      title: "Villa Moderna en Playa del Carmen",
      location: "Quintana Roo, México",
      price: "$2,500",
      rating: 4.8,
      reviews: 89,
      image: "/api/placeholder/400/300",
      guests: "6 huéspedes",
      dates: "15-20 nov"
    },
    {
      id: 2,
      title: "Casa Colonial en San Miguel",
      location: "Guanajuato, México",
      price: "$1,800",
      rating: 4.7,
      reviews: 203,
      image: "/api/placeholder/400/300",
      guests: "4 huéspedes",
      dates: "12-17 dic"
    },
    {
      id: 3,
      title: "Loft Contemporáneo CDMX",
      location: "Ciudad de México",
      price: "$1,200",
      rating: 4.9,
      reviews: 127,
      image: "/api/placeholder/400/300",
      guests: "2 huéspedes",
      dates: "8-13 ene"
    },
    {
      id: 4,
      title: "Cabaña Rústica en Tulum",
      location: "Quintana Roo, México",
      price: "$3,200",
      rating: 5.0,
      reviews: 45,
      image: "/api/placeholder/400/300",
      guests: "8 huéspedes",
      dates: "22-27 feb"
    },
    {
      id: 5,
      title: "Departamento en Guaymas",
      location: "Sonora, México",
      price: "$1,816",
      rating: 4.88,
      reviews: 156,
      image: "/api/placeholder/400/300",
      guests: "4 huéspedes",
      dates: "5-10 mar"
    },
    {
      id: 6,
      title: "Residencia en Guaymas",
      location: "Sonora, México",
      price: "$3,259",
      rating: 4.85,
      reviews: 92,
      image: "/api/placeholder/400/300",
      guests: "6 huéspedes",
      dates: "18-23 abr"
    }
  ];

  return (
    <>
      <Head>
        <title>Solarix - Encuentra tu próximo destino ideal</title>
        <meta name="description" content="Descubre propiedades únicas y experiencias inolvidables en México" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Header estilo Airbnb */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-coral-500 to-coral-600 p-2 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-coral-500">Solarix</span>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Alojamientos</Link>
                <Link href="/experiencias" className="text-gray-700 hover:text-gray-900 font-medium">Experiencias</Link>
                <Link href="/servicios" className="text-gray-700 hover:text-gray-900 font-medium">Servicios</Link>
              </nav>
              
              {/* User menu */}
              <div className="flex items-center space-x-4">
                <Link href="/anfitrion" className="text-gray-700 hover:text-gray-900 font-medium hidden md:block">
                  Conviértete en anfitrión
                </Link>
                <Globe className="h-5 w-5 text-gray-700 cursor-pointer" />
                <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md transition-shadow cursor-pointer">
                  <Menu className="h-4 w-4 text-gray-700" />
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section estilo Airbnb */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Encuentra tu próximo
              <br />
              <span className="text-coral-500">destino ideal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Descubre propiedades únicas, experiencias inolvidables y conecta con una comunidad global de anfitriones.
            </p>
            
            {/* Barra de búsqueda estilo Airbnb */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  <div className="flex items-center px-6 py-4 hover:bg-gray-50 rounded-full cursor-pointer">
                    <div className="text-left">
                      <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Destino</div>
                      <div className="text-sm text-gray-500">¿A dónde vas?</div>
                    </div>
                  </div>
                  <div className="flex items-center px-6 py-4 hover:bg-gray-50 rounded-full cursor-pointer border-l border-gray-200">
                    <div className="text-left">
                      <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Llegada</div>
                      <div className="text-sm text-gray-500">Agregar fechas</div>
                    </div>
                  </div>
                  <div className="flex items-center px-6 py-4 hover:bg-gray-50 rounded-full cursor-pointer border-l border-gray-200">
                    <div className="text-left">
                      <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Salida</div>
                      <div className="text-sm text-gray-500">Agregar fechas</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4 border-l border-gray-200">
                    <div className="text-left">
                      <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Huéspedes</div>
                      <div className="text-sm text-gray-500">¿Cuántos?</div>
                    </div>
                    <Button className="bg-coral-500 hover:bg-coral-600 text-white rounded-full p-4 ml-4">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propiedades populares estilo Airbnb */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                Alojamientos populares en Guaymas
              </h2>
              <Button variant="outline" className="text-gray-700 border-gray-300">
                Ver todos
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {featuredProperties.map((property) => (
                <Card key={property.id} className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden rounded-xl mb-3">
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300">
                      {/* Placeholder para imagen */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Home className="h-12 w-12" />
                      </div>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-coral-500" />
                    </button>
                  </div>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm truncate pr-2">{property.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-gray-900 fill-current" />
                        <span className="text-xs font-medium ml-1">{property.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mb-1">{property.location}</p>
                    <p className="text-gray-500 text-xs mb-2">{property.dates}</p>
                    <div className="flex items-baseline">
                      <span className="font-semibold text-gray-900">{property.price}</span>
                      <span className="text-gray-500 text-xs ml-1">MXN noche</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sección "Disponibles el mes que viene" */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                Disponibles el mes que viene en Ciudad de México
              </h2>
              <Button variant="outline" className="text-gray-700 border-gray-300">
                Ver todos
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProperties.slice(0, 4).map((property) => (
                <Card key={`next-${property.id}`} className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden rounded-xl mb-3">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Home className="h-12 w-12" />
                      </div>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-coral-500" />
                    </button>
                  </div>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{property.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-gray-900 fill-current" />
                        <span className="text-xs font-medium ml-1">{property.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mb-1">{property.location}</p>
                    <p className="text-gray-500 text-xs mb-2">{property.guests}</p>
                    <div className="flex items-baseline">
                      <span className="font-semibold text-gray-900">{property.price}</span>
                      <span className="text-gray-500 text-xs ml-1">MXN noche</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer simplificado */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Soporte</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="#" className="hover:text-gray-900">Centro de ayuda</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Información de seguridad</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Opciones de cancelación</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Comunidad</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="#" className="hover:text-gray-900">Blog</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Eventos</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Programa de referidos</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Anfitrión</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="#" className="hover:text-gray-900">Sé un anfitrión</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Recursos</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Comunidad</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Solarix</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="#" className="hover:text-gray-900">Acerca de</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Carreras</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Prensa</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                © 2024 Solarix, Inc. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacidad</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Términos</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}