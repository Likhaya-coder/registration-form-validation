import {Fragment, useState} from 'react';
import UserInput from './components/User/UserInput';
import ListView from './components/UI/ListView';

function App() {
  const [userData, setUserData] = useState([]);

  const userInputHandler = userInput => {
    setUserData(prevState => {
      return [...prevState, userInput];
    });
  }

  return (
    <Fragment>
      <UserInput onGetData={userInputHandler}/>
      <ListView userData={userData}/>
    </Fragment>
  );
}

export default App;
