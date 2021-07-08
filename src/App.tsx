import './App.scss';
import Header from './modules/components/Header/Header';
import Siderbar from './modules/components/Sidebar/Siderbar';
import Profile from './modules/components/Profile/Profile';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import DialogsContainer from './modules/components/Dialogs/DialogsContainer/DialogsContainer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { addPostAC, addMessageAC } from './store/store';
import { StoreType } from './redux/store/store';

type PropsTYpe = {
  store: StoreType;
  dispatch: (action: ReturnType<typeof addPostAC> | ReturnType<typeof addMessageAC>) => void;
};

function App(props: PropsTYpe) {
  return (
    <Router>
      <div className="social__wrapper">
        <Header />
        <div className="content__conteiner content__conteiner_menu">
          <Siderbar />
          <Switch>
            <Route path="/profile" component={() => <Profile store={props.store} />}></Route>
            <Route
              path="/dialogs"
              component={() => <DialogsContainer store={props.store} />}
            ></Route>
            <Route path="/news" component={() => <News />}></Route>
            <Route path="/music" component={() => <Music />}></Route>
            <Route path="/settings" component={() => <Settings />}></Route>
            <Route path="*" exact>
              <Redirect to="/profile" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
