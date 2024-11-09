import co1 from "./co1.svelte";
import co2 from "./co2.svelte";
import co3 from "./co3.svelte";
import co4 from "./co4.svelte";
import co5 from "./co5.svelte";

import c1 from "./co1.svelte?raw";
import c2 from "./co2.svelte?raw";
import c3 from "./co3.svelte?raw";
import c4 from "./co4.svelte?raw";
import c5 from "./co5.svelte?raw";

export const allco = [
    {
        id : "Co1",
        comp : co1,
        copy : c1
    },
    {
        id : "Co2",
        comp : co2,
        copy : c2
    },
    {
        id : "Co3",
        comp : co3,
        copy : c3
    },
    {
        id : "Co4",
        comp : co4,
        copy : c4
    },
    {
        id : "Co5",
        comp : co5,
        copy : c5
    }
]