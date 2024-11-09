import Pag1 from './pag1.svelte';
import Pag2 from './pag2.svelte';
import Pag3 from './pag3.svelte';

import p1 from './pag1.svelte?raw';
import p2 from './pag2.svelte?raw';
import p3 from './pag3.svelte?raw';

export const allpag = [
    {
        id: 'Pag1',
        comp: Pag1,
        copy: p1
    },
    {
        id: 'Pag2',
        comp: Pag2,
        copy: p2
    },
    {
        id: 'Pag3',
        comp: Pag3,
        copy: p3
    }
];