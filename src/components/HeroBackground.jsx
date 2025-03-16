'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    sphereRef.current.distort = 0.4 + Math.sin(time) * 0.2;
    sphereRef.current.rotation.x = time * 0.15;
    sphereRef.current.rotation.y = time * 0.2;
    sphereRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.8}>
        <MeshDistortMaterial
          color="#64ffda"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.9}
          opacity={0.8}
          transparent
        />
      </Sphere>
      <mesh position={[-2, -1, -1]} scale={0.5}>
        <sphereGeometry />
        <meshStandardMaterial color="#ccd6f6" />
      </mesh>
      <mesh position={[2, 1, -2]} scale={0.3}>
        <sphereGeometry />
        <meshStandardMaterial color="#8892b0" />
      </mesh>
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-light/50 to-navy">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#0a192f']} />
        <fog attach="fog" args={['#0a192f', 5, 15]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Stars count={1000} depth={50} fade speed={1.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
