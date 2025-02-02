import { ABeeZee } from "next/font/google";
import "./globals.css";
import { PageContextProvider } from "./context/pageContext";

const abeezee = ABeeZee({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Dominic Santini | Portfolio",
  description: "Portfolio of the work done by Dominic Santini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={abeezee.className}>
      <meta name="viewport" content="minimum-scale=1"/>
      <PageContextProvider>  
        <body>{children}</body>
      </PageContextProvider>
    </html>
  );
}
