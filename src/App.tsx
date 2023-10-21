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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <section title="hero-section">
          <picture>
            <img src={imgHero} alt="illustration working" />
          </picture>
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>

          <Button>Get Started</Button>
          <form action="">
            <TextField></TextField>
            <Button>Shorten It!</Button>
          </form>
        </section>
        <section title="description-section">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div>
            <article>
              <picture>
                <img src={iconBrand} alt="Brand Recognition" />
              </picture>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article>
              <picture>
                <img src={iconDetail} alt="Detailed Records" />
              </picture>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article>
              <picture>
                <img src={iconCustomizable} alt="Fully Customizable" />
              </picture>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </section>
        <section title="cta-section">
          <h3>Boost your links today</h3>
          <Button>Get Started</Button>
        </section>
      </main>
      <footer>
        <picture>
          <img src={Logo} alt="Logo" />
        </picture>
        <ul>
          <li>
            <a href="#">Features</a>
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
        <ul>
          <li>
            <a href="#">Resources</a>
          </li>
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
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
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
        <div>
          <a href="#">
            <img src={facebook} alt="Logo facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Logo twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="Logo pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="Logo instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
