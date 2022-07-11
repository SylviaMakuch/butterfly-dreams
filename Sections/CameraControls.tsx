import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.minDistance = 3;
          controls.maxDistance = 2020
          controls.position0.set(0, 0, -10);
          controls.enableRotate = true;
          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
 };
 export default CameraController;