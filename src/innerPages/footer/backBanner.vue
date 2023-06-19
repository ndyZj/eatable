<template>
    <div id="containerDiv">
        <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
            &laquo; Back</button>
    </div>
</template>

<script>
import router from '../../router/router';

export default ({
    methods: {
        hasHistory() {
            return window.history.length > 2
        }
    }
})

</script>

<style scoped>
#containerDiv {
    width: 100%;
    height: 50px;
    background-color: #7bae63;
    color: white;
}
button{
    background-color: #7bae63;
    border: none;
    color: white;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    width: 90px;
    text-align: center;
}  
</style>