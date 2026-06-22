import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  title: string;
  alt: string;
  index?: number;
}

const GalleryImage = ({ src, title, alt, index = 0 }: GalleryImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl aspect-square cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-white font-semibold text-lg"
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default GalleryImage;
