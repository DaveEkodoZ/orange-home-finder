import { Calendar, User, ArrowRight, Clock, BookOpen } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    title: "Comment surveiller votre chantier depuis l'étranger",
    excerpt: "Découvrez les outils et méthodes que nous mettons à votre disposition pour suivre chaque étape de votre construction au Cameroun, où que vous soyez dans le monde.",
    image: blog1,
    author: "Équipe ImmoTrust",
    date: "18 Déc 2024",
    readTime: "5 min",
    category: "Diaspora",
  },
  {
    title: "Guide complet de l'investissement immobilier diaspora",
    excerpt: "De la sélection du terrain à la mise en location, ce guide couvre tout ce qu'un investisseur de la diaspora doit savoir pour réussir son projet immobilier au Cameroun.",
    image: blog2,
    author: "Jean Ngono",
    date: "22 Nov 2024",
    readTime: "8 min",
    category: "Investissement",
  },
  {
    title: "Les quartiers les plus prisés de Douala en 2025",
    excerpt: "Bonamoussadi, Bonapriso, Kotto… Découvrez notre classement des quartiers offrant le meilleur potentiel pour vivre ou investir à Douala cette année.",
    image: blog3,
    author: "Marie Pokam",
    date: "15 Oct 2024",
    readTime: "6 min",
    category: "Marché",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <BookOpen className="h-4 w-4" />
            <span className="font-semibold text-sm tracking-widest uppercase">Blog & Actualités</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Restez informé avec nos <span className="text-gradient">conseils d'experts</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Notre équipe partage régulièrement ses analyses du marché, des guides pratiques et des conseils pour vous aider à prendre les meilleures décisions immobilières.
          </p>
        </div>

        {/* Featured post (first) + two smaller */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Featured large card */}
          <div className="group bg-card border border-border rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-4 py-2 rounded-full shadow-lg">
                {posts[0].category}
              </span>
              {/* Bottom overlay title on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-bold text-primary-foreground text-2xl md:text-3xl leading-tight drop-shadow-lg">
                  {posts[0].title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
                  <User className="h-3.5 w-3.5" /> {posts[0].author}
                </span>
                <span className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5" /> {posts[0].date}
                </span>
                <span className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
                  <Clock className="h-3.5 w-3.5" /> {posts[0].readTime}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-5 py-2.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Lire l'article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Two stacked cards */}
          <div className="flex flex-col gap-8">
            {posts.slice(1).map((post, idx) => (
              <div
                key={post.title}
                className="group flex flex-col sm:flex-row bg-card border border-border rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer flex-1"
              >
                <div className="sm:w-2/5 overflow-hidden relative flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[200px]"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/5" />
                  <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1.5 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg md:text-xl mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
