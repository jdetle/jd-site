import React from "react";

type EquationProps = {
  displayMode: boolean;
};
const Equation = ({
  children,
  displayMode,
  key,
}: React.ComponentProps<any>) => {
  return <div>{children}</div>;
};

export default Equation;
