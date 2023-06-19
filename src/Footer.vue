<template>
    <div id="footerMenu">
        <ul id="icons">
            <!-- #1 -->
            <li><router-link to="/grocery" id="name">
                    <img src="./assets/Icon/cart.svg">
                    Grocery
                </router-link>
            </li>
            <!-- #2 -->
            <li>
                <router-link to="/inventory" id="name">
                    <img src="./assets/Icon/box.svg">
                    Inventory
                </router-link>
            </li>
            <!-- #3 -->
            <li>
                <router-link to="/upload" id="upload">
                    &#43;
                </router-link>
            </li>
            <!-- #4 -->
            <li>
                <router-link to="/saved" id="name">
                    <img src="./assets/Icon/love.svg">
                    Saved
                </router-link>
            </li>
            <!-- #5 -->
            <li>
                <router-link to="/notif" id="name">
                    <img src="./assets/Icon/bell.svg">
                    Notification
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default ({
    // name: 'footer',
    // setup(){
    //     const router = useRouter();
    //     function goToGrocery(){
    //         router.push('/grocery');
    //     }
    //     return{
    //         goToGrocery,
    //     }
    // }
})
</script>

<style scoped>
#footerMenu {
    width: 100%;
    height: 55px;
    background-color: #7bae63;
}

#icons>li {
    display: inline-block;
    list-style: none;
}

img {
    /* border: red solid 1px; */
    width: 26px;
    height: 26px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1px;
}

#name {
    /* border: purple solid 1px; */
    display: grid;
    text-decoration: none;
    color: white;
    font-size: 11px;
    width: 60px;
    height: 50px;
    text-align: center;
    margin-left: 8px;
}

#upload {
    /* border: solid 1px purple; */
    padding-left: 11px;
    padding-right: 11px;
    border-radius: 50%;
    position: relative;
    top: 5px;
    left: 5px;
    background-color: white;
    text-decoration: none;
    font-weight: 800;
    font-size: 30px;
    text-align: center;
    color: #2f6d22;
    margin-right: 8px;
    margin-left: 5px;
}
</style>