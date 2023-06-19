<template>
    <div id="inventory">
        <ul id="menu">
            <li>
                <router-link to="/grocery" id="groceryMenu">Grocery</router-link>
            </li>
            <li>
                <router-link to="/inventory" id="inventoryMenu">Inventory</router-link>
            </li>
        </ul>

        <!-- fake button -->
        <ul>
            <li id="newList">
                <router-link to="" style="text-decoration: none; color: white;">
                    Add new ingredients
                </router-link>
            </li>
        </ul>

        <div>
            <ul>
                <li id="list">
                    <ul id="listText">
                        <li>Cereal</li>
                        <li>Stock: 1 box</li>
                        <li>Expired: dd/mm/yyyy</li>
                        <li>Last entry: dd/mm/yyyy</li>
                    </ul>

                    <!-- fake button -->
                    <router-link to="" id="editBtn">
                        <img src="../../assets/Icon/edit.svg">
                    </router-link>

                    <!-- fake button -->
                    <router-link to="" id="deleteBtn">
                        <img src="../../assets/Icon/delete-B.svg">
                    </router-link>
                </li>

                <li id="listRed">
                    <ul id="listText">
                        <li>Banana</li>
                        <li>Stock: 5 pcs</li>
                        <li>Last entry: dd/mm/yyyy</li>
                    </ul>

                    <!-- fake button -->
                    <router-link to="" id="editBtn">
                        <img src="../../assets/Icon/edit.svg">
                    </router-link>

                    <!-- fake button -->
                    <router-link to="" id="deleteBtn">
                        <img src="../../assets/Icon/delete-B.svg">
                    </router-link>
                </li>

                <li id="list">
                    <ul id="listText">
                        <li>Milk</li>
                        <li>Stock: 1000 ml</li>
                        <li>Expired: dd/mm/yyyy</li>
                        <li>Last entry: dd/mm/yyyy</li>
                    </ul>

                    <!-- fake button -->
                    <router-link to="" id="editBtn">
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

</script>

<style scoped>
#inventory{
    width: 100%;
    height: 500px;
    background-color: white;
    overflow: scroll;
}
::-webkit-scrollbar{
    display: none;
}
#menu {
    width: 100%;
    height: 40px;
    background-color: #2f6d22;
    list-style: none;
}
#menu>li:nth-child(2){
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
    border-bottom: #7bae63 solid 4px;
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
    height: 120px;
    margin-left: 23px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    line-height: 25px;
    margin-bottom: 25px;
}
#listRed {
    background-color:rgb(242, 124, 0, 0.6);
    list-style: none;
    width: 300px;
    height: 120px;
    margin-left: 23px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    line-height: 25px;
    margin-bottom: 25px;
}
#listText {
    list-style: none;
    margin-left: 10px;
    margin-top: 8px;
    float: left;
    font-size: 14px;
}
#listText>li:nth-child(1){
    font-size: 18px;
    font-weight: bold;
}

#editBtn {
    width: 25px;
    height: auto;
    position: relative;
    left: 55px;
    top: 45px;
    float: left;
}

#deleteBtn {
    width: 25px;
    height: auto;
    position: relative;
    left: 70px;
    top: 45px;
    float: left;
}
</style>