import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/Navbar";
import Foot from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { providers } from "./providers";

export const metadata = {
  title: "",
  description: "created by Kishan daaby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <Nav />
        <providers>
          {" "}
          {children}
        </providers>

        <Foot />
      </body>
    </html>
  );
}
