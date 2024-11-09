import OV1 from "./ov1.svelte";
import OV2 from "./ov2.svelte";
import OV3 from "./ov3.svelte";
import OV4 from "./ov4.svelte";
import OV5 from "./ov5.svelte";

import o1 from "./ov1.svelte?raw";
import o2 from "./ov2.svelte?raw";
import o3 from "./ov3.svelte?raw";
import o4 from "./ov4.svelte?raw";
import o5 from "./ov5.svelte?raw";

export const allov = [
    {
        id : "OV1",
        comp : OV1,
        copy : o1
    },
    {
        id : "OV2",
        comp : OV2,
        copy : o2
    },
    {
        id : "OV3",
        comp : OV3,
        copy : o3
    },
    {
        id : "OV4",
        comp : OV4,
        copy : o4
    },
    {
        id : "OV5",
        comp : OV5,
        copy : o5
    }
]
