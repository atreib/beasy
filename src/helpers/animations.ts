import { IDirections } from '../utils/enums/directions';
import { NumberDictionary } from '../utils/protocols/number-dictionary';

/**
 * Generates a option object from Framer Motion for sliding while fading in
 * @param direction (IDirections) the direction that the element should go
 * @param transition (number) the transition duration in seconds
 * @returns Framer Motion options for animating a slide to the direction while fading in
 */
export const slideToWithFadeIn = (direction: IDirections, transition: number) => {
  const hidden: NumberDictionary = { opacity: 0 };
  const visible: NumberDictionary = { opacity: 1 };

  switch (direction) {
    case IDirections.FromTop:
      hidden['y'] = -100;
      visible['y'] = 0;
      break;
    case IDirections.FromRight:
      hidden['x'] = 100;
      visible['x'] = 0;
      break;
    case IDirections.FromBottom:
      hidden['y'] = 100;
      visible['y'] = 0;
      break;
    case IDirections.FromLeft:
      hidden['x'] = -100;
      visible['x'] = 0;
      break;
  }

  const options = {
    variants: {
      hidden,
      visible,
    },
    initial: 'hidden',
    animate: 'visible',
    transition: { duration: transition },
  };

  return options;
};

/**
 * Generates a option object from Framer Motion for tap effect
 * @param onTapColorHexa (string - hexadecial) button background color on tap
 * @returns Framer Motion options for animating a tap effect (contract and expand)
 */
export const tapEffect = (onTapColorHexa: string) => {
  return {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95, backgroundColor: onTapColorHexa },
  };
};

/**
 * Generates a option object from Framer Motion for fade in
 * @param transition (number - seconds) transition duration in seconds
 * @returns Framer Motion options for animating a fade in effect
 */
export const fadeIn = (transition: number) => {
  return { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: transition } } };
};
