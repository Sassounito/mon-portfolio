import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/MonComposant.vue';
import ProjectList from './components/Projets.vue';
import Presentation from './components/Moi.vue';
import PageGraphisme from './components/PageGraphisme.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectList },
    { path: '/me', name: 'Me', component: Presentation },
    { path: '/graphism', name: 'Graphism', component: PageGraphisme },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;