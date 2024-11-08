import Sign1 from "./sign1.svelte";
import Sign2 from "./sign2.svelte";
import Sign3 from "./sign3.svelte";
import Sign4 from "./sign4.svelte";
import Sign5 from "./sign5.svelte";

import s1 from "./sign1.svelte?raw";
import s2 from "./sign2.svelte?raw";
import s3 from "./sign3.svelte?raw";
import s4 from "./sign4.svelte?raw";
import s5 from "./sign5.svelte?raw";

export const allSigns = [
    {
        title: "Sign 1",
        comp: Sign1,
        copy: s1
    },
    {
        title: "Sign 2",
        comp: Sign2,
        copy: s2
    },
    {
        title: "Sign 3",
        comp: Sign3,
        copy: s3
    },
    {
        title: "Sign 4",
        comp: Sign4,
        copy: s4
    },
    {
        title: "Sign 5",
        comp: Sign5,
        copy: s5
    }
];