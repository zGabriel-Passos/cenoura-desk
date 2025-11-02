import "../globals.css";

interface SidemenuProps {
    onPageChange: (pageName: string) => void;
}

const Sidemenu = ({ onPageChange }: SidemenuProps) => {
    const handleItemClick = (pageName: string) => {
        onPageChange(pageName);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', listStyleType: 'none', padding: 0 }}>
                    <li id="home" onClick={() => handleItemClick('Home')} style={{ cursor: 'pointer' }}>Home</li>
                    <li id="agenda" onClick={() => handleItemClick('Agenda')} style={{ cursor: 'pointer' }}>Agenda</li>
                    <li id="produtos" onClick={() => handleItemClick('Produtos')} style={{ cursor: 'pointer' }}>Produtos</li>
                    <li id="config" onClick={() => handleItemClick('Config')} style={{ cursor: 'pointer' }}>Config</li>
                </ul>
            </div>
        </div >
    )
}

export default Sidemenu 