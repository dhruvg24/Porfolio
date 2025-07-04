import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  
];
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.screenY > 10);
      // 10 is height of navbar
      // when scroll lies on window
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // unmounted to avoid mem leaks
  }, []);
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          {/* Logo */}
          <span className="relative z-10 ">
            <span className="text-glow text-foreground">
              Dhruv Garg's
            </span>
            {" "}Portfolio

      
          </span>
        </a>


        {/* FOR DESKTOP */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item, index)=>(
            <a key = {index} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>


        {/* FOR MOBILE */}

        <button onClick={()=>setIsMenuOpen((prev)=>!prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen?"Close Menu": "Open Menu"}>
          {
            isMenuOpen? <X size={24}/> : <Menu size={24} />
          }
        </button>
        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen?"opacity-100 pointer-events-auto": "opacity-0 pointer-events-none")} >
          <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, index)=>(
            <a key = {index} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={()=>setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
