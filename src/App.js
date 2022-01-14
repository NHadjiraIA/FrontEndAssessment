 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header';
import ShortenUrl from './components/ShortenUrl';
import urls from './components/Urls';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
       
      <Route path="/" exact component={ShortenUrl}/>
        <Route path="/shorten/:url" component={urls}/> 
      <Route> 404 Not Found </Route>
      </Switch>
    </Router>
  );
}

export default App;
