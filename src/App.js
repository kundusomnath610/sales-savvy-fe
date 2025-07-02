import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Signin from './Pages/Signin'; 
import Signup from './Pages/Signup';
import Admin from './Pages/Admin';
import Customer from './Pages/Customer';
import Updateproduct from './Pages/Updateproduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/sign_up_page' element={<Signup />} />
        <Route path='/sign_in_page' element={<Signin />} />
        <Route path='/admin_page' element={<Admin />} />
        <Route path='/customer_page' element={<Customer />} />
        <Route path='/update_prod_page' element={<Updateproduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
