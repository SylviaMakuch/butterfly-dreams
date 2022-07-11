import * as THREE from 'three'
import React, { Suspense } from 'react';
import space from "./space.jpg";
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


const Background = (props) =>{
  const { scene } = useThree();
  const loader = new THREE.TextureLoader();
  const texture = useLoader(TextureLoader,space);
  scene.background = texture;
  return (null)
};

export default Background;