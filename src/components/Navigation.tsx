import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container-wide">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Link to="/" className="text-2xl font-bold text-primary-600 font-display">
              LDA
            </Link>
            <span className="text-sm text-gray-600">Résidence Les Deux Aires</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-4"
          >
            <a href="tel:+15143331515" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
              <Phone size={18} />
              <span className="text-sm">514-333-1515</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm">
              Visite
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu mobile"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+15143331515" className="flex items-center gap-2 text-primary-600 font-semibold py-2">
              <Phone size={18} />
              514-333-1515
            </a>
            <Link to="/contact" className="btn-primary inline-block w-full text-center">
              Réserver une visite
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
