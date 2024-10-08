import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import GlobalCss from "./components/styles";
import Cadastro from "./components/Auth/Cadastro";
import Login from "./components/Auth/Login";
import AdminPage from "./components/AdminPage";
import CreateProduct from "./components/CreateProduct";
import GetAllProducts from "./components/GetAllProducts";
import SearchProduct from "./components/SearchProduct";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";

const App: React.FC = () => {
  return (
    <>
      <GlobalCss />
      <Router>
        <Routes>
          <Route path="/" element={<LoginWrapper />} />
          <Route path="/signup" element={<CadastroWrapper />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
          <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
          <Route path="/get-all-products" element={<GetAllProducts />} />
          <Route path="/get-product" element={<SearchProduct />} />
        </Routes>
      </Router>
    </>
  );
};

const LoginWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Login
      onSwitchToSignup={() => navigate("/signup")}
      onLoginSuccess={() => navigate("/admin")}
    />
  );
};

const CadastroWrapper: React.FC = () => {
  const navigate = useNavigate();

  return <Cadastro onSwitchToLogin={() => navigate("/")} />;
};

export default App;
