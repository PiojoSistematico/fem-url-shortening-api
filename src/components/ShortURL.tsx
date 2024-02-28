import React from "react";
import { Button } from "react-aria-components";

type Links = {
  link: string;
  shorten: string;
};

const ShortURL: React.FunctionComponent<Links> = ({ link, shorten }) => {
  return (
    <li className="bg-neutral-1 text-neutral-5 text-md rounded-lg p-2">
      <p className="p-2">{link}</p>
      <hr />
      <div className="flex flex-col gap-2 p-2">
        <p>{shorten}</p>
        <Button className="bg-primary-1 rounded-md text-neutral-1 px-4 py-1">
          Copy
        </Button>
      </div>
    </li>
  );
};

export default ShortURL;
