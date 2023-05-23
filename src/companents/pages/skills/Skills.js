import React from 'react'
import { SiTailwindcss, SiMui } from 'react-icons/si'
import styles from '../../util/style';
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaSass,

    FaJsSquare,


    FaVuejs,
} from "react-icons/fa";
import { FaGithubSquare } from 'react-icons/fa'


const Skills = ({ theme, style }) => {
    const skillsIcon = [
        {
            name: 'html',
            id: 1,
            icon: <FaHtml5 className='w-[100%] h-[100%]' />,
        }, {
            name: 'css',
            id: 2,
            icon: <FaCss3Alt className='w-[100%] h-[100%]' />

        }
        , {
            name: 'javascript',
            id: 3,
            icon: <FaJsSquare className='w-[100%] h-[100%]' />

        }
        , {
            name: 'react',
            id: 4,
            icon: <FaReact className='w-[100%] h-[100%]' />

        }
        , {
            name: 'sass',
            id: 5,
            icon: <FaSass className='w-[100%] h-[100%]' />

        }
        , {
            name: 'vue js',
            id: 6,
            icon: <FaVuejs className='w-[100%] h-[100%]' />

        }
        , {
            name: 'tailwind css',
            id: 7,
            icon: <SiTailwindcss className='w-[100%] h-[100%]' />

        }
        , {
            name: 'Material-UI',
            id: 8,
            icon: <SiMui className='w-[100%] h-[100%]' />

        }
        , {
            name: 'github',
            id: 9,
            icon: <FaGithubSquare className='w-[100%] h-[100%]' />

        }
    ]
    return (
        <div className={`  ${theme ? "dark" : "light"} ${style ? 'h-screen ' : ''}  `}>
            <h2 id='/code'
                className={`${styles.textC}  text-center text-[36px] relative  p-9 `}
            >

                skills
                <div
                    className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
                        } absolute left-[50%]  `}
                ></div>
                <div
                    className={`w-[10px] h-[10px] ${theme ? "   bg-white b" : " bg-black"
                        } absolute left-[50%]  translate-x-[-50%] rounded-lg`}
                ></div>
                <div
                    className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
                        } absolute right-[50%] `}
                ></div>
            </h2>
            <div className={`${styles.container}   `}>
                <ul className={`w-[100%] flex flex-wrap gap-6  ss:justify-start ${styles.flexAround}   text-center py-8 `}>
                    {
                        skillsIcon.map(item => (
                            <li key={item.id} className={` ${theme ? "dark" : "bg-blue-500"}
                              shadow-md shadow-[#040c16] hover:scale-110 duration-500  w-[200px] mt-3   p-[20px]`}>
                                {
                                    item.icon

                                }
                                <p className='capitalize font-bol text-[22px] '>{item.name}</p>


                            </li>
                        ))
                    }

                </ul>
            </div>
        </div >
    )
}

export default Skills