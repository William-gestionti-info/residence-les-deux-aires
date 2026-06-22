import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { ChevronDown } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'Quelle est la différence entre autonome et semi-autonome ?',
      answer: 'Les personnes autonomes peuvent effectuer leurs activités quotidiennes sans assistance. Les personnes semi-autonomes ont besoin d\'aide pour certaines tâches comme la médication ou l\'hygiène personnelle. Nous accueillons les deux profils avec des services adaptés.',
    },
    {
      question: 'Quel est le coût d\'une résidence ?',
      answer: 'Les tarifs varient selon le type de logement (studio ou appartement) et les services demandés. Nous offrons des plans de paiement flexibles. Veuillez nous contacter pour une consultation personnalisée.',
    },
    {
      question: 'Puis-je visiter avant de m\'inscrire ?',
      answer: 'Absolument ! Nous encourageons les visites guidées pour découvrir nos installations, rencontrer l\'équipe et vous sentir à l\'aise avec votre futur environnement. Appelez-nous pour planifier une visite.',
    },
    {
      question: 'Vos services médicaux sont-ils disponibles 24/7 ?',
      answer: 'Oui, notre équipe infirmière et médicale est disponible 24 heures sur 24, 7 jours sur 7. En cas d\'urgence, nous avons un système d\'alarme et des protocoles d\'intervention rapides.',
    },
    {
      question: 'Y a-t-il des activités régulières pour les résidents ?',
      answer: 'Oui ! Nous organisons des activités quotidiennes : yoga, jeux de société, sorties, ateliers créatifs, cinéma et bien d\'autres. Notre programme est conçu pour stimuler mentalement et socialement nos résidents.',
    },
    {
      question: 'Comment communiquez-vous avec les familles ?',
      answer: 'Nous maintenons une communication régulière avec les familles via téléphone, email et des mises à jour ménsuelles. Les familles sont les bienvenues pour des visites et nous encourageons leur implication.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-slate-600">
              Trouver les réponses à vos questions les plus courantes
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 0.05}>
              <motion.div
                className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-left font-semibold text-slate-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-primary-500" size={24} />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;