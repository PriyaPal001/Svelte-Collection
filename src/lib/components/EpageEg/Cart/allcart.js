import cart1 from "./cart1.svelte";
import cart2 from "./cart2.svelte";
import cart3 from "./cart3.svelte";

import c1 from "./cart1.svelte?raw";
import c2 from "./cart2.svelte?raw";
import c3 from "./cart3.svelte?raw";

export const allcart = [
    {
        id : "Cart1",
        comp : cart1,
        copy : c1
    },
    {
        id : "Cart2",
        comp : cart2,
        copy : c2
    },
    {
        id : "Cart3",
        comp : cart3,
        copy : c3
    }
]