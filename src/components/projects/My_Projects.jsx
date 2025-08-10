import { useEffect, useState } from "react";
import PrimeBtn from "../PrimeBtn";
import TitleComp from "../TitleComp";
import Project from "./Project";


const My_Projects = () => {
    const [allproduct, setAllproduct] = useState(false)
    const [htmlcss, setHtmlcss] = useState(false)
    const [Tailwind, setTailwind] = useState(false)
    const [JavaScript, setJavaScript] = useState(false)
    const [React, setReact] = useState(false)

    const [projects, setProjects] = useState([])
    const [baseOnCatagory, setBaseOnCatagory] = useState([])

    useEffect(() => {
        setAllproduct(true)
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    const hendleAllProjects = () => {
        setAllproduct(true)
        setHtmlcss(false)
        setTailwind(false)
        setJavaScript(false)
        setReact(false)
        const Category = projects.forEach(item => console.log(item))
        setBaseOnCatagory(Category)
        console.log(baseOnCatagory);
        
    }
    const hendleHtmlCss = () => {
        setAllproduct(false)
        setHtmlcss(true)
        setTailwind(false)
        setJavaScript(false)
        setReact(false)

        const Category = projects.filter(Title => Title.category === "Html & css")
        setBaseOnCatagory(Category)
        console.log(baseOnCatagory);
        
    }
    const hendleTailwind = () => {
        setAllproduct(false)
        setHtmlcss(false)
        setTailwind(true)
        setJavaScript(false)
        setReact(false)

        const Category = projects.filter(Title => Title.category === "Talwind & BootStrap")
        setBaseOnCatagory(Category)
        console.log(baseOnCatagory);
    }
    const hendleJavaScript = () => {
        setAllproduct(false)
        setHtmlcss(false)
        setTailwind(false)
        setJavaScript(true)
        setReact(false)

        
        const Category = projects.filter(Title => Title.category === "JavaScript")
        setBaseOnCatagory(Category)
        console.log(baseOnCatagory);
    }
    const hendleReact = () => {
        setAllproduct(false)
        setHtmlcss(false)
        setTailwind(false)
        setJavaScript(false)
        setReact(true)

        
        const Category = projects.filter(Title => Title.category === "React")
        setBaseOnCatagory(Category)
        console.log(baseOnCatagory);
    }

    return (
        <div className="my-20">
            <TitleComp Name={'My Projects'} Style={'base'} />
            <p className="font-medium text-xl mt-6 w-[#986px] text-center leading-7">Here you’ll find a collection of personal and client projects, each accompanied by a detailed case study highlighting the development process, challenges, and solutions.</p>

            <div className="flex justify-center items-center py-14 gap-6">
                <PrimeBtn hendleProjects={hendleAllProjects} Active={allproduct} Title={'All Projects'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleHtmlCss} Active={htmlcss} Title={'Html & CSS'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleTailwind} Active={Tailwind} Title={'Tailwind & Bootsrap'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleJavaScript} Active={JavaScript} Title={'JavaScript'}></PrimeBtn>
                <PrimeBtn hendleProjects={hendleReact} Active={React} Title={'React'}></PrimeBtn>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    projects?.map(items => <Project items={items}></Project>)
                }
            </div>
        </div>
    );
};

export default My_Projects;