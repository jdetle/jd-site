import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1> John Detlefs - Tech Blog </h1>

      <div className="explanation">
        <p>This my blog.</p>
      </div>
    </div>
  </>
);
