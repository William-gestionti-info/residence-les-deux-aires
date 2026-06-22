import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'À propos - Résidence Les Deux Aires';
  }, []);

  return (
    <>
      <Hero
        subtitle="Notre Histoire"
        title="Qui Sommes-Nous?"
        description="Découvrez la mission et les valeurs qui guident Résidence Les Deux Aires depuis plus de 30 ans."
      />

      <Section
        title="Notre Mission"
        subtitle="Offrir une vie de qualité supérieure à nos résidents"
      >
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Résidence Les Deux Aires est une résidence privée de prestige située dans le quartier recherché d'Ahuntsic, surplombant la magnifique Rivière-des-Prairies. Depuis plus de 30 ans, nous nous engageons à créer un environnement accueillant, sécuritaire et stimulant pour les personnes âgées autonomes et semi-autonomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Notre philosophie repose sur quatre piliers fondamentaux: l'excellence dans les services, la sécurité absolue, l'inclusion communautaire et le respect de l'autonomie. Nous croyons que le vieillissement actif est possible lorsqu'on bénéficie des bons soutiens et d'un environnement inspiré.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Chaque jour, notre équipe dévouée travaille avec passion pour transformer vos années dorées en des années extraordinaires. Nous ne sommes pas simplement un prestataire de services; nous sommes votre partenaire dans le voyage de la vie.
          </motion.p>
        </div>
      </Section>

      <Section
        className="gradient-bg"
        title="Nos Valeurs"
        subtitle="Ce qui nous guide au quotidien"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Bienveillance',
              description: 'Nous traitons chaque résident avec respect, dignité et compassion.',
              icon: 'Heart',
            },
            {
              title: 'Excellence',
              description: 'Nous visons l\'excellence dans chaque aspect de nos services.',
              icon: 'Star',
            },
            {
              title: 'Transparence',
              description: 'Nous communiquons honnhêtement et clairement avec nos résidents et leurs familles.',
              icon: 'Eye',
            },
            {
              title: 'Innovation',
              description: 'Nous évoluons constamment pour offrir les meilleures pratiques.',
              icon: 'Lightbulb',
            },
          ].map((value, index) => (
            <FeatureCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </Section>

      <Section
        title="Notre Équipe"
        subtitle="Des professionnels dévoués à votre service"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1576091160399-112f9cad9c91?w=600&h=500&fit=crop"
            alt="Notre équipe dévouée"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre équipe multidisciplinaire est composée de professionnels expérimentés et passionnés par leur travail :
            </p>

            <ul className="space-y-3">
              {[
                'Infirmiers et aides-soignants qualifiés',
                'Chef cuisinier et personnel de restauration',
                'Animateurs et récrolégues',
                'Personnel d\'entretien et de maintenance',
                'Concierges et réceptionnistes',
                'Agents de sécurité et de surveillance',
              ].map((role, index) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-700 font-medium flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full" />
                  {role}
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-600 italic">
              Chaque membre de notre équipe est choisi pour son expertise, son attitude positive et son dévouement envers nos résidents.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section
        className="gradient-bg"
        title="Emplacement Premium"
        subtitle="Le cadre idéal pour une vie de qualité"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Située dans le quartier recherché d'Ahuntsic, notre résidence jouit d'une localisation spectaculaire avec vue panoramique sur la Rivière-des-Prairies. Cet emplacement privilégié offre :
            </p>

            <ul className="space-y-3">
              {[
                'Vue imprenable sur la rivière',
                'Accès direct aux pistes cyclables et sentiers pédestres',
                'Jardins extérieurs aménagés',
                'Proximité des services et commerces',
                'Quartier tranquille et sécuritaire',
                'Accès facile au centre-ville et aux hôpitaux',
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
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=500&fit=crop"
            alt="Vue spectaculaire de la Rivière-des-Prairies"
            className="rounded-xl shadow-lg"
          />
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
              Visitez-nous Aujourd'hui
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Venez découvrir par vous-même pourquoi Les Deux Aires est le choix préféré pour vivre une vie heureuse et sécuritaire.
            </p>
            <Link to="/contact" className="btn-secondary px-8 py-4">
              Réserver une visite
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
