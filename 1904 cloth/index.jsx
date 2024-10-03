import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from"./Layout";
import Home from "./src/Pages/Home"
import About from "./src/Pages/Home"
import Contact from "./src/Pages/Contact"
import Shopnow from "./src/Pages/Shopnow"





export default function App(){
    return(
<BrowserRouter>
<Routes>
<Route>

<Route path="/" element={<Layout/>} />
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contactus" element={<Contact/>}/>
<Route path="/Shopnow" element={<Shopnow/>}/>
         

</Route>


</Routes>


</BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);