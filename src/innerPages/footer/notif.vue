<template>
    <div id="notif">
        <ul id="title">
            <li>Notifications</li>
        </ul>
        <ul>
            <li id="list">
                <ul id="listText">
                    <li>Recipe name 1</li>
                    <li>Saved by user1</li>
                </ul>
            </li>
            <li id="list">
                <ul id="listText">
                    <li>Recipe name 2</li>
                    <li>Liked by user2</li>
                </ul>
            </li>
            <li id="list">
                <ul id="listText">
                    <li>Recipe name 2</li>
                    <li>Disliked by user3</li>
                </ul>
            </li>
            <li id="list">
                <ul id="listText">
                    <li>Recipe name 1</li>
                    <li>Congratulations! your recipe has been saved 100 times</li>
                </ul>
            </li>
            <li id="listRed">
                <ul id="listTextRed">
                    <li>Undo Delete?</li>
                </ul>
            </li>
        </ul>

        <!-- fake button -->
        <ul>
            <li id="clearBtn">
                <router-link to="" style="text-decoration: none; color: white;">
                    Clear All
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
#notif{
    width: 100%;
    height: 500px;
    background-color: white;
    overflow: scroll;
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
#list {
    background-color: rgb(123, 174, 99, 0.6);
    list-style: none;
    width: 285px;
    height: 90px;
    margin-left: 23px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 25px;
    margin-bottom: 25px;
}
#listRed {
    background-color:rgb(242, 124, 0, 0.6);
    list-style: none;
    width: 300px;
    height: 90px;
    margin-left: 23px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 25px;
}
#listText {
    list-style: none;
    margin-left: 10px;
    margin-top: 8px;
    float: left;
    font-size: 13px;
}
#listText>li:nth-child(1){
    font-size: 14px;
    font-weight: bold;
}
#listTextRed {
    list-style: none;
    float: left;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    left: 100px;
    top: 40px
}
#clearBtn {
    background-color: #f27c00;
    width: 250px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 10px;
    margin-left: 55px;
    margin-top: 25px;
    margin-bottom: 20px;
    list-style: none;
    font-size: 14px;
}
</style>