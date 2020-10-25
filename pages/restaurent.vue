<template>
    <div>
        <h1>restaurent</h1>
        <Select @change="selectedFood = $event" :optionArray="foodOptions"/>
        <AppRestaurentInfo :dataSource="filterArray"/>
    </div>
</template>

<script>
    import AppRestaurentInfo from '@/components/AppRestaurentInfo.vue';
    import Select from '@/components/Select.vue';
    import { mapState } from "vuex";

    export default {
        data() {
            return{
                foodOptions: ['takos', 'All that and Dim Sum', 'burgur'],
                selectedFood: "",     
            }
        },
        components: {
            AppRestaurentInfo,
            Select
        },
        computed: {
            ...mapState(["fooddata"]),
            filterArray(){
                if(this.selectedFood){
                    return this.fooddata.filter(el => {
                        let name = el.name.toLowerCase();
                        console.log('name', name);
                        console.log('this.selectedFood', this.selectedFood);
                        return name.includes(this.selectedFood.toLowerCase());
                    })
                }
                return this.fooddata;
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>