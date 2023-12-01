import { useState } from "react";
import { IconClose, IconLogo, IconMenu } from "./Icons";
import { Button } from "react-aria-components";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="p-8 flex flex-row items-center justify-between text-lg text-neutral-3 font-Poppins font-medium md:px-[10%]">
      <a className="text-primary-2">
        <IconLogo></IconLogo>
      </a>

      <Button
        onPress={handleClick}
        className="text-neutral-3 flex flex-row items-center justify-center"
      >
        {isMenuOpen ? <IconClose></IconClose> : <IconMenu></IconMenu>}
      </Button>
      <nav className="hidden">
        <ul aria-label="Primary" role="list">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
