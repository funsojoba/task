import { Nav, NavLogo, NavAuth, NavUl, NavLi, NavLink } from "./style"



export const NavBar = () => {
    return <Nav>
        <div className="logo">
            <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273159/tasky/f1dzlfilnza7zgxhqkf6.svg" alt="tasky" />
        </div>
        <div>
            <NavUl>
                <NavLi><NavLink className="active" href="#">Home</NavLink></NavLi>
                <NavLi><NavLink href="#">About</NavLink></NavLi>
                <NavLi><NavLink href="#">Services</NavLink></NavLi>
                <NavLi><NavLink href="#">Review</NavLink></NavLi>
                <NavLi><NavLink href="#">Support</NavLink></NavLi>
            </NavUl>
        </div>
        <NavAuth>
            <ul>
                <NavLi><NavLink href="#" className="login">Log In</NavLink></NavLi>
                <NavLi><NavLink href="#" className="signup">Sign Up</NavLink></NavLi>
            </ul>
        </NavAuth>
    </Nav>
}
