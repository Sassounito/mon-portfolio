<template>
    <section class="footer">
        <div class="gauche">
            <P><span class="couleur">Tous droits réservés : </span></P>
        </div>

        <div class="droite">
            <p>Sarah Sausset</p>
        </div>

        <div class="gauche">
            <p><span class="couleur">Contact :</span></p>
        </div>

        <div class="droite">
            <p>sarah.sausset10@gmail.com</p>
            <p>06 61 12 55 74</p>
            <p><a class="linkedin" href="https://www.linkedin.com/in/sarah-sausset-8420122b9/">LinkedIn</a></p>
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
    padding: 1%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    align-items: flex-start;
    bottom: 0;
    width: 100%;
}

.linkedin {
    text-decoration: none;
    color: rgb(255, 255, 255);
    text-decoration-line: underline;
}

.gauche {
    width: 25%;
    text-align: right;
    padding-right: 1%;
}

.droite {
    color: rgb(255, 255, 255);
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 300;
}

.couleur {
    color: rgb(199, 21, 133);
}

@media screen and (max-width: 500px) {
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 10px;
    }

    .gauche {
        padding: 3%;
        width: 80%;
    }

    .info {
        align-items: center;
    }

    p {
        padding-top: 5%;
    }
}
</style>