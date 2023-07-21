import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPageForAdmin from "./pages/RegisterPageForAdmin";
import RegisterPageForUser from "./pages/RegisterPageForUser";
import Error from "./pages/Error";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPageForAdmin />} />
        <Route exact path="/register" element={<RegisterPageForUser />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/create-blog" element={<CreateBlog />} />  
        <Route exact path="/blog/:blogId" element={<BlogPage/>} />  
        <Route exact path="/*" element={<Error/>} />       
        <Route exact path="/blog/*" element={<Error/>} />        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
