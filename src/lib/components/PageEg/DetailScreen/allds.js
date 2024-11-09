import Ds1 from "./ds1.svelte";
import Ds2 from "./ds2.svelte";

import d1 from "./ds1.svelte?raw";
import d2 from "./ds2.svelte?raw";

export const allds = [
    {
        id : "Ds1",
        comp : Ds1,
        copy : d1
    },
    {
        id : "Ds2",
        comp : Ds2,
        copy : d2
    }
]