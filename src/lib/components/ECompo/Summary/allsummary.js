import summary1 from "./summary1.svelte";
import summary2 from "./summary2.svelte";
import summary3 from "./summary3.svelte";
import summary4 from "./summary4.svelte";

import s1 from "./summary1.svelte?raw";
import s2 from "./summary2.svelte?raw";
import s3 from "./summary3.svelte?raw";
import s4 from "./summary4.svelte?raw";

export const allsummary = [
    {
        id : "Summary1",
        comp : summary1,
        copy : s1
    },
    {
        id : "Summary2",
        comp : summary2,
        copy : s2
    },
    {
        id : "Summary3",
        comp : summary3,
        copy : s3
    },
    {
        id : "Summary4",
        comp : summary4,
        copy : s4
    }
]