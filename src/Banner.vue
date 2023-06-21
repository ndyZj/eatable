<template>
    <div id="containerDiv">
        <ul id="button">
            <li>
                <ul id="left">
                    <li>
                        <router-link to="/burgerMenu">
                            <img id="menu" src="./assets/Icon/burgerMenu.svg">
                        </router-link>
                    </li>
                </ul>
                <ul id="middle">
                    <li>
                        <router-link to="/home">
                            <img id="logo" src="./assets/logo/logo-only.svg">
                        </router-link>
                    </li>
                </ul>
                <ul id="right">
                    <li>
                        <router-link to="#">
                            <img id="search" src="./assets/Icon/search.svg">
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <div id="menuBar">
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
    height: 50px;
    background-color: #7bae63;
}

#left {
    /* border: red 1px solid; */
    width: 45px;
    height: 45px;
    margin-top: 3px;
    margin-left: 10px;
    float: left;
    list-style: none;
}

#middle {
    width: 45px;
    height: 45px;
    position: absolute;
    left: 150px;
    top: -4px;
    list-style: none;
}

#right {
    /* border: red 1px solid; */
    width: 45px;
    height: 45px;
    margin-top: 2px;
    margin-right: 10px;
    float: right;
    list-style: none;
}

#menu {
    width: 35px;
    padding-top: 12px;
    margin-left: 3px;
}

#logo {
    width: 38px;
    padding-top: 10px;
    padding-left: 4px;
}

#search {
    width: 28px;
    padding-top: 8px;
    margin-left: 15px;
}

#menuBar {
    width: 100%;
    height: 35px;
    background-color: green;
    float: left;
    margin-top: 2px;
}

#foodType>li {
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

#foodType>li:nth-child(1) {
    margin-left: 8px;
    margin-right: 2px;
}
</style>