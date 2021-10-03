import { ProgressBarWrapper } from './ProgressBarWrapper'
import { Leaf } from './Leaf'

export const ProgressBar = ({ progressLevel }) => {

    const arrayLeaf = [];
    for (let index = 0; index < 9; index++) {
        if (index < progressLevel) {
            arrayLeaf.push(() => <Leaf color={true} />)
        } else {
            arrayLeaf.push(() => <Leaf color={false} />)
        }
    }
    return (
        <>
            <ProgressBarWrapper>
                {arrayLeaf.map((Element) => {
                    return <Element />;
                })}
            </ProgressBarWrapper>
        </>
    )
}