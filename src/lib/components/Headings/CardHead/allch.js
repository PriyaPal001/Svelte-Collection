import Ch1 from "./CH1.svelte";
import Ch2 from "./CH2.svelte";
import Ch3 from "./CH3.svelte";
import Ch4 from "./CH4.svelte";
import Ch5 from "./CH5.svelte";
import Ch6 from "./CH6.svelte";

import ch1 from "./CH1.svelte?raw";
import ch2 from "./CH2.svelte?raw";
import ch3 from "./CH3.svelte?raw";
import ch4 from "./CH4.svelte?raw";
import ch5 from "./CH5.svelte?raw";
import ch6 from "./CH6.svelte?raw";

export const allchs = [
    {
        title: "CardHead 1",
        comp: Ch1,
        copy: ch1
    },
    {
        title: "CardHead 2",
        comp: Ch2,
        copy: ch2
    },
    {
        title: "CardHead 3",
        comp: Ch3,
        copy: ch3
    },
    {
        title: "CardHead 4",
        comp: Ch4,
        copy: ch4
    },
    {
        title: "CardHead 5",
        comp: Ch5,
        copy: ch5
    },
    {
        title: "CardHead 6",
        comp: Ch6,
        copy: ch6
    }
];