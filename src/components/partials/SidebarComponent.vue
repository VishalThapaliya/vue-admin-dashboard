<script>
    export default {
        name: "SideBarComponent",
        data() {
            return {
                isActive_id: 1,
                menus: [
                    {id: 1, name: 'Home', icon: 'fa-home', redirect: '/', color: '#f44800', class: 'active'},
                    {id: 2, name: 'Health', icon: 'fa-heart-pulse', redirect: '/health', color: '#c80707c7', class: ''},
                    {id: 3, name: 'Logs', icon: 'fa-file-waveform', redirect: '/logs', color: '#f44336', class: ''},
                    {id: 4, name: 'Log level', icon: 'fa-file-pen', redirect: '/log-level', color: '#f56324', class: ''},
                    {id: 5, name: 'License', icon: 'fa-key', redirect: '/license', color: '#bb2020', class: ''},
                    {id: 6, name: 'Settings', icon: 'fa-gear', redirect: '/settings', color: '#7437e7ab', class: ''},
                ]
            }
        },
        methods: {
            /*
            sidebarToggle() {
                let list = document.querySelectorAll('.list');
                
                list.forEach(item, () => {
                    
                    item.classList.remove('active');
                    this.isActive.classList.add('active');
                })
            }
            */
        },
        computed: {
            customMenu() {
                return this.menus.map(menu => {
                    menu.class = this.isActive_id === menu.id ? 'active' : '';
                    return menu;
                })
            }
        }
    }
</script>

<template>
    <aside class="navigation active">
        <ul>
            <li v-for="menu in customMenu" 
                :key="menu.id" class="list" 
                :id="menu.id" 
                :class="menu.class" 
                @click="isActive_id = menu.id">
                <a href="#" :style="'--clr:' + menu.color">
                    <span class="icon">
                        <font-awesome-icon v-bind:icon="fa-solid + ' ' + menu.icon"  />
                    </span>
                    <span class="text">
                        {{ menu.name }}
                    </span>
                </a>
            </li>
            <!--
            <li class="list active" @click="sidebarToggle">
                <a href="#" style="--clr:#f44336;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-home" />
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>

            <li class="list">
                <a href="#" style="--clr:#ffa117;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </span>
                    <span class="text">Health</span>
                </a>
            </li>

            <li class="list">
                <a href="#" style="--clr:#0fc70f;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </span>
                    <span class="text">Logs</span>
                </a>
            </li>

            <li class="list">
                <a href="#" style="--clr:#2196f3;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </span>
                    <span class="text">Log level</span>
                </a>
            </li>

            <li class="list">
                <a href="#" style="--clr:#b145e9;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </span>
                    <span class="text">License</span>
                </a>
            </li>

            <li class="list">
                <a href="#" style="--clr:#f44336;">
                    <span class="icon">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </span>
                    <span class="text">Settings</span>
                </a>
            </li>
            -->
        </ul>
    </aside>
</template>

<style>

.navigation {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 75px;
    background: var(--color-background-blue);
    inset: 60px 0 0 0;
    padding-top: 20px;
    transition: 0.5s;
    z-index: 1;
}

.navigation.active {
    width: 250px;
}

.navigation ul {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.navigation ul li {
    list-style: none;
    position: relative;
    width: 100%;
    height: 50px;
    border-radius: 12px;
    border: 8px solid transparent;
    transition: 0.5s;
}

.navigation ul li.active {
    transform: translateX(30px);
    background-color: var(--vt-c-white-mute);
}

.navigation ul li::before {
    content: '';
    position: absolute;
    top: -28px;
    right: -10px;
    height: 20px;
    width: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 6px 0 5px var(--vt-c-white-mute);
    transform: scale(0);
    transform-origin: bottom right;
    transition: 0.6s;
}

.navigation ul li.active::before {
    right: 22px;
    transform: scale(1);
}

.navigation ul li::after {
    content: '';
    position: absolute;
    bottom: -28px;
    right: -10px;
    height: 20px;
    width: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 6px -4px 0 2px var(--vt-c-white-mute);
    transform: scale(0);
    transform-origin: bottom right;
    transition: 0.6s;
}

.navigation ul li.active::after {
    right: 22px;
    transform: scale(1);
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 32px;
    text-align: center;
    text-decoration: none;
    z-index: 100;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 40px;
    height: 40px;
    border-radius: 10px;
    line-height: 30px;
    border: 6px solid transparent;
    transition: 0.5s;
    font-size: 20px;
    color: var(--vt-c-white-soft);
}

.navigation ul li.active a .icon {
    background-color: var(--clr);
    color: var(--vt-c-white-mute);
}

.navigation ul li a .icon::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    filter: blur(8px);
    opacity: 0;
    transition: 0.5s;
}

.navigation ul li.active a .icon::before {
    opacity: 0.5;
}

.navigation ul li a .icon::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 7px;
    left: -50px;
    background-color: var(--clr);
    border: 4px solid var(--vt-c-white-mute);
    border-radius: 50%;
}

.navigation ul li a .text {
    position: relative;
    padding: 0 15px;
    color: var(--vt-c-white-mute);
    display: flex;
    align-items: center;
    height: 60px;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}

.navigation.active ul li a .text {
    visibility: visible;
    opacity: 1;
}

.navigation ul li.active a .text {
    color: var(--color-background-blue);
}
</style>