import Ss1 from "./ss1.svelte";
import Ss2 from "./ss2.svelte";

import s1 from "./ss1.svelte?raw";
import s2 from "./ss2.svelte?raw";

export const allss = [
    {
        id : "Ss1",
        comp : Ss1,
        copy : s1
    },
    {
        id : "Ss2",
        comp : Ss2,
        copy : s2
    }
]