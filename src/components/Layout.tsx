import { Geist, Geist_Mono } from "next/font/google";
import FacebookImg from "./facebookImg"
import PageFooter from "./footer"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Navbar/>
            <SearchBar/>
            <body>
                <main>{children}</main>
            </body>
            <FacebookImg/>
            <PageFooter/>
        </html>
    )
}