import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryImage from '../components/GalleryImage';
import FAQItem from '../components/FAQItem';
import { testimonials, services, galleryImages, faqItems, features } from '../data/index';
import { Heart, Shield, Users, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Résidence Les Deux Aires | Montréal - Résidence Premium pour Aînés';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Résidence Les Deux Aires - Une résidence privée de prestige pour personnes âgées autonomes et semi-autonomes à Montréal. Services premium, sécurité 24/7, loisirs et accompagnement personnalisé.'
    );
  }, []);

  const highlightedServices = services.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Bienvenue à Montréal"
        title="Votre Chez-Soi Accueillant"
        description="Découvrez une résidence de prestige pour personnes âgées autonomes et semi-autonomes, offrant sécurité, confort et vie communautaire enrichissante."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary px-8 py-4">
            Réserver une visite
          </Link>
          <a href="tel:+15143331515" className="btn-secondary px-8 py-4">
            Appeler: 514-333-1515
          </a>
        </div>
      </Hero>

      {/* Proposition de Valeur */}
      <Section
        title="Pourquoi choisir Les Deux Aires?"
        subtitle="Une expérience de vie supérieure, conçue pour votre bien-être"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Section>

      {/* Services Principaux */}
      <Section
        className="gradient-bg"
        title="Nos Services Principaux"
        subtitle="Des services complémentaires pour une vie pleine et sécuritaire"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedServices.map((service, index) => (
            <FeatureCard key={service.id} {...service} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Voir tous les services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Section>

      {/* Sécurité et Accompagnement */}
      <Section
        title="Sécurité et Accompagnement 24/7"
        subtitle="Votre tranquillité est notre priorité absolue"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Surveillance 24/7</h3>
                <p className="text-gray-600">Personnel qualifié présent en tout temps pour assurer votre sécurité et celle de vos proches.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services de Santé</h3>
                <p className="text-gray-600">Soins infirmiers, gestion des médicaments et suivi médical continu adaptés à vos besoins.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accompagnement Personnelé</h3>
                <p className="text-gray-600">Assistance adaptée à votre évolution avec compassion et professionnalisme.</p>
              </div>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1576091160509-112f9cad9c91?w=600&h=500&fit=crop"
            alt="Équipe de soins professionnels"
            className="rounded-xl shadow-lg"
          />
        </div>
      </Section>

      {/* Vie Communautaire */}
      <Section
        className="gradient-bg"
        title="Une Vie Communautaire Enrichissante"
        subtitle="Participez, socialisez, créez des souvenirs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
            alt="Activités communautaires"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous offrons plus de 30 activités variées pour enrichir votre vie quotidienne : spectacles musicaux, cours d'exercices, sorties organisées, jeux de société, ateliers créatifs et bien plus.
            </p>

            <div className="space-y-3">
              {[
                'Spectacles musicaux et cinéma',
                'Cours de mise en forme et yoga',
                'Clubs et sociétés de jeux',
                'Sorties et excursions organisées',
                'Ateliers créatifs et culturels',
                'Fêtes et événements spéciaux',
              ].map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Galerie */}
      <Section
        title="Galerie"
        subtitle="Explorez les magnifiques espaces de notre résidence"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.id} {...image} index={index} />
          ))}
        </div>
      </Section>

      {/* Témoignages */}
      <Section
        className="gradient-bg"
        title="Témoignages de nos Résidents"
        subtitle=""À écouter nos résidents heureux"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
          ))}
        </div>
      </Section>

      {/* Statistiques */}
      <Section
        title="Les Chiffres Qui Parlent"
        className="bg-primary-600 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { number: '30+', label: 'Années d\'excellence' },
            { number: '200+', label: 'Résidents heureux' },
            { number: '24/7', label: 'Service de qualité' },
            { number: '98%', label: 'Satisfaction clients' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.p>
              <p className="text-lg text-gray-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Questions Fréquemment Posées"
        subtitle="Trouvez les réponses à vos questions"
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.slice(0, 6).map((item, index) => (
            <FAQItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </Section>

      {/* Appel à l'action final */}
      <motion.section
        className="section-padding gradient-bg"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Prêt à commencer votre nouvelle aventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous aujourd'hui pour organiser votre visite personnalisée et découvrir comment Les Deux Aires peut transformer votre vie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-4">
                Réserver une visite
              </Link>
              <a href="tel:+15143331515" className="btn-secondary px-8 py-4">
                514-333-1515
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
