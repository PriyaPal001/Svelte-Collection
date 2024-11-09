import Pb1 from "./pb1.svelte";
import Pb2 from "./pb2.svelte";
import Pb3 from "./pb3.svelte";
import Pb4 from "./pb4.svelte";
import Pb5 from "./pb5.svelte";
import Pb6 from "./pb6.svelte";
import Pb7 from "./pb7.svelte";

import p1 from "./pb1.svelte?raw";
import p2 from "./pb2.svelte?raw";
import p3 from "./pb3.svelte?raw";
import p4 from "./pb4.svelte?raw";
import p5 from "./pb5.svelte?raw";
import p6 from "./pb6.svelte?raw";
import p7 from "./pb7.svelte?raw";

export const allpb = [
    {
        id : "Pb1",
        comp : Pb1,
        copy : p1
    },
    {
        id : "Pb2",
        comp : Pb2,
        copy : p2
    },
    {
        id : "Pb3",
        comp : Pb3,
        copy : p3
    },
    {
        id : "Pb4",
        comp : Pb4,
        copy : p4
    },
    {
        id : "Pb5",
        comp : Pb5,
        copy : p5
    },
    {
        id : "Pb6",
        comp : Pb6,
        copy : p6
    },
    {
        id : "Pb7",
        comp : Pb7,
        copy : p7
    }
]