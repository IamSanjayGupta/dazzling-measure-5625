import { useState } from "react";
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom";
import "./hamburger.css";
const Hamburger = () => {
    const [active, setActive] = useState(false);

    return (
        <div>
            {active ? (
                <div className="hamburger-modal">
                    <div className="ham-content">
                        <div>
                            <div><Link to="/news">News</Link></div>
                            <div><Link to="/productivity">Productivity</Link></div>
                            <div><Link to="/usecases">Use Cases</Link></div>
                            <div to="/about"><Link>About</Link></div>
                            <div><Link to="/guestpost">Guest Post</Link></div>
                        </div>
                        <div>
                            <button><Link to="/search"><BiSearch size={15} />Search</Link></button>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="ham-cross" onClick={() => setActive(false)}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className="hamburger" onClick={() => setActive(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default Hamburger;
