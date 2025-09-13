import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/MonComposant.vue';
import ProjectList from './components/Projets.vue';
import Presentation from './components/Moi.vue';
import PageGraphisme from './components/PageGraphisme.vue';
import PageProjetsVideos from './components/PageProjetsVideos.vue';
import PageBiere from './components/PageBiere.vue';
import PageAssociation from './components/PageAssociation.vue';
import PageMotionDesign from './components/PageMotionDesign.vue';
import PageCom from './components/PageCom.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectList },
    { path: '/me', name: 'Me', component: Presentation },
    { path: '/graphism', name: 'Graphism', component: PageGraphisme },
    { path: '/videos', name: 'ProjetsVideos', component: PageProjetsVideos },
    { path: '/beer', name: 'Biere', component: PageBiere },
    { path: '/association', name: 'Asso', component: PageAssociation },
    { path: '/motiondesign', name: 'MotionDesign', component: PageMotionDesign },
    { path: '/communication', name: 'Communication', component: PageCom },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;