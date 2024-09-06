import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PeopleListPage from "./pages/People/PeopleListPage";
import PeopleDetailPage from "./pages/People/PeopleDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter basename="Star-Wars">
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeopleListPage />} />
          <Route path="/people/:id" element={<PeopleDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
