
import "../src/Assets/css/style.css";
import Header from "./companents/Header";
import CategorysPage from "./Pages/CategorysPage";
import Italian from "./Pages/Italian";
import AllRecipes from "./Pages/AllRecipes";
import LasagnaDescribtion from "./Pages/LasagnaDescribtion"
import { Routes, Route} from "react-router-dom";



function App(){
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path= "/" element= {<AllRecipes />} />
                    <Route path= "/lasagna/:id" element= {<LasagnaDescribtion />} />
                    <Route path= "/Category" element= {<CategorysPage />} />
                    <Route path= "/Italian/:id" element= {<Italian />} />
                </Routes>
            </main>
        </div>
    )
}


export default App;
