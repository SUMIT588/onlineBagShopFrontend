import AppRoutes from "./routes";
import Loading from "./components/loading/Loading";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <RecoilRoot>
      <Loading />
      <AppRoutes />
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
