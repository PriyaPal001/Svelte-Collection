import Notify1 from "./notify1.svelte";
import Notify2 from "./notify2.svelte";
import Notify3 from "./notify3.svelte";
import Notify4 from "./notify4.svelte";
import Notify5 from "./notify5.svelte";
import Notify6 from "./notify6.svelte";

import n1 from "./notify1.svelte?raw";
import n2 from "./notify2.svelte?raw";
import n3 from "./notify3.svelte?raw";
import n4 from "./notify4.svelte?raw";
import n5 from "./notify5.svelte?raw";
import n6 from "./notify6.svelte?raw";

export const allnotify = [
    {
        id : "Notify1",
        comp : Notify1,
        copy : n1
    },
    {
        id : "Notify2",
        comp : Notify2,
        copy : n2
    },
    {
        id : "Notify3",
        comp : Notify3,
        copy : n3
    },
    {
        id : "Notify4",
        comp : Notify4,
        copy : n4
    },
    {
        id : "Notify5",
        comp : Notify5,
        copy : n5
    },
    {
        id : "Notify6",
        comp : Notify6,
        copy : n6
    }
]