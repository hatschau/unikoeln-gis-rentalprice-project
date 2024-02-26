import styled from 'styled-components'

const MenuItem = styled.button`
width: 100%;
border-radius: none;
background: #000000;
`

const MenuContainer = styled.div`
position: sticky;
display: flex;
justify-content: space-between;
width: 100%;
height: 3rem;
background: #000000;
`

export default function Menu({ menuItems }) {
    console.log(menuItems)

    return (
        <>
            <MenuContainer>
                {menuItems.map((menuItems, index) => (
                    <MenuItem key={index}>{menuItems}</MenuItem>
                ))}
            </MenuContainer>

        </>
    )
}