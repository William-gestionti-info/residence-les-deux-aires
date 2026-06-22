import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import ValueProposition from '../components/ValueProposition'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ScrollAnimation from '../components/ScrollAnimation'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Résidence Les Deux Aires - Résidence pour Aînés Montréal</title>
        <meta name="description" content="Résidence privée de luxe pour personnes âgées autonomes et semi-autonomes à Montréal. Services de soins, sécurité et loisirs inclus." />
        <meta name="keywords" content="résidence personnes âgées Montréal, résidence privée, résidence autonome" />
      </Helmet>
      
      <Hero />
      <ValueProposition />
      <Services />
      <Testimonials />
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à commencer votre nouvelle aventure ?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Nos experts sont là pour répondre à toutes vos questions et vous aider dans votre décision.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Planifier une visite
            </motion.button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                <p className="text-slate-600">(514) 555-0123</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-accent-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-slate-600">info@lesdeuxaires.com</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Adresse</h3>
                <p className="text-slate-600">Montréal, Québec</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-accent-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Heures</h3>
                <p className="text-slate-600">24h / 24h - 7j / 7j</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;