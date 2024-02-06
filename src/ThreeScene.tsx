import React, { useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

export const ThreeScene: React.FC = () => {
    const boxRef = useRef<THREE.Mesh|null>(null)
    const globalGeometry = new THREE.BoxGeometry();
    const globalMaterial = new THREE.MeshBasicMaterial();

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh
                ref={boxRef}
                geometry={globalGeometry}
                material={globalMaterial}
            >        
            </mesh>
             <OrbitControls />
        </Canvas>
        );
}