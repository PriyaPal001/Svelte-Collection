import Bread1 from "./bread1.svelte";
import Bread2 from "./bread2.svelte";
import Bread3 from "./bread3.svelte";
import Bread4 from "./bread4.svelte";

import b1 from "./bread1.svelte?raw";
import b2 from "./bread2.svelte?raw";
import b3 from "./bread3.svelte?raw";
import b4 from "./bread4.svelte?raw";

export const allbread = [
    {
        id : "Bread1",
        comp : Bread1,
        copy : b1
    },
    {
        id : "Bread2",
        comp : Bread2,
        copy : b2
    },
    {
        id : "Bread3",
        comp : Bread3,
        copy : b3
    },
    {
        id : "Bread4",
        comp : Bread4,
        copy : b4
    }
]