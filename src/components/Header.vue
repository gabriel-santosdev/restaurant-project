<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <div class="navbutton">
            <a href="#" @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    setup() {
        const router = useRouter();

        // Função de logout
        const logout = () => {
            console.warn('logout');
            localStorage.clear();
            router.push('/login');
        };

        // Retorna a função logout para ser usada no template
        return {
            logout
        };
    }
}
</script>

<style>
.nav {
    background-color: #F28F38;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: "Open sans", sans-serif;
    text-align: center;
    margin-right: 5px;
}

.nav a:hover {
    background: #F2AE30;
    color: #0D0D0D;
}

.navbutton {
    display: flex;
    justify-content: flex-end;
}
</style>