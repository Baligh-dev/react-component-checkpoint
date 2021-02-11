import logo from "./logo.svg";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div className="about">
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
