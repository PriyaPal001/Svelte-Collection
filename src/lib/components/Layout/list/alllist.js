import List1 from "./list1.svelte";
import List2 from "./list2.svelte";
import List3 from "./list3.svelte";
import List4 from "./list4.svelte";
import List5 from "./list5.svelte";
import List6 from "./list6.svelte";
import List7 from "./list7.svelte";

import l1 from "./list1.svelte?raw";
import l2 from "./list2.svelte?raw";
import l3 from "./list3.svelte?raw";
import l4 from "./list4.svelte?raw";
import l5 from "./list5.svelte?raw";
import l6 from "./list6.svelte?raw";
import l7 from "./list7.svelte?raw";

export const alllist = [
    {
        id : "List1",
        comp : List1,
        copy : l1
    },
    {
        id : "List2",
        comp : List2,
        copy : l2
    },
    {
        id : "List3",
        comp : List3,
        copy : l3
    },
    {
        id : "List4",
        comp : List4,
        copy : l4
    },
    {
        id : "List5",
        comp : List5,
        copy : l5
    },
    {
        id : "List6",
        comp : List6,
        copy : l6
    },
    {
        id : "List7",
        comp : List7,
        copy : l7
    }
]
