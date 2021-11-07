import leaf from "../../assets/leaf.png"
import leaf2 from "../../assets/leaf_silver.png"

export const Leaf = ({ color }) => {
    return (
        <>
            {color ? <img src={leaf} width={60} height={60} alt='Leaf' /> : <img src={leaf2} width={60} height={60} alt='Leaf' />}
        </>
    )

}