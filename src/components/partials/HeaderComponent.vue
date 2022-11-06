<script>
    export default {
        name: 'HeaderComponent',
        props: {
            headerTitle: String
        },
        data() {
            return {
                username: 'walter.bates@acme.com',
                userOptions: [
                    {id: 1, icon: 'fa-gear', item: 'Settings'},
                    {id: 2, icon: 'fa-right-from-bracket', item: 'Logout'}
                ]
            }
        },
        methods: {
            toggleNavigation() {
                let navigation = document.querySelector('.navigation');
                let main = document.querySelector('.main');
                let dashboardMenu = document.querySelector('.navigation .dashboard a');
                
                navigation.classList.toggle('active');
                main.classList.toggle('active');
            },
            toggleUserActionc() {
                let userActionPopup = document.querySelector('.user-action-popup');

                userActionPopup.classList.toggle('active');
            }
        }
    }
</script>

<template>
    <header>
        <div class="title-container">
            <span class="toggle" @click="toggleNavigation">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </span>
            
            <a href="/" class="title">
                <h2>{{headerTitle}}</h2>
            </a>
            
        </div>

        <div class="user-info" @click="toggleUserActionc">
            
            <span class="user-icon-container">
                <font-awesome-icon icon="fa-solid fa-circle-user" />
            </span>
            
            <span class="username">
                <p> {{ username }} </p>
            </span>
            
            <span class="user-action-container">
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </span>

            <div class="user-action-popup">
                <ul>
                    <li v-for="option in userOptions" :key="option.id">
                        <a href="#">
                            <font-awesome-icon v-bind:icon="fa-solid + ' ' + option.icon"  />
                            {{ option.item }}
                        </a>
                    </li>
                </ul>    
            </div>

        </div>
    </header>
</template>

<style>
    header {
        position: fixed;
        display: flex;
        align-items: center;
        max-width: 100vW;
        width: 100vW;
        height: 4rem;
        background: var(--color-background-blue);
        color: var(--vt-c-white);
        z-index: 10;
    }

    header .title-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        width: 100%;
    }

    header .title-container .toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        cursor: pointer;
    }

    header .title-container .title {
        color: var(--vt-c-white);
        font-weight: 400;
        cursor: pointer;
        text-decoration: none;
    }

    header .title-container .title h2 {
        padding-left: 2rem;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
    }

    header .user-info {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        cursor: pointer;
    }

    header .user-info .user-icon-container {
        height: 2rem;
        width: 2rem;
    }

    header .user-info .user-icon-container .fa-circle-user {
        height: 100%;
        width: 100%;
    }

    header .user-info .username {
        padding: 0.5rem;
    }

    header .user-info .user-action-container {
        display: flex;
        align-items: center;
        font-size: 1rem;
        padding: 0.5rem;
    }

    header .user-info .user-action-popup {
        position: absolute;
        top: 5.25rem;
        height: 100%;
        width: 80%;
        background: var(--color-background-blue);
        border-radius: 0 0 0.5rem 0.5rem;
        display: none;
        box-shadow: 0 5px 5px 5px rgba(0,0,0,0.1);
    }

    header .user-info .user-action-popup.active {
        display: block;
    }

    header .user-info .user-action-popup ul li {
        list-style: none;
        padding: 0.5rem 1rem;
    }

    header .user-info .user-action-popup ul li a {
        color: var(--vt-c-white);
        text-decoration: none;
        cursor: pointer;
        display: block;
        padding-left: 0.75rem;
    }

    header .user-info .user-action-popup ul li a:hover {
        color: var(--color-background-blue);
        background: var(--vt-c-white);
        border-radius: 1rem;
    }

</style>