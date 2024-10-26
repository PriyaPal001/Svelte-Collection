import Load1 from "./Load1.svelte";
import Load2 from "./Load2.svelte";
import Load3 from "./Load3.svelte";
import Load4 from "./Load4.svelte";
import Load5 from "./Load5.svelte";
import Load6 from "./Load6.svelte";
import Load7 from "./Load7.svelte";

import l1 from "./Load1.svelte?raw";
import l2 from "./Load2.svelte?raw";
import l3 from "./Load3.svelte?raw";
import l4 from "./Load4.svelte?raw";
import l5 from "./Load5.svelte?raw";
import l6 from "./Load6.svelte?raw";
import l7 from "./Load7.svelte?raw";

export const allLoad = [
    {
        id: "Loading 1",
        comp: Load1,
        copy: l1,
    },
    {
        id: "Loading 2",
        comp: Load2,
        copy: l2,
    },
    {
        id: "Loading 3",
        comp: Load3,
        copy: l3,
    },
    {
        id: "Loading 4",
        comp: Load4,
        copy: l4,
    },
    {
        id: "Loading 5",
        comp: Load5,
        copy: l5,
    },
    {
        id: "Loading 6",
        comp: Load6,
        copy: l6,
    },
    {
        id: "Loading 7",
        comp: Load7,
        copy: l7,
    },
];