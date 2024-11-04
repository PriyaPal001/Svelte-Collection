import Stats1 from "./stats1.svelte";
import Stats2 from "./stats2.svelte";
import Stats3 from "./stats3.svelte";
import Stats4 from "./stats4.svelte";
import Stats5 from "./stats5.svelte";

import stats1 from "./stats1.svelte?raw";
import stats2 from "./stats2.svelte?raw";
import stats3 from "./stats3.svelte?raw";
import stats4 from "./stats4.svelte?raw";
import stats5 from "./stats5.svelte?raw";

export const allstats = [
    {
        title: "Stats 1",
        comp: Stats1,
        copy: stats1
    },
    {
        title: "Stats 2",
        comp: Stats2,
        copy: stats2
    },
    {
        title: "Stats 3",
        comp: Stats3,
        copy: stats3
    },
    {
        title: "Stats 4",
        comp: Stats4,
        copy: stats4
    },
    {
        title: "Stats 5",
        comp: Stats5,
        copy: stats5
    }
];