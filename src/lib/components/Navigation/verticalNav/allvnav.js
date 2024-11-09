import Vnav1 from "./vnav1.svelte";
import Vnav2 from "./vnav2.svelte";
import Vnav3 from "./vnav3.svelte";
import Vnav4 from "./vnav4.svelte";
import Vnav5 from "./vnav5.svelte";
import Vnav6 from "./vnav6.svelte";

import n1 from "./vnav1.svelte?raw";
import n2 from "./vnav2.svelte?raw";
import n3 from "./vnav3.svelte?raw";
import n4 from "./vnav4.svelte?raw";
import n5 from "./vnav5.svelte?raw";
import n6 from "./vnav6.svelte?raw";

export const allvnav = [
    {
        id : "Vnav1",
        comp : Vnav1,
        copy : n1
    },
    {
        id : "Vnav2",
        comp : Vnav2,
        copy : n2
    },
    {
        id : "Vnav3",
        comp : Vnav3,
        copy : n3
    },
    {
        id : "Vnav4",
        comp : Vnav4,
        copy : n4
    },
    {
        id : "Vnav5",
        comp : Vnav5,
        copy : n5
    },
    {
        id : "Vnav6",
        comp : Vnav6,
        copy : n6
    }
]