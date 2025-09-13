import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
      <div className="bg-[#1FFFA5] h-screen">
        {/* logo section */}
        <div className="flex justify-center items-center mt-10">
          <Image
            src="../../icons/Logo.svg"
            alt="Logo"
            className="w-32 h-32 object-contain"
            width={120}
            height={27}
          />
        </div>
      </div>
    );
};

export default Hero;