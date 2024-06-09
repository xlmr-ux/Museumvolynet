import React from "react";
import { Line } from "@react-three/drei";

const ElementPointer = ({
  disableWrapper = false,
  position,
  children,
  from = [0, 0, 0],
  color = "white",
  wrapperProps = {},
  lineProps = {},
}) => {
  if (!position) return null;

  const SlotPointer = (
    <>
      <Line points={[from, position]} color={color} {...lineProps} />
      {React.cloneElement(children, { position })}
    </>
  );

  return disableWrapper ? (
    <>{SlotPointer}</>
  ) : (
    <group {...wrapperProps}>{SlotPointer}</group>
  );
};

export default ElementPointer;
