<template>
    <div id="draft">
        <div id="title">Recipes Draft</div>
        <ul>
                <li id="list">
                    <ul id="listText">
                        <li>Recipe Name 1</li>
                        <li>Last edited: dd/mm/yyyy</li>
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
                        <li>Recipe Name 2</li>
                        <li>Last edited: dd/mm/yyyy</li>
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

</template>

<script>

</script>

<style>
#draft{
    width: 100%;
    height: 500px;
    background-color: white;
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
    width: 300px;
    height: 90px;
    margin-left: 23px;
    margin-top: 25px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 15px;
    line-height: 25px;
}
#listText {
    list-style: none;
    margin-left: 10px;
    margin-top: 13px;
    float: left;
    font-size: 14px;
}
#listText>li:nth-child(1){
    font-size: 17px;
    font-weight: bold;
}
#editBtn {
    width: 25px;
    height: auto;
    position: relative;
    left: 55px;
    top: 25px;
    float: left;
}

#deleteBtn {
    width: 25px;
    height: auto;
    position: relative;
    left: 70px;
    top: 25px;
    float: left;
}
</style>
