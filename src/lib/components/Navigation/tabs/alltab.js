import Tab1 from "./tab1.svelte";
import Tab2 from "./tab2.svelte";
import Tab3 from "./tab3.svelte";
import Tab4 from "./tab4.svelte";
import Tab5 from "./tab5.svelte";
import Tab6 from "./tab6.svelte";
import Tab7 from "./tab7.svelte";
import Tab8 from "./tab8.svelte";
import Tab9 from "./tab9.svelte";

import t1 from "./tab1.svelte?raw";
import t2 from "./tab2.svelte?raw";
import t3 from "./tab3.svelte?raw";
import t4 from "./tab4.svelte?raw";
import t5 from "./tab5.svelte?raw";
import t6 from "./tab6.svelte?raw";
import t7 from "./tab7.svelte?raw";
import t8 from "./tab8.svelte?raw";
import t9 from "./tab9.svelte?raw";

export const alltab = [
    {
        id : "Tab1",
        comp : Tab1,
        copy : t1
    },
    {
        id : "Tab2",
        comp : Tab2,
        copy : t2
    },
    {
        id : "Tab3",
        comp : Tab3,
        copy : t3
    },
    {
        id : "Tab4",
        comp : Tab4,
        copy : t4
    },
    {
        id : "Tab5",
        comp : Tab5,
        copy : t5
    },
    {
        id : "Tab6",
        comp : Tab6,
        copy : t6
    },
    {
        id : "Tab7",
        comp : Tab7,
        copy : t7
    },
    {
        id : "Tab8",
        comp : Tab8,
        copy : t8
    },
    {
        id : "Tab9",
        comp : Tab9,
        copy : t9
    }
]