<template>
    <div>
        <TransitionGroup  name="fade" tag="div">
            <div id="carouselPic" v-for="i in [firstIndex]" :key="i">
                <img :src="firstImg">
            </div>
            <div id="carouselPic" v-for="i in [secondIndex]" :key="i">
                <img :src="secondImg">
            </div>
            <div id="carouselPic" v-for="i in [thirdIndex]" :key="i">
                <img :src="thirdImg">
            </div>
        </TransitionGroup>
        <a id="prev" @click="prev" href="#">&#10094;</a>
        <a id="next" @click="next" href="#">&#10095;</a>
    </div>
</template>

<script>
export default {
    name: "carousel",
    data() {
        return {
            images: [
                require('../../assets/Image/food4.jpg'),
                require('../../assets/Image/food5.jpg'),
                require('../../assets/Image/food6.png'),
                require('../../assets/Image/food7.jpg'),
                require('../../assets/Image/food8.jpg'),
                require('../../assets/Image/food9.jpg'),
                require('../../assets/Image/food10.jpg')
            ],
            timer: null,
            firstIndex: 0,
            secondIndex: 1,
            thirdIndex: 2
        };
    },
    mounted: function () {
        this.startSlide();
    },
    methods: {
        next: function () {
            this.firstIndex += 1;
            this.secondIndex += 1;
            this.thirdIndex += 1;
        },
        prev: function () {
            this.firstIndex -= 1;
            this.secondIndex -= 1;
            this.thirdIndex -= 1;
        }
    },
    computed: {
        firstImg: function () {
            return this.images[Math.abs(this.firstIndex) % this.images.length];
        },
        secondImg: function () {
            return this.images[Math.abs(this.secondIndex) % this.images.length];
        },
        thirdImg: function () {
            return this.images[Math.abs(this.thirdIndex) % this.images.length];
        }
    }

};
</script>

<style scoped>
#carouselPic{
    display: inline-block;
    margin-inline: 2px;
    margin-top: 15px;
    margin-left: 7px;
}
img {
    height: 100px;
    width: 100px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    
}
#next{
    /* border: solid red 1px; */
    text-decoration: none;
    color: white;
    font-weight: bold;
    background-color: rgb(242, 125, 34, 0.7);
    border-radius: 50%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    bottom: 65px;
    left: 284px;
}
#prev{
    text-decoration: none;
    color: white;
    font-weight: bold;
    background-color: rgb(242, 125, 34, 0.7);
    border-radius: 50%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    bottom: 65px;
    right: 12px;
}
</style>