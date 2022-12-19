import Header from "../components/header";
import ExtLink from "../components/ext-link";
import Features from "../components/features";
import sharedStyles from "../styles/shared.module.css";

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
       
        <div className="explanation" />
      </div>
    </>
  );
}
