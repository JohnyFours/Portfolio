import React from 'react';
import TodoList from '../assets/projects/todo_app.jpg';
import QuizletApp from '../assets/projects/quizlet_app.jpg'
import WeatherApp from '../assets/projects/weather_app.jpg'



const Projects = () => {

    return (
        <div name='projects' className='w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=" mt-24">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600">Projects</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${TodoList})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Todo List Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://johnyfours.github.io/Todo_list_application/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/JohnyFours/Todo_list_application" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${QuizletApp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Quizlet Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://johnyfours.github.io/quizlet_React/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/JohnyFours/quizlet_React" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WeatherApp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather React App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://johnyfours.github.io/React_Weather_app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/JohnyFours/React_Weather_app" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Projects;