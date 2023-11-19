// routes.tsx
import Fill from "./components/PersonalDetailsForm";
import View from "./components/PersonalDetailsView";

import MenuLayout from "./components/MenuLayout"; // Import the layout component

const routes = [
    { path: "/fill", component: Fill, exact: true, str: "Fill", layout: MenuLayout },
    { path: "/view", component: View, str: "View", layout: MenuLayout },
];

export default routes;
