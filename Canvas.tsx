import React, { Suspense } from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import Donut from "./Sections/Donut/Donut";


const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <camera position={[30, -3, 0]} />
            <pointLight color="white" position={[55, 55, 55]} />
            <ambientLight color="white" intensity={0.5} />
            <perspectiveCamera position={[1, 0.1, 10]} />
            <Donut position={[1.2, 0, 0]} />
        </ThreeCanvas>
    )
}

export default Canvas;