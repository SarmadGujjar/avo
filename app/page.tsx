import Image from "next/image";
import About from "./components/About";
import Work from "./components/Work";
import Client from "./components/Client";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Counter from "./components/AutoCounter";

export default function Home() {
  return (
    <body className="bg-white">
      <Main />
      {/* <Counter /> */}
      <About />
      <Work />
      <Client />
      <Blog />
      <Footer />
    </body>
  );
}   

