import './App.scss';
import Dialogs from './modules/components/Dialogs/Dialogs';
import Header from './modules/components/Header/Header';
import Profile from './modules/components/Profile/Profile';
import Siderbar from './modules/components/Sidebar/Siderbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';

function App({ state }) {
  return (
    <Router>
      <div className="social__wrapper">
        <Header />
        <div className="content__conteiner content__conteiner_menu">
          <Siderbar />
          <Switch>
            <Route path="/profile" component={() => <Profile profile={state.profile} />}></Route>
            <Route path="/dialogs" component={() => <Dialogs dialogs={state.dialogs} />}></Route>
            <Route path="/news" component={() => <News />}></Route>
            <Route path="/music" component={() => <Music />}></Route>
            <Route path="/settings" component={() => <Settings />}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
