"use client";

import { motion, MotionProps } from 'framer-motion';

interface MotionImageProps extends MotionProps {
  alt?: string;
  className?: string;
  height?: number | string;
  src?: string;
  width?: number | string;
}

const MotionImage = (props: MotionImageProps) => {
  return (
    <motion.img {...props} />
  )
}

export default MotionImage;