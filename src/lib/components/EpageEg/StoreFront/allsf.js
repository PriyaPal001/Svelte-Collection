import sf1 from "./sf1.svelte";
import sf2 from "./sf2.svelte";
import sf3 from "./sf3.svelte";
import sf4 from "./sf4.svelte";

import s1 from "./sf1.svelte?raw";
import s2 from "./sf2.svelte?raw";
import s3 from "./sf3.svelte?raw";
import s4 from "./sf4.svelte?raw";

export const allsf = [
    {
        id : "Sf1",
        comp : sf1,
        copy : s1
    },
    {
        id : "Sf2",
        comp : sf2,
        copy : s2
    },
    {
        id : "Sf3",
        comp : sf3,
        copy : s3
    },
    {
        id : "Sf4",
        comp : sf4,
        copy : s4
    }
]