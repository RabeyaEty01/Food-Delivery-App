import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <main className="mt-24 p-8 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer />}></Route>
              <Route path="/createItem" element={<CreateContainer />}></Route>
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
