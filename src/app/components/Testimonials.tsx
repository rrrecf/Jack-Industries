"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Mohammed Alami",
    role: "Directeur de Projet",
    company: "Construction Pro",
    image: "/assets/temoin1.jpg",
    content: "Jack Industries est notre partenaire de confiance depuis plus de 10 ans. La qualité de leurs produits et leur service client sont exceptionnels."
  },
  {
    id: 2,
    name: "Sarah Benani",
    role: "Responsable Achats",
    company: "BTP Solutions",
    image: "/assets/temoin2.jpg",
    content: "Un fournisseur fiable avec un excellent rapport qualité-prix. Leur réactivité et leur professionnalisme font toute la différence."
  },
  {
    id: 3,
    name: "Karim Tazi",
    role: "Chef de Chantier",
    company: "Atlas Construction",
    image: "/assets/temoin3.jpg",
    content: "Les produits de Jack Industries nous ont permis d'améliorer significativement notre efficacité sur les chantiers."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-work-sans text-lg">Témoignages</span>
          <h2 className="text-4xl font-oswald font-bold mt-2 mb-4">Ce que disent nos clients</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-6 pt-12 relative group hover:shadow-xl transition-all"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <svg className="w-10 h-10 text-primary/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                  <p className="text-gray-600 font-work-sans mb-4">{testimonial.content}</p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-oswald font-semibold">{testimonial.name}</p>
                    <p className="text-primary text-sm font-work-sans">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm font-work-sans">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 