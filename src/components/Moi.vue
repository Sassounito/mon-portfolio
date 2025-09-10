<template>
    <section class="page-moi">
        <div class="titre">
            <h1>À propos de moi</h1>
        </div>
        <div class="text">
            <p class="desc">Étudiante en 2e année de BUT MMI (Métiers Du Multimédia et de l'Internet),
                j'apprends
                énormément de choses que ce soit dans le graphisme, la programmation, la gestion de projets ou
                l'audiovisuel.
            </p>
            <p class="desc">J'adore ma formation car elle me permet d'apprendre l'autonomie, ou au contraire à savoir
                bien travailler en groupe, cela m'apprends aussi à m'organiser pour pouvoir rendre chacun de mes projets
                dans les temps.
            </p>
            <p class="desc">L'avantage de cette formation est qu'elle est pluridisciplinaire, ce qui fait que j'apprends
                à maîtriser plein de domaines différents comme par exemple les logiciels de la suite Adobe, la
                programmation dans des langages comme HTML, CSS, PHP et Javascript et en même temps savoir diriger et
                organiser un projet avc plusieurs personnes en utilisant des méthodes que l'on apprends en cours.
            </p>
            <img src="../assets/logo mmi.png">
            <img src="../assets/logoIUT.png">
        </div>
    </section>
</template>

<script>
export default {
    name: 'MonComposant'
};
</script>

<style scoped>
.page-moi {
    color: rgb(127, 11, 159);
    font-family: 'Comfortaa';
    font-size: 50px;
    width: 100%;
}

.titre {
    padding: 5%;
}

.text {
    margin-bottom: 5%;
}

.desc {
    /* color: rgb(0, 24, 44); */
    color: rgb(255, 255, 255);
    padding: 0% 20% 2% 20%;
    font-family: 'Lexend';
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
}

img {
    width: 30%;
    padding: 2%;
}

h1 {
    margin-top: 100px;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: large;
        padding: 10%;
    }

    .desc {
        font-size: x-small;
        padding: 0% 10% 2% 10%;
    }

    img {
        padding-top: 5%;
        width: 50%;
    }
}
</style>