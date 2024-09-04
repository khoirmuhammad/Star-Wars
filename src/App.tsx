import "./App.css";
import { Route, HashRouter, Routes } from "react-router-dom";
import PeopleListPage from "./pages/People/PeopleListPage";
import PeopleDetailPage from "./pages/People/PeopleDetailPage";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/Star-Wars" element={<PeopleListPage />} />
          <Route path="/Star-Wars/people/:id" element={<PeopleDetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
