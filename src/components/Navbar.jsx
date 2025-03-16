'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-navy/90 backdrop-blur-sm py-4"
    >
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-green font-mono text-xl font-bold"
        >
          G.Venkata Giridhar
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-slate-light hover:text-green transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              
              <span className="ml-1">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
