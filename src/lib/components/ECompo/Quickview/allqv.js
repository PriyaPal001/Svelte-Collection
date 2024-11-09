import QV1 from "./qv1.svelte";
import QV2 from "./qv2.svelte";
import QV3 from "./qv3.svelte";
import QV4 from "./qv4.svelte";

import q1 from "./qv1.svelte?raw";
import q2 from "./qv2.svelte?raw";
import q3 from "./qv3.svelte?raw";
import q4 from "./qv4.svelte?raw";

export const allqv = [
    {
        id : "QV1",
        comp : QV1,
        copy : q1
    },
    {
        id : "QV2",
        comp : QV2,
        copy : q2
    },
    {
        id : "QV3",
        comp : QV3,
        copy : q3
    },
    {
        id : "QV4",
        comp : QV4,
        copy : q4
    }
]