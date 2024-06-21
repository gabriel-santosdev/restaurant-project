<template>
    <img class="logo" src="../assets/logo-restaurant.png" />
    <h1 class="text">Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter E-mail" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginPage',
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        const login = async () => {
            try {
                let result = await axios.get(`http://localhost:3000/users?email=${email.value}&password=${password.value}`);

                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    router.push({ name: 'HomePage' });
                }
                console.warn(result);
            } catch (error) {
                console.error("Login failed:", error);
            }
        };

        onMounted(() => {
            let user = localStorage.getItem('user-info');
            if (user) {
                router.push({ name: 'HomePage' });
            }
        });

        return {
            email,
            password,
            login
        }
    }
}
</script>
