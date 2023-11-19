//src/components/MenuLayout.tsx
import React, { ReactNode } from 'react';
import MenuBar from './MenuBar';

/**
 * Props for the MenuLayout component.
 */
interface MenuLayoutProps {
    /** The content to be displayed within the layout. */
    children: ReactNode;
}

/**
 * A layout component containing a menu bar and the main content area.
 * @component
 */
const MenuLayout: React.FC<MenuLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <MenuBar />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default MenuLayout;
