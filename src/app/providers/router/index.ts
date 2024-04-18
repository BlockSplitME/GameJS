import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import gameView from '@/game/game-view/game-view.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: gameView },
    ] as unknown as RouteRecordRaw[]
});

export default router;