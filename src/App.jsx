import { lazy, Suspense } from "react";

import {
  About,
  Contact,
  Experience,
  Services,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Services />
      <div className="relative z-0">
        <Contact />
        <Footer />
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
