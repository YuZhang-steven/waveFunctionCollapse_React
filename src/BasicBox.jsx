

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
            args={[1, 1, 1]}
        />
        <meshBasicMaterial
            color={boxcolor}
        />
    </mesh>
}