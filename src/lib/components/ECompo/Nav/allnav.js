import nav1 from "./nav1.svelte";
import nav2 from "./nav2.svelte";
import nav3 from "./nav3.svelte";
import nav4 from "./nav4.svelte";
import nav5 from "./nav5.svelte";

import n1 from "./nav1.svelte?raw";
import n2 from "./nav2.svelte?raw";
import n3 from "./nav3.svelte?raw";
import n4 from "./nav4.svelte?raw";
import n5 from "./nav5.svelte?raw";

export const allnav = [
    {
        id : "Nav1",
        comp : nav1,
        copy : n1
    },
    {
        id : "Nav2",
        comp : nav2,
        copy : n2
    },
    {
        id : "Nav3",
        comp : nav3,
        copy : n3
    },
    {
        id : "Nav4",
        comp : nav4,
        copy : n4
    },
    {
        id : "Nav5",
        comp : nav5,
        copy : n5
    }
]