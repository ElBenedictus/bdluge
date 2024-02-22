import Link from "next/link"
import { gobold } from "@/libs/fonts";
import Footer from "./Footer";

const NavItem = ({ text, link }) => (
    <Link href={link} className={`nav__item ${gobold.className}`}>
        {text.replaceAll(" ", '\u00A0').split("").map((e, i) => <span className="nav__itemChar" style={{ display: "inline-block" }} key={i}>{e}</span>)}
    </Link>
)

export default function Menu({ isOpen }) {
    const navItems = [
        { text: "Le BDE", link: "/l-equipe" },
        { text: "Nos évènements", link: "/events" },
        { text: "Nos partenaires", link: "/partenaires" },
        { text: "Espace admis", link: "/espace-admis" },
        { text: "Cotiser BDE", link: "/cotiser" },
    ]
    return (
        <menu className={`menu ${isOpen ? "menu__isOpen" : ""}`}>
            <nav className="nav">
                {
                    navItems.map(({ text, link }, i) => <NavItem text={text} link={link} key={i} />)
                }
            </nav>
            <Footer />
        </menu>
    )
}