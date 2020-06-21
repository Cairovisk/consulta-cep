<template>
    <div id="hero">
        <div class="container">
            <div class="title">
                Consultor de CEP
            </div>
            <div class="description">
                Insira o CEP e encontre o endereço vinculado a este
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#hero {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        font-size: 48px;
        color: $black;
        font-weight: $bold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .description {
        font-size: 24px;
        color: $black;
        font-weight: $semibold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
}
</style>