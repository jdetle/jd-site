import Header from "../components/header";
import ExtLink from "../components/ext-link";
import Features from "../components/features";
import sharedStyles from "../styles/shared.module.css";

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <section style={{ margin: 100 }}>
          <h3>Open Projects @ GoDaddy:</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="https://dashboard.godaddy.com/venture">
                dashboard.godaddy.com/venture
              </a>
            </li>
            <li>
              <a href="https://dashboard.godaddy.com/venture">
                account.godaddy.com/products
              </a>
            </li>
            <li>
              <a href="https://venture-redirector.godaddy.com">
                a redirection lambda
              </a>
            </li>
          </ul>
          <h3>Open Projects just for me:</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="https://github.com/jdetle/recteq-bbq">a bbq app </a>
            </li>
            <li>
              <a href="https://spotifycardio.com">spotifycardio.com </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
