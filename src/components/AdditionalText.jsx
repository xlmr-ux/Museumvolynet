import React from "react";
import { Text, Billboard } from "@react-three/drei";
import ElementPointer from "./ui/ElementPointer";

const AdditionalText = ({
  text,
  to,
  from = [0, 0, 0],
  fontSize = 0.5,
  color = "white",
  maxWidth = 3,
  children,
  ...props
}) => {
  return (
    <ElementPointer position={to} from={from} {...props}>
      <mesh position={to}>
        <Billboard>
          <Text
            position={[1, 0, 1]}
            fontSize={fontSize}
            color={color}
            anchorX="center"
            anchorY="middle"
            maxWidth={maxWidth}
          >
            {text}
          </Text>
          {children}
        </Billboard>
      </mesh>
    </ElementPointer>
  );
};

export default AdditionalText;
