import od1 from "./od1.svelte";
import od2 from "./od2.svelte";
import od3 from "./od3.svelte";

import o1 from "./od1.svelte?raw";
import o2 from "./od2.svelte?raw";
import o3 from "./od3.svelte?raw";

export const allod = [
    {
        id : "Od1",
        comp : od1,
        copy : o1
    },
    {
        id : "Od2",
        comp : od2,
        copy : o2
    },
    {
        id : "Od3",
        comp : od3,
        copy : o3
    }
]