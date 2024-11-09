import category1 from "./category1.svelte";
import category2 from "./category2.svelte";
import category3 from "./category3.svelte";
import category4 from "./category4.svelte";
import category5 from "./category5.svelte";

import c1 from "./category1.svelte?raw";
import c2 from "./category2.svelte?raw";
import c3 from "./category3.svelte?raw";
import c4 from "./category4.svelte?raw";
import c5 from "./category5.svelte?raw";

export const allcategory = [
    {
        id : "Category1",
        comp : category1,
        copy : c1
    },
    {
        id : "Category2",
        comp : category2,
        copy : c2
    },
    {
        id : "Category3",
        comp : category3,
        copy : c3
    },
    {
        id : "Category4",
        comp : category4,
        copy : c4
    },
    {
        id : "Category5",
        comp : category5,
        copy : c5
    }
]