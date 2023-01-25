import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll'


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    const downloadResume = () => {
        fetch('Protasov_Oleksandr_CV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Protasov_Oleksandr_CV.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-blue-600 text-gray-300 ">
            <ul className="hidden md:flex font-bold">
                <li className="hover:text-orange-600">
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="hover:text-orange-600">
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="hover:text-orange-600">
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className="hover:text-orange-600">
                    <Link to="projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className="hover:text-orange-600">
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
            {/*Hamburger*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu*/}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
            {/*Social icons*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="https://www.linkedin.com/in/oleksandr-protasov/" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30} />
                        </a>

                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a href="https://github.com/JohnyFours" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-700">
                        <Link to="contact" smooth={true} duration={500} className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
                        <button onClick={downloadResume} className="flex justify-between items-center w-full text-gray-300">
                            Resume <BsFillPersonLinesFill size={30} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;