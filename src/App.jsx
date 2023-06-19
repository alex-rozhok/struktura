import { Header, PaymentPage } from "./components";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './i18n/config'

function App() {
  return (
    <SC.App>
      <Header />
      <SC.PaymentPage />
      <ToastContainer />
    </SC.App>
  );
}

export default App;

const SC = {
  App: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  PaymentPage: styled(PaymentPage)`
    flex-grow: 1;
  `,
};
