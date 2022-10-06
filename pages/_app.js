import "../styles/globals.css";
import { Navbar, Sidebar2, Hero, Footer } from "../components";
import { getPosts } from "../services";
import styles from '../styles'


function MyApp({ Component, pageProps }) {


  return (
    <div className="bg-gray-800">
      <div className="block sm:hidden">
      <Navbar />
      </div>
    
      <div className="flex">
        <div className="bg-gray-900 hidden sm:block ">
          <Sidebar2 />
         
        </div>
        <div className="mt-4 overflow-auto h-screen mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    
    </div>
  );
}

export default MyApp;

