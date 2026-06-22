import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Hébergement',
      items: ['Studios et appartements', 'Entretien ménager', 'Lessive et pressing', 'Salle dédiée de réception'],
    },
    {
      title: 'Soins de santé',
      items: ['Infirmerie 24/7', 'Aide à la médication', 'Accompagnement médical', 'Services infirmiers'],
    },
    {
      title: 'Restauration',
      items: ['Repas gourmet', 'Plateaux-repas personnalisés', 'Caféteria', 'Services de nutrition'],
    },
    {
      title: 'Activités et loisirs',
      items: ['Yoga et exercices', 'Jeux et arts créatifs', 'Événements culturels', 'Sorties organisées'],
    },
    {
      title: 'Accompagnement',
      items: ['Support administratif', 'Gestion des rendez-vous', 'Assistance générale', 'Écoute et soutien'],
    },
    {
      title: 'Sécurité et confort',
      items: ['Système d\'alarme d\'urgence', 'Surveillance 24/7', 'Accès sécurisé', 'Conciergerie'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une gamme complète de services pour assurer votre bien-être et votre sérénité
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3" />
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-600">
                      <span className="text-primary-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;