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
            fontWeight="bold" // Example styling
            letterSpacing="0.1em" // Example styling
            outlineColor="#000" // Outline color
            outlineWidth={0.1} // Outline width
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
