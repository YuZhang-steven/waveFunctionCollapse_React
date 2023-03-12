import { OrbitControls } from "@react-three/drei";




export default function Experience(props) {
    return <>
        <OrbitControls />
        <mesh>
            <cylinderGeometry />
            <meshNormalMaterial />
        </mesh>
    </>
}