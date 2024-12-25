import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Blogs, Login } from "./pages";
import NotFound from "./pages/NotFound";

const App = () => {

  console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
  console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  return (
    <main className='bg-slate-300/20'>
      <Router basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
