import Check1 from "./check1.svelte";
import Check2 from "./check2.svelte";
import Check3 from "./check3.svelte";
import Check4 from "./check4.svelte";

import c1 from "./check1.svelte?raw";
import c2 from "./check2.svelte?raw";
import c3 from "./check3.svelte?raw";
import c4 from "./check4.svelte?raw";

export const allChecks = [
    {
        title: "Check 1",
        comp: Check1,
        copy: c1
    },
    {
        title: "Check 2",
        comp: Check2,
        copy: c2
    },
    {
        title: "Check 3",
        comp: Check3,
        copy: c3
    },
    {
        title: "Check 4",
        comp: Check4,
        copy: c4
    }
];