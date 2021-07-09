import './App.scss';
import Header from './modules/components/Header/Header';
import Siderbar from './modules/components/Sidebar/Siderbar';
import Profile from './modules/components/Profile/Profile';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import DialogsContainer from './modules/components/Dialogs/DialogsContainer/DialogsContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="social__wrapper">
      <Header />
      <div className="content__conteiner content__conteiner_menu">
        <Siderbar />
        <Switch>
          <Route path="/profile" component={() => <Profile />}></Route>
          <Route path="/dialogs" component={() => <DialogsContainer />}></Route>
          <Route path="/news" component={() => <News />}></Route>
          <Route path="/music" component={() => <Music />}></Route>
          <Route path="/settings" component={() => <Settings />}></Route>
          <Route path="*" exact>
            <Redirect to="/profile" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
