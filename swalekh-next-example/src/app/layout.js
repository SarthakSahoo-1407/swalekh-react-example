import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src='https://swalekh.reverieinc.com/server/swalekh.js'></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      
        {children}
      </body>
    </html>
  );
}
