import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import News from "./Pages/News/News";
import Forcast from "./Pages/Forcast/Forcast";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Contactus from "./Pages/Contactus/Contactus";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/forcast">
          <Forcast />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route path="/contactus">
          <Contactus />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
