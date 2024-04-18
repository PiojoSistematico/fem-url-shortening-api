import { IconLogo } from "./Icons";

import CustomModal from "./CustomModal";

const Menu = () => {
  return (
    <header className="relative p-8 flex flex-row items-center justify-between md:justify-normal gap-8 text-lg text-neutral-3 font-Poppins font-medium md:px-[5%] lg:px-[10%]">
      <a className="text-primary-2">
        <IconLogo></IconLogo>
      </a>
      <CustomModal></CustomModal>
      <nav className="hidden md:flex flex-row items-center justify-between w-full">
        <ul className="flex flex-row items-center gap-4">
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="#">Features</a>
          </li>
          <li className="hover:text-primary2 fo-cus-visible:text-primary-2">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="#">Resources</a>
          </li>
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-4">
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="#">Login</a>
          </li>
          <li className="bg-primary-1 rounded-3xl text-neutral-1 px-4 py-1 hover:opacity-70 focus-visible:opacity-70">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
