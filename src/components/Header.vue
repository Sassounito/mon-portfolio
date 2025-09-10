<template>
    <section class="header">
        <nav>
            <ul>
                <li class='un'>
                    <p class='name'>Sarah Sausset</p>
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
}

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

.name {
    font-size: large;
    padding-right: 450px;
    font-weight: 200;
}

@media screen and (max-width: 500px) {
    .header {
        font-size: small;
    }

    .zero {
        display: none;
    }
}
</style>