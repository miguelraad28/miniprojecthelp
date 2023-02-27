import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbmDetail from "./components/AbmDetail";
import AbmListContainer from "./components/AbmListContainer";
import "./style.css"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AbmListContainer/>}/>
        <Route path="/:cid" element={<AbmDetail/>}/>

        {/* <Route path="/createClient" element={<AbmCreateClient/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
