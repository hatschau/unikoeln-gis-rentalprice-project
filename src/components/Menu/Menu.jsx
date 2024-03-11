import styled from 'styled-components'

const MenuItem = styled.button`
width: 100%;
background: inherit;
`

const MenuContainer = styled.div`
position: sticky;
display: flex;
width: 100%;
height: 3rem;
background: #000000;
z-index: 999;
`

export default function Menu({ menuItems, scrollToSection }, styleprops) {

    return (

        <MenuContainer>
            {menuItems.map((menuItem, index) => (
                <MenuItem key={index} $styleprops={styleprops} onClick={() => scrollToSection(menuItem)}>{menuItem} </MenuItem>
            ))}
        </MenuContainer>


    )
}