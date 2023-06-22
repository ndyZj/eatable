<template>
    <div id="containerDiv">
        <div>
            <ul id="close">
                <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
                    &#128941; Close
                </button>
            </ul>
        </div>
        <div>
            <ul>
                <li id="profile">
                    <router-link to="/myRecipe" style="text-decoration: none; 
                color: #2f6d22; 
                font-weight: bold;">
                        U
                    </router-link>
                </li>
                <li id="profileName">
                    <router-link to="/myRecipe" style="text-decoration: none; color: inherit;">
                        UserName
                    </router-link>
                    
                </li>
            </ul>
        </div>
        <div>
            <ul id="menuLink">
                <li><img src="../../assets/Icon/home.svg"></li>
                <li>
                    <router-link to="/home" style="color: white;
                text-decoration: none;">
                        Home
                    </router-link>
                </li>
            </ul>
            <ul id="menuLink">
                <li><img src="../../assets/Icon/search.svg"></li>
                <li>
                    <router-link to="/advSearch" style="color: white;
                text-decoration: none;">
                        Advance Search
                    </router-link>
                </li>
            </ul>
            <ul id="menuLink">
                <li><img src="../../assets/Icon/cart.svg"></li>
                <li>
                    <router-link to="/grocery" style="color: white;
                text-decoration: none;">
                        Grocery List
                    </router-link>
                </li>
            </ul>
            <ul id="menuLink">
                <li><img src="../../assets/Icon/box.svg"></li>
                <li>
                    <router-link to="/inventory" style="color: white;
                text-decoration: none;">
                        Home Inventory
                    </router-link>
                </li>
            </ul>
            <ul id="menuLink">
                <li><img src="../../assets/Icon/setting-w.svg" ></li>
                <li>
                    <router-link to="/settings" style="color: white;
                text-decoration: none;">
                        Settings
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default ({
    methods: {
        hasHistory() {
            return window.history.length > 2
        }
    }
})
</script>

<style scoped>
div, ul, li{list-style: none;}
#containerDiv {
    width: 100%;
    height: 500px;
    background-color: #2f6d22;
    overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
}

#close>button {
    background-color: #2f6d22;
    border: none;
    color: white;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    width: 90px;
    text-align: center;
    margin-bottom: 20px;
}

#profile {
    background-color: lightgray;
    /* border: red solid 1px; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 40px;
    text-align: center;
    line-height: 62px;
    list-style: none;
}

#profileName {
    color: white;
    list-style: none;
    position: relative;
    left: 130px;
    bottom: 35px;
}

img {
    width: 30px;
    height: auto;
    margin-left: 55px;
    margin-top: 20px;
    float: left;
}

#menuLink>li:nth-child(2) {
    /* border: red 1px solid; */
    list-style: none;
    width: 150px;
    height: 35px;
    line-height: 35px;
    float: left;
    margin-top: 20px;
    margin-left: 45px;

}
</style>
