import Title from "../Title";
import Info from "./info";



const About_Me = () => {
    return (
        <div >
            <Title Name={'About Me'} Style={'white'}></Title>
            <p className="text-xl font-medium text-white text-justify flex flex-col leading-8 mt-9">Hi, I’m a passionate MERN Stack Developer with a strong foundation in building scalable, responsive, and user-centric web applications. I specialize in MongoDB, Express.js, React.js, and Node.js, and enjoy turning complex problems into clean, efficient solutions.
                <span>Over the past few years, I’ve worked on a variety of projects — from dynamic e-commerce platforms to real-time applications — where I handled everything from front-end UI design to back-end API development and database management. I'm deeply focused on performance, security, and seamless user experience.</span>
                <span>
                    When I’m not coding, you’ll find me exploring new web technologies, improving UI/UX patterns, or contributing to open-source projects.
                    Let’s connect and create something amazing!</span></p>

            <div className="flex justify-between mt-9">
                <Info title={'name :'} information={'Md Shale Newaj'}></Info>
                <Info title={'E-mail :'} information={'newaj.up@gmail.com'}></Info>
                <Info title={'WhatsApp :'} information={'+880 1972 406905'}></Info>
                <Info title={'Location :'} information={'Chattogram, BD'}></Info>


            </div>
        </div>
    );
};

export default About_Me;