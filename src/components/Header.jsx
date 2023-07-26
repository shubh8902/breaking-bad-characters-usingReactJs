import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material'
import Logo from '../images/bblogo.png'

const StyledHeader = styled(AppBar)`
 background: #000;
 padding: 10px;
`

const StyledComponent = styled(Box)`
background-color: rgb(255, 255, 255, 0.15);
margin-left: 20px;
padding: 3px;
border: 2px solid #fff;
border-radius: 10px;
font-size: 20px;
`

const InputBox = styled(InputBase)`
color: inherit;
margin: 0 5px;
`

function Header({setText}) {

    const getText = () => {
        setText(e.target.value);
    }

    return (
        <StyledHeader style={{position:'static'}}>
            <Toolbar>
                <img src={Logo} alt="Breaking Bad" style={{ width: 100 }} />
                <StyledComponent>
                    <InputBox
                        placeholder='Search by name'
                        onChange={(e) => getText(e)}
                    />
                </StyledComponent>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;