'use client'

import Image from 'next/image'
interface CatItemProps {
  name: string;
}

const CatItem: React.FC<CatItemProps> = ({ name }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-center items-center w-10 h-10 mb-2 rounded-full border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
        <Image 
          src="/cat.png"
          className="opacity-75"
          alt={ `${name} image` }
          width={25}
          height={25}
          priority
        />
      </div>
      <p>{name}</p>  
    </div>    
  );
};

export default CatItem;
