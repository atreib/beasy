import { IDirections } from '../utils/enums/directions';
import { NumberDictionary } from '../utils/protocols/number-dictionary';

export const slideAndFade = (direction: IDirections) => {
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
    transition: { duration: 1 },
  };

  return options;
};
