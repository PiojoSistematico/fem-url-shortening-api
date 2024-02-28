import { IconLogo } from "./Icons";

import CustomModal from "./CustomModal";

const Menu = () => {
  return (
    <header className="relative p-8 flex flex-row items-center justify-between text-lg text-neutral-3 font-Poppins font-medium md:px-[10%]">
      <a className="text-primary-2">
        <IconLogo></IconLogo>
      </a>
      <CustomModal></CustomModal>
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
