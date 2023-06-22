<template>
    <div id="myRecipe">
        <div id="profile">
            <ul>
                <li id="circlePhoto"></li>
            </ul>
            <ul>
                <li id="userName">User Name</li>
                <li id="email">Name@gmail.com</li>
                <li id="setting">
                    <router-link to="/settings" style="text-decoration: none; color: inherit;">
                        Settings
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="menuBtn">
            <ul>
                <li>
                    <router-link to="/myRecipe" style="text-decoration: none; color: inherit;">
                        My Recipe
                    </router-link>
                </li>
                <li>
                    <router-link to="/saved" style="text-decoration: none; color: inherit;">
                        Saved Recipe
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="content">
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food7.jpg"></li>
                <li>Recipe name 1</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>100</li>
            </ul>
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food6.png"></li>
                <li>Recipe name 2</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>200</li>
            </ul>
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food4.jpg"></li>
                <li>Recipe name 3</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li>150</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style>
#myRecipe {
    width: 100%;
    height: 500px;
    background-color: white;
    overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
}

#circlePhoto {
    border-radius: 50%;
    background-color: rgba(211, 211, 211, 0.7);
    width: 100px;
    height: 100px;
    margin-top: 25px;
    margin-left: 25px;
    list-style: none;
}

#userName {
    font-weight: bold;
    width: 180px;
    list-style: none;
    /* border: red solid 1px; */
    position: relative;
    bottom: 90px;
    left: 150px;
    font-size: 14px;
}

#email {
    font-size: 13px;
    width: 180px;
    list-style: none;
    /* border: red solid 1px; */
    position: relative;
    bottom: 85px;
    left: 150px;
}

#setting {
    font-size: 13px;
    width: 90px;
    height: 25px;
    list-style: none;
    /* border: red solid 1px; */
    float: right;
    background-color: rgba(211, 211, 211, 0.7);
    border-radius: 10px;
    line-height: 25px;
    text-align: center;
    margin-right: 100px;
    margin-top: -75px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-left: 20px;
    background-image: url('../../assets/Icon/setting.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 10px;
}

#menuBtn {
    width: 100%;
    height: 45px;
    background-color: #2f6d22;
}

#menuBtn>ul>li {
    /* border: red solid 1px; */
    color: white;
    font-size: 13px;
    float: left;
    width: 180px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    list-style: none;
}

#menuBtn>ul>li:nth-child(1) {
    font-weight: bold;
    border-bottom: white solid 3px;
}

#content {
    width: 100%;
    height: auto;
    background-color: #7bae63;
    padding-bottom: 50px;
    padding-top: 10px;
}

#content>ul {
    /* border: red solid 1px; */
    list-style: none;
    width: 320px;
    height: 120px;
    margin-top: 25px;
    margin-left: 23px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
}

#foodPhoto>img {
    width: 140px;
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
}

#love {
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
}
</style>