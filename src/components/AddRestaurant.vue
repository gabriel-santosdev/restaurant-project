<template>
    <Header />
    <h1>Hi User, Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Adrres" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button type="button" @click="addRestaurant">
            Add new Restaurant
        </button>
    </form>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Header from './Header.vue';
import axios from 'axios';

export default {
    name: 'AddRestaurant',
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

        const addRestaurant = async () => {
            console.warn(restaurant)
            const result = await axios.post("http://localhost:3000/restaurants", {
                name: restaurant.name,
                address: restaurant.address,
                contact: restaurant.contact
            })

            if (result.status == 201) {
                router.push({ name: 'Home' })
            }
        }
        onMounted(() => {
            let user = localStorage.getItem('user-info');
            if (!user) {
                router.push({ name: 'SignUp' });
            }
        });

        return {
            restaurant,
            addRestaurant,
        }
    }
}
</script>
