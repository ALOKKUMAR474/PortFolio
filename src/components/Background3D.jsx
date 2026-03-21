import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background3D = () => {
  return (
    <div className='fixed inset-0 z-[-1] bg-background pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars 
          radius={50} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
