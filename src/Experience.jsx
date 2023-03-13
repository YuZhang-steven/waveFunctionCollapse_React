import { OrbitControls, Stage } from "@react-three/drei";
import BasicBox from "./BasicBox";
import GenerateNew from "./GenerateNew";
import RuleCreator from "./RuleCreator";
import testList from "./testList";





export default function Experience(props) {
    const testCase = testList.test01
    // console.log(testCase);
    // 
    const rules = RuleCreator(testCase)
    const collapseResult = GenerateNew(rules, { width: 20, height: 35 })
    console.log(collapseResult)
    console.log(rules);
    const boxBuild = (arr) => {
        let content = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                // console.log(arr[i][j]);
                content.push(<BasicBox key={`${i} ${j}`} type={arr[i][j]} position={[j, i, 0]} />)
            }
        }
        return content
    }
    // console.log(boxBuild(testCase));


    return <>
        <OrbitControls />
        <Stage
            environment={"sunset"}
            preset={'upfront'}
        >
            {boxBuild(testCase)}
            {/* <BasicBox type='c' position={[0, 0, 0]} /> */}
        </Stage>
    </>
}