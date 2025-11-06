import { Helmet } from "react-helmet-async";
import { Header } from "./components/header";
import { Frame1 } from "./components/frame1";
import { Frame2 } from "./components/frame2";
import { Frame3 } from "./components/frame3";
import { Frame4 } from "./components/frame4";
import { Frame5 } from "./components/frame5";
import { Frame6 } from "./components/frame6";
import { Frame7 } from "./components/frame7";
import { Frame8 } from "./components/frame8";
import { Footer } from "./components/footer";

export function Home() {
  return (
    <div className="bg-[#F4E2EE]">
      <Helmet title="Início" />
      <div className="relative min-h-screen bg-gradient-to-b from-pink-200 via-purple-300 to-purple-600">
        {/* Header - posicionado acima de tudo */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.png"
            alt="Hero background with women and baby"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content Layer */}
        <div
          className="relative z-10 flex flex-col"
          style={{ minHeight: "calc(100vh)" }}
        >
          {/* div Hero Content (grows to push buttons down) */}
          <Frame1 />
        </div>
        {/* Hero2 Section */}
      </div>
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Footer />
    </div>
  );
}
