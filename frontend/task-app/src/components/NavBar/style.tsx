import styled from 'styled-components';


interface LinkProps {
    primary?: boolean;
    active?: boolean
  }



export const Nav = styled.nav`
  background-color: #fff;
  padding: 2px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavLogo = styled.div`
    width: 150px;
`

export const NavAuth = styled.div`
    display: flex;
    @media only screen and (max-width:750px){
        flex-direction:column;
        height: 100px;
        width: 150px;
        justify-content: space-around;
        position: fixed;
        top: 100px;
        right: 20px;
        background: #fff;
        border: solid 1px #ECF9FF;
        border-radius: 20px;
    }
`

export const NavUl = styled.ul`
    display: flex;
`

export const NavLi = styled.li`
    display: inline-block;
    padding: 10px;
    margin: 10px
`

export const NavLink = styled.div<LinkProps>`
    display: inline-block;
    text-decoration: none;
    color: #060640;
    a{
        background-color: ${(props) => (props.primary ? '#060640' : '#fff')};
        color: ${(props) => (props.primary ? "#fff" : "#060640")};
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin: 5px;
        text-decoration: none;

        &:hover {
            transform: scale(1.05);
        }}

`

export const NavLinkText = styled.div`
    @media only screen and (max-width:1158px){
            display: none;
        }
`

export const MenuBar = styled.div<LinkProps>`
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: none;
    img{
        width: 100%;
    }
    @media only screen and (max-width:750px){
            display: block;
        }
`
