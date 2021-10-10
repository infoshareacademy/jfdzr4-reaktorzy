import { WrapperStyle } from './styled'

export const Wrapper = (props) => {
    return <WrapperStyle>
        {props.children}
    </WrapperStyle>
}