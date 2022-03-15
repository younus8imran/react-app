import Pages from "./pages/Pages.jsx";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />        
      </BrowserRouter>
 
      
    </div>
    );
}