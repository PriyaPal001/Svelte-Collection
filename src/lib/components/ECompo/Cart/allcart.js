import cart1 from "./cart1.svelte";
import cart2 from "./cart2.svelte";
import cart3 from "./cart3.svelte";
import cart4 from "./cart4.svelte";
import cart5 from "./cart5.svelte";
import cart6 from "./cart6.svelte";

import c1 from "./cart1.svelte?raw";
import c2 from "./cart2.svelte?raw";
import c3 from "./cart3.svelte?raw";
import c4 from "./cart4.svelte?raw";
import c5 from "./cart5.svelte?raw";
import c6 from "./cart6.svelte?raw";

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
    },
    {
        id : "Cart4",
        comp : cart4,
        copy : c4
    },
    {
        id : "Cart5",
        comp : cart5,
        copy : c5
    },
    {
        id : "Cart6",
        comp : cart6,
        copy : c6
    }
]