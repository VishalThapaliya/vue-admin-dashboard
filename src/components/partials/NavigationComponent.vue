<script>
/**
    export default({
        name: "NavigationComponent",
        data() {
            return {
                headerTitle: `Apps Manager`,
                hovered: false,
                monitorings: [
                    {id: 1, title: 'Health', icon: 'fa-heart-pulse'},
                    {id: 2, title: 'Logs', icon: 'fa-file-waveform'}
                ],
                administrations: [
                    {id: 1, title: 'Log level', icon: 'fa-file-pen'},
                    {id: 2, title: 'License', icon: 'fa-key'}
                ]
            }
        },
        methods: {
            activeLink() {
                let list = document.querySelectorAll('.navigation li');
                console.log("list", list);
                
            }
        }
    
    })
*/
</script>

<template>

    <aside class="navigation">
        <div class="dashboard">
            <a href="#" style="--clr:#ffa117;">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-house" />
                </span>
                <span class="text">
                    Dashboard
                </span>
                
            </a>
        </div>
        
        <div class="monitoring">
            <h3>Monitoring</h3>
            <ul>
                <li v-for="monitoring in monitorings" :key="monitoring.id" @mouseenter="hovered = true" @mouseout="hovered = false">
                    <a href="#">
                        <span class="icon">
                            <font-awesome-icon v-bind:icon="fa-solid + ' ' + monitoring.icon"  />
                        </span>
                        
                        <span class="text">{{ monitoring.title }}</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="administration">
            <h3>Administration</h3>
            <ul>
                <li v-for="admin in administrations" :key="admin.id" @mouseenter="hovered = true" @mouseout="hovered = false">
                    <a href="#">
                        <span class="icon">
                            <font-awesome-icon v-bind:icon="fa-solid + ' ' + admin.icon" />
                        </span>
                        
                        <span class="text">{{ admin.title }}</span>
                    </a>
                </li>
            </ul>
        </div>

    </aside>
    
</template>

<style>



/*==================== NAVIGATION =========================*/
/*
.navigation {
    position: absolute;
    width: 5rem;
    height: calc(100vh - 4rem);
    background-color: var(--color-background-blue);
    border-left: 10px solid var(--color-background-blue);
    transition: 0.5s;
    overflow: hidden;
    top: 4rem;
    padding: 1rem 0;
    font-size: 2rem;
}

.navigation.active {
    width: 13rem;
    font-size: 1.15rem;
}

.navigation .dashboard {
    width: 100%;
    padding: 0.5rem 0;
}

.navigation .dashboard a {
    text-decoration: none;
    color: var(--vt-c-white);
    line-height: 1.5;

}

.navigation .dashboard a .text,
.navigation .monitoring a .text,
.navigation .administration a .text,
.navigation .monitoring h3,
.navigation .administration h3 {
    position: relative;
   /* padding: 0 15px;*/
   /* color: var(--background-dark);
    align-items: center;
    opacity: 0;
    display: none;
    transition: 0.5s;
    display: none;
    text-align: center;
    padding-left: 0.5rem;
}
*/
/*
.navigation .monitoring h3,
.navigation .administration h3 {
    padding: 0;
}

.navigation.active .dashboard a .text,
.navigation.active .monitoring a .text,
.navigation.active .administration a .text,
.navigation.active .monitoring h3,
.navigation.active .administration h3 {
    display: inline-block;
    opacity: 1;
    transition: display 0.5s;
}

.navigation .monitoring,
.navigation .administration {
    border: 1px solid;
    /*
    position: relative;
    top: 1rem;
    margin-top: 0.5rem;
    */
   /* color: var(--vt-c-white);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
*/

/*
.navigation .monitoring ul,
.navigation .administration ul {
    width: 100%;
}

.navigation .monitoring ul li,
.navigation .administration ul li {
    position: relative;
    width: 100%;
    list-style: none;
    border-radius: 30px 0 0 30px;
    padding: 0.5rem;
}

.navigation .monitoring ul li:hover,
.navigation .monitoring ul li.hovered,
.navigation .administration ul li:hover,
.navigation .administration ul li.hovered {
    background: var(--vt-c-white-mute);
}

.navigation .monitoring ul li a,
.navigation .administration ul li a {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: var(--vt-c-white-mute);
    text-decoration: none;
}

.navigation .monitoring ul li:hover a,
.navigation .monitoring ul li.hovered a,
.navigation .administration ul li:hover a,
.navigation .administration ul li.hovered a {
    color: var(--color-background-blue);
}
*/
/*
.navigation ul {
    position: absolute;
    top: 3rem;
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
    background: var(--vt-c-white-mute);
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
    font-size: 1rem;
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
*/
/*==================== NAVIGATION CURVE BORDER =========================*/
/*
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before {
    content: '';
    position: absolute;
    right: -8px;
    top: -58px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0 10px var(--vt-c-white-mute);
    pointer-events: none;
}

.navigation ul li:hover a::after,
.navigation ul li.hovered a::after {
    content: '';
    position: absolute;
    right: -8px;
    bottom: -58px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px var(--vt-c-white-mute);
    pointer-events: none;
}

@media screen and (max-width: 991px) {
    .navigation {
        left: -15%;
    }
    
    .navigation.active {
        width: 13rem;
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

*/
</style>