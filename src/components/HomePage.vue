<template>
    <Header />
    <h1>Hi {{ name }}, Welcome on Home Page</h1>
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
                <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import Header from './Header.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        Header
    },
    setup() {
        const router = useRouter();

        const name = ref('');
        const restaurant = ref([]);

        const deleteRestaurant = async (id) => {
            let result = await axios.delete("http://localhost:3000/restaurants/" + id)

            if (result.status == 200) {
                loadData()
            }
        }

        const loadData = async () => {
            let user = localStorage.getItem('user-info');
            name.value = JSON.parse(user).name;
            if (!user) {
                router.push({ name: 'SignUp' });
            }

            let result = await axios.get("http://localhost:3000/restaurants")
            restaurant.value = result.data;
        }

        onMounted(async () => {
            await loadData()
        });

        return {
            name,
            restaurant,
            deleteRestaurant,
            loadData
        }
    }
}
</script>
<style>
table {
    align-items: center;
}

td {
    width: 160px;
    height: 40px;
}
</style>
