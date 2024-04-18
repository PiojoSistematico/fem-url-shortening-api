import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { IconMenu } from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button className="md:hidden">
        <IconMenu></IconMenu>
      </Button>

      <Modal
        isDismissable
        className="bg-primary-2 w-10/12 z-10 absolute top-20 left-8 right-8 rounded-2xl"
      >
        <Dialog className="flex flex-col items-center p-8">
          <nav className="flex flex-col items-stretch gap-4 text-neutral-1 text-lg font-bold w-full text-center">
            <ul className="flex flex-col gap-4">
              <li className="hover:text-primary-1 focus-visible:text-primary-1">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-primary-1 focus-visible:text-primary-1">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-primary-1 focus-visible:text-primary-1">
                <a href="#">Resources</a>
              </li>
              <li className="hover:text-primary-1 focus-visible:text-primary-1">
                <a href="#">Contact</a>
              </li>
            </ul>
            <hr />
            <ul className="flex flex-col gap-4">
              <li className="hover:text-primary-1 focus-visible:text-primary-1">
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#" className="bg-primary-1 rounded-3xl px-6 py-2">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export default CustomModal;
