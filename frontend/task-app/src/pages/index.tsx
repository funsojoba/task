import { useState } from "react";
import {Button } from "../components/Button/index";
import { NavBar } from "../components/NavBar";
import { H1Tag } from "../components/H1";
import { PTag } from "../components/Paragraph";
import { SectionOne, SectionOneText, SectionOneImg, ImageDiv, Img } from "./style";



export const Home = () => {
    const [logInBar, setLoginBar] = useState(false)
    return <div>
        <NavBar></NavBar>
        <SectionOne>
            <SectionOneText>
                <H1Tag text="Simplify Your Productivity"/>
                <PTag text="Keep track of your tasks, projects and team in one place. Focus on what matters without losing visibility or context."/>
                <Button btnText="Get Started"/>

                <div className="quote">
                    <div className="quote-img">
                        <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696276648/tasky/mqorflj9muphbpkjwyqd.svg" alt="quote"/>
                    </div>
                    <p>The key is not to prioritize what's on your schedule, but to schedule your priorities. - <b>Stephen R. Covey</b></p>
                </div>
            </SectionOneText>

            <SectionOneImg>
                <ImageDiv>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273160/tasky/jdv8lg1zwxklxtlk9r5g.png" alt="Tasks"/>
                </ImageDiv>
            </SectionOneImg>

        </SectionOne>
    </div>
}
