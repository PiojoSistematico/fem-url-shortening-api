import React, { useState } from "react";
import { Button } from "react-aria-components";

type Links = {
  link: string;
  shorten: string;
};

const ShortURL: React.FunctionComponent<Links> = ({ link, shorten }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  async function handleCopy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setLinkCopied(true);
    } catch (err) {
      alert("Copy to clipboard failed.");
      setLinkCopied(false);
    }
  }

  return (
    <li className="flex flex-col gap-2 bg-neutral-1 text-neutral-5 text-md rounded-lg p-2 md:flex-row md:justify-between">
      <p className="p-2">{link}</p>
      <hr className="md:hidden" />
      <div className="flex flex-col gap-2 p-2 md:flex-row">
        <p className="text-primary-1">{shorten}</p>
        <Button
          onPress={() => handleCopy(shorten)}
          className={`${linkCopied ? "bg-primary-2" : "bg-primary-1"} rounded-md text-neutral-1 px-4 py-1 hover:opacity-80 focus-visible:opacity-80`}
        >
          {linkCopied ? "Copied" : "Copy"}
        </Button>
      </div>
    </li>
  );
};

export default ShortURL;
