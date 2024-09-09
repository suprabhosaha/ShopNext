import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";
import { StateContext } from "@/context/StateContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopNext: World of Gaming",
  description: "Generated by gamers for the gamers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext>
          <Layout>
            <Toaster />
            {children}
          </Layout>
        </StateContext>
      </body>
    </html>

  );
}
