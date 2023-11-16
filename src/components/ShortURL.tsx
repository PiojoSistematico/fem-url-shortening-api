import React from "react";
import { Button } from "react-aria-components";

const ShortURL = () => {
  return (
    <li className="bg-neutral-1 text-neutral-5 text-md">
      <p className="p-2">Examplelolololololool.com</p>
      <hr />
      <div className="flex flex-col gap-2 p-2">
        <p>lalala.la</p>
        <Button className="bg-primary-1 rounded-md text-neutral-1 px-4 py-1">
          Copy
        </Button>
      </div>
    </li>
  );
};

export default ShortURL;
