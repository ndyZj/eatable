<template>
    <div id="saved">
        <ul>
            <li id="circlePhoto"></li>
        </ul>
        <ul>
            <li id="userName">User Name</li>
            <li id="email">Name@gmail.com</li>
            <li id="setting">
                <img src="../../assets/Icon/setting.svg">Settings
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
#saved{
    width: 100%;
    height: 500px;
    background-color: white;
    overflow: scroll;
}
::-webkit-scrollbar{
    display: none;
}
#circlePhoto{
    border-radius: 50%;
    background-color: lightgray;
    width: 100px;
    height: 100px;
    margin-top: 25px;
    margin-left: 25px;
    list-style: none;
}
#userName{
    font-weight: bold;
    width: 180px;
    list-style: none;
    border: red solid 1px;
    position: relative;
    bottom: 85px;
    left: 150px;
}
#email{
    font-size: 14px;
    width: 180px;
    list-style: none;
    border: red solid 1px;
    position: relative;
    bottom: 80px;
    left: 150px;
}
#setting{
    font-size: 14px;
    width: 100px;
    height: 25px;
    list-style: none;
    border: red solid 1px;
    position: relative;
    bottom: 80px;
    left: 150px;
    background-color: lightgray;
    border-radius: 10px;
    /* text-align: center; */
    /* line-height: 25px; */
    padding-top: 2px;
    padding-bottom: 5px;
}
#setting > img{
    width: 20px;
    margin-right: 10px;
    margin-top: 5px;
}
</style>