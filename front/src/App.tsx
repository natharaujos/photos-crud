import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AlbumsTable from "./components/AlbumsTable/AlbumsTable";
import UsersTable from "./components/UsersTable/UsersTable";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/user/:userId/albums" element={<AlbumsTable />} />
            <Route path="/user" element={<UsersTable />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
