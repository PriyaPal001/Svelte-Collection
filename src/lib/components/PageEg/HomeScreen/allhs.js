import Hs1 from "./hs1.svelte";
import Hs2 from "./hs2.svelte";

import h1 from "./hs1.svelte?raw";
import h2 from "./hs2.svelte?raw";

export const allhs = [
    {
        id : "Hs1",
        comp : Hs1,
        copy : h1
    },
    {
        id : "Hs2",
        comp : Hs2,
        copy : h2
    }
]