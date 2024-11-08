import Smenu1 from "./smenu1.svelte";
import Smenu2 from "./smenu2.svelte";
import Smenu3 from "./smenu3.svelte";
import Smenu4 from "./smenu4.svelte";
import Smenu5 from "./smenu5.svelte";
import Smenu6 from "./smenu6.svelte";

import s1 from "./smenu1.svelte?raw";
import s2 from "./smenu2.svelte?raw";
import s3 from "./smenu3.svelte?raw";
import s4 from "./smenu4.svelte?raw";
import s5 from "./smenu5.svelte?raw";
import s6 from "./smenu6.svelte?raw";

export const allMenus = [
    {
        title: "Menu 1",
        comp: Smenu1,
        copy: s1
    },
    {
        title: "Menu 2",
        comp: Smenu2,
        copy: s2
    },
    {
        title: "Menu 3",
        comp: Smenu3,
        copy: s3
    },
    {
        title: "Menu 4",
        comp: Smenu4,
        copy: s4
    },
    {
        title: "Menu 5",
        comp: Smenu5,
        copy: s5
    },
    {
        title: "Menu 6",
        comp: Smenu6,
        copy: s6
    }
];