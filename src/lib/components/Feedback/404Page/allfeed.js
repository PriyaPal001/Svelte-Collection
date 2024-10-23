import Feed1 from "./feed1.svelte";
import Feed2 from "./feed2.svelte";
import Feed3 from "./feed3.svelte";
import Feed4 from "./feed4.svelte";
import Feed5 from "./feed5.svelte";
import Feed6 from "./feed6.svelte";

import f1 from "./feed1.svelte?raw";
import f2 from "./feed2.svelte?raw";
import f3 from "./feed3.svelte?raw";
import f4 from "./feed4.svelte?raw";
import f5 from "./feed5.svelte?raw";
import f6 from "./feed6.svelte?raw";

export let allfeed = [
    {
        id:1,
        comp:Feed1,
        copy:f1
        
    },
    {
        id:2,
        comp:Feed2,
        copy:f2
    },
    {
        id:3,
        comp:Feed3,
        copy:f3
    },
    {
        id:4,
        comp:Feed4,
        copy:f4
    },
    {
        id:5,
        comp:Feed5,
        copy:f5
    },
    {
        id:6,
        comp:Feed6,
        copy:f6
    }
    
]

