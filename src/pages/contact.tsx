import Header from "../components/header";
import ExtLink from "../components/ext-link";

import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

import GitHub from "../components/svgs/github";
import Twitter from "../components/svgs/twitter";
import Envelope from "../components/svgs/envelope";
import LinkedIn from "../components/svgs/linkedin";

const contacts = [
  {
    Comp: Twitter,
    alt: "twitter icon",
    link: "https://twitter.com/jdetle",
  },
  {
    Comp: GitHub,
    alt: "github icon",
    link: "https://github.com/jdetle",
  },
  {
    Comp: LinkedIn,
    alt: "linkedin icon",
    link: "https://www.linkedin.com/in/jdetle",
  },
  {
    Comp: Envelope,
    alt: "envelope icon",
    link: "mailto:jdetle@gmail.com?subject=Notion Blog",
  },
];

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
