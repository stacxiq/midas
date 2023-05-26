import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TwoOne = React.lazy(() => import("pages/TwoOne"));
const OneOne = React.lazy(() => import("pages/OneOne"));
const Two = React.lazy(() => import("pages/Two"));
const One1 = React.lazy(() => import("pages/One1"));
const ClinicsystemOne = React.lazy(() => import("pages/ClinicsystemOne"));
const Clinicsystem = React.lazy(() => import("pages/Clinicsystem"));
const Ecommerceapp = React.lazy(() => import("pages/Ecommerceapp"));
const EcommerceappOne = React.lazy(() => import("pages/EcommerceappOne"));
const Pos = React.lazy(() => import("pages/Pos"));
const PosOne = React.lazy(() => import("pages/PosOne"));
const One = React.lazy(() => import("pages/One"));
const Page = React.lazy(() => import("pages/Page"));
const PageEleven = React.lazy(() => import("pages/PageEleven"));
const PageFifteen = React.lazy(() => import("pages/PageFifteen"));
const PageSeven = React.lazy(() => import("pages/PageSeven"));
const PageSixteen = React.lazy(() => import("pages/PageSixteen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pagesixteen" element={<PageSixteen />} />
          <Route path="/pageseven" element={<PageSeven />} />
          <Route path="/pagefifteen" element={<PageFifteen />} />
          <Route path="/pageeleven" element={<PageEleven />} />
          <Route path="/page" element={<Page />} />
          <Route path="/one" element={<One />} />
          <Route path="/posone" element={<PosOne />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/ecommerceappone" element={<EcommerceappOne />} />
          <Route path="/ecommerceapp" element={<Ecommerceapp />} />
          <Route path="/clinicsystem" element={<Clinicsystem />} />
          <Route path="/clinicsystemone" element={<ClinicsystemOne />} />
          <Route path="/one1" element={<One1 />} />
          <Route path="/two" element={<Two />} />
          <Route path="/oneone" element={<OneOne />} />
          <Route path="/twoone" element={<TwoOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
