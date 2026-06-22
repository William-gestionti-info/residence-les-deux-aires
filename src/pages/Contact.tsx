import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from '../components/ScrollAnimation'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: 'information',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connecter à Formspree, EmailJS ou API personnalisée
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '(514) 555-0123',
      action: 'tel:(514)555-0123',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lesdeuxaires.com',
      action: 'mailto:info@lesdeuxaires.com',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Montréal, Québec, Canada',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Heures d’ouverture',
      content: '24h/24 - 7j/7',
      action: '#',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Résidence Les Deux Aires</title>
        <meta name="description" content="Contactez Résidence Les Deux Aires pour toute question ou pour planifier une visite guidée de nos installations." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Nous serions ravis de vous entendre</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Que ce soit pour une question, une visite ou pour commencer votre parcours d'accompagnement, notre équipe est là pour vous aider.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <motion.a
                    href={info.action}
                    whileHover={{ translateY: -8 }}
                    className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-primary-300 text-center transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="text-primary-500 mx-auto mb-4" size={48} />
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-slate-600">{info.content}</p>
                  </motion.a>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">Formulaire de contact</h2>
            <p className="text-lg text-slate-600 text-center mb-12">Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures</p>
          </ScrollAnimation>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl border-2 border-slate-200 shadow-lg"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              >
                Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  placeholder="Jean Dupont"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  placeholder="jean@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  placeholder="(514) 555-0123"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Objet *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                >
                  <option value="information">Demande d'information</option>
                  <option value="visite">Demander une visite</option>
                  <option value="question">Question</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 resize-none"
                placeholder="Expliquez-nous comment nous pouvons vous aider..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Envoyer mon message</span>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Notre localisation</h2>
          </ScrollAnimation>
          
          <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden border-2 border-slate-200">
            {/* TODO: Intégrer Google Maps */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-slate-600 font-semibold">Carte interactive à venir - Montréal, Québec</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;