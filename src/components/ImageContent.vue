<script>
    export default{
        props: ['imageSrc', 'imageAlt', 'imageCredit'],
        computed:{
            creditBody(){
                return this.$props.imageCredit.split(".")[0] + " - ";
            },
            creditLink(){
                return this.$props.imageCredit.split(".")[1] + "." + this.$props.imageCredit.split(".")[2];
            }
        }
    }
</script>

<template>
    <div class="img-content">
        <img :src="imageSrc" :alt="imageAlt">
        <p class="credit">
            <span>{{ creditBody }}</span>
            <a class="credit-link" :href="creditLink">Unsplash</a>
        </p>
    </div>
</template>

<style>
    .img-content{
        margin: 25px 0 25px 0;
    }

    img{
        height: clamp(300px,50vw,600px);
        width: clamp(300px,50vw,600px);
    }

    .credit{
        font-style: italic;
        margin: 0;
    }

    .credit-link{
        text-decoration: underline;
    }
</style>