import Grid1 from "./grid1.svelte";
import Grid2 from "./grid2.svelte";
import Grid3 from "./grid3.svelte";
import Grid4 from "./grid4.svelte";
import Grid5 from "./grid5.svelte";
import Grid6 from "./grid6.svelte";
import Grid7 from "./grid7.svelte";

import g1 from "./grid1.svelte?raw";
import g2 from "./grid2.svelte?raw";
import g3 from "./grid3.svelte?raw";
import g4 from "./grid4.svelte?raw";
import g5 from "./grid5.svelte?raw";
import g6 from "./grid6.svelte?raw";
import g7 from "./grid7.svelte?raw";

export const allGrids = [
    {
        title: "Grid 1",
        comp: Grid1,
        copy: g1
    },
    {
        title: "Grid 2",
        comp: Grid2,
        copy: g2
    },
    {
        title: "Grid 3",
        comp: Grid3,
        copy: g3
    },
    {
        title: "Grid 4",
        comp: Grid4,
        copy: g4
    },
    {
        title: "Grid 5",
        comp: Grid5,
        copy: g5
    },
    {
        title: "Grid 6",
        comp: Grid6,
        copy: g6
    },
    {
        title: "Grid 7",
        comp: Grid7,
        copy: g7
    }
];