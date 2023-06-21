<template>
    <div id="containerDiv">
        <ul>
            <li>
                <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
                    &laquo; Back
                </button>
            </li>
            <li>
                <router-link to="/home">
                    <img src="../../assets/Icon/home.svg">
                </router-link>
               
            </li>
        </ul>


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

button {
    background-color: #7bae63;
    border: none;
    color: white;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    width: 90px;
    text-align: center;
}
img{
    width: 25px;
    height: auto;
    position: relative;
    left:315px;
    bottom: 38px;
}
</style>