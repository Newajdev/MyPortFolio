import { useEffect, useState } from "react";
import PrimeBtn from "../PrimeBtn";
import TitleComp from "../TitleComp";
import Project from "./Project";


const My_Projects = () => {
    const [Active, setActive] = useState("All Projects")
    const [projects, setProjects] = useState([])
    const [baseOnCatagory, setBaseOnCatagory] = useState([])

    useEffect(() => {
        
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setBaseOnCatagory(data)
            })
    }, [])
    

    const hendleCategoris = (category)  => {
        setActive(category)

        if(category === "All Projects"){
            setBaseOnCatagory(projects)
        }else{
            const checkCategory = projects.filter(projects => projects.category === category)
            setBaseOnCatagory(checkCategory);
        }
        

    }

    

    return (
        <div className="my-20">
            <TitleComp Name={'My Projects'} Style={'base'} />
            <p className="font-medium text-xl mt-6 w-[#986px] text-center leading-7">Here you’ll find a collection of personal and client projects, each accompanied by a detailed case study highlighting the development process, challenges, and solutions.</p>

            <div className="flex justify-center items-center py-14 gap-6">
                <PrimeBtn hendleProjects={hendleCategoris} Active={Active} Title={'All Projects'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleCategoris} Active={Active} Title={'Html & CSS'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleCategoris} Active={Active} Title={'Tailwind & Bootsrap'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleCategoris} Active={Active} Title={'JavaScript'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleCategoris} Active={Active} Title={'React'}></PrimeBtn>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    baseOnCatagory?.map(items => <Project key={items._id} items={items}></Project>)
                }
            </div>
        </div>
    );
};

export default My_Projects;