import "../styles/globals.css";
import { Navbar, Sidebar, Hero, Footer } from "../components";
import styles from '../styles'

function MyApp({ Component, pageProps }) {


  return (
    <div className="bg-gray-800">

      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[100vh] overflow-hidden xl:hover:overflow-auto bg-black">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
