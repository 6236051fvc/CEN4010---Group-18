import { Inter } from "next/font/google";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import './globals.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaFlash",
  description: "Create, Generate, and Grow with InstaFlash",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
  
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}