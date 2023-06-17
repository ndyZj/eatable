<template>
    <div id="containerDiv">
        {{ message }}
    </div>
</template>

<script>
    export default({
        data(){
            return{
                message:"burgerMenu"
            }
        }
    })

</script>

<style scoped>
    #containerDiv{
        width: 100%;
        height: 100%;
        background-color: green;
    }
</style>
