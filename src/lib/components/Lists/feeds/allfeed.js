import Feed1 from "./feed1.svelte";
import Feed2 from "./feed2.svelte";
import Feed3 from "./feed3.svelte";

import f1 from "./feed1.svelte?raw";
import f2 from "./feed2.svelte?raw";
import f3 from "./feed3.svelte?raw";

export const allFeeds = [
    {
        title: "Feed 1",
        comp: Feed1,
        copy: f1
    },
    {
        title: "Feed 2",
        comp: Feed2,
        copy: f2
    },
    {
        title: "Feed 3",
        comp: Feed3,
        copy: f3
    }
];