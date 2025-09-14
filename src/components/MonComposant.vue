<!-- Page d'accueil -->

<template>
    <section class="accueil">
        <div>
            <ul>
                <li class='bloc'>
                    .
                </li>
            </ul>
        </div>
        <div class="mon-composant">
            <img src="../assets/Autoportrait_V2.png">
            <div class="bienvenue">
                <h2>Bienvenue sur mon </h2>

                <button class="bouton" @click="say('Apprennez à me connaître à travers mes projets !')">
                    <span class="text">Portfolio !</span>
                </button>

                <h2>Je vous souhaite une bonne visite !</h2>
            </div>
        </div>
        <!-- <div class="mon-composant">
            <img src="../assets/Autoportrait.png">
            <div class="bienvenue">
                <h2>Bienvenue sur mon </h2>
                <button class="bouton" @click="say('Apprennez à me connaître à travers mes projets !')"><span
                        class="text">Portfolio !</span></button>
                <h2>Je vous souhaite une bonne visite !</h2>
            </div>
        </div> -->
        <div>
            <p class='bloc'>.</p>
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
    font-size: 60px;
    width: 100%;
}

.mon-composant {
    display: flex;
    justify-content: space-between;
}

.bienvenue {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    padding-right: 10%;
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

.bloc {
    color: rgb(15, 0, 24);
}

img {
    width: 25%;
    padding-left: 2%;
}

h2 {
    width: 80%;
    font-weight: 300;
}

@media screen and (max-width: 1700px) {
    h2 {
        font-size: 95%;
    }
}


@media screen and (max-width: 1080px) {
    .accueil {
        font-size: large;
    }

    .bloc {
        display: none;
    }

    .bouton {
        font-size: x-large;
        padding: 3%;
        height: 20%;
    }

    .mon-composant {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .bienvenue {
        padding-top: 10%;
        padding-right: 0%;
    }

    img {
        padding: 5%;
        height: 20%;
    }


    h2 {
        font-size: 25px;
    }
}

@media screen and (max-width: 500px) {
    .accueil {
        font-size: small;
        padding-bottom: 15%;
    }

    .bouton {
        font-size: medium;
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
        padding-right: 0%;
    }

    img {
        padding: 10%;
        width: 250px;
    }

    h2 {
        font-size: 25px;
    }
}
</style>
