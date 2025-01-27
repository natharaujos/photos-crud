import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AlbumsTable from "./components/AlbumsTable/AlbumsTable";
import UsersTable from "./components/UsersTable/UsersTable";
import PhotosGrid from "./components/PhotosGrid/PhotosGrid";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Welcome to Photo Crud!</h1>} />
            <Route path="/user" element={<UsersTable />} />
            <Route path="/user/:userId/albums" element={<AlbumsTable />} />
            <Route
              path="/user/:userId/albums/:albumId/photos"
              element={<PhotosGrid />}
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
