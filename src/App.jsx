import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import CarSale from "./pages/CarSalePage.jsx"
import CarsPage from "./pages/CarsPage.jsx"
import EditSale from "./pages/EditPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import SignInPage from "./pages/login/SignInPage.jsx"
import SignUpPage from "./pages/login/SignUpPage.jsx"
import Sale from "./pages/SalePage.jsx"
import UserPage from "./pages/UserPage.jsx"

function App() {
  const [cars, setCars] = useState([]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setCars={setCars}/>}/>

          <Route path="/login" element={<SignInPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          
          <Route path="/carros" element={<CarsPage cars={cars} setCars={setCars}/>}/>
          <Route path="/carros/:id" element={<CarSale/>}/>
          <Route path="/carros/categoria/:filtro" element={<CarsPage cars={cars} setCars={setCars}/>}/>
          
          <Route path="/anuncio" element={<Sale/>}/>

          <Route path="/usuario/:info" element={<UserPage/>}/>
          <Route path="/editar/:id" element={<EditSale/>}/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
