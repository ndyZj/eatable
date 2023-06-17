<!-- <template>
    <div id="containerDiv"> -->
        <!-- {{ message }} -->
        <!-- <div id="foodPic" v-for="item in items" :key="item.imageName">
            <myImage  
                :imageName="item.imageName"
                :imageSrc="item.imageSrc">
            </myImage>
        </div> -->
        <!-- <div id="slider">
            <ul>
                <li id="slideNumber">1/3</li>
                <li><img src="../../assets/Image/food1.jpg"></li>
                <li id="caption">caption text</li>
            </ul>
            <ul>
                <li id="slideNumber">2/3</li>
                <li><img src="../../assets/Image/food2.jpg"></li>
                <li id="caption">caption text</li>
            </ul>
            <ul>
                <li id="slideNumber">3/3</li>
                <li><img src="../../assets/Image/food3.jpg"></li>
                <li id="caption">caption text</li>
            </ul>
        </div>
        <div id="button">
            <ul>
                <a id="prev" onclick="plusSlide(-1)">&#10094;</a>
                <a id="next" onclick="plusSlide(1)">&#10095;</a>
            </ul>
        </div>
        <div style="text-align: center;">
            <span id="dot" onclick="currentSlide(1)"></span>
            <span id="dot" onclick="currentSlide(2)"></span>
            <span id="dot" onclick="currentSlide(3)"></span>
        </div> -->
    <!-- </div>
</template> -->

<template>
    <div>
        <!-- <Transition name="slider">
            <img class="slide-image" :src="getImg(images[0])">
        </Transition> -->
        <TransitionGroup name="fade" tag="div">
            <div id="slider" v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg">
                <!-- <img v-bind:src="image" alt=""> -->
            </div>
        </TransitionGroup>
        <a id="prev" @click="prev" href="#">&#10094;</a>
        <a id="next" @click="next" href="#">&#10095;</a>
    </div>
</template>

<script>
//import myImage from './contentFun.vue'
//const imgLink = require('../../assets/Image/food1.jpg')

export default {
    // components: {
    //     myImage
    // },
    name: "slider",
    data() {
        return {
            //message: "food",
            // items: [
            //     { imageName: 'food1', imageSrc: './assets/Image/food1.jpg' },
            //     { imageName: 'food2', imageSrc: './assets/Image/food2.jpg' },
            //     { imageName: 'food3', imageSrc: './assets/Image/food3.jpg' }
            // ],
            images: [
                require('../../assets/Image/food1.jpg'),
                require('../../assets/Image/food2.jpg'),
                require('../../assets/Image/food3.jpg')
                // '../../assets/Image/food1.jpg',
                // "../../assets/Image/food2.jpg",
                // "../../assets/Image/food3.jpg"
            ],
            // image: imgLink,
            timer: null,
            currentIndex: 0
        };
    },
    mounted: function () {
        this.startSlide();
    },
    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 50000); //remove one 0
        },
        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        }
    },
    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }

};
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlide(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     let i;
//     let slides = document.getElementById("slider");
//     let dots = document.getElementById("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++){
//         dots[i].id= dots[i].id.replace (" active", "");
//     }
//     slides[slideIndex-1].style.display= "block";
//     dots[slideIndex-1].id += " active";
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementById ("slider");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

</script>

<style scoped>
img {
    height: 220px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

#next {
    /* border: purple solid 1px; */
    color: white;
    text-decoration: none;
    position: relative;
    bottom: 126px;
    left: 315px;
    /* margin-top: -260px;
    margin-left: 320px; */
    padding-top: 102px;
    padding-bottom: 102px;
    padding-left: 6px;
    padding-right: 6px;
    background-image: linear-gradient(to left, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0));

}

#prev {
    /* border: purple solid 1px; */
    color: white;
    text-decoration: none;
    position: relative;
    bottom: 126px;
    /* margin-top: -250px; */
    padding-top: 102px;
    padding-bottom: 102px;
    padding-left: 6px;
    padding-right: 6px;
    background-image: linear-gradient(to right, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0));
}
</style>