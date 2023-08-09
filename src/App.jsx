import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import HomePage from "./pages/HomePage.jsx"
import SignInPage from "./pages/login/SignInPage.jsx"
import SignUpPage from "./pages/login/SignUpPage.jsx"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignInPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/carros" element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
