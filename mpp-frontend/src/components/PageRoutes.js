import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Details from "./Details"

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:carId" element={<Details/>} />
            </Routes>
        </BrowserRouter>
    )
}