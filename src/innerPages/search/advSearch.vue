<template>
    <div id="advSearch">
        <ul id="title">
            <li>Advance Search</li>
        </ul>
        <ul id="box">
            <li id="boxTitle">Meal Type</li>
            <ul id="smallBox">
                <li>Breakfast</li>
                <li>Lunch</li>
                <li style="background-color: rgb(242, 124, 0, 0.6);">Dinner</li>
                <li>Dessert</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
        </ul>
        <ul id="box">
            <li id="boxTitle">Diet</li>
            <ul id="smallBox">
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Gluten-free</li>
                <li>Dairy-free</li>
                <li>Peanut-free</li>
                <li style="background-color: rgb(242, 124, 0, 0.6);">Halal</li>
            </ul>
        </ul>
        <ul id="box">
            <li id="boxTitle">Ingredients</li>
            <ul id="smallBox">
                <li style="background-color: rgb(242, 124, 0, 0.6);">Chicken</li>
                <li>Pork</li>
                <li style="background-color: rgb(242, 124, 0, 0.6);">Beef</li>
                <li>Vegetables</li>
                <li>Fruit</li>
                <li>Vanilla</li>
                <li>Chocolate</li>
                <li>Turkey</li>
                <li>Rice & Grains</li>
                <li>Raisin</li>
                <li>Bread</li>
            </ul>
        </ul>
        <ul id="box">
            <li id="boxTitle">Cuisine</li>
            <ul id="smallBox">
                <li>Chinese</li>
                <li>Japanese</li>
                <li>Korean</li>
                <li>American</li>
                <li style="background-color: rgb(242, 124, 0, 0.6);">Indonesian</li>
                <li>Arabian</li>
                <li>African</li>
                <li>Mexican</li>
                <li>Australian</li>
                <li>European</li>
            </ul>
        </ul>
        <div>
            <button id="clearBtn">Clear All</button>
            <button id="searchBtn">
                <router-link to="/searchList"
                style="text-decoration: none; color: inherit;">
                    Search
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
import router from '../../router/router';


</script>

<style>
div,ul,li{list-style: none;}
#advSearch{
    width: 100%;
    height: 470px;
    background-color: white;
    overflow: scroll;
    padding-bottom: 30px;
}
::-webkit-scrollbar{
    display: none;
}
#title {
    width: 100%;
    height: 50px;
    background-color: #2f6d22;
    list-style: none;
    text-align: center;
    color: white;
    line-height: 50px;
}
#box{
    background-color: rgb(232, 232, 232);
    width: 295px;
    height: auto;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
#boxTitle{
    border-bottom: #7bae63 solid 3px;
    width: 280px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 10px;
}

#smallBox > li{
    width: auto;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background-color: rgba(123, 174, 99, 0.6);
    border-radius: 5px;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 5px;
    text-align: center;
    display: inline-block;
}
#clearBtn{
    background-color: #2f6d22;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-top: 30px;
    margin-left: 50px;
}
#searchBtn{
    background-color: #f27c00;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-top: 30px;
    margin-left: 15px;
}

</style>