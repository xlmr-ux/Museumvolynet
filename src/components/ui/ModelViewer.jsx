import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useLastCallback from "../../lib/hooks/useLastCallback";

const ModelViewer = ({
  path,
  visible = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onError = () => null,
}) => {
  const gltf = useGLTF(path);
  const modelRef = useRef();

  const handleLoad = useLastCallback(() => {
    setLoaded(true);
  });

  const handleError = useLastCallback((event) => {
    onError(event);
  });

  return (
    <>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        visible={visible} 
        onClick={onClick}
        onPointerOver={onMouseEnter}
        onPointerOut={onMouseLeave}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

export default ModelViewer;
