import Layout from "./Layout/Layout";
import Services from "./Services/services";
import Transaction from "./Transaction/transaction";
import Account from "./Account/account";
// import Transactionss from "./Tableone/tableone";
// import Success from "./successful/successful";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/transaction" element={<Transaction />}/>
        <Route path= "/account" element={<Account />}/>
        {/* <Route path="/transactions" element={<Transactionss/>}>
          <Route path="/success" element={<Success />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
