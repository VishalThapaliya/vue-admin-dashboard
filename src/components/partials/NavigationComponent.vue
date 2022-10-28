<script>
    export default({
        name: "NavigationComponent",
        data() {
            return {
                headerTitle: `Apps Manager`,
                hovered: false,
                navigations: [
                    {id:1, title: 'Apps Manager', name: 'home-outline'},
                    {id:2, title: 'Dashboard', name: 'home-outline'},
                    {id:3, title: 'Deployments', name: 'home-outline'},
                    {id:4, title: 'Codes', name: 'home-outline'},
                    {id:5, title: 'Projects', name: 'home-outline'},
                    {id:6, title: 'Releases', name: 'home-outline'},
                    {id:7, title: 'Settings', name: 'home-outline'},

                ]
            }
        },
        methods: {
            activeLink() {
                let list = document.querySelectorAll('.navigation li');
                console.log("list", list);
                /*
                list.forEach((item) => {
                    item.classList.remove('hovered');
                    this.classList.add('hovered');
                } 
                */ 
            } 
        }

    })
</script>

<template>
    
    <section class="navigation">

        <ul>
            <li 
                v-for="navigation in navigations" 
                :key="navigation.id"
                @mouseenter="hovered = true"
                @mouseout="hovered = false"
                class="">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>

                    <span class="title">{{ navigation.title }}</span>
                </a>
            </li>
        </ul>
    </section>
    
</template>

<style>

/*==================== NAVIGATION =========================*/
.navigation {
    position: fixed;
    width: 15%;
    height: 100%;
    background-color: var(--color-background-blue);
    border-left: 10px solid var(--color-background-blue);
    transition: 0.5s;
    overflow: hidden;
}

.navigation.active {
    width: 100px;
}

.navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.navigation ul li {
    position: relative;
    width: 100%;
    list-style: none;
    border-radius: 30px 0 0 30px;
}

.navigation ul li:hover,
.navigation ul li.hovered {
    background: var(--vt-c-white);
}

.navigation ul li:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }

.navigation ul li a {
    position: relative;
    display: flex;
    width: 100%;
    color: var(--vt-c-white);
    text-decoration: none;
}

.navigation ul li:hover a,
.navigation ul li.hovered a {
    color: var(--color-background-blue);
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
}

.navigation ul li a .icon .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.navigation ul li a .icon ion-icon {
    font-size: 1.75rem;
}

.navigation ul li a .title {
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
}

/*==================== NAVIGATION CURVE BORDER =========================*/
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before {
    content: '';
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0 10px var(--vt-c-white);
    pointer-events: none;
}

.navigation ul li:hover a::after,
.navigation ul li.hovered a::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px var(--vt-c-white);
    pointer-events: none;
}

@media screen and (max-width: 991px) {
    .navigation {
        left: -15%;
    }
    
    .navigation.active {
        width: 15%;
        left: 0;
    }
}

@media screen and (max-width: 480px) {
    .navigation {
        width: 100%;
        left: -100%;
        z-index: 1000;
    }
    
    .navigation.active {
        width: 100%;
        left: 0;
    }
}
</style>