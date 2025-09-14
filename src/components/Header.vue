<template>
    <section class="header">
        <nav>
            <ul>
                <li class='un'>
                    <RouterLink to="/" id="lienspages">
                        <p class='name'>Sarah Sausset</p>
                    </RouterLink>
                </li>
                <li class='deux'>
                    <RouterLink to="/" id="lienspages">Accueil</RouterLink>
                </li>
                <li class="trois">
                    <RouterLink to="/projects" id="lienspages">Mes projets</RouterLink>
                </li>
                <li class="quatre">
                    <RouterLink to="/me" id="lienspages">À propos de moi</RouterLink>
                </li>
            </ul>
        </nav>
    </section>

</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

.header {
    background-color: rgba(15, 0, 24, 0.7);
    backdrop-filter: blur(8px);
    color: rgb(255, 255, 255);
    font-family: 'Lexend';
    font-size: 35px;
    width: 100%;
    text-align: center;
    position: fixed;
    /* background: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, rgb(15, 0, 24, 0.8) 10%); */
    /* box-shadow: 0 0 8px 8px rgba(15, 0, 24, 0.9); */
    z-index: 10;
}

.un {
    text-align: left;
}

.name {
    font-family: 'Lexend';
    font-size: large;
    padding-right: 450px;
    font-weight: 200;
}

/*
.header::before {
    content: "";
    position: absolute;
    inset: -30px;
    background: linear-gradient(180deg, rgb(15, 0, 24), rgba(199, 21, 133));
    /* background: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, rgb(15, 0, 24) 0%); */
/*filter: blur(15px);
    z-index: -1;
}*/


ul {
    margin: 0;
    padding: 2%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
}

li {
    width: 30%;
}

#lienspages {
    font-family: 'Comfortaa';
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
}

@media screen and (max-width: 1700px) {
    #lienspages {
        font-size: 70%;
    }
}

@media screen and (max-width: 1080px) {
    .header {
        font-size: 20px;
    }

    .name {
        width: 30%;
        padding-right: 0;
        font-size: small;
    }
}

@media screen and (max-width: 500px) {
    .name {
        font-size: smaller;
        margin: 5%;
    }

    .header {
        font-size: small;
    }

    .zero {
        display: none;
    }

    .un {
        width: 15%;
    }

    .quatre {
        margin: 5%;
    }
}
</style>