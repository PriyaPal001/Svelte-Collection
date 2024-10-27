import Side1 from "./side1.svelte";
import Side2 from "./side2.svelte";
import Side3 from "./side3.svelte";
import Side4 from "./side4.svelte";
import Side5 from "./side5.svelte";
import Side6 from "./side6.svelte";
import Side7 from "./side7.svelte";
import Side8 from "./side8.svelte";

import s1 from "./side1.svelte?raw";
import s2 from "./side2.svelte?raw";
import s3 from "./side3.svelte?raw";
import s4 from "./side4.svelte?raw";
import s5 from "./side5.svelte?raw";
import s6 from "./side6.svelte?raw";
import s7 from "./side7.svelte?raw";
import s8 from "./side8.svelte?raw";

export const allSides = [
    {
        title: "Side 1",
        comp: Side1,
        copy: s1
    },
    {
        title: "Side 2",
        comp: Side2,
        copy: s2
    },
    {
        title: "Side 3",
        comp: Side3,
        copy: s3
    },
    {
        title: "Side 4",
        comp: Side4,
        copy: s4
    },
    {
        title: "Side 5",
        comp: Side5,
        copy: s5
    },
    {
        title: "Side 6",
        comp: Side6,
        copy: s6
    },
    {
        title: "Side 7",
        comp: Side7,
        copy: s7
    },
    {
        title: "Side 8",
        comp: Side8,
        copy: s8
    }
];