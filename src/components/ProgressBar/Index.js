import { ProgressBarWrapper } from "./ProgressBarWrapper";
import { Leaf } from "./Leaf";
import { useContext } from "react";
import { ProgressContex } from "../context/ProgressContex";

export const ProgressBar = () => {
  const { progressLevel } = useContext(ProgressContex);
  const arrayLeaf = [];
  for (let index = 0; index < 9; index++) {
    if (index < progressLevel) {
      arrayLeaf.push(() => <Leaf color={true} />);
    } else {
      arrayLeaf.push(() => <Leaf color={false} />);
    }
  }
  return (
    <>
      <ProgressBarWrapper>
        {arrayLeaf.map((Element) => {
          return <Element key={Element.id} />;
        })}
      </ProgressBarWrapper>
    </>
  );
};
