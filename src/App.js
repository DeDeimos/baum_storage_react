import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { AppRouter } from './UI';
import { AuthContext } from './context';
import { useState } from 'react';
import { Navbar } from './components';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
    value={{
      isAuth,
      setIsAuth
    }}
    >
      <BrowserRouter>
      {isAuth && <Navbar/>}
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
