const ChildrenProps = () => {
    return (
        <div>
            <Button>This is Button Component</Button>  
            <H1>This is H1 Component</H1>
        </div>
    )
}

const Button = ({children}) => {
    return(
        <button style={{fontSize:'20px'}} >{children}</button>
    )
}

const H1 = ({children}) => {
    return (
        <>
        <h1>{children}</h1>
        <h1>{children}</h1>
        </>
    )
}

export default ChildrenProps;
