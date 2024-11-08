import Toggle1 from "./toggle1.svelte";
import Toggle2 from "./toggle2.svelte";
import Toggle3 from "./toggle3.svelte";
import Toggle4 from "./toggle4.svelte";
import Toggle5 from "./toggle5.svelte";


import t1 from "./toggle1.svelte?raw";
import t2 from "./toggle2.svelte?raw";
import t3 from "./toggle3.svelte?raw";
import t4 from "./toggle4.svelte?raw";
import t5 from "./toggle5.svelte?raw";

export const allToggles = [
    {
        title: "Toggle 1",
        comp: Toggle1,
        copy: t1
    },
    {
        title: "Toggle 2",
        comp: Toggle2,
        copy: t2
    },
    {
        title: "Toggle 3",
        comp: Toggle3,
        copy: t3
    },
    {
        title: "Toggle 4",
        comp: Toggle4,
        copy: t4
    },
    {
        title: "Toggle 5",
        comp: Toggle5,
        copy: t5
    }
];