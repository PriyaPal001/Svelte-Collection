import Product1 from "./Product1.svelte";
import Product2 from "./Product2.svelte";
import Product3 from "./Product3.svelte";
import Product4 from "./Product4.svelte";
import Product5 from "./Product5.svelte";

import p1 from "./Product1.svelte?raw";
import p2 from "./Product2.svelte?raw";
import p3 from "./Product3.svelte?raw";
import p4 from "./Product4.svelte?raw";
import p5 from "./Product5.svelte?raw";

export const allproduct = [
    {
        id : "Product1",
        comp : Product1,
        copy : p1
    },
    {
        id : "Product2",
        comp : Product2,
        copy : p2
    },
    {
        id : "Product3",
        comp : Product3,
        copy : p3
    },
    {
        id : "Product4",
        comp : Product4,
        copy : p4
    },
    {
        id : "Product5",
        comp : Product5,
        copy : p5
    }
]