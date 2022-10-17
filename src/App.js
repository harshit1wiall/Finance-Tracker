import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar';
function App() {

  const { authIsReady,user} = useAuthContext()
  
  return (
    <div className="App">
    {authIsReady && (
  <BrowserRouter>
  <Navbar/>
    <Routes>
<Route exact path='/' element={user?<Home/>:<Navigate to={"/login"} replace/>}/>
<Route  path='/login' element={user?<Navigate to={"/"} replace/>:<Login/>}/>
<Route  path='/signup' element={user?<Navigate to={"/"} replace/>:<Signup/>}/>
<Route path='*' element={user?<Home/>:<Navigate to={"/login"} replace/>}/>
    </Routes>
  </BrowserRouter>
  )}
    </div>
  );
}

export default App;
