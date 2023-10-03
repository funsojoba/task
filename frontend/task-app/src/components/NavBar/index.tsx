import { useState } from "react"
import { Link } from "react-router-dom"

import { Nav, NavLinkText, NavAuth, NavUl, NavLi, NavLink, MenuBar } from "./style"

export const NavBar = () => {

    const [activeBar, setActiveBar] = useState(false)

    return <Nav>
        <div className="logo">
            <Link to="/">
                <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273159/tasky/f1dzlfilnza7zgxhqkf6.svg" alt="tasky" />
            </Link>
        </div>
        <NavLinkText>
            <NavUl>
                <NavLi>
                    <NavLink>
                        <Link className="active" to="#">Home</Link>
                    </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink>
                        <Link className="active" to="#">About</Link>
                    </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink>
                        <Link className="active" to="#">Services</Link>
                    </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink>
                        <Link className="active" to="#">Review</Link>
                    </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink>
                        <Link className="active" to="#">Support</Link>
                    </NavLink>
                </NavLi>
            </NavUl>
        </NavLinkText>
        <MenuBar>
            <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696348092/tasky/yh1cb9pai36uixw11afc.png"/>
        </MenuBar>
        <NavAuth>
            <NavLink active={activeBar}>
                <Link to="/login">Log in</Link>
            </NavLink>
            <NavLink primary>
                <Link to="/signup">Sign Up</Link>
            </NavLink>
        </NavAuth>
    </Nav>
}
