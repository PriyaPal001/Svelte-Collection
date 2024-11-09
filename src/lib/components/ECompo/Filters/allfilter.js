import filter1 from "./filter1.svelte";
import filter2 from "./filter2.svelte";
import filter3 from "./filter3.svelte";
import filter4 from "./filter4.svelte";
import filter5 from "./filter5.svelte";

import f1 from "./filter1.svelte?raw";
import f2 from "./filter2.svelte?raw";
import f3 from "./filter3.svelte?raw";
import f4 from "./filter4.svelte?raw";
import f5 from "./filter5.svelte?raw";

export const allfilter = [
    {
        id : "Filter1",
        comp : filter1,
        copy : f1
    },
    {
        id : "Filter2",
        comp : filter2,
        copy : f2
    },
    {
        id : "Filter3",
        comp : filter3,
        copy : f3
    },
    {
        id : "Filter4",
        comp : filter4,
        copy : f4
    },
    {
        id : "Filter5",
        comp : filter5,
        copy : f5
    }
]