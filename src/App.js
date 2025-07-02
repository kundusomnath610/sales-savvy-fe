import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './Pages/Welcome' 
import Signin from './Pages/Signin'; 
import Signup from './Pages/Signup'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Welcome />} />
            <Route path='/sign_up_page' element = {<Signup />} />
            <Route path='/sign_in_page' element = {<Signin />} />
            
        </Routes>
    </BrowserRouter>
  );
}

export default App;