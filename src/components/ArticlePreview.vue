<script>
    export default{
        props: ['articleId'],
    }
</script>

<template>
    <article id="articleId">
        <!-- <img src="imageSrc"> -->
        <h2><slot></slot></h2>
    </article>
</template>

<style>
    article{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        width: 50%;
        height: 10%;
    }
</style>