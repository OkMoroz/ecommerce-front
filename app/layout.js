"use client";
import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({ subsets: ["latin"] });
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;



export default function RootLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
