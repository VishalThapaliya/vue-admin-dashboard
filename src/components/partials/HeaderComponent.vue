<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {
                "headerTitle": `Applications Manager`,
                "userName": `walter.bates@acme.com`
            }
        }
    }
</script>

<template>
    <header>
        <div class="title">
            <span class="toggle">
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
        max-width: 100vW;
        width: 100vW;
        height: 3.5rem;
        background: var(--color-background-blue);
        color: var(--vt-c-white);
        display: flex;
        align-items: center;
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