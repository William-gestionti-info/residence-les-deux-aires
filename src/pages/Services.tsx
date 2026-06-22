import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { services } from '../data/index';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = 'Services - Résidence Les Deux Aires';
  }, []);

  return (
    <>
      <Hero
        subtitle="Services Complets"
        title="Tout Ce Dont Vous Avez Besoin"
        description="Découvrez notre large gamme de services conçus pour soutenir votre bien-être et votre qualité de vie."
      />

      <Section
        title="Nos Services"
        subtitle="Une offre complémentaire pour répondre à tous vos besoins"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </Section>

      <Section
        className="gradient-bg"
        title="Services de Santé"
        subtitle="Soins professionnels et compassion 24/7"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1631217314830-bae99b768741?w=600&h=500&fit=crop"
            alt="Services de santé professionnels"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre équipe médicale qualifiée est disponible 24 heures sur 24, 7 jours sur 7 pour assurer votre bien-être.
            </p>

            <ul className="space-y-3">
              {[
                'Soins infirmiers continus',
                'Gestion précise des médicaments',
                'Suivi médical régulier',
                'Soins spécialisés',
                'Services d\'urgence immédiate',
                'Suivi de la nutrition et de la mobilité',
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-700 font-medium flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Restauration Haut de Gamme"
        subtitle="Saveurs exquises, repas mémorables"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre chef cuisinier de renom prépare des menus variés et délicieux, adaptés aux besoins nutritionnels et préférences de chacun.
            </p>

            <ul className="space-y-3">
              {[
                'Chef cuisinier expérimenté',
                'Menus équilibrés et savoureux',
                'Service aux tables personnalisé',
                'Options diététiques spéciales',
                'Trois repas par jour',
                'Café-bistro pour collations',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-700 font-medium flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1568152950566-c1bf43f0a86d?w=600&h=500&fit=crop"
            alt="Salle à manger élégante"
            className="rounded-xl shadow-lg"
          />
        </div>
      </Section>

      <Section
        className="gradient-bg"
        title="Activités & Loisirs"
        subtitle="Plus de 30 activités pour enrichir votre vie"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Spectacles Musicaux', icon: 'Music' },
            { title: 'Cours d\'Exercices', icon: 'Dumbbell' },
            { title: 'Jeux de Société', icon: 'Gamepad2' },
            { title: 'Sorties Organisées', icon: 'MapPin' },
            { title: 'Cinéma Maison', icon: 'Film' },
            { title: 'Ateliers Créatifs', icon: 'Palette' },
            { title: 'Club de Lecture', icon: 'BookOpen' },
            { title: 'Yoga & Méditation', icon: 'Wind' },
            { title: 'Fêtes Spéciales', icon: 'Cake' },
          ].map((activity, index) => (
            <FeatureCard key={activity.title} {...activity} index={index} />
          ))}
        </div>
      </Section>

      <Section
        title="Commodités Pratiques"
        subtitle="Tous les services dont vous avez besoin sous un même toit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Pharmacie sur Place', description: 'Service de pharmacie complet pour vos besoins médicamenteux', icon: 'Pill' },
            { title: 'Salon de Coiffure', description: 'Services de coiffure et de beauté professionnels', icon: 'Scissors' },
            { title: 'Service de Navette', description: 'Transport gratuit pour courses et rendez-vous médicaux', icon: 'Bus' },
            { title: 'Dépanneur', description: 'Petits articles et fournitures du quotidien', icon: 'ShoppingCart' },
            { title: 'Conciergerie', description: 'Assistant personnalisé pour vos demandes spéciales', icon: 'Bell' },
            { title: 'Internet Gratuit', description: 'Accès WiFi haute vitesse partout à la résidence', icon: 'Wifi' },
          ].map((commodity, index) => (
            <FeatureCard key={commodity.title} {...commodity} index={index} />
          ))}
        </div>
      </Section>

      <motion.section
        className="section-padding bg-primary-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container-wide">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Explorez Nos Services
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Chaque service est conçu pour vous offrir le confort, la sécurité et le soutien que vous méritez.
            </p>
            <Link to="/contact" className="btn-secondary px-8 py-4">
              Demander Plus d'Informations
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;
