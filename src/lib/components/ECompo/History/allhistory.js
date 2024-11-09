import history1 from "./history1.svelte";
import history2 from "./history2.svelte";
import history3 from "./history3.svelte";
import history4 from "./history4.svelte";

import h1 from "./history1.svelte?raw";
import h2 from "./history2.svelte?raw";
import h3 from "./history3.svelte?raw";
import h4 from "./history4.svelte?raw";

export const allhistory = [
    {
        id : "History1",
        comp : history1,
        copy : h1
    },
    {
        id : "History2",
        comp : history2,
        copy : h2
    },
    {
        id : "History3",
        comp : history3,
        copy : h3
    },
    {
        id : "History4",
        comp : history4,
        copy : h4
    }
]