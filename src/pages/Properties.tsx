import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProperties = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Reset page when filters change
  useMemo(() => { setCurrentPage(1); }, [search, selectedType, selectedCity, selectedStatus, priceRange]);

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
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-medium hover:border-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" /> Préc.
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl font-semibold transition-colors ${
                        page === currentPage
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-card border border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-border bg-card text-foreground font-medium hover:border-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Suiv. <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
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
