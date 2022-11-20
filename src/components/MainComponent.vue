<script>
    export default {
        name: `MainComponent`
    }
</script>

<template>
    <main class="main">

    </main>
</template>

<style>

.main {
    position: absolute;
    width: calc(100vw - 250px);
    min-height: 100vh;
    background: var(--vt-c-white-mute);
    left: 250px;
    transition: 0.5s;
}

.main.active {
    width: calc(100vw - 75px);
    left: 75px;
}

@media screen and (max-width: 991px) {
    .main {
        width: 100vw;
        left: 0;
    }
}

@media screen and (max-width: 480px) {
    .main.active {
        left: 0;
    }

    .main.active .toggle {
        position: fixed;
        right: 0;
        left: initial;
        color: var(--vt-c-white);
    }
}
</style>