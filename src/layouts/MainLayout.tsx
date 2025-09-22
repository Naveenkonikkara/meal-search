import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout