<template>
    <section class="footer">
        <div class="gauche">
            <P><span class="couleur">Tous droits réservés : </span></P>
        </div>

        <div class="droite">
            <p class="info">Sarah Sausset</p>
        </div>

        <div class="gauche">
            <p><span class="couleur">Contact :</span></p>
        </div>

        <div class="droite">
            <p class="info">sarah.sausset10@gmail.com</p>
            <p class="info">06 61 12 55 74</p>
            <p class="info"><a class="linkedin" href="https://www.linkedin.com/in/sarah-sausset-8420122b9/">LinkedIn</a>
            </p>
        </div>
    </section>
</template>

<script>
</script>

<style>
.footer {
    /* background-color: rgb(184, 227, 233); */
    background-color: rgb(49, 0, 61, 0.7);
    backdrop-filter: blur(8px);
    font-family: 'Lexend';
    color: rgb(0, 24, 44);
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    padding-top: 1%;
    padding-bottom: 1%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    align-items: flex-start;
    /* position: fixed; */
    bottom: 0;
    width: 100%;
}

.linkedin {
    text-decoration: none;
    color: rgb(255, 255, 255);
    text-decoration-line: underline;
}

.gauche {
    width: 24%;
    text-align: right;
}

.droite {
    color: rgb(255, 255, 255);
    width: 24%;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 300;
    padding-bottom: 1%;

}

.couleur {
    color: rgb(199, 21, 133);
}

/* faire un truc pour la taille 1538 ou plutot 1080*/
@media screen and (max-width: 1080px) {
    .footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: medium;
        width: 100%;
    }

    .gauche {
        text-align: end;
        height: 35px;
        width: 95%;
    }

    .droite {
        width: 95%;
    }

    .info {
        padding-bottom: 1%;
    }
}

@media screen and (max-width: 500px) {
    .footer {
        display: flex;
        flex-direction: column;
        align-items: left;
        font-size: 10px;
        padding-top: 3%;
        padding-bottom: 5%;
    }

    .gauche {
        text-align: left;
        padding-top: 2%;
        padding-left: 5%;
        height: auto;
        width: 30%;
    }

    .droite {
        width: 30%;
        padding-left: 10%;
    }

    .info {
        align-items: center;
        padding-bottom: 3%;
    }
}
</style>