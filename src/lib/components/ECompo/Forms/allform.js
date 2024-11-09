import form1 from "./form1.svelte";
import form2 from "./form2.svelte";
import form3 from "./form3.svelte";
import form4 from "./form4.svelte";
import form5 from "./form5.svelte";

import f1 from "./form1.svelte?raw";
import f2 from "./form2.svelte?raw";
import f3 from "./form3.svelte?raw";
import f4 from "./form4.svelte?raw";
import f5 from "./form5.svelte?raw";

export const allform = [
    {
        id : "Form1",
        comp : form1,
        copy : f1
    },
    {
        id : "Form2",
        comp : form2,
        copy : f2
    },
    {
        id : "Form3",
        comp : form3,
        copy : f3
    },
    {
        id : "Form4",
        comp : form4,
        copy : f4
    },
    {
        id : "Form5",
        comp : form5,
        copy : f5
    }
]