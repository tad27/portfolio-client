import { useEffect } from "react";

import "./App.css";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import { useProject } from "./contexts/ProjectContext";
import Home from "./pages/Home";

function App() {
  const { isLoading } = useProject();

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
