import Footer from "@/Components/Footer";
import "./globals.css";
import Navbar from "@/Components/Navbar";


export const metadata = {
  title: "Sanicle",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  
        {children}

      </body>
    </html>
  );
}
