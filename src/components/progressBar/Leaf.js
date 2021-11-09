import leaf from "../../assets/leaf.png";
import leaf2 from "../../assets/leaf_silver.png";
import { ProgressBarStyled } from "./progressBarStyled";

export const Leaf = ({ color }) => {
  return (
    <ProgressBarStyled>
      {color ? (
        <img src={leaf} width={"100%"} height={"auto"} alt="Leaf" />
      ) : (
        <img src={leaf2} width={"100%"} height={"auto"} alt="Leaf" />
      )}
    </ProgressBarStyled>
  );
};
