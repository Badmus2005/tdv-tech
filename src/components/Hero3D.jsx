import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment, useGLTF, Center, Html } from '@react-three/drei';

const CustomModel = () => {
  // Chargement du modèle depuis le dossier public
  const { scene } = useGLTF('/boitier_elec/boitier_elec.gltf');
  
  // Augmentation drastique de l'échelle car le modèle brut était trop petit
  return <primitive object={scene} scale={25} />;
};

const Loader = () => {
  return (
    <Html center>
      <div style={{ 
        color: 'var(--primary)', 
        fontFamily: 'Space Grotesk', 
        fontWeight: '600',
        background: 'rgba(0,0,0,0.5)',
        padding: '8px 16px',
        borderRadius: '20px',
        border: '1px solid var(--primary)',
        whiteSpace: 'nowrap'
      }}>
        Initialisation système...
      </div>
    </Html>
  );
};

const Hero3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />
        
        {/* Éclairage industriel */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#00f0ff" />
        <spotLight position={[10, -10, 10]} angle={0.3} penumbra={1} intensity={2} color="#ff6b00" />
        
        <Suspense fallback={<Loader />}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Center>
              <CustomModel />
            </Center>
          </Float>
          {/* L'environnement donne des reflets métalliques réalistes au modèle */}
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 1.5} 
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

// Préchargement pour éviter le délai au montage
useGLTF.preload('/boitier_elec/boitier_elec.gltf');

export default Hero3D;
