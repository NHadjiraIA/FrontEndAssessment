 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header';
import ShortenUrl from './components/ShortenUrl';
import Urls from './components/Urls';
import { selectUrl} from "./redux/reducers/urlSlice"
import { useSelector } from 'react-redux';

function App() {
  const url = useSelector(selectUrl)
  return (
    <div>
      <Header/>
        {url ? <Urls/> : <ShortenUrl/>}
    </div>
    // <Router>
    //   <Header/>
     
    //   <Switch>
      
    //   <Route path="/" exact component={ShortenUrl}/>
    //     <Route path="/shorten/:url" component={urls}/> 
    //   <Route> 404 Not Found </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
