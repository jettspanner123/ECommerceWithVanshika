import React from "react";



const Navbar = (): React.JSX.Element => {

    interface NavbarItem {
        name: string
        destination: string
        id: string
    }

    const navbarOptions: NavbarItem[] = [
        {name: "Sale", destination: "/sale", id: "sale"},
        {name: "Blog", destination: "/blog", id: "blog"},
        {name: "Home", destination: "/home", id: "home"},
        {name: "Categories", destination: "/categories", id: "cat"},
        {name: "Contact", destination: "/contact", id: "contact"},
    ]

    return (
        <nav className="w-screen flex justify-center">
            <ul className="text-black w-full flex gap-[1rem] justify-center">
                {navbarOptions.map((item: NavbarItem, index: number) => {
                    if(item.id == "home") {
                        return <NavbarBarHomeIcon key={index}/>
                    } else {
                        return <li key={index} className="">{item.name}</li>
                    }
                })}
            </ul>
        </nav>
    )
}

const NavbarBarHomeIcon = (): React.JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center">
            <span>SH</span>
            <span>OP</span>
            <span>EE</span>
        </div>
    )
}

export default Navbar;