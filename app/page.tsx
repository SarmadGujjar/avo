import About from "./components/About";
import Work from "./components/Work";
import Client from "./components/Client";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    <body className="bg-white">
      <Main />
      <About />
      <Work />
      <Client />
      <Blog />
      <Footer />
    </body>
  );
}   

