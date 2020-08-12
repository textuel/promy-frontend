import React from "react";
import styled from "styled-components"

const NavbarContainer = styled.div`
    background-color: blue;
`

function Navbar(): React.ReactElement {
    return (
        <div>
            <NavbarContainer>
                This is a navbar
            </NavbarContainer>
        </div>
    );
}

export default Navbar;