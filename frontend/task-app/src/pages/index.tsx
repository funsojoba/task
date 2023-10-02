import {Button } from "../components/Button/index";
import { NavBar } from "../components/NavBar";



export const Home = () => {
    return <div>
        <div className="sectionOne">
            <NavBar></NavBar>
            <h1>Simplify Your Productivity</h1>
            <p>Effortless Task Management, Real-Time Tracking, and Powerful Reporting - All in One Place</p>
            <Button></Button>

            <div className="quote">
                <div className="quote-img">
                    <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696276648/tasky/mqorflj9muphbpkjwyqd.svg" alt="quote"/>
                </div>
                <p>The key is not to prioritize what's on your schedule, but to schedule your priorities. - <b>Stephen R. Covey</b></p>
            </div>
        </div>
        <div className="sectionTwo">
            <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273160/tasky/jdv8lg1zwxklxtlk9r5g.png" alt="Tasks"/>
        </div>
    </div>
}
