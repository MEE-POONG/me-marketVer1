import FacebookImg from "./facebookImg"
import PageFooter from "./footer"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

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