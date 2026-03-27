import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, propertyTypes, cities, PropertyType, PropertyStatus } from "@/data/properties";

const Properties = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<PropertyType | "">("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<PropertyStatus | "">("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedType && p.type !== selectedType) return false;
      if (selectedCity && p.city !== selectedCity) return false;
      if (selectedStatus && p.status !== selectedStatus) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
  }, [search, selectedType, selectedCity, selectedStatus, priceRange]);

  const clearFilters = () => {
    setSearch("");
    setSelectedType("");
    setSelectedCity("");
    setSelectedStatus("");
    setPriceRange([0, 200000000]);
  };

  const hasFilters = search || selectedType || selectedCity || selectedStatus || priceRange[0] > 0 || priceRange[1] < 200000000;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-orange-dark py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Tous nos biens immobiliers
            </h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              Explorez notre catalogue complet et trouvez le bien qui vous correspond.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-10">
          {/* Search + filters toggle */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un bien, un quartier..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:border-primary transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtres
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="h-4 w-4" />
                Réinitialiser
              </button>
            )}
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Type de bien</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as PropertyType | "")}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Tous les types</option>
                  {propertyTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Ville</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Toutes les villes</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Statut</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as PropertyStatus | "")}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Tous</option>
                  <option value="vente">À vendre</option>
                  <option value="location">À louer</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Prix max: {new Intl.NumberFormat("fr-FR").format(priceRange[1])} FCFA
                </label>
                <input
                  type="range"
                  min={0}
                  max={200000000}
                  step={5000000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-primary"
                />
              </div>
            </div>
          )}

          {/* Results */}
          <div className="text-sm text-muted-foreground mb-6">
            {filtered.length} bien{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl font-display font-semibold text-foreground mb-2">Aucun bien trouvé</p>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
