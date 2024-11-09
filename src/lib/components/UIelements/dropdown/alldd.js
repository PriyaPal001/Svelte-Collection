import Dd1 from "./dd1.svelte";
import Dd2 from "./dd2.svelte";
import Dd3 from "./dd3.svelte";
import Dd4 from "./dd4.svelte";
import Dd5 from "./dd5.svelte";

import d1 from "./dd1.svelte?raw";
import d2 from "./dd2.svelte?raw";
import d3 from "./dd3.svelte?raw";
import d4 from "./dd4.svelte?raw";
import d5 from "./dd5.svelte?raw";

export const alldd = [
    {
        id : "Dd1",
        comp : Dd1,
        copy : d1
    },
    {
        id : "Dd2",
        comp : Dd2,
        copy : d2
    },
    {
        id : "Dd3",
        comp : Dd3,
        copy : d3
    },
    {
        id : "Dd4",
        comp : Dd4,
        copy : d4
    },
    {
        id : "Dd5",
        comp : Dd5,
        copy : d5
    }
]