
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home />}/>
        {/* home page by default is index */}
        <Route path="*" element = {<NotFoundPage />}/>
        {/* anything path not defined shall redirect to notfound page */}
        <Route />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
