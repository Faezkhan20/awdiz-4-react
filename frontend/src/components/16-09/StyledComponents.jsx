import React from 'react'
import styled from 'styled-components'


const StyledComponents = () => {
    const Button = styled.button`
    color : red;
    background-color : blue;
    `;
    const H1 = styled.h1`
    text-size :20px;
    `;
    return (
        <div style={{ backgroundColor: "green" }}>
            <H1>hello faez</H1>
            <Button>Styled Components</Button>
        </div>
    )
}

export default StyledComponents