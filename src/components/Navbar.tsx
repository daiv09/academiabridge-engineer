import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skill Set", href: "#skills" },
    { name: "Projects & Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-md z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold text-engineering-blue">Jaganath Harihar</div>

    {/* Desktop Links */}
    <div className="hidden md:flex space-x-4 items-center">
      {links.map((link) => (
        link.name === "Contact Me" ? (
          <a
            key={link.name}
            href={link.href}
            className="px-4 py-2 bg-engineering-blue text-white font-medium rounded-full hover:bg-engineering-blue/80 transition-colors"
          >
            {link.name}
          </a>
        ) : (
          <a
            key={link.name}
            href={link.href}
            className="text-muted-foreground hover:text-engineering-blue transition-colors font-medium"
          >
            {link.name}
          </a>
        )
      ))}
    </div>

    {/* Mobile Hamburger */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6 text-engineering-blue" /> : <Menu className="h-6 w-6 text-engineering-blue" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-engineering-blue/20">
      <div className="flex flex-col items-center py-4 space-y-4">
        {links.map((link) => (
          link.name === "Contact Me" ? (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 bg-engineering-blue text-white font-medium rounded-md hover:bg-engineering-blue/80 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ) : (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-engineering-blue transition-colors font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          )
        ))}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
