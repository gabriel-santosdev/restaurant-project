<template>
    <Header />
    <h1>Hi User, Welcome on Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Adrres" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button type="button" @click="addRestaurant">
            Update Restaurant
        </button>
    </form>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Header from './Header.vue';

export default {
    name: 'UpdateRestaurant',
    components: {
        Header
    },
    setup() {
        const router = useRouter();

        const restaurant = reactive({
            name: '',
            address: '',
            contact: ''
        })

        onMounted(() => {
            let user = localStorage.getItem('user-info');
            if (!user) {
                router.push({ name: 'SignUp' });
            }
        });

        return {
            restaurant
        }
    }
}
</script>
