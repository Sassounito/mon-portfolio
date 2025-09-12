import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/MonComposant.vue';
import ProjectList from './components/Projets.vue';
import Presentation from './components/Moi.vue';
import PageGraphisme from './components/PageGraphisme.vue';
import PageProjetsVideo from './components/PageProjetsVideo.vue';
import PageBiere from './components/PageBiere.vue';
import PageAssociation from './components/PageAssociation.vue';
import PageMotionDesign from './components/PageMotionDesign.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectList },
    { path: '/me', name: 'Me', component: Presentation },
    { path: '/graphism', name: 'Graphism', component: PageGraphisme },
    { path: '/video', name: 'ProjetsVideo', component: PageProjetsVideo },
    { path: '/beer', name: 'Biere', component: PageBiere },
    { path: '/association', name: 'Asso', component: PageAssociation },
    { path: '/motiondesign', name: 'MotionDesign', component: PageMotionDesign },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;