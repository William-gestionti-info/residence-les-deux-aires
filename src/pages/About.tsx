import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from '../components/ScrollAnimation'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Globe } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Nous traïtions chaque résident avec compassion et respect, mettant leur bien-être au cœur de tout ce que nous faisons.',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Nous créons un environnement accueillant où les résidents forment des liens durables et significatifs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous maintenons les plus hauts standards de qualité dans tous nos services et installations.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Nous utilisons les technologies les plus avancées pour améliorer continuellement nos services.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>À propos | Résidence Les Deux Aires</title>
        <meta name="description" content="Découvrez l'histoire, la mission et les valeurs de Résidence Les Deux Aires, une résidence privée de luxe pour aînés à Montréal." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Notre histoire et nos valeurs
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Résidence Les Deux Aires a été fondée avec une seule mission : offrir un environnement de vie exceptionnelle aux personnes âgées, alliant confort, sécurité et dignité.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Notre mission</h2>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  Offrir aux personnes aînées un cadre de vie sécuritaire, bienveillant et stimulant qui respecte leur autonomie tout en leur fournissant le soutien dont elles ont besoin.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nous créons un environnement où chacun peut continuer à vivre pleinement, en maintenant son indépendance et en construisant des liens significatifs avec une communauté bienveillante.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-6xl">🎯</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos valeurs fondamentales</h2>
              <p className="text-xl text-slate-600">Les principes qui guident chacune de nos décisions et actions</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ translateY: -8 }}
                    className="p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-primary-500 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <Icon className="text-primary-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="bg-gradient-to-br from-accent-100 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-6xl">🌟</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Notre vision</h2>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  Ètre le choix premier des personnes âgées et de leurs familles cherchant une résidence de qualité premium à Montréal.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Définir les nouvelles standards d'excellence dans l'accompagnement des personnes âgées, en combinant soins professionnels, technologie avancée et compassion humaine.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;