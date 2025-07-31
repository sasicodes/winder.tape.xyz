import "./winder.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Header } from "./layout/header";
import { Sidebar } from "./layout/sidebar";
import { Content } from "./layout/content";
import { ThemeProvider } from "./theme";
import { Toaster } from "./components/toast";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />
      <div className="container mx-auto min-h-screen max-w-6xl overflow-x-hidden md:overflow-x-visible">
        <Header />
        <div className="min-w-[300px] md:grid md:grid-cols-[250px_1fr]">
          <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
);
