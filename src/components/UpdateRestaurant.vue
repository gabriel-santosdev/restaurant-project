<template>
    <Header />
    <h1>Hi User, Welcome on Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Adrres" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button type="button" @click="updateRestaurant">
            Update Restaurant
        </button>
    </form>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

import Header from './Header.vue';

export default {
    name: 'UpdateRestaurant',
    components: {
        Header
    },
    setup() {
        const router = useRouter();

        const route = useRoute()

        const restaurant = reactive({
            name: '',
            address: '',
            contact: ''
        })

        const updateRestaurant = async () => {
            const result = await axios.put("http://localhost:3000/restaurants/" + route.params.id, {
                name: restaurant.name,
                address: restaurant.address,
                contact: restaurant.contact
            })

            if (result.status == 200) {
                router.push({ name: 'HomePage' })
            }
        }

        onMounted(async () => {
            let user = localStorage.getItem('user-info');
            if (!user) {
                router.push({ name: 'SignUp' });
            }

            const result = await axios.get("http://localhost:3000/restaurants/" + route.params.id)
            // Atualize todas as propriedades do objeto reativo usando Object.assign
            Object.assign(restaurant, result.data)
        });

        return {
            restaurant,
            updateRestaurant
        }
    }
}
</script>
