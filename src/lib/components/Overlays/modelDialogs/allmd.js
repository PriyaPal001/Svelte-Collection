import Md1 from "./md1.svelte";
import Md2 from "./md2.svelte";
import Md3 from "./md3.svelte";
import Md4 from "./md4.svelte";
import Md5 from "./md5.svelte";
import Md6 from "./md6.svelte";

import m1 from "./md1.svelte?raw";
import m2 from "./md2.svelte?raw";
import m3 from "./md3.svelte?raw";
import m4 from "./md4.svelte?raw";
import m5 from "./md5.svelte?raw";
import m6 from "./md6.svelte?raw";

export const allmd = [
    {
        id : "Md1",
        comp : Md1,
        copy : m1
    },
    {
        id : "Md2",
        comp : Md2,
        copy : m2
    },
    {
        id : "Md3",
        comp : Md3,
        copy : m3
    },
    {
        id : "Md4",
        comp : Md4,
        copy : m4
    },
    {
        id : "Md5",
        comp : Md5,
        copy : m5
    },
    {
        id : "Md6",
        comp : Md6,
        copy : m6
    }
]