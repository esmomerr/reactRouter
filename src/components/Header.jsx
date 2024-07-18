import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <Link to="/">Anasayfa</Link>
            <Link to="/Projects">Projelerim</Link>
            <Link to="/About">Hakkımda</Link>
            <Link to="/Contact">İletişim</Link>
        </>
    )
}