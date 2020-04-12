import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1> This is My Personal Site </h1>
      <div className="explanation">
        <p>
          {" "}
          Currently this just hosts my blog posts sourced from Notion. I
          eventually intend on hosting photos here, less professional ramblings,
          and documentation of pet projects that I do around the house.
        </p>
      </div>
    </div>
  </>
);
