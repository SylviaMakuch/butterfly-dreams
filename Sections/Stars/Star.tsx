import React from "react";
import { useThree } from "@react-three/fiber";
import THREE from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

const Star = () => {
  function getRandom() {
    var num = Math.floor(Math.random() * 80) + 1;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }
  // const bloomPass = new UnrealBloomPass(
  //   new THREE.Vector2(window.innerWidth, window.innerHeight),
  //   1.5,
  //   0.4,
  //   0.85
  // );
  // bloomPass.threshold = 0;
  // bloomPass.strength = 6; //intensity of glow
  // bloomPass.radius = 0;

  return (
    <mesh
      position={[getRandom(), getRandom(), getRandom()]}
    >
      <sphereBufferGeometry attach="geometry" args={[0.20, 24, 24]} />
      <meshStandardMaterial attach="material" color={0xffffff} bumpScale={10}/>

    </mesh>
  );
}
export default Star;