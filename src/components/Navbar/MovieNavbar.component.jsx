import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown,BiShareAlt } from "react-icons/bi";//if not destructured all icons in that package will be imported, to improve performance
import logo from '../../images/logo.svg';
const Navsm = () =>{
    return (<>
    <div className="flex items-center justify-between">
        <div>
            <h3 className="text-white text-xl font-bold">
                It all starts here!
            </h3>
        </div>
        <div className="w-8 h-8">
            <BiShareAlt className="w-full h-full"/>
        </div>
    </div>
    </>
    );
};


const Navlg = () => {
    return (
        <> 
        <div className="container mx-auto px-4 flex items-center justify-around">

            <div className="flex items-center gap-3 w-1/2">
                <div className="w-30 h-30"> 
                    <img src={logo} alt="logo" className="w-full h-full"/>
                </div>

                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch />
                    <input type="search" className="w-full h-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports and activites....">
                    </input>
                </div>

            </div>

            <div className="flex items-center gap-4">

                <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                    Aurangabad <BiChevronDown />
                </span>
                <button className="bg-butt-600 text-white px-2 py-1 text-sm rounded">Sign In
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>

            </div>
        </div>
        </>
    );
};

const MovieNavbar = () =>{
    return <> 
    <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
            {/* Mobile Screen and md:hidden means hidden for all greater than md*/}
            <Navsm />
        </div>

        <div className="hidden md:block lg:hidden">
        {/* Medium/tab screen */}
        <Navsm />
        </div>

        <div className="hidden lg:flex">
            {/* Large screen */}
            <Navlg/>
        </div>
    </nav>
    </>;
};

export default MovieNavbar;