import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useLastCallback from "../../lib/hooks/useLastCallback";

const ModelViewer = (
  {
    path,
    visible = true,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onError = () => null,
  },
  ref
) => {
  const gltf = useGLTF(path);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useLastCallback(() => {
    setLoaded(true);
  });

  const handleError = useLastCallback((event) => {
    onError(event);
  });

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        visible={visible && loaded}
        onClick={onClick}
        onPointerOver={onMouseEnter}
        onPointerOut={onMouseLeave}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

export default React.forwardRef(ModelViewer);
