import Stack1 from "./stack1.svelte";
import Stack2 from "./stack2.svelte";
import Stack3 from "./stack3.svelte";
import Stack4 from "./stack4.svelte";
import Stack5 from "./stack5.svelte";
import Stack6 from "./stack6.svelte";
import Stack7 from "./stack7.svelte";
import Stack8 from "./stack8.svelte";
import Stack9 from "./stack9.svelte";

import s1 from "./stack1.svelte?raw";
import s2 from "./stack2.svelte?raw";
import s3 from "./stack3.svelte?raw";
import s4 from "./stack4.svelte?raw";
import s5 from "./stack5.svelte?raw";
import s6 from "./stack6.svelte?raw";
import s7 from "./stack7.svelte?raw";
import s8 from "./stack8.svelte?raw";
import s9 from "./stack9.svelte?raw";

export const allStacks = [
    {
        title: "Stack 1",
        comp: Stack1,
        copy: s1
    },
    {
        title: "Stack 2",
        comp: Stack2,
        copy: s2
    },
    {
        title: "Stack 3",
        comp: Stack3,
        copy: s3
    },
    {
        title: "Stack 4",
        comp: Stack4,
        copy: s4
    },
    {
        title: "Stack 5",
        comp: Stack5,
        copy: s5
    },
    {
        title: "Stack 6",
        comp: Stack6,
        copy: s6
    },
    {
        title: "Stack 7",
        comp: Stack7,
        copy: s7
    },
    {
        title: "Stack 8",
        comp: Stack8,
        copy: s8
    },
    {
        title: "Stack 9",
        comp: Stack9,
        copy: s9
    }
];