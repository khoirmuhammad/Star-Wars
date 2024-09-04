import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PeopleListPage from "./pages/People/PeopleListPage";
import PeopleDetailPage from "./pages/People/PeopleDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Star-Wars" element={<PeopleListPage />} />
          <Route path="/Star-Wars/people/:id" element={<PeopleDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
