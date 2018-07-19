import { MenuItem } from "../fw/services/menu.service";
import { faFlag } from "../../node_modules/@fortawesome/free-solid-svg-icons";

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'faTachometerAlt',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'faFlag',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'faCog',
        route: '/settings',
        submenu: null
    }
]