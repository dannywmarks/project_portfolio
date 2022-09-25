import "../styles/globals.css";
import { Navbar, Sidebar, Hero, Footer } from "../components";

import styles from '../styles'

function MyApp({ Component, pageProps }) {


  return (
    <div className="bg-gray-800">

      <Navbar />
      <div className="flex ">
        <div className="xs:hidden sm:hidden md:block h-[100vh] overflow-hidden xl:hover:overflow-auto bg-black">
          <Sidebar />
        </div>
        <div className="mt-4 gap-10 overflow-auto h-[100vh] flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    
    </div>
  );
}

export default MyApp;

