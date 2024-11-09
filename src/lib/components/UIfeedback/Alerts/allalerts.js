import Alert1 from "./alert1.svelte";
import Alert2 from "./alert2.svelte";
import Alert3 from "./alert3.svelte";
import Alert4 from "./alert4.svelte";
import Alert5 from "./alert5.svelte";
import Alert6 from "./alert6.svelte";

import a1 from "./alert1.svelte?raw";
import a2 from "./alert2.svelte?raw";
import a3 from "./alert3.svelte?raw";
import a4 from "./alert4.svelte?raw";
import a5 from "./alert5.svelte?raw";
import a6 from "./alert6.svelte?raw";

export const allalerts = [
    {
        id : "Alert1",
        comp : Alert1,
        copy : a1
    },
    {
        id : "Alert2",
        comp : Alert2,
        copy : a2
    },
    {
        id : "Alert3",
        comp : Alert3,
        copy : a3
    },
    {
        id : "Alert4",
        comp : Alert4,
        copy : a4
    },
    {
        id : "Alert5",
        comp : Alert5,
        copy : a5
    },
    {
        id : "Alert6",
        comp : Alert6,
        copy : a6
    }
]