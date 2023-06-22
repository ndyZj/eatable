<template>
<div id="searchList">
    <div id="tagList">
        <ul>
            <li style="background-color: rgb(242, 124, 0, 0.6);">Dinner</li>
            <li style="background-color: rgb(242, 124, 0, 0.6);">Halal</li>
            <li style="background-color: rgb(242, 124, 0, 0.6);">Chicken</li>
            <li style="background-color: rgb(242, 124, 0, 0.6);">Beef</li>
            <li style="background-color: rgb(242, 124, 0, 0.6);">Indonesian</li>
            <li>Peanut</li>
            <li>Cheese</li>
            <li>Dairy-free</li>
        </ul>
    </div>

    <div id="content">
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food7.jpg"></li>
                <li>Dumplings</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>100</li>
            </ul>
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food2.jpg"></li>
                <li>
                    <router-link to="/recipe"
                    style="text-decoration: none;
                    color: inherit;">
                    Chicken Satay with Peanut Sauce
                </router-link>  
                </li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>110</li>
            </ul>
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food6.png"></li>
                <li>Hainan Chicken Rice</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>200</li>
            </ul>
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food4.jpg"></li>
                <li>Taco</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>150</li>
            </ul>
        </div>
</div>
</template>

<script>

</script>

<style>
#searchList {
    width: 100%;
    height: 500px;
    background-color: white;
    overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
}
#tagList {
    /* border: red solid 1px; */
    width: 340px;
    height: 30px;
    overflow-x: scroll;
    overflow-y: hidden;    
    display: inline-block;
    white-space: nowrap;
    margin-top: 10px;
    margin-left: 10px;
}
#tagList >ul>li{
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

#content {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
}

#content>ul {
    /* border: red solid 1px; */
    list-style: none;
    width: 320px;
    height: 120px;
    margin-top: 25px;
    margin-left: 23px;
    background-color: rgb(123, 174, 99, 0.6);
    border-radius: 3px;
}

#foodPhoto>img {
    width: 130px;
    height: 100px;
    margin-top: 10px;
    margin-left: 10px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
}

#content>ul>li {
    float: left;
}

#content>ul>li:nth-child(2) {
    margin-top: 35px;
    margin-left: 20px;
    /* border: solid blue 1px; */
    width: 130px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    font-weight: bold;
}
#love > img{
    height: auto;
    width: 20px;
    margin-left: 25px;
    margin-top: 10px;
    /* border: red solid 1px; */
}
#content>ul>li:nth-child(4){
    color: white;
    margin-left: 15px;
    margin-top: 10px;
    font-size: 14px;
}
</style>