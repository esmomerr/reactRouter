import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <div style={{
                display:"flex", 
                gap:"24px",
                }}
                >
                <Link to="/">Anasayfa</Link>
                <Link to="/Projects">Projelerim</Link>
                <Link to="/About">Hakkımda</Link>
                <Link to="/Contact">İletişim</Link>
            </div>
        </>
    )
}