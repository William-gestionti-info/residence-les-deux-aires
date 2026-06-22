import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-accent-400">Résidence Les Deux Aires</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Une résidence privée de prestige pour personnes âgées autonomes et semi-autonomes à Montréal.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent-400 transition">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-accent-400 transition">À propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent-400 transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-400 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Nous joindre</h4>
            <div className="space-y-3">
              <a href="tel:+15143331515" className="flex items-center gap-2 text-gray-300 hover:text-accent-400 transition">
                <Phone size={18} />
                <span>514-333-1515</span>
              </a>
              <a href="mailto:info@lesdeuxaires.com" className="flex items-center gap-2 text-gray-300 hover:text-accent-400 transition">
                <Mail size={18} />
                <span>info@lesdeuxaires.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">Ahuntsic, Montréal, QC</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 flex items-center justify-center transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 flex items-center justify-center transition">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Résidence Les Deux Aires. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
