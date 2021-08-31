import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";//if not destructured all icons in that package will be imported, to improve performance
import logo from '../../images/logo.svg';
const Navsm = () =>{
    return (<>
    <div className="flex items-center justify-between">
        <div>
            <h3 className="text-white text-xl font-bold">
                It all starts here!
            </h3>
            <span className="text-gray-400 text-xs flex items-center">
                Aurangabad <BiChevronRight />
            </span> 
        </div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/>
        </div>
    </div>
    </>
    );
};

const Navmd = () =>{
return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch />
        <input type="search" className="w-full h-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports and activites...."></input>
    </div>
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

const Navlg1 = () => {
    return (
        <> 
        <div className="container px-4 flex">

            <div className="mx-10 flex items-center gap-4 ">
                <button className="text-gray-300
                pointer-cursor hover:text-white">Movies</button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Stream<sup className="text-red-500">New</sup></button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Events</button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Plays</button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Sports</button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Activities</button>
                <button className="text-gray-300
                pointer-cursor hover:text-white">Buzz</button>
            </div>

            <div className="ml-96 px-24 flex gap-4">
            <button className="text-white
                pointer-cursor">ListYourShow<sup className="text-red-500">New</sup></button>
                <button className="text-white
                pointer-cursor">Corporates</button>
                <button className="text-white
                pointer-cursor">Offers</button>
                <button className="text-white
                pointer-cursor">Gift Cards</button>
            </div>
        </div>
        </>
    );
};

const Navbar = () =>{
    return <> 
    <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
            {/* Mobile Screen and md:hidden means hidden for all greater than md*/}
            <Navsm />
        </div>

        <div className="hidden md:flex lg:hidden">
        {/* Medium/tab screen */}
        <Navmd />
        </div>

        <div className="hidden lg:flex">
            {/* Large screen */}
            <Navlg/>
        </div>
    </nav>
    <nav className="bg-bms-800 p-3 hidden md: hidden lg:flex">
    <div>
            {/* Large screen */}
            <Navlg1/>
        </div>
    </nav>
    </>;
};

export default Navbar;