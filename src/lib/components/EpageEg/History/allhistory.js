import History1 from "./history1.svelte";
import History2 from "./history2.svelte";
import History3 from "./history3.svelte";
import History4 from "./history4.svelte";
import History5 from "./history5.svelte";

import h1 from "./history1.svelte?raw";
import h2 from "./history2.svelte?raw";
import h3 from "./history3.svelte?raw";
import h4 from "./history4.svelte?raw";
import h5 from "./history5.svelte?raw";

export const allhistory = [
    {
        id : "History1",
        comp : History1,
        copy : h1
    },
    {
        id : "History2",
        comp : History2,
        copy : h2
    },
    {
        id : "History3",
        comp : History3,
        copy : h3
    },
    {
        id : "History4",
        comp : History4,
        copy : h4
    },
    {
        id : "History5",
        comp : History5,
        copy : h5
    }
]