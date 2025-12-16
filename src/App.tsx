import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import WorkspacePage from "./pages/WorkspacePage";
import Entrepreneurship from "./pages/EntrepreneurshipPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./compnents/layout/Navbar";
import Footer from "./compnents/layout/Footer";
import BackgroundOrbits from "./compnents/layout/BackgroundOrbits";
import GlobalVectorsLayer from "./styles/GlobalVectorLayer";
import StylizedGlobe from "./pages/StylizedGlobe";



function SiteLayout() {
  return (
    <div className="app-shell min-h-screen flex flex-col text-core-textDark dark:text-core-textLight">
      <BackgroundOrbits />
      <Navbar />
      {/* <GlobalVectorsLayer /> */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* 1) Globe is the landing page */}
      <Route path="/" element={<StylizedGlobe />} />

      {/* 2) Your website lives under /home */}
      <Route path="/home" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="entrepreneurship" element={<Entrepreneurship />} />
        <Route path="workspace" element={<WorkspacePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* 3) (Optional) branch pages used by the globe routes like /branch/aleppo */}
      {/* <Route path="/branch/:id" element={<BranchPlaceholder />} /> */}

      {/* 4) Nice-to-have redirects (optional) */}
      <Route path="/product" element={<Navigate to="/home/product" replace />} />
      <Route path="/entrepreneurship" element={<Navigate to="/home/entrepreneurship" replace />} />
      <Route path="/workspace" element={<Navigate to="/home/workspace" replace />} />
      <Route path="/about" element={<Navigate to="/home/about" replace />} />
      <Route path="/contact" element={<Navigate to="/home/contact" replace />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}