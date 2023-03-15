

export default function BasicBox(props) {
    let boxcolor = 'purple'
    switch (props.type) {
        case 'r':
            boxcolor = 'red'
            break;
        case 'g':
            boxcolor = 'green'
            break;
        case 'b':
            boxcolor = 'cyan'
    }

    return <mesh position={props.position}>
        <boxGeometry
            args={[0.9, 0.9, 0.9]}
        />
        <meshStandardMaterial
            color={boxcolor}
            roughness={0.25}
            metalness={0}
        />

    </mesh>
}