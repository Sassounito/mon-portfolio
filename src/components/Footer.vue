<template>
    <section class="footer">
        <div class="droit">
            <P><span class="couleur">Tous droits réservés : </span>Sarah Sausset</P>
        </div>
        
        <div id="contact"><span class="couleur">Contact : </span></div>

        <div class="contact">
                <p>sarah.sausset10@gmail.com</p>
                <p>06 61 12 55 74</p>
                <p><a href="https://www.linkedin.com/in/sarah-sausset-8420122b9/">LinkedIn</a></p>
        </div>
    </section>
</template>

<script>
</script>

<style>
.footer {
    background-color: rgb(184, 227, 233);
    font-family: 'Comfortaa';
    color: rgb(0, 24, 44);
    font-size: 25px;
    font-weight: bold;
    margin: 0;
    padding: 1%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    align-items: flex-start;
}

a {
    text-decoration: none;
    color: rgb(0, 24, 44);
    font-weight: bolder;
}

.droit {
    width: 50%;
}

.contact {
    color: rgb(0, 24, 44);
    width: 35%;
    display: flex;
    flex-direction: column;
    text-align: left;
}

#contact{
    width: 10%;
    text-align: right;
}

.couleur {
    color: rgb(199, 21, 133);
}
</style>