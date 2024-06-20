<template>
    <img class="logo" src="../assets/logo-restaurant.png" />
    <h1 class="text">Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter E-mail" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
    </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'SignUp',
    setup() {
        const name = ref('');
        const email = ref('');
        const password = ref('');

        const signUp = async () => {
            // console.warn("signup", name.value, email.value, password.value)
            let result = await axios.post("http://localhost:3000/users", {
                name: name.value,
                email: email.value,
                password: password.value
            });

            console.warn(result);

            if (result.status === 201) {
                alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data));
            }
        }

        return {
            name,
            email,
            password,
            signUp
        }
    }
}
</script>

<style>
.logo {
    width: 150px;
    margin-bottom: -50px
}

.text {
    color: #0D0D0D;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #F28F38;
}

.register button {
    font-family: "Open sans", sans-serif;
    font-weight: bold;
    font-size: 14px;
    width: 320px;
    height: 40px;
    border: 1px solid #F28F38;
    color: #0D0D0D;
    background-color: #F2AE30;
    cursor: pointer;
}
</style>