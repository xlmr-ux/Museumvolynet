import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { ARCanvas, ARMarker } from "./components/ar";
import { useGLTF } from "@react-three/drei";

function Box() {
  const [selected, setSelected] = useState(false);

  return (
    <mesh onClick={() => setSelected(!selected)}>
      <Model path="data/models/Womens Cairn.glb" />
      <meshStandardMaterial color={selected ? "yellow" : "hotpink"} />
    </mesh>
  );
}

function Model({ path }) {
  const gltf = useGLTF(path);
  return <primitive scale={0.2} object={gltf.scene} />;
}

function App() {
  return (
    <ARCanvas
      onCameraStreamReady={() => console.log("Camera stream ready")}
      onCameraStreamError={() => console.error("Camera stream error")}
      sourceType={"webcam"}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} intensity={10.0} />
      <ARMarker
        debug={true}
        params={{ smooth: true }}
        type={"pattern"}
        patternUrl={"data/patt.hiro"}
        onMarkerFound={() => {
          console.log("Marker Found");
        }}
      >
        <Box />
      </ARMarker>
    </ARCanvas>
  );
}

export default App;
