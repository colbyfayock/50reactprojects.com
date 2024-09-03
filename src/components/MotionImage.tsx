"use client";

import { getImageProps, ImageProps } from 'next/image';
import { motion, MotionProps } from 'framer-motion';

type ImageWithMotionProps = MotionProps & ImageProps;

interface MotionImageProps extends ImageWithMotionProps {
  className?: string;
}

const MotionImage = ({src, ...props }: MotionImageProps) => {
  const { props: imageProps } = getImageProps({
    src,
    width: props.width,
    height: props.height,
    alt: props.alt,
    sizes: props.sizes
  })
  console.log('imageProps, ', imageProps)

  return (
    <motion.img
      {...props}
      src={imageProps.src}
      srcSet={imageProps.srcSet}
    />
  );;
}

export default MotionImage;