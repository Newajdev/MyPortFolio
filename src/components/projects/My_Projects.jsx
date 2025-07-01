import Title from "../Title";
import Project from "./Project";


const My_Projects = () => {
    return (
        <div className="my-20">
            <Title Name={'My Projects'} Style={'base'}></Title>
            <p className="font-medium text-xl mt-6 w-[#986px] text-center leading-7">Here you’ll find a collection of personal and client projects, each accompanied by a detailed case study highlighting the development process, challenges, and solutions.</p>
            <div className="flex justify-between">
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    );
};

export default My_Projects;