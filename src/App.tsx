import React, { useState } from "react";
import GlobalCss from "./components/styles";
import Cadastro from "./components/Auth/Cadastro";
import Login from "./components/Auth/Login";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      <GlobalCss />
      {isLogin ? (
        <Login onSwitchToSignup={handleSwitchToSignup} />
      ) : (
        <Cadastro onSwitchToLogin={handleSwitchToLogin} />
      )}
    </>
  );
};

export default App;
