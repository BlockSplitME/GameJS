import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: Game },
    ] as unknown as RouteRecordRaw[]
});

export default router;