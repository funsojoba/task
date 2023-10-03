import {
    DashNav,
    Input, Select,
    DashBody, CardStyle,
    TaskTag, CardPriority,
    CardHeader, CardHeaderText, DelBtn } from "./style"

import { Button } from "../../components/Button/index"
import { PTag } from "../../components/Paragraph"
import { H3Tag } from "../../components/H3"


export const Dashboard = ()=>{
    return <div>
        <DashNav>
            <div>
                <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273159/tasky/f1dzlfilnza7zgxhqkf6.svg" alt="tasky" />
            </div>
            <div>
                <Input type="search"/>
                <Select>
                    <option>high</option>
                    <option>mid</option>
                    <option>low</option>
                </Select>
                <Button primary btnText="Add task" />
            </div>
        </DashNav>

        <DashBody>
            <CardStyle>
                <DelBtn>X</DelBtn>
                <CardHeader>
                    <CardPriority priority="mid" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique." />
                </div>
            </CardStyle>

            <CardStyle>
                <CardHeader>
                <CardPriority priority="high" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>
            <CardStyle>
                <CardHeader>
                <CardPriority priority="low" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>
            <CardStyle>
                <CardHeader>
                <CardPriority priority="mid" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>
            <CardStyle>
                <CardHeader>
                    <CardPriority priority="mid" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>
            <CardStyle>
                <CardHeader>
                    <CardPriority priority="high" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>
            <CardStyle>
                <CardHeader>
                <CardPriority priority="low" />
                    <CardHeaderText>
                        <H3Tag text="Write Documentation" />
                        <TaskTag>In Progress</TaskTag>
                    </CardHeaderText>
                </CardHeader>
                <div className="card-text">
                    <PTag text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, at, magni similique, aliquid velit necessitatibus ea tempora est saepe in ipsum possimus." />
                </div>
            </CardStyle>

        </DashBody>

    </div>
}
