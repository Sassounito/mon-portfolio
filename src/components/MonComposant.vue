<!-- Page d'accueil -->

<template>
    <section class="accueil">
        <div class="mon-composant">
            <img src="../assets/Autoportrait_V2.png">
            <div class="bienvenue">
                <h2>Bienvenue sur mon </h2>
                <button class="bouton" @click="say('Apprennez à me connaître à travers mes projets !')"><span
                        class="text">Portfolio !</span></button>
                <h2>Je vous souhaite une bonne visite !</h2>
            </div>
        </div>
        <div class="mon-composant">
            <img src="../assets/Autoportrait.png">
            <div class="bienvenue">
                <h2>Bienvenue sur mon </h2>
                <button class="bouton" @click="say('Apprennez à me connaître à travers mes projets !')"><span
                        class="text">Portfolio !</span></button>
                <h2>Je vous souhaite une bonne visite !</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MonComposant'
};
</script>

<script setup>
function say(message) {
    alert(message)
}
</script>

<style scoped>
.accueil {
    color: rgb(127, 11, 159);
    font-family: 'Lexend';
    font-size: 45px;
    width: 100%;
}

.mon-composant {
    display: flex;
}

.bienvenue {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bouton {
    align-items: center;
    background-image: linear-gradient(135deg, rgb(127, 11, 159) 40%, rgb(199, 21, 133));
    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: 'comfortaa';
    font-weight: bolder;
    font-size: 50px;
    height: 100px;
    justify-content: center;
    max-width: 100%;
    padding: 2px 40px 0 40px;
    touch-action: manipulation;
}

.bouton:active {
    outline: 0;
}

.bouton:hover {
    outline: 0;
    box-shadow: 0 12px 16px 0 rgba(199, 21, 133, 0.24), 0 17px 50px 0 rgba(199, 21, 133, 0.19);
}

.bouton span {
    transition: all 200ms;
}

.bouton:hover span {
    transform: scale(1.1);
}

.text {
    font-weight: 400;
}

img {
    width: 30%;
}

h2 {
    width: 80%;
    font-weight: 300;
}

@media screen and (max-width: 500px) {
    .accueil {
        font-size: small;
    }

    .bouton {
        font-size: small;
        padding: 3%;
        height: 20%;
    }

    .mon-composant {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .bienvenue {
        padding-top: 20%;
    }

    img {
        padding: 20%;
        width: 250px;
    }
}
</style>
