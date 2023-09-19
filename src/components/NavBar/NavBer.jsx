import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBer = () => {

    // step-5 MENU ITEM use state
    const [open, setOpen] = useState(false)

    // step-1 
    // give me 5 routes data for a react app in array of javascript 
    // do not give me component.Give me path, name, id 
    // place write each object in one line 
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (
        <nav className="bg-red-200 rounded-lg p-6 m-6 lg:p-0 lg:m-6 ">
            {/* step-6 Menu icon add and onClick add */}
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {/* step-7 open and close*/}
                {
                    open === true ?
                        <AiOutlineClose ></AiOutlineClose>
                        : <AiOutlineMenu ></AiOutlineMenu>
                }
            </div>



            <ul className={`
            //  step-8    
            ${open ? 'top-16' : '-top-80'} duration-1000
            md:flex absolute md:static bg-red-200 rounded-lg p-6 m-6`}>
                {/* step-2  */}
                {
                    routes.map(route => <Link
                        key={route.id}

                        // step-3 send route 
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBer;






























