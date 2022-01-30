import "./App.css";
import Main from "../Main";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Space } from "antd";
import { SyncOutlined } from "@ant-design/icons";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Space>
        One moment please...
        <SyncOutlined spin />
      </Space>
    );
  }

  return (
    <>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <LogoutButton />
          <Main />
        </>
      )}
    </>
  );
}

export default App;
