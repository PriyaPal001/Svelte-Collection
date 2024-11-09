import BGrp1 from "./bGrp1.svelte";
import BGrp2 from "./bGrp2.svelte";
import BGrp3 from "./bGrp3.svelte";
import BGrp4 from "./bGrp4.svelte";
import BGrp5 from "./bGrp5.svelte";

import b1 from "./bGrp1.svelte?raw";
import b2 from "./bGrp2.svelte?raw";
import b3 from "./bGrp3.svelte?raw";
import b4 from "./bGrp4.svelte?raw";
import b5 from "./bGrp5.svelte?raw";

export const allbGrp = [
    {
        id : "BGrp1",
        comp : BGrp1,
        copy : b1
    },
    {
        id : "BGrp2",
        comp : BGrp2,
        copy : b2
    },
    {
        id : "BGrp3",
        comp : BGrp3,
        copy : b3
    },
    {
        id : "BGrp4",
        comp : BGrp4,
        copy : b4
    },
    {
        id : "BGrp5",
        comp : BGrp5,
        copy : b5
    }
]