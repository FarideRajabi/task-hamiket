import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Add from "./components/Add";
import Prodact from "./components/Product";
  
function App() {
  return (
    <>
      <Router>
          <Route exact path="/" component={Prodact} />
          <Route path="/add" component={Add} />
      </Router>
    </>
  );
}
  
export default App;

