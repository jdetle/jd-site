import Header from "../components/header";
import ExtLink from "../components/ext-link";
import Features from "../components/features";
import sharedStyles from "../styles/shared.module.css";

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>
          My Notion Blog (copied from https://github.com/ijjk/notion-blog)
        </h1>
      </div>
    </>
  );
}
