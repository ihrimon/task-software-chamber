import Image from 'next/image'

interface WidthHeight {
    width: number;
    height: number;
    className?: string;
}

export const MultiStar = ({width, height, className = ''}: WidthHeight) => {
  return (
    <Image
      src={'/assets/icons/multi-star.svg'}
      alt='Multi star'
      width={width}
      height={height}
      className={className}
    />
  );
}

export const ArrowMoveUp = ({ width, height, className = '' }: WidthHeight) => {
  return (
    <Image
      src={'/assets/icons/arrow-up.svg'}
      alt='Multi star'
      width={width}
      height={height}
      className={className}
    />
  );
};

export const GlobeImage = ({ width, height, className = '' }: WidthHeight) => {
  return (
    <Image
      src={'/assets/images/globe.png'}
      alt='Globe'
      width={width}
      height={height}
      className={className}
    />
  );
};



