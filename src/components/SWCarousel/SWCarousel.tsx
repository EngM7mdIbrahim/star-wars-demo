import { Carousel } from '@mantine/carousel';
import { useStyles } from './SWCarousel.styles';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@mantine/core';
import { useRef } from 'react';

export function SWCarousel() {
  const { classes, theme } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 7000 }));
  const images = [
    '/images/films/a_new_hope.jpg',
    '/images/films/attack_of_the_clones.jpg',
    '/images/films/return_of_the_jedi.jpg',
    '/images/films/revenge_of_the_sith.jpg',
    '/images/films/the_empire_strikes_back.jpg',
    '/images/films/the_phantom_menace.jpg',
  ];
  return (
    <Carousel
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{ root: classes.carousel, controls: classes.controls }}
    >
      {images.map((image) => (
        <Carousel.Slide key={image}>
          <Image height="78vh" src={image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
