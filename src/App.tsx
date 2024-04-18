import { useState } from "react";
import Header from "./components/Header";
import imgHero from "./assets/images/illustration-working.svg";
import { Button } from "react-aria-components";
import ShortURL from "./components/ShortURL";
import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFacebook,
  IconFullyCustomizable,
  IconInstagram,
  IconLogo,
  IconPinterest,
  IconTwitter,
} from "./components/Icons";
import CustomForm from "./components/CustomForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

type Links = {
  link: string;
  shorten: string;
};

function App() {
  const [links, setLinks] = useLocalStorage("links", []);

  function addLink(links: Links): void {
    setLinks((prev) => [...prev, { link: links.link, shorten: links.shorten }]);
  }

  return (
    <>
      <Header></Header>
      <main className="text-lg text-neutral-3 font-Poppins font-medium">
        <section
          title="hero-section"
          className="flex flex-col gap-8 p-8 pb-32 md:grid md:grid-cols-2 md:px-[5%] lg:px-[10%] "
        >
          <picture className="md:order-2">
            <img
              className="object-contain w-full"
              src={imgHero}
              alt="illustration working"
            />
          </picture>
          <div className="flex flex-col gap-4 items-center text-center md:order-1 md:text-left md:items-start md:justify-center">
            <h1 className="text-primary-2 text-4xl font-bold">
              More than just shorter links
            </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button className="bg-primary-1 rounded-3xl text-neutral-1 px-6 py-2 hover:opacity-80 focus-visible:opacity-80">
              Get Started
            </Button>
          </div>
        </section>
        <section
          title="description-section"
          className="bg-neutral-6 p-8 flex flex-col gap-16 items-center md:px-[5%] lg:px-[10%]"
        >
          <div className="relative flex flex-col gap-4 -top-24 md:w-3/4 ">
            <CustomForm addLink={addLink}></CustomForm>
            <ul className="flex flex-col gap-4">
              {links && links.length > 0
                ? links.map((elem) => <ShortURL {...elem}></ShortURL>)
                : null}
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-center md:w-3/4 lg:w-1/2">
            <h2 className="text-primary-2 text-2xl font-bold">
              Advanced Statistics
            </h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="relative flex flex-col gap-16 md:flex-row md:gap-8 md:items-start">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-1 w-2 h-3/4 md:h-2 md:w-3/4"></div>
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12 h-80">
              <picture className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 rounded-full p-4">
                <IconBrandRecognition></IconBrandRecognition>
              </picture>
              <h3 className="text-primary-2 text-2xl font-bold">
                Brand Recognition
              </h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12 h-80 mt-8">
              <picture className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 rounded-full p-4">
                <IconDetailedRecords></IconDetailedRecords>
              </picture>
              <h3 className="text-primary-2 text-2xl font-bold">
                Detailed Records
              </h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12 h-80 mt-14">
              <picture className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 rounded-full p-4">
                <IconFullyCustomizable></IconFullyCustomizable>
              </picture>
              <h3 className="text-primary-2 text-2xl font-bold">
                Fully Customizable
              </h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </section>
        <section
          title="cta-section"
          className="bg-[url(src/assets/images/bg-boost-mobile.svg)] bg-cover bg-no-repeat bg-center bg-primary-2 p-8 py-12 flex flex-col items-center gap-4 text-center md:bg-[url(src/assets/images/bg-boost-desktop.svg)]"
        >
          <h3 className="text-neutral-1 font-bold">Boost your links today</h3>
          <Button className="bg-primary-1 rounded-3xl text-neutral-1 px-6 py-2 w-max hover:opacity-80 focus-visible:opacity-80">
            Get Started
          </Button>
        </section>
      </main>
      <footer className="bg-neutral-5 flex flex-col items-center gap-8 p-8 text-neutral-1 text-center md:grid md:grid-cols-7 md:px-[5%] lg:px-[10%] md:items-start md:justify-center">
        <a className="text-neutral-1 md:col-start-1 md:col-end-3">
          <IconLogo></IconLogo>
        </a>

        <div className="flex flex-col items-center gap-4 md:items-start md:text-left">
          <p className="font-bold">Features</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2 md:items-start">
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Link Shortening
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Branded Links
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Analytics
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-start md:text-left">
          <p className="font-bold">Resources</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2 md:items-start">
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Developers
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-start md:text-left">
          <p className="font-bold">Company</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2 md:items-start">
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-1 focus-visible::text-primary-1"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 md:col-start-6 md:col-end-8">
          <a
            className="hover:text-primary-1 focus-visible:text-primary-1"
            href="#"
          >
            <IconFacebook></IconFacebook>
          </a>
          <a
            className="hover:text-primary-1 focus-visible:text-primary-1"
            href="#"
          >
            <IconTwitter></IconTwitter>
          </a>
          <a
            className="hover:text-primary-1 focus-visible:text-primary-1"
            href="#"
          >
            <IconPinterest></IconPinterest>
          </a>
          <a
            className="hover:text-primary-1 focus-visible:text-primary-1"
            href="#"
          >
            <IconInstagram></IconInstagram>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
