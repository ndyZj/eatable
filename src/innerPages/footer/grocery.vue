<template>
    <div id="grocery">
        <ul id="menu">
            <li>
                <router-link to="/grocery" id="groceryMenu">Grocery</router-link>
            </li>
            <li>
                <router-link to="/inventory" id="inventoryMenu">Inventory</router-link>
            </li>
        </ul>

        <ul>
            <li id="newList">
                <router-link to="/grocery/editGrocery" style="text-decoration: none; color: white;">
                    Create new Grocery List
                </router-link>
            </li>
        </ul>

        <div>
            <ul>
                <li id="list">
                    <div id="circle"></div>
                    <ul id="listText">
                        <li>dd/mm/yyyy</li>
                        <li>10 items</li>
                    </ul>
                    <router-link to="/grocery/editGrocery" id="editBtn">
                        <img src="../../assets/Icon/edit.svg">
                    </router-link>

                    <!-- fake button -->
                    <router-link to="" id="deleteBtn">
                        <img src="../../assets/Icon/delete-B.svg">
                    </router-link>
                </li>
                <li id="list">
                    <div id="circle"></div>
                    <ul id="listText">
                        <li>dd/mm/yyyy</li>
                        <li>5 items</li>
                    </ul>
                    <router-link to="/grocery/editGrocery" id="editBtn">
                        <img src="../../assets/Icon/edit.svg">
                    </router-link>

                    <!-- fake button -->
                    <router-link to="" id="deleteBtn">
                        <img src="../../assets/Icon/delete-B.svg">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    components: {

    },
    name: 'grocery',
    data() {
        return {

        }
    }
})

</script>

<style scoped>
#grocery {
    width: 100%;
    height: 534px;
    background-color: white;
}

#menu {
    width: 100%;
    height: 75px;
    background-color: #2f6d22;
    list-style: none;
}
#menu>li:nth-child(1){
    font-weight: bold;
}

#groceryMenu {
    float: left;
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    border-bottom: #7bae63 solid 4px;
}

#inventoryMenu {
    float: left;
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    text-decoration: none;
    font-size: 14px;
}

#newList {
    background-color: #f27c00;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 10px;
    margin-left: 80px;
    margin-top: 25px;
    margin-bottom: 20px;
    list-style: none;
    font-size: 14px;
}

#list {
    background-color: rgb(123, 174, 99, 0.6);
    list-style: none;
    width: 300px;
    height: 90px;
    margin-left: 23px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    line-height: 25px;
}

#circle {
    border: white solid 2px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-top: 30px;
    float: left;
}

#circle:active {
    background-color: #f27c00;
}

#listText {
    list-style: none;
    margin-left: 15px;
    margin-top: 16px;
    float: left;
    font-size: 15px;
}

#editBtn {
    width: 25px;
    height: auto;
    float: left;
    margin-top: 25px;
    margin-left: 75px;
}

#deleteBtn {
    width: 25px;
    height: auto;
    float: left;
    margin-top: 25px;
    margin-left: 20px;
}
</style>