import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<MainContainer />}></Route>
          <Route path="/createItem" element={<CreateContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
