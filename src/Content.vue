<template>
    <div id="app">
        <ul>
            <!-- #1 -->
            <li>
                <ul>
                    <my-contentPic></my-contentPic>
                </ul>
            </li>
            <!-- #2 -->
            <li>{{ message }}</li>
            <!-- #3 -->
            <li>
                <input v-model="Text" placeholder="Search...">
            </li>
            <!-- #4 -->
            <li>
                <ul id="recommendation">
                    <li>Recommendations</li>
                    <li>
                        <my-recommend></my-recommend>
                    </li>
                </ul>
            </li>
            <!-- #5 -->
            <!-- extra line for expansion -->
            <li></li>
        </ul>
    </div>
</template>

<script>
import ContentPic from './innerPages/content/contentPic.vue';
import Recommend from './innerPages/content/recommend.vue'

export default ({
    components: {
        'my-contentPic': ContentPic,
        'my-recommend' :Recommend
    },
    // name: 'app',
    data() {
        return {
            message: 'Search Recipe Here...'
        }
    }
})
</script>

<style scoped>
#app {
    width: 100%;
    height: 500px;
    background-color: white;
    /* border: blue solid 1px; */
    overflow: scroll;
}
::-webkit-scrollbar{
    display: none;
}
#app >ul> li:nth-child(2){
    text-align: center;
    font-size: 16px;
    font-weight: bold;   
}
#app >ul> li:nth-child(5){
    height: 200px;
}
input{
    background-color: #f27d22;
    background-image:url('./assets/Icon/search.svg');
    background-repeat: no-repeat;
    background-position: 180px;
    background-size: 20px;
    padding-left: 15px;
    margin-left: 70px;
    margin-top: 15px;
    color: white;
    border: none;
    border-radius: 10px;
    width: 200px;
    height: 35px;
    font-size: 12px;
}
::placeholder{
    color: rgb(255, 255, 255, 0.8);
}
#recommendation{
    list-style: none;
    width: 100%;
    height: 150px;
    background-color: rgb(123, 174, 99, 0.7);
    padding-top: 15px;
    padding-left: 15px;
    margin-top: 20px;
    color: #2f6d22;
    font-size: 14px;
    font-weight: bold;
}
</style>