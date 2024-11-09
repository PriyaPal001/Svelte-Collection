import review1 from "./review1.svelte";
import review2 from "./review2.svelte";
import review3 from "./review3.svelte";
import review4 from "./review4.svelte";

import r1 from "./review1.svelte?raw";
import r2 from "./review2.svelte?raw";
import r3 from "./review3.svelte?raw";
import r4 from "./review4.svelte?raw";

export const allreview = [
    {
        id : "Review1",
        comp : review1,
        copy : r1
    },
    {
        id : "Review2",
        comp : review2,
        copy : r2
    },
    {
        id : "Review3",
        comp : review3,
        copy : r3
    },
    {
        id : "Review4",
        comp : review4,
        copy : r4
    }
]