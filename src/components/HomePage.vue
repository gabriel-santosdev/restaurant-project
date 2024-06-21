<template>
    <h1>Hi User, Welcome on Home Page</h1>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
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
