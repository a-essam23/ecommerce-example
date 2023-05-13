import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import AdBanner from "@components/ad-banner";
import { useTheme } from "@context/themeprovider";
import { useGenre } from "@context/genreprovider";
import { GenreManager, ThemeManager } from "@components/manager";
interface Props {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const Layout: React.FC<Props> = ({ title = "", children, className = "" }) => {
    const { theme } = useTheme();
    const { genre } = useGenre();
    const baseTitle =
        genre.charAt(0).toUpperCase() + genre.slice(1) + " Ecommerce";
    return (
        <div
            id="_layout"
            className={`min-h-screen bg-neutral text-primary scroll-smooth ${theme}-theme`}
        >
            <AdBanner />
            <ThemeManager />
            <GenreManager />
            <Helmet>
                <title>{title ? `${title} | ${baseTitle}` : baseTitle}</title>
            </Helmet>
            <Navbar />
            <main className={`min-h-screen overflow-clip ${className}`}>
                {children}
            </main>
            <footer className="bg-primary text-neutral px-8 flex items-center justify-end gap-4 relative">
                <span>Privacy policty</span>
                <span>Contact us</span>
            </footer>
        </div>
    );
};

export default Layout;
