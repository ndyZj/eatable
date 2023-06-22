<template>
    <div id="recipe">
        <div id="recipeImg"><img src="../../assets/Image/food2.jpg"></div>
        <div id="recipeName">
            <ul>
                <li>Chicken Satay with Peanut Sauce</li>
                <li>Recipe by UserName</li>
                <li id="love"><img src="../../assets/Icon/love.svg"></li>
                <li id="dislike"><img src="../../assets/Icon/dislike.svg"></li>
            </ul>
        </div>
        <ul id="foodTag">
            <li>Dinner</li>
            <li>Chicken</li>
            <li>Peanut</li>
            <li>Indonesian</li>
        </ul>
        <div style="margin-left: 20px;">
            <ul style="list-style: none; font-weight: bold; margin-top: 20px;">
                <li>Ingredients:</li>
            </ul>
            <ul id="ingredient">
                <li>500 g chicken fillet, cut into 2 x 1 x 0.5 cm</li>
                <li>2 tbsp oil or melted butter</li>
                <li>15 pc bamboo skewers</li>
            </ul>
            <ul style="list-style: none; font-weight: bold; margin-top: 20px;">
                <li>Spice for the paste:</li>
            </ul>
            <ul id="ingredient">
                <li>6 pc shallots</li>
                <li>4 gloves garlic</li>
                <li>2 tsp coriander powder</li>
                <li>1 tsp roasted cumin or 1/2 tsp cumin powder</li>
                <li>1 tbsp sugar</li>
                <li>2 cm roasted turmeric or 1 tsp turmeric powder</li>
                <li>1 tsp tamarind pulp</li>
                <li>1 tsp salt or to taste</li>
            </ul>
            <ul style="list-style: none; font-weight: bold; margin-top: 20px;">
                <li>For peanut sauce:</li>
            </ul>
            <ul id="ingredient">
                <li>2 pc large red chillies, de-seeded, boiled</li>
                <li>4 pc small red chillies, boiled (optional)</li>
                <li>1 tsp sugar</li>
                <li>1 gloves garlic, boiled</li>
                <li>100 g roasted peanut, blended</li>
                <li>50 ml hot water</li>
                <li>3 tbsp Indonesian sweet soya sauce</li>
                <li>salt or to taste</li>
            </ul>
        </div>
        <div style="margin-left: 20px;">
            <ul style="list-style: none; font-weight: bold; margin-top: 20px;">
                <li>Instructions:</li>
            </ul>
            <ul id="instruction">
                <li>For Satay Marinade: Blend all ingredients for the spice paste in a food processor until smooth.</li>
                <li>For Satay: Put about 4 – 5 cubes of chicken meat on each bamboo skewer. Put aside.</li>
                <li>Rub the spice paste / sate marinade on the satays evenly. Let stand or store in the refrigerator for 1
                    hour to allow the flavors to blend.</li>
                <li>For Peanut Sauce: Blend all ingredients for the sauce in a food processor until smooth. (If necessery
                    add a little bit hot water to help the blending process).</li>
                <li>Put in a saucepan & add the blended peanut. Add the hot water & sweet soya sauce. Stir to mix.</li>
                <li>Adjust the taste, add salt to taste. (Warm up the sauce over a low heat before serving if necessary).
                </li>
                <li>Grill the satays on charcoal or under electric / gas grill. Turn them over to grill the other side until
                    both sides half / well cooked as you prefer.</li>
                <li>Serve hot with peanut sauce. Garnish with chopped bird chillies and shallots if you like it SPICY!</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style>
#recipe {
    width: 100%;
    height: 470px;
    padding-bottom: 30px;
    background-color: white;
    overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
}
#recipeImg > img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    /* border: red solid 1px; */
}
#recipeName {
    width: 100%;
    height: 80px;
    line-height: 60px;
    color: white;
    background-color: #2f6d22;
    margin-top: -5px;
    padding-left: 15px;
    
}
#recipeName >ul >li:nth-child(1) {
    width: 210px;
    height: 30px;
    line-height: 30px;
    padding-top: 10px;
    list-style: none;
    font-size: 12px;
    font-weight: bold;
    /* border: red solid 1px; */
}
#recipeName >ul >li:nth-child(2) {
    width: 210px;
    height: 30px;
    line-height: 30px;
    list-style: none;
    font-size: 12px;
    /* border: purple solid 1px; */
}
#love>img{
    /* border: blue solid 1px; */
    width: 30px;
    height: auto;
    float: left;
    margin-left: 240px;
    margin-top: -43px;
}
#dislike>img{
    /* border: blue solid 1px; */
    width: 30px;
    height: auto;
    float: left;
    margin-left: 290px;
    margin-top: -103px;
}
#foodTag > li{
    width: 65px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(123, 174, 99, 0.5);
    font-size: 12px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 15px;
    border-radius: 3px;
}

#ingredient {
    list-style: disc;
    font-size: 14px;
    margin-left: 25px;
    margin-top: 5px;
}

#instruction {
    list-style: decimal;
    font-size: 14px;
    margin-left: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 20px;
}
</style>