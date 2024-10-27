import Mc1 from "./mc1.svelte";
import Mc2 from "./mc2.svelte";
import Mc3 from "./mc3.svelte";
import Mc4 from "./mc4.svelte";
import Mc5 from "./mc5.svelte";
import Mc6 from "./mc6.svelte";
import Mc7 from "./mc7.svelte";
import Mc8 from "./mc8.svelte";

import s1 from "./mc1.svelte?raw";
import s2 from "./mc2.svelte?raw";
import s3 from "./mc3.svelte?raw";
import s4 from "./mc4.svelte?raw";
import s5 from "./mc5.svelte?raw";
import s6 from "./mc6.svelte?raw";
import s7 from "./mc7.svelte?raw";
import s8 from "./mc8.svelte?raw";

export const allMcs = [
    {
        title: "MultiCol 1",
        comp: Mc1,
        copy: s1
    },
    {
        title: "MultiCol 2",
        comp: Mc2,
        copy: s2
    },
    {
        title: "MultiCol 3",
        comp: Mc3,
        copy: s3
    },
    {
        title: "MultiCol 4",
        comp: Mc4,
        copy: s4
    },
    {
        title: "MultiCol 5",
        comp: Mc5,
        copy: s5
    },
    {
        title: "MultiCol 6",
        comp: Mc6,
        copy: s6
    },
    {
        title: "MultiCol 7",
        comp: Mc7,
        copy: s7
    },
    {
        title: "MultiCol 8",
        comp: Mc8,
        copy: s8
    }
];