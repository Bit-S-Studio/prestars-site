import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main className="mb-auto min-h-screen flex flex-col justify-between">{children}</main>
            <Footer />
        </div>
    );
}