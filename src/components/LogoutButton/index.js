import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import css from "./logout.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className={css.logout}>
      <Button
        danger
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
