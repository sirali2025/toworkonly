import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function HolographicStructure({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={0.5}
        anisotropy={0.3}
        distortion={0.2}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#00FFFF"
        emissive="#00FFFF"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function OctahedronStructure({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.25;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="#00FFFF"
        emissive="#00FFFF"
        emissiveIntensity={0.6}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function ParticleFog() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00FFFF"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function KineticLights() {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.SpotLight>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(time * 0.7) * 5;
      light1Ref.current.position.z = Math.cos(time * 0.7) * 5;
      light1Ref.current.intensity = 1 + Math.sin(time * 2) * 0.3;
    }
    
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(time * 0.5) * 6;
      light2Ref.current.position.z = Math.sin(time * 0.5) * 6;
      light2Ref.current.intensity = 1 + Math.cos(time * 2.5) * 0.3;
    }
    
    if (light3Ref.current) {
      light3Ref.current.position.x = Math.sin(time * 0.3) * 4;
      light3Ref.current.position.y = 2 + Math.cos(time * 0.4) * 2;
    }
  });

  return (
    <>
      <pointLight ref={light1Ref} color="#00FFFF" intensity={1} distance={10} />
      <pointLight ref={light2Ref} color="#FF6A00" intensity={1} distance={10} />
      <spotLight
        ref={light3Ref}
        color="#00FFFF"
        intensity={2}
        angle={0.6}
        penumbra={1}
        position={[0, 5, 0]}
        castShadow
      />
      <ambientLight intensity={0.3} />
    </>
  );
}

function IcosahedronRing({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#FF6A00"
        emissive="#FF6A00"
        emissiveIntensity={0.7}
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

export default function HolographicCore() {
  return (
    <>
      <KineticLights />
      <ParticleFog />
      <HolographicStructure position={[-2, 0, -2]} />
      <OctahedronStructure position={[2, 0.5, -3]} />
      <IcosahedronRing position={[0, -1, -4]} />
      <HolographicStructure position={[3, -0.5, -1]} />
      <OctahedronStructure position={[-3, 1, -2]} />
    </>
  );
}
