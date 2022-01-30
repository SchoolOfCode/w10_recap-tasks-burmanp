import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import css from "./login.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className={css.login}>
      {/* <button onClick={() => loginWithRedirect()}>Log In to WikiPigeon</button> */}
      <h1>Welcome to WikiPigeon</h1>
      <Button type="primary" onClick={() => loginWithRedirect()}>
        Log In to WikiPigeon
      </Button>
    </section>
  );
};

export default LoginButton;
