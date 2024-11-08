import Combo1 from "./combo1.svelte";
import Combo2 from "./combo2.svelte";
import Combo3 from "./combo3.svelte";
import Combo4 from "./combo4.svelte";
import Combo5 from "./combo5.svelte";

import c1 from "./combo1.svelte?raw";
import c2 from "./combo2.svelte?raw";
import c3 from "./combo3.svelte?raw";
import c4 from "./combo4.svelte?raw";
import c5 from "./combo5.svelte?raw";

export const allCombos = [
    {
        title: "Combo 1",
        comp: Combo1,
        copy: c1
    },
    {
        title: "Combo 2",
        comp: Combo2,
        copy: c2
    },
    {
        title: "Combo 3",
        comp: Combo3,
        copy: c3
    },
    {
        title: "Combo 4",
        comp: Combo4,
        copy: c4
    },
    {
        title: "Combo 5",
        comp: Combo5,
        copy: c5
    }
];