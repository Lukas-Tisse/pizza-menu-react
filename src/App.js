import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Menu } from "./components/menu";

export function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}