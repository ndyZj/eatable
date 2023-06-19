<template>
    <div id="grocery">
        <ul id="menu">
            <li >
                <router-link to="/grocery" id="groceryMenu">Grocery</router-link>
            </li>
            <li >
                <router-link to="/inventory" id="inventoryMenu">Inventory</router-link>
            </li>
        </ul>
        <button>Create new Grocery List</button>
        <div>
            <ul>
                <li id="list">
                    <div id="circle"></div>
                    <ul id="listText">
                        <li>dd/mm/yyyy</li>
                        <li>10 items</li>
                    </ul>
                    <div id="editBtn"><img src="../../assets/Icon/edit.svg"></div>
                    <div id="deleteBtn"><img src="../../assets/Icon/delete-B.svg"></div>
                </li>
                <li id="list">
                    <div id="circle"></div>
                    <ul id="listText">
                        <li>dd/mm/yyyy</li>
                        <li>5 items</li>
                    </ul>
                    <div id="editBtn"><img src="../../assets/Icon/edit.svg"></div>
                    <div id="deleteBtn"><img src="../../assets/Icon/delete-B.svg"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    components:{
    
    },
    name: 'grocery',
    data() {
        return {
            
        }
    }
})

</script>

<style scoped>
#grocery{
    width: 100%;
    height: 500px;
    background-color: white;
}
#menu{
    width: 100%;
    height: 40px;
    background-color: #2f6d22;
    list-style: none;
}
#groceryMenu{
    float: left;
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    text-decoration: none; 
    font-size: 14px;
}
#inventoryMenu{
    float: left;
    width: 180px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    text-decoration: none;
    font-size: 14px; 
}
button {
    background-color: #f27c00;
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: white;
    margin-left: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
}
#list{
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
#circle{
    border: white solid 2px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-top: 30px;
    float: left;
}
#circle:active{
    background-color: #f27c00;
}
#listText{
    list-style: none;
    margin-left: 15px;
    margin-top: 16px;
    float: left;
    font-size: 15px;
}
#editBtn{
    width: 25px;
    height: auto;
    position: relative;
    left: 85px;
    top: 25px;
    float: left;
}
#deleteBtn{
    width: 25px;
    height: auto;
    position: relative;
    left: 105px;
    top: 25px;
    float: left;
}
</style>