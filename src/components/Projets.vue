<template>
    <section class="page-projets">
        <div>
            <ul>
                <li class='bloc'>
                    bloc
                </li>
            </ul>
        </div>
        <h2 class="titrepage">Mes projets</h2>

        <div class="cartes">

            <article class="liste-projets">
                <!-- <RouterLink to="/graphism" id="lienspages"> -->

                <a class="titre"
                    href="https://www.canva.com/design/DAGcdtMsfiA/ekOs23pdqj0DJWM69HYWvg/edit?utm_content=DAGcdtMsfiA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                    Graphisme
                </a>

                <div class="projet">
                    <a href="#">
                        <img width="300" height="169" src="../assets/Graphisme.png"> </a>

                </div>
                <!-- </RouterLink> -->
            </article>

            <article class="liste-projets">
                <!-- <RouterLink to="/video"> -->

                <a class="titre"
                    href="https://youtube.com/playlist?list=PLONaOtGtGai7oIIoB7a-6Z_VDkmHRDkSR&si=b1yOsAjjN3dQ6uY8">
                    Projets video
                </a>

                <div class="projet">
                    <a href="#">
                        <img width="300" height="169" src="../assets/Clip.jpg">
                    </a>

                </div>
                <!-- </RouterLink> -->
            </article>

            <article class="liste-projets">
                <!-- <RouterLink to="/beer"> -->
                <a class="titre" href="https://quantum.2024.mmibut1.org/index.php">
                    Marque de bière
                </a>

                <div class="projet">
                    <a href="#">
                        <img width="300" height="169" src="../assets/Ciel2.jpg"> </a>

                </div>
                <!-- </RouterLink> -->
            </article>

            <article class="liste-projets">
                <!-- <RouterLink to="/association"> -->
                <a class="titre"
                    href="https://www.canva.com/design/DAGcdtMsfiA/ekOs23pdqj0DJWM69HYWvg/edit?utm_content=DAGcdtMsfiA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                    Association </a>

                <div class="projet">
                    <a href="#">
                        <img width="300" height="169" src="../assets/Ehconnard.png"> </a>

                </div>
                <!-- </RouterLink> -->
            </article>

            <article class="liste-projets">
                <RouterLink to="/motiondesign">
                    <a class="titre" href="#">
                        Motion Design </a>

                    <div class="projet">
                        <a href="#">
                            <img width="300" height="169" src="../assets/PP your name.jpg"> </a>

                    </div>
                </RouterLink>
            </article>
        </div>
        <div>
            <ul>
                <li class='bloc'>
                    .
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MonComposant'
};
</script>

<style scoped>
.bloc {
    color: rgb(15, 0, 24);
}

.page-projets {
    color: rgb(127, 11, 159);
    font-family: 'Lexend';
}

h2 {
    font-family: 'Comfortaa';
    font-size: 50px;
    padding: 2%;
}

img {
    width: 100%;
    height: auto;
}

.cartes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */
    grid-gap: 2em;
    margin: 5%;
}


/* hover styles */
.liste-projets {
    position: relative;
}

.projet {
    line-height: 0;
    overflow: hidden;
}

.titre {
    font-size: 1.5em;
    font-weight: light;
    text-decoration: none;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .5s;
    background: rgba(62, 0, 90, 0.4);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.liste-projets:hover .titre {
    opacity: 1;
}

.liste-projets:hover .projet img {
    filter: blur(2px);
    transition: 0.2s ease-in;
    transform: scale(1.1);
}

@media screen and (max-width: 500px) {
    h2 {
        font-size: larger;
        padding-top: 15%;
        padding-bottom: 10%;
    }

    .cartes {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        padding-bottom: 10%;
        z-index: 0;
    }

    .liste-projets {
        position: relative;
    }

    .projet {
        line-height: 0;
        overflow: hidden;
    }

    .titre {
        opacity: 1;
        background: rgba(62, 0, 90, 0.2);
    }

}
</style>