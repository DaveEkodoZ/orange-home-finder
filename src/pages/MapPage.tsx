import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties, formatPrice } from "@/data/properties";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default marker icons
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const MapPage = () => {
  const center: [number, number] = [4.0, 10.5];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 md:pt-24 flex-1 flex flex-col">
        <div className="bg-gradient-to-br from-primary to-orange-dark py-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
              Carte des biens
            </h1>
            <p className="text-primary-foreground/80">
              Visualisez tous nos biens immobiliers sur la carte interactive.
            </p>
          </div>
        </div>

        <div className="flex-1 relative" style={{ minHeight: "600px" }}>
          <MapContainer
            center={center}
            zoom={7}
            className="w-full h-full absolute inset-0"
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.map((property) => (
              <Marker key={property.id} position={[property.lat, property.lng]}>
                <Popup>
                  <div className="min-w-[200px]">
                    <img src={property.images[0]} alt={property.title} className="w-full h-24 object-cover rounded mb-2" />
                    <h3 className="font-bold text-sm mb-1">{property.title}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <MapPin className="h-3 w-3" />
                      {property.location}, {property.city}
                    </p>
                    <p className="font-bold text-sm" style={{ color: "hsl(24, 95%, 53%)" }}>
                      {formatPrice(property.price, property.status)}
                    </p>
                    <Link
                      to={`/biens/${property.id}`}
                      className="block text-center text-xs font-semibold mt-2 py-1.5 rounded"
                      style={{ backgroundColor: "hsl(24, 95%, 53%)", color: "white" }}
                    >
                      Voir le détail
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapPage;
