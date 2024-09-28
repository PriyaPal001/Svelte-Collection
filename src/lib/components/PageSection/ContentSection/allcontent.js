import Con1 from "./con1.svelte";
import Con2 from "./con2.svelte";
import Con3 from "./con3.svelte";
import Con4 from "./con4.svelte";
import Con5 from "./con5.svelte";
import Con6 from "./con6.svelte";
import Con7 from "./con7.svelte";
import Con8 from "./con8.svelte";

import c1 from "./con1.svelte?raw";
import c2 from "./con2.svelte?raw";
import c3 from "./con3.svelte?raw";
import c4 from "./con4.svelte?raw";
import c5 from "./con5.svelte?raw";
import c6 from "./con6.svelte?raw";
import c7 from "./con7.svelte?raw";
import c8 from "./con8.svelte?raw";

export let allContent=[
    {
        id:1,
        comp:Con1,
        copy:c1
        
    },
    {
        id:2,
        comp:Con2,
        copy:c2
    },
    {
        id:3,
        comp:Con3,
        copy:c3
    },
    {
        id:4,
        comp:Con4,
        copy:c4
    },
    {
        id:5,
        comp:Con5,
        copy:c5
    },
    {
        id:6,
        comp:Con6,
        copy:c6
    },
    {
        id:7,
        comp:Con7,
        copy:c7
    },
    {
        id:8,
        comp:Con8,
        copy:c8
    }
]