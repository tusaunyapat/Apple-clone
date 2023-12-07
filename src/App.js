import Homepage from "./content/Homepage";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Ipad from "./component/Home_ipad";
import Ipod from "./component/Home_ipod";
import Mac from "./component/Home_mac";
import Iphone from "./component/Home_iphone";
import Watch from "./component/Home_watch";
import Accessories from "./component/Home_accessories";
import Header from "./component/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ipod" element={<Ipod />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />

        <Route path="/mac" element={<Mac />} />

        <Route path="/watch" element={<Watch />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
}

export default App;
