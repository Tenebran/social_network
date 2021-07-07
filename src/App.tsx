import './App.scss';
import Header from './modules/components/Header/Header';
import Siderbar from './modules/components/Sidebar/Siderbar';
import Profile from './modules/components/Profile/Profile';
import Dialogs from './modules/components/Dialogs/Dialogs';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StoreType, addPostAC, addMessageAC } from './store/store';

type PropsTYpe = {
  store: StoreType;
  // dispatch: (action: ReturnType<typeof addPostAC> | ReturnType<typeof addMessageAC>) => void;
};

function App(props: PropsTYpe) {
  console.log(props);
  const state = props.store.getState();
  return (
    <Router>
      <div className="social__wrapper">
        <Header />
        <div className="content__conteiner content__conteiner_menu">
          <Siderbar />
          <Switch>
            <Route
              path="/profile"
              component={() => (
                <Profile
                  profile={state.profile}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              )}
            ></Route>
            <Route
              path="/dialogs"
              component={() => (
                <Dialogs
                  dialogs={state.dialogs}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              )}
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
