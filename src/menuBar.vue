<template>
    <div id="containerDiv">
        <ul id="foodType">
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Breakfast</router-link>
            </li>
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Lunch</router-link>
            </li>
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Dinner</router-link>
            </li>
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Dessert</router-link>
            </li>
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Drink</router-link>
            </li>
            <li><router-link style="text-decoration: none; color: inherit;" to="#">
                    Snack</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default ({
    data() {
        return {

        }
    }
})
</script>

<style scoped>
#containerDiv {
    width: 100%;
    height: 35px;
    background-color: green;
}

#foodType li {
    /* border: red solid 1px; */
    list-style: none;
    float: left;
    width: 58px;
    height: 30px;
    line-height: 30px;
    margin-top: 3px;
    text-align: center;
    font-size: 12px;
    color: white;
}
#foodType li:nth-child(1){
    margin-left: 8px;
    margin-right: 2px;
}
</style>