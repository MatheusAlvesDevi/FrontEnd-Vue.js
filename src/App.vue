<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <div class="container">
        <RouterView />
    </div>
    
</template>
<script>
    export default {
        name: "app"
    };
</script>