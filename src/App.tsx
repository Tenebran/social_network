import './App.scss';
import Header from './modules/components/Header/Header';
import Siderbar from './modules/components/Sidebar/Siderbar';
import Profile from './modules/components/Profile/Profile';
import Dialogs from './modules/components/Dialogs/Dialogs';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RootStateType } from './testState/state';

type PropsTYpe = {
  state: RootStateType;
  addPost: (value: string) => void;
};

function App(props: PropsTYpe) {
  return (
    <Router>
      <div className="social__wrapper">
        <Header />
        <div className="content__conteiner content__conteiner_menu">
          <Siderbar />
          <Switch>
            <Route
              path="/profile"
              component={() => <Profile profile={props.state.profile} addPost={props.addPost} />}
            ></Route>
            <Route
              path="/dialogs"
              component={() => <Dialogs dialogs={props.state.dialogs} />}
            ></Route>
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
