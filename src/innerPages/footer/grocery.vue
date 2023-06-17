<template>
    <div id="grocery">
        <!-- <ul>
            <li>
                <router-view to="/simpleBanner"></router-view>
            </li>
        </ul> -->
        <my-banner />
        <ul>
            <li><router-link to="/grocery">Grocery</router-link></li>
            <li><router-link to="/inventory">Inventory</router-link></li>
        </ul>
        <button>Create new Grocery List</button>
        <div>
            <ul>
                <li>list1</li>
                <li>list2</li>
            </ul>
        </div>
    </div>
</template>

<script>
import backBanner from '../footer/backBanner.vue';


export default ({
    components:{
    'my-backBanner' : backBanner
    // router
    },
    
    name: 'grocery',
    data() {
        return {
            
        }
    }
})

</script>

<style scoped>
#grocery{
    width: 100%;
    height: 640px;
    background-color: wheat;
}
</style>