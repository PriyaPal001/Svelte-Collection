import PV1 from "./pv1.svelte"; 
import PV2 from "./pv2.svelte";
import PV3 from "./pv3.svelte";
import PV4 from "./pv4.svelte";
import PV5 from "./pv5.svelte";
import PV6 from "./pv6.svelte";

import p1 from "./pv1.svelte?raw";
import p2 from "./pv2.svelte?raw";
import p3 from "./pv3.svelte?raw";
import p4 from "./pv4.svelte?raw";
import p5 from "./pv5.svelte?raw";
import p6 from "./pv6.svelte?raw";

export const allpv = [
    {
        id : "Pv1",
        comp : PV1,
        copy : p1
    },
    {
        id : "Pv2",
        comp : PV2,
        copy : p2
    },
    {
        id : "Pv3",
        comp : PV3,
        copy : p3
    },
    {
        id : "Pv4",
        comp : PV4,
        copy : p4
    },
    {
        id : "Pv5",
        comp : PV5,
        copy : p5
    },
    {
        id : "Pv6",
        comp : PV6,
        copy : p6
    }
]