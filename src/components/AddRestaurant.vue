<template>
    <Header />
    <h1>Hi User, Welcome on Add Restaurant Page</h1>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Header from './Header.vue';

export default {
    name: 'AddRestaurant',
    components: {
        Header
    },
    setup() {
        const router = useRouter();

        onMounted(() => {
            let user = localStorage.getItem('user-info');
            if (!user) {
                router.push({ name: 'SignUp' });
            }
        });
    }
}
</script>
