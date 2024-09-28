import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playground from "./pages/Playground";
import Auth from "./pages/Auth";
import CodesProvider from "./contexts/CodesContext";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <CodesProvider>
          <Routes>
            <Route path="/" element={<Playground />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/shared/:id" element={<Playground />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CodesProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
