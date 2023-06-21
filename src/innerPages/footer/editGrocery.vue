<template>
    <div id="edit">
        <div id="date">dd/mm/yyyy</div>
        <ul>
            <li id="listLabel">Ingredients List</li>
            <ul id="addItems">
                <li id="circle"></li>
                <li><input type="text" id="items"></li>
            </ul>
            <button id="addButton">+</button>
        </ul>

        <ul>
            <li id="listLabel">Not food related list (optional)</li>
            <ul id="addItems">
                <li id="circle"></li>
                <li><input type="text" id="items"></li>
            </ul>
            <button id="addButton">+</button>
        </ul>
        <button id="saveBtn" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
            Save
        </button>
        <button id="delBtn" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
            Delete
        </button>
    </div>
</template>

<script>
    export default ({
    methods: {
        hasHistory() {
            return window.history.length > 2
        }
    }
})
</script>

<style scoped>
#edit{
    width: 100%;
    height: 500px;
    background-color: white;
}
#date{
    width: 100%;
    height: 50px;
    background-color: #2f6d22;
    color: white;
    text-align: center;
    line-height: 50px;
}
#listLabel{
    width: 315px;
    height: 38px;
    line-height: 38px;
    margin-top: 15px;
    margin-left: 10px;
    padding-left: 20px;
    border-radius: 5px;
    font-size: 14px;
    list-style: none;
    background-color: rgb(123, 174, 99, 0.7);
}
#circle{
    border: black solid 2px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 20px;
    list-style: none;
    float: left;
}
#addItems{
    list-style: none;
}
#items{
    width: 250px;
    height: 20px;
    list-style: none;
    margin-left: 10px;
    margin-top: 10px;
    border: lightgrey solid 2px;
    border-radius: 5px;
}
#addButton{
    width: 250px;
    height: 20px;
    list-style: none;
    margin-left: 58px;
    margin-top: 10px;
    border: lightgrey solid 2px;
    border-radius: 5px;
}
#saveBtn{
    width: 120px;
    height: 30px;
    background-color: #2f6d22;
    color: white;
    border-radius: 5px;
    border: none;
    position: relative;
    top: 170px;
    left: 45px;
}
#delBtn{
    width: 120px;
    height: 30px;
    background-color: #f27c00;
    color: white;
    border-radius: 5px;
    border: none;
    position: relative;
    top: 170px;
    left: 65px;
}
</style>