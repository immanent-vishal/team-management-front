import logo from './logo.svg';
import './App.css';
import Root from './main/shared/Root/Root';
import { UserProvider } from './context/UserContext';

function App() {
  
  return (
 <UserProvider>
    <Root/>
 </UserProvider>
  );
}


export default App;
