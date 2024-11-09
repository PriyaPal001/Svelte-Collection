import Div1 from "./div1.svelte";
import Div2 from "./div2.svelte";
import Div3 from "./div3.svelte";
import Div4 from "./div4.svelte";
import Div5 from "./div5.svelte";
import Div6 from "./div6.svelte";
import Div7 from "./div7.svelte";
import Div8 from "./div8.svelte";

import d1 from "./div1.svelte?raw";
import d2 from "./div2.svelte?raw";
import d3 from "./div3.svelte?raw";
import d4 from "./div4.svelte?raw";
import d5 from "./div5.svelte?raw";
import d6 from "./div6.svelte?raw";
import d7 from "./div7.svelte?raw";
import d8 from "./div8.svelte?raw";

export const alldiv = [
    {
        id : "Div1",
        comp : Div1,
        copy : d1
    },
    {
        id : "Div2",
        comp : Div2,
        copy : d2
    },
    {
        id : "Div3",
        comp : Div3,
        copy : d3
    },
    {
        id : "Div4",
        comp : Div4,
        copy : d4
    },
    {
        id : "Div5",
        comp : Div5,
        copy : d5
    },
    {
        id : "Div6",
        comp : Div6,
        copy : d6
    },
    {
        id : "Div7",
        comp : Div7,
        copy : d7
    },
    {
        id : "Div8",
        comp : Div8,
        copy : d8
    }
]