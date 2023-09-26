import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next13 Fullstack Crud App",
  description: "A fullstack basic crud blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto p-4 bg-white">
          <Navbar />
          <div className="mt-8">{children}</div>{" "}
          <div className="absolute bottom-0 max-w-7xl w-full  p-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
