<template>
    <section class="restaurantinfo">
        <div v-for="store in dataSource" :key="store.id">
            <h2>{{store.name}}</h2>
            <p>Delivery Time {{store.deliveryTime}}</p>
            <p>Rating {{store.rating}}</p>
            <p v-if="store.freeDelivery" class="label">
                <span>Free Delivery</span>
            </p>

            <div class="row">
                <div 
                    v-for="menuItem in store.menu"
                    :key="menuItem.id"
                    class="items"
                    :style="`background: url(${menuItem.img}) no-repeat center center`">
                    
                    <div class="iteminfo">
                        <div>
                            <h4>{{menuItem.item}}</h4>
                            <p>{{formatPrice(menuItem.price)}}</p>
                            <nuxt-link :to="`/items/${menuItem.id}`">
                                <button class="ghost">Veiw Item</button>
                            </nuxt-link>
                        </div>
                    </div>

                </div>

               
            </div>

        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        dataSource : {
            type: [Array, Object]
        }
    },
    computed: {
        ...mapState(['fooddata'])
    },
    methods: {
        formatPrice(item){
            return '$' + item.toFixed(2);
        }
    }
};
</script>

<style lang="scss" scoped>

</style>