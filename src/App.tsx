import './App.scss';
import Siderbar from './modules/components/Sidebar/Siderbar';
import ProfileConteiner from './modules/components/Profile/ProfileContainer/ProfileContainer';
import News from './modules/components/News/News';
import Music from './modules/components/Music/Music';
import Settings from './modules/components/Settings/Settings';
import DialogsContainer from './modules/components/Dialogs/DialogsContainer/DialogsContainer';
import UsersConteiner from './modules/components/Users/UsersConteiner/UsersConteiner';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderConteiner from './modules/components/Header/HeaderConteiner/HeaderConteiner';
import Login from './modules/components/Login/Login';
import PageNotFound from './modules/components/PageNotFound/PageNotFound';
import { Component } from 'react';
import { AppStateType } from './redux/store/store';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Loader from './modules/iconComponents/Loader/Loader';

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className="social__wrapper">
        <HeaderConteiner />
        <div className="content__conteiner content__conteiner_menu">
          <Siderbar />
          <Switch>
            <Route path="/profile/:userId?" component={() => <ProfileConteiner />}></Route>
            <Route path="/dialogs" component={() => <DialogsContainer />}></Route>
            <Route path="/users" component={() => <UsersConteiner />}></Route>
            <Route path="/news" component={() => <News />}></Route>
            <Route path="/music" component={() => <Music />}></Route>
            <Route path="/settings" component={() => <Settings />}></Route>
            <Route path="/login" component={() => <Login />}></Route>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            <Route path="/page_not_found" exact component={() => <PageNotFound />}></Route>
            <Route path="*">
              <Redirect to="/page_not_found" />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

type PropsType = {
  initializeApp: () => void;
  initialized: boolean;
};

type MapStateToPropsType = {
  initialized: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
