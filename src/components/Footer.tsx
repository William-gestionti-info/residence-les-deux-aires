import React from 'react'
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">LDA</span>
              </div>
              <span className="font-bold text-lg">Les Deux Aires</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Résidence privée de luxe pour personnes âgées autonomes et semi-autonomes à Montréal.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <Phone size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span>(514) XXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <Mail size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <a href="mailto:info@lesdeuxaires.com" className="hover:text-primary-400 transition-colors">
                  info@lesdeuxaires.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span>Montréal, Québec, Canada</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Résidence Les Deux Aires. Tous droits réservés.
            </p>
            <div className="flex justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
