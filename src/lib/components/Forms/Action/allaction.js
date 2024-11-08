import Action1 from "./action1.svelte";
import Action2 from "./action2.svelte";
import Action3 from "./action3.svelte";
import Action4 from "./action4.svelte";
import Action5 from "./action5.svelte";
import Action6 from "./action6.svelte";
import Action7 from "./action7.svelte";
import Action8 from "./action8.svelte";

import a1 from "./action1.svelte?raw";
import a2 from "./action2.svelte?raw";
import a3 from "./action3.svelte?raw";
import a4 from "./action4.svelte?raw";
import a5 from "./action5.svelte?raw";
import a6 from "./action6.svelte?raw";
import a7 from "./action7.svelte?raw";
import a8 from "./action8.svelte?raw";

export const allActions = [
    {
        title: "Action 1",
        comp: Action1,
        copy: a1
    },
    {
        title: "Action 2",
        comp: Action2,
        copy: a2
    },
    {
        title: "Action 3",
        comp: Action3,
        copy: a3
    },
    {
        title: "Action 4",
        comp: Action4,
        copy: a4
    },
    {
        title: "Action 5",
        comp: Action5,
        copy: a5
    },
    {
        title: "Action 6",
        comp: Action6,
        copy: a6
    },
    {
        title: "Action 7",
        comp: Action7,
        copy: a7
    },
    {
        title: "Action 8",
        comp: Action8,
        copy: a8
    }
];
