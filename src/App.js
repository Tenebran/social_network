import './App.scss';
import Header from './modules/components/Header/Header';
import Profile from './modules/components/Profile/Profile';
import Siderbar from './modules/components/Sidebar/Siderbar';

function App() {
  return (
    <div className="social__wrapper">
      <Header />
      <div className="content__conteiner content__conteiner_menu">
        <Siderbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
