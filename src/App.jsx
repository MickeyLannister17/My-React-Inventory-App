import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
};

export default App;
