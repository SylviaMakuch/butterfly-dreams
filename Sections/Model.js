import React ,{ useRef, useEffect }from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import * as THREE from "three";
import butterfly from "../media/butterfly.glb";

export default function Model() {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    let planeIntersectPoint = new THREE.Vector3();
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const ref = useRef();
    const gltf = useLoader(GLTFLoader, './media/butterfly.glb');

    const [spring, api] = useSpring(() => ({
        from: { x: 0 },
        to: { x: 2 },
        scale: 1,
        config: { mass: 10, tension: 1000, friction: 50, precision: 0.0001 }
      }));

      const bind = useDrag(
        ({ active, movement: [x, y], timeStamp, event }) => {
          if (active) {
            event.ray.intersectPlane(floorPlane, planeIntersectPoint);
          }
        //   setIsDragging(active);
        //activate this when you want to disable the camera drag and import setIsDragging as a prop in the main function

          api.start({
            scale: active ? 1.1 : 1,
            rotation: [y / aspect * 0, x / aspect, 0],
            bounds: { left: 1 / 2, right: 1 / 2, top: 0 / 2, bottom: 0 / 2 },
          });
          return timeStamp;
        },
        { delay: true }
      )

    useFrame((state, delta) => {
        ref.current.rotation.z += 0.01;
    });

    return (
        <animated.mesh ref={ref} {...spring} {...bind()} castShadow position={[0, 15, 0]} rotation={[11, 0, 0]} >
                <primitive
                    object={gltf.scene}
                    scale={2}
                />
        </animated.mesh>
    )

}

useGLTF.preload('./media/butterfly.glb');
