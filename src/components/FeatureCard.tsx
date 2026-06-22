import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

const FeatureCard = ({ title, description, icon, index = 0 }: FeatureCardProps) => {
  // Get icon from lucide-react
  const IconComponent = (Icons as Record<string, React.ComponentType<any>>)[icon] || Icons.Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-hover bg-white rounded-xl p-8 border border-gray-100 hover:border-primary-400"
    >
      <motion.div
        className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <IconComponent className="w-8 h-8 text-primary-600" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
