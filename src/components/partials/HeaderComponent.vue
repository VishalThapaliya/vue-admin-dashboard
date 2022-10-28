<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {
                "headerTitle": `Applications Manager`,
                "userName": `walter.bates@acme.com`
            }
        },
        methods: {
            toggleNavigation() {
                console.log('Clicked');
                let toggle = document.querySelector('.toggle');
                let navigation = document.querySelector('.navigation');
                let main = document.querySelector('.main');

                
                navigation.classList.toggle('active');
                main.classList.toggle('active');
            }
        }
    }
</script>

<template>
    <header>
        <div class="title">
            <span class="toggle" @click="toggleNavigation">
                <ion-icon name="menu-outline"></ion-icon>
            </span>
            <h2>{{headerTitle}}</h2>
        </div>

        <div class="user-details">
            {{ userName }}    
            
            <span class="icon">
                <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
        </div>
    </header>
</template>

<style>
    header {
        position: fixed;
        max-width: 100vW;
        width: 100vW;
        height: 4rem;
        background: var(--color-background-blue);
        color: var(--vt-c-white);
        display: flex;
        align-items: center;
        z-index: 10;
    }

    header .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1.5rem;
        width: 100%;
    }

    header .toggle {
        position: relative;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        cursor: pointer;
        z-index: 1000;
    }

    header .title h2 {
        padding-left: 1rem;
        font-weight: 600;
        cursor: pointer;
    }

    header .user-details {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
    }

    header .icon {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        padding: .5rem;
    }
</style>