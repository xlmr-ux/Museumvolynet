import { useGLTF } from "@react-three/drei";
import useLastCallback from "../../lib/hooks/useLastCallback";

const ModelViewer = ({
  ref,
  path,
  visible = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onError = () => null,
}) => {
  const gltf = useGLTF(path);

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
