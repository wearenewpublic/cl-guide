import { BrowserScreen } from "./browser";
import { SidebarScreen } from "./sidebar";
import { StepsScreen, StepsTitle } from "./steps";

export const screens = {
    browser: {
        name: 'browser',
        component: BrowserScreen,
    },
    sidebar: {
        name: 'sidebar',
        component: SidebarScreen,
    },
    steps: {
        name: 'steps',
        title: StepsTitle,
        component: StepsScreen,
    }
}

