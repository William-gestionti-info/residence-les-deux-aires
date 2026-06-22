import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { Star } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Monique Garant',
      role: 'Résidente depuis 3 ans',
      content: 'Les Deux Aires a changé ma vie. Je me sens en sécurité, bien soignée, et surtout, je ne suis pas seule. L\'environnement est chaleureux et le personnel est extraordinaire.',
      rating: 5,
    },
    {
      name: 'Jean-Marie Dubé',
      role: 'Résident depuis 2 ans',
      content: 'Ce qui m\'a vraiment séduit, c\'est la qualité des services et l\'attention personnalisée. Les activités organisées me permettent de rester actif et engagé.',
      rating: 5,
    },
    {
      name: 'Lucile Racine',
      role: 'Famille de résidente',
      content: 'Nous étions inquiets pour maman, mais depuis son arrivée aux Deux Aires, nous sommes rassurés. L\'équipe communique régulièrement avec nous et maman est visiblement heureuse.',
      rating: 5,
    },
    {
      name: 'Pierre Lafond',
      role: 'Résident depuis 1.5 ans',
      content: 'La qualité de la cuisine est excellente, les logements sont modernes et bien entretenus. J\'ai trouvé ici une vraie communauté d\'amis.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ce que disent nos résidents
            </h2>
            <p className="text-xl text-slate-600">
              Des témoignages authentiques de nos résidents et de leurs familles
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;