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
            color="#9ad5b7"
            anchorX="center"
            anchorY="middle"
            maxWidth={maxWidth}
            fontWeight="bold"
            letterSpacing="0.1em"
            outlineColor="#000"
            outlineWidth={0.1}
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
