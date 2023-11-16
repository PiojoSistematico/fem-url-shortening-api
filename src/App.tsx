import { useState } from "react";
import Header from "./components/Header";
import imgHero from "./assets/images/illustration-working.svg";
import { Button, TextField } from "react-aria-components";
import iconBrand from "./assets/images/icon-brand-recognition.svg";
import iconDetail from "./assets/images/icon-detailed-records.svg";
import iconCustomizable from "./assets/images/icon-fully-customizable.svg";
import Logo from "./assets/images/logo.svg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main className="text-lg text-neutral-3 font-Poppins font-medium">
        <section title="hero-section" className="flex flex-col gap-8 p-8">
          <picture>
            <img
              className="object-contain w-full"
              src={imgHero}
              alt="illustration working"
            />
          </picture>
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-primary-2 text-4xl font-bold">
              More than just shorter links
            </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button className="bg-primary-1 rounded-3xl text-neutral-1 px-6 py-2">
              Get Started
            </Button>
          </div>
        </section>
        <section
          title="description-section"
          className="bg-neutral-6 p-8 flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col gap-4">
            <form
              action=""
              className="flex flex-col gap-4 p-4 bg-[url(src/assets/images/bg-shorten-mobile.svg)] bg-neutral-4 rounded-lg"
            >
              <input type="text" className="rounded-md w-full" />
              <Button className="bg-primary-1 rounded-md text-neutral-1 px-6 py-2">
                Shorten It!
              </Button>
            </form>
            <ul className="flex flex-col gap-4">
              <ShortURL></ShortURL>
              <ShortURL></ShortURL>
              <ShortURL></ShortURL>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-primary-2 text-2xl font-bold">
              Advanced Statistics
            </h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12">
              <picture className="absolute top-0 left-1/2 text-primary-2">
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
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12">
              <picture className="absolute top-0 left-1/2 text-primary-2">
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
            <article className="relative bg-neutral-1 flex flex-col items-center gap-4 text-center rounded-lg p-4 pt-12">
              <picture className="absolute top-0 left-1/2 text-primary-2">
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
          className="bg-[url(src/assets/images/bg-boost-mobile.svg)] bg-cover bg-no-repeat bg-center bg-primary-2 p-8 py-12 flex flex-col items-center gap-4 text-center"
        >
          <h3 className="text-neutral-1 font-bold">Boost your links today</h3>
          <Button className="bg-primary-1 rounded-3xl text-neutral-1 px-6 py-2 w-max">
            Get Started
          </Button>
        </section>
      </main>
      <footer className="bg-neutral-5 flex flex-col items-center gap-8 p-8 text-neutral-1 text-center">
        <a className="text-neutral-1">
          <IconLogo></IconLogo>
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Features</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Resources</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Company</p>
          <ul className="flex flex-col items-center gap-2 text-neutral-2">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <a href="#">
            <IconFacebook></IconFacebook>
          </a>
          <a href="#">
            <IconTwitter></IconTwitter>
          </a>
          <a href="#">
            <IconPinterest></IconPinterest>
          </a>
          <a href="#">
            <IconInstagram></IconInstagram>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
