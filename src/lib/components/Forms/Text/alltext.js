import Text1 from "./text1.svelte";
import Text2 from "./text2.svelte";
import Text3 from "./text3.svelte";
import Text4 from "./text4.svelte";
import Text5 from "./text5.svelte";

import t1 from "./text1.svelte?raw";
import t2 from "./text2.svelte?raw";
import t3 from "./text3.svelte?raw";
import t4 from "./text4.svelte?raw";
import t5 from "./text5.svelte?raw";

export const allTexts = [
    {
        title: "Text 1",
        comp: Text1,
        copy: t1
    },
    {
        title: "Text 2",
        comp: Text2,
        copy: t2
    },
    {
        title: "Text 3",
        comp: Text3,
        copy: t3
    },
    {
        title: "Text 4",
        comp: Text4,
        copy: t4
    },
    {
        title: "Text 5",
        comp: Text5,
        copy: t5
    }
];