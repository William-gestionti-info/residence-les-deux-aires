import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

const ValueProposition: React.FC = () => {
  const features = [
    {
      icon: '🏠',
      title: 'Logements de luxe',
      description: 'Studios et appartements spacieux, modernes et confortables, conçus pour votre bien-être',
    },
    {
      icon: '👨‍⚕️',
      title: 'Services de soins',
      description: 'Personnel médical qualifié disponible 24/7 pour répondre à vos besoins de santé',
    },
    {
      icon: '🔒',
      title: 'Sécurité garantie',
      description: 'Systèmes de sécurité avancés et personnel vigilant pour votre tranquillité',
    },
    {
      icon: '🎭',
      title: 'Vie communautaire',
      description: 'Activités sociales, loisirs et événements réguliers pour rester actif et connecté',
    },
    {
      icon: '🍽️',
      title: 'Cuisine raffiée',
      description: 'Repas préparés par nos chefs, adaptés aux besoins dietétiques de chacun',
    },
    {
      icon: '🌟',
      title: 'Accompagnement personnalisé',
      description: 'Équipe dédiée pour soutenir votre autonomie et améliorer votre qualité de vie',
    },
  ];

  return (
    <section id="value" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pourquoi choisir Les Deux Aires ?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nous offrons bien plus qu'une résidence. C'est un mode de vie conçu pour l'excellence.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ translateY: -8, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)' }}
                className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;