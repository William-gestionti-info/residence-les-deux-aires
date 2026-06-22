import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from '../components/ScrollAnimation'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Hébergement et confort',
      description: 'Nos logements sont conçus pour assurer votre confort et votre sécurité',
      features: [
        'Studios et appartements spacieux',
        'Mobilier moderne et ergonomique',
        'Climatisation et chauffage central',
        'Accès internet haute vitesse',
        'Télévision par câble',
        'Téléphone dans chaque unité',
        'Entretien ménager quotidien',
        'Lessive et pressing',
      ],
    },
    {
      title: 'Services de soins de santé',
      description: '24 heures sur 24, 7 jours sur 7 - Une équipe médicale dédiée',
      features: [
        'Infirmerie avec personnel qualifié',
        'Gestion des médications',
        'Suivi médical régulier',
        'Services infirmiers à domicile',
        'Coordination avec spécialistes',
        'Assistance pour toilette et hygiène',
        'Pénétrabilité pour personnes en fauteuil roulant',
        'Système d\'alarme d\'urgence',
      ],
    },
    {
      title: 'Restauration et nutrition',
      description: 'Des repas délicieux, sains et adaptés à vos besoins',
      features: [
        'Repas préparés par nos chefs',
        'Menu végétarien et régimes spéciaux',
        'Plateau-repas en chambre disponible',
        'Cafétéria conçue pour socialiser',
        'Nutrition adaptée aux conditions médicales',
        'Hydratation et collations tout au long de la journée',
        'Consultation avec nutritionniste',
        'Menu varié et gourmand',
      ],
    },
    {
      title: 'Activités et loisirs',
      description: 'Une vie enrichie par des activités variées et engageantes',
      features: [
        'Yoga et exercices doux',
        'Jeux de société et activités mentales',
        'Arts créatifs et artisanat',
        'Événements culturels et spectacles',
        'Sorties sociales organisées',
        'Bibliotheèque et médiathtque',
        'Cinéma et projections',
        'Groupe de méditation et pleine conscience',
      ],
    },
    {
      title: 'Accompagnement social',
      description: 'Un soutien humain adapté à vos besoins spécifiques',
      features: [
        'Assistance administrative',
        'Organisation des rendez-vous médicaux',
        'Soutien émotionnel et écoute',
        'Aide aux appels téléphoniques',
        'Accompagnement pour sorties',
        'Gestion de correspondance',
        'Coordination avec la famille',
        'Orientation et ressources communautaires',
      ],
    },
    {
      title: 'Sécurité et commodités',
      description: 'Votre sécurité est notre priorité absolue',
      features: [
        'Surveillance 24/7 par caméras',
        'Personnel vigilant en permanence',
        'Système d\'alarme d\'urgence',
        'Portail sécurisé d\'accès',
        'Conciergerie',
        'Services d\'accueil de visiteurs',
        'Stationné pour les visiteurs',
        'Protocoles de sécurité avancés',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Résidence Les Deux Aires</title>
        <meta name="description" content="Découvrez tous nos services : hébergement, soins de santé, restauration, activités, accompagnement et sécurité à Montréal." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Nos services complets</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Une gamme exhaustive de services conçus pour assurer votre bien-être, votre sécurité et votre satisfaction
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{category.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{category.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ translateX: 8 }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 cursor-pointer"
                      >
                        <CheckCircle2 className="text-primary-500 flex-shrink-0 mt-0.5" size={24} />
                        <span className="text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  {index < serviceCategories.length - 1 && <div className="border-t border-slate-200 mt-12" />}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">Vous avez des questions sur nos services ?</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Nous contacter
            </motion.button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Services;