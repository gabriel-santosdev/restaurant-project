<template>
    <img class="logo" src="../assets/logo-restaurant.png" />
    <h1 class="text">Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter E-mail" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'SignUp',
    setup() {
        const name = ref('');
        const email = ref('');
        const password = ref('');

        const router = useRouter();

        const signUp = async () => {
            try {
                let result = await axios.post("http://localhost:3000/users", {
                    name: name.value,
                    email: email.value,
                    password: password.value
                });

                console.warn(result);

                if (result.status === 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    router.push({ name: 'HomePage' });
                }
            } catch (error) {
                console.error("Sign up failed:", error);
            }
        }

        onMounted(() => {
            let user = localStorage.getItem('user-info');
            if (user) {
                router.push({ name: 'HomePage' });
            }
        });

        return {
            name,
            email,
            password,
            signUp
        }
    }
}
</script>