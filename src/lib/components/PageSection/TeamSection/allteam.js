import Team1 from "./team1.svelte";
import Team2 from "./team2.svelte";
import Team3 from "./team3.svelte";
import Team4 from "./team4.svelte";
import Team5 from "./team5.svelte";
import Team6 from "./team6.svelte";
import Team7 from "./team7.svelte";
import Team8 from "./team8.svelte";
import Team9 from "./team9.svelte";

import t1 from "./team1.svelte?raw";
import t2 from "./team2.svelte?raw";
import t3 from "./team3.svelte?raw";
import t4 from "./team4.svelte?raw";
import t5 from "./team5.svelte?raw";
import t6 from "./team6.svelte?raw";
import t7 from "./team7.svelte?raw";
import t8 from "./team8.svelte?raw";
import t9 from "./team9.svelte?raw";

export let allTeams=[
    {
        id:1,
        comp:Team1,
        copy:t1
        
    },
    {
        id:2,
        comp:Team2,
        copy:t2
    },
    {
        id:3,
        comp:Team3,
        copy:t3
    },
    {
        id:4,
        comp:Team4,
        copy:t4
    },
    {
        id:5,
        comp:Team5,
        copy:t5
    },
    {
        id:6,
        comp:Team6,
        copy:t6
    },
    {
        id:7,
        comp:Team7,
        copy:t7
    },
    {
        id:8,
        comp:Team8,
        copy:t8
    },
    {
        id:9,
        comp:Team9,
        copy:t9
    }
]