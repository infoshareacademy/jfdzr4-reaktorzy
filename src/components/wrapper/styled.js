export const WrapperStyle = (props) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        height: '100%',
        justifyContent: 'space-between'
    }}>
        {props.children}
    </div>
}