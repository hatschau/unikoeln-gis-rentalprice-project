import styled from 'styled-components'

const MenuItem = styled.button`
width: 100%;
border-radius: none;
background: ${props => props.$styleprops ? $styleprops.background : "#000000"};
`

const MenuContainer = styled.div`
position: sticky;
display: flex;
justify-content: space-between;
width: 100%;
height: 3rem;
background: #000000;
`

export default function Menu({ menuItems, scrollToSection }, styleprops) {
    console.log(menuItems)
    console.log(styleprops)

    return (
        <>
            <MenuContainer>
                {menuItems.map((menuItem, index) => (
                    <MenuItem key={index} styleprops={styleprops} onClick={() => scrollToSection(menuItem)}>{menuItem} </MenuItem>
                ))}
            </MenuContainer>

        </>
    )
}