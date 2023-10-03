import { useState } from "react";
import {Button } from "../../components/Button/index";
import { NavBar } from "../../components/NavBar";
import { H1Tag } from "../../components/H1";
import { PTag } from "../../components/Paragraph";
import { SectionOne, SectionOneText, SectionOneImg, ImageDiv, Img, Quote } from "./style";

import { Link } from "react-router-dom";
import { NavLink } from "../../components/NavBar/style";

import { Dashboard } from "../dashboard/dashboard";


export const Home = () => {
    const [logInBar, setLoginBar] = useState(false)

    return <div>

        <NavBar></NavBar>
        <SectionOne>
            <SectionOneText>
                <H1Tag text={"Simplify Your Productivity ✌️"}/>
                <PTag text="Keep track of your tasks, projects and team in one place. Focus on what matters without losing visibility or context."/>
                <NavLink primary>
                    <Link to='/signup'>Get Started</Link>
                </NavLink>

                <Quote className="quote">
                    <div className="quote-img">
                        <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696276648/tasky/mqorflj9muphbpkjwyqd.svg" alt="quote"/>
                    </div>
                    <PTag text="The key is not to prioritize what's on your schedule, but to schedule your priorities. - Stephen R. Covey" />
                </Quote>
            </SectionOneText>

            <SectionOneImg>
                <ImageDiv>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273160/tasky/jdv8lg1zwxklxtlk9r5g.png" alt="Tasks"/>
                </ImageDiv>
            </SectionOneImg>

        </SectionOne>
    </div>
}
