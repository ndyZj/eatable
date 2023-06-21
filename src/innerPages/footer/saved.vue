<template>
    <div id="saved">
        <div id="profile">
            <ul>
                <li id="circlePhoto"></li>
            </ul>
            <ul>
                <li id="userName">User Name</li>
                <li id="email">Name@gmail.com</li>
                <li id="setting">Settings</li>
            </ul>
        </div>
        <div id="menuBtn">
            <ul>
                <li>My Recipe</li>
                <li>Saved Recipe</li>
            </ul>
        </div>
        <div id="content">
            <ul>
                <li id="foodPhoto"><img src="../../assets/Image/food10.jpg"></li>
                <li>recipe name 1</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
#saved {
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
#menuBtn{
    width: 100%;
    height: 45px;
    background-color: #2f6d22;
}
#menuBtn>ul>li{
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
#menuBtn>ul>li:nth-child(2){
    font-weight: bold;
    border-bottom: #7bae63 solid 4px;
}
#content{
    width: 100%;
    height: auto;
    background-color: #7bae63;
    padding-bottom: 50px;
    padding-top: 30px;
}
#content>ul{
    border: red solid 1px;
    list-style: none;
    width: 320px;
    height: 120px;
    margin-left:20px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 3px;
}
#foodPhoto>img{
    width: 140px;
    height: 100px;
    margin-top: 10px;
    margin-left: 10px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
}
</style>