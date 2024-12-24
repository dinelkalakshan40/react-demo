import {BrowserRouter, Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.tsx";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/contact" element={<ContactPage/>}></Route>

            </Routes>
        </BrowserRouter>

    );
}

export default App;
