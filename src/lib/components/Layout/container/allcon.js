import Con1 from "./con1.svelte";
import Con2 from "./con2.svelte";
import Con3 from "./con3.svelte";
import Con4 from "./con4.svelte";
import Con5 from "./con5.svelte";

import c1 from "./con1.svelte?raw";
import c2 from "./con2.svelte?raw";
import c3 from "./con3.svelte?raw";
import c4 from "./con4.svelte?raw";
import c5 from "./con5.svelte?raw";

export const allcon = [
    {
        id : "Con1",
        comp : Con1,
        copy : c1
    },
    {
        id : "Con2",
        comp : Con2,
        copy : c2
    },
    {
        id : "Con3",
        comp : Con3,
        copy : c3
    },
    {
        id : "Con4",
        comp : Con4,
        copy : c4
    },
    {
        id : "Con5",
        comp : Con5,
        copy : c5
    }
]