import { WrapperStyle } from './styled'

export const Wrapper = ({ children }) => {
    return <WrapperStyle>
        {children}
    </WrapperStyle>
}