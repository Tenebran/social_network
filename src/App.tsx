import './App.scss';
import Header from './modules/components/Header/Header';
import Siderbar from './modules/components/Sidebar/Siderbar';
import ProfileConteiner from './modules/components/Profile/ProfileContainer/ProfileContainer';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import DialogsContainer from './modules/components/Dialogs/DialogsContainer/DialogsContainer';
import UsersConteiner from './modules/components/Users/UsersConteiner/UsersConteiner';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="social__wrapper">
      <Header />
      <div className="content__conteiner content__conteiner_menu">
        <Siderbar />
        <Switch>
          <Route path="/profile" component={() => <ProfileConteiner />}></Route>
          <Route path="/dialogs" component={() => <DialogsContainer />}></Route>
          <Route path="/users" component={() => <UsersConteiner />}></Route>
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
