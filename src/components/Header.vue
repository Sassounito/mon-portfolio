<template>
    <section class="header">
        <nav>
            <ul>
                <li class='zero'>
                    <p class='un'>Sarah Sausset</p>
                </li>
                <li class='deux'>
                    <RouterLink to="/">Accueil</RouterLink>
                </li>
                <li class="trois">
                    <RouterLink to="/projects">Mes projets</RouterLink>
                </li>
                <li class="quatre">
                    <RouterLink to="/me">À propos de moi</RouterLink>
                </li>
            </ul>
        </nav>
    </section>

</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

.header {
    background-color: rgb(76, 224, 230);
    color: rgb(0, 24, 44);
    font-family: 'Comfortaa';
    font-size: 35px;
    width: 100%;
    text-align: center;
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

a {
    text-decoration: none;
    color: rgb(0, 24, 44);
    font-weight: bolder;
}

.un {
    font-size: large;
    padding-right: 450px;
    font-weight: bolder;
}
</style>