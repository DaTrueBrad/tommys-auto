import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Administrator from './components/Administrator';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <main>
        <content> */}
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/admin'>
              <Administrator />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        {/* </content>
      </main> */}
    </div>
  );
}

export default App;
