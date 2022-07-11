import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import CameraController from "./Sections/CameraControls";
import { Canvas } from "@react-three/fiber";
import Moon from "./Sections/Moon/Moon";
import Stars from "./Sections/Stars/Stars";
import Model from "./Sections/Model";
import Stand from "./Sections/Stand";
 
function App() {
    return (
        <>
            <Suspense fallback={<div>Loading... </div>}>
                <Canvas>
                    <CameraController />
                    <ambientLight color="white" intensity={0.5} />
                    <pointLight color="white" position={[55, 55, 55]} />
                    <perspectiveCamera position={[75, 0.1, 1000]} />
                    <Stars />
                    <Moon />
                    <Model />
                    {/* <Stand /> */}
                </Canvas>
            </Suspense>
        </>
    );
};

const element = document.getElementById('root');
if (element) {
    createRoot(element).render(<App />)
}