import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating?: number;
  index?: number;
}

const TestimonialCard = ({ name, role, content, image, rating = 5, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-hover bg-white rounded-xl p-8 shadow-md"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star className="w-5 h-5 fill-accent-500 text-accent-500" />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 italic mb-6 leading-relaxed">"{content}"</p>

      <div className="flex items-center gap-4">
        <motion.img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-200"
          whileHover={{ scale: 1.1 }}
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
