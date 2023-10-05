import {
    DashNav,
    Input, Select,
    DashBody, CardStyle,
    TaskTag, CardPriority,
    CardHeader, CardHeaderText,
    DelBtn, TagInfo, TimeTag } from "./style"

import { Button } from "../../components/Button/index"
import { PTag } from "../../components/Paragraph"
import { H3Tag } from "../../components/H3"

import { useAppSelector } from "../../hooks/useTypedSelector"
import { useAppDispatch } from "../../hooks/useTypedSelector"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "../../components/NavBar/style"

// import { getPosts } from "../../store/features/postSlice"
import { getTasks } from "../../store/features/tasks/listTaskSlice"


// import Task

type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
    priority: string,
    expiry_date: string
}

export const Dashboard = ()=>{
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks());
      }, [dispatch]);

    const {data, error, loading } = useAppSelector(state => state.listTask)

    const taskData = data?.data?.tasks ?? [];

    return <div>
        <DashNav>
            <div>
                <Link to="/">
                    <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273159/tasky/f1dzlfilnza7zgxhqkf6.svg" alt="tasky" />
                </Link>
            </div>
            <div>
                <Input type="search"/>
                <Select>
                    <option>high</option>
                    <option>mid</option>
                    <option>low</option>
                </Select>
                <NavLink primary>
                    <Link to="/add">Add task</Link>
                </NavLink>
            </div>
        </DashNav>

        <DashBody>

            {taskData.length > 0 ? (
                taskData.map((el:Task)=>(
                    <Link to={"/edit/" + el.id}>
                        <CardStyle key={el.id}>
                            <CardHeader>
                                <CardPriority priority={el.priority} />
                                <CardHeaderText>
                                    <H3Tag text={el.title} />
                                    <TagInfo>
                                        <TaskTag>{el.status}</TaskTag>
                                        <TimeTag>{el.expiry_date}</TimeTag>
                                    </TagInfo>
                                </CardHeaderText>
                            </CardHeader>
                            <div className="card-text">
                                <PTag text={el.description} />
                            </div>
                        </CardStyle>
                    </Link>
                ))
            ) : (
                <CardStyle>
                        <CardHeader>
                            <CardPriority priority="mid" />
                            <CardHeaderText>
                                <H3Tag text="Create a new task" />
                                <TaskTag>In Progress</TaskTag>
                            </CardHeaderText>
                        </CardHeader>
                        <div className="card-text">
                            <PTag text="You don't have any task set up yet" />
                        </div>
                    </CardStyle>
            )}
        </DashBody>

    </div>
}
