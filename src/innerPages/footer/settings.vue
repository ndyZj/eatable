<template>
    <div id="settings">
        <div id="profile">
            <ul>
                <li id="circlePhoto"></li>
            </ul>
            <ul id="picBtn">
                <button>Upload new picture</button>
                <button>Delete picture</button>
            </ul>
        </div>
        <div id="userData">
            <ul>
                <li>First name</li>
                <input type="text" placeholder="User">
            </ul>
            <ul>
                <li>Last name</li>
                <input type="text" placeholder="Name">
            </ul>
            <ul>
                <li>Email</li>
                <input type="text" placeholder="name@gmail.com">
            </ul>
            <ul>
                <li>Password</li>
                <input type="text" placeholder="********">
            </ul>
        </div>
        <div>
            <button id="save">Save changes</button>
        </div>
    </div>
</template>

<script>

</script>

<style>
#settings {
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
    width: 120px;
    height: 120px;
    margin-top: 25px;
    margin-left: 25px;
    list-style: none;
}
#picBtn > button{
    background-color: #f27c00;
    color: white;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    margin-left: 170px;
    /* margin-top: 10px; */
}
#picBtn > button:nth-child(1){
    position: relative;
    bottom: 95px;
}
#picBtn > button:nth-child(2){
    position: relative;
    bottom: 85px;
}
#userData > ul >li{
    margin-left: 35px;
    list-style: none;
    margin-top: 10px;
    font-size: 14px;
}
#userData > ul:nth-child(1) >li{
    margin-top: -30px;
}
#userData > ul > input{
    margin-left: 35px;
    margin-bottom: 10px;
    background-color: rgb(233, 232, 232);
    border: none;
    width: 260px;
    height: 40px;
    border-radius: 5px;
    padding-left: 15px;
}
#save{
    background-color: #f27c00;
    color: white;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 35px;
    font-size: 12px;
    font-weight: bold;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 110px;
    margin-bottom: 30px;
}
</style>