import { Calendar, User } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    title: "Comment surveiller votre chantier depuis l'étranger",
    excerpt: "Découvrez les meilleures pratiques pour suivre l'avancement de votre construction au Cameroun.",
    image: blog1,
    author: "Équipe ImmoTrust",
    date: "18 Déc 2024",
  },
  {
    title: "Guide complet de l'investissement immobilier diaspora",
    excerpt: "Tout ce que vous devez savoir avant d'investir dans l'immobilier au Cameroun depuis l'étranger.",
    image: blog2,
    author: "Jean Ngono",
    date: "22 Nov 2024",
  },
  {
    title: "Les quartiers les plus prisés de Douala en 2025",
    excerpt: "Classement des meilleurs quartiers pour investir ou habiter à Douala cette année.",
    image: blog3,
    author: "Marie Pokam",
    date: "15 Oct 2024",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Blog</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Actualités et <span className="text-primary">conseils</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
