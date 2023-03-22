import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact} from "./pages/Contact";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const  AppContext = createContext();
function App() {
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
    }
  }});
  // const [username, setUsername] = useState("Uchenna");
  return(
    <div className="App">
      <QueryClientProvider client={client}>
          <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h2>Page Not found</h2>}/>
            
          </Routes>
          </Router>
       </QueryClientProvider>
    </div>
  )
};

export default App;