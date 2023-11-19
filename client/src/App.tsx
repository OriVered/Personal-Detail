//App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from "./router";
/**
 * Root component handling application routing.
 * @component
 */
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.layout><route.component /></route.layout>}
                    />
                ))}
                <Route path="*" element={<Navigate to="/Fill" />} /> {/* Wrong path navigate to Fill form */}
            </Routes>
        </Router>
    );
};

export default App;
