import Layout1 from "./layout1.svelte";
import Layout2 from "./layout2.svelte";
import Layout3 from "./layout3.svelte";
import Layout4 from "./layout4.svelte";
import Layout5 from "./layout5.svelte";
import Layout6 from "./layout6.svelte";

import l1 from "./layout1.svelte?raw";
import l2 from "./layout2.svelte?raw";
import l3 from "./layout3.svelte?raw";
import l4 from "./layout4.svelte?raw";
import l5 from "./layout5.svelte?raw";
import l6 from "./layout6.svelte?raw";

export const allLayouts = [
    {
        title: "Layout 1",
        comp: Layout1,
        copy: l1
    },
    {
        title: "Layout 2",
        comp: Layout2,
        copy: l2
    },
    {
        title: "Layout 3",
        comp: Layout3,
        copy: l3
    },
    {
        title: "Layout 4",
        comp: Layout4,
        copy: l4
    },
    {
        title: "Layout 5",
        comp: Layout5,
        copy: l5
    },
    {
        title: "Layout 6",
        comp: Layout6,
        copy: l6
    }
];