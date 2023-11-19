//src/components/MenuBar.tsx
import React from 'react';
import routes from "../router";
import { Link } from "react-router-dom";

/**
 * Component rendering a menu bar with buttons for different routes.
 * @component
 */
const MenuBar = () => {
    /**
     * Renders the menu buttons based on the routes configuration.
     * @returns {JSX.Element} Rendered menu buttons.
     */
    const renderMenuButtons = () => {
        return (
            <div>
                {routes.map((route, index) => (
                    <Link key={index} to={route.path}>
                        <button style={{ margin: '5px', padding: '5px 10px' }}>
                            {route.str}
                        </button>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {renderMenuButtons()}
            </div>
        </div>
    );
};

export default MenuBar;
