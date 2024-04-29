<template>

    <a v-if="link" :href="link" class="navbar-button">
        <div v-if="icon" :class="['icon', !text ? 'nomargin' : '']" v-html="icons[icon]"></div>
        <div v-if="text" class="text">{{ text }}</div>
    </a>

    <div v-else class="navbar-button">
        <div v-if="icon" :class="['icon', !text ? 'nomargin' : '']" v-html="icons[icon]"></div>
        <div v-if="text" class="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'NavbarButton',
    components: {
    },
    props: {
        icon: {
            type: String
        },
        text: {
            type: String
        },
        link: {
            type: String
        },
    },
    data() {
        return {
            icons: {
                menu: '<svg><path d="M0 0h16v2H0zM0 5h12v2H0zM0 10h16v2H0z"></path></svg>',
                search: '<svg><path d="M5.792 9.792c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm5.333 0l4.417 4.417-1.333 1.333-4.417-4.417v-.708l-.25-.25c-1 .875-2.333 1.375-3.75 1.375C2.584 11.542 0 9.001 0 5.792A5.78 5.78 0 0 1 5.792 0c3.209 0 5.75 2.583 5.75 5.792 0 1.417-.5 2.75-1.375 3.75l.25.25h.708z"></path></svg>',
                bell: '<svg style="transform: translateY(-3px) scale(1.2);" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>',
                premium: '<svg viewBox="0 0 20 20" style="transform: scale(1.2);"><path fill-rule="evenodd" d="M8.833 4h.234c1.7 0 2.133.86 2.133 2.927C11.2 8.995 10.767 9.6 9 9.6h-.2V4h.033zm2.294 6.09c2.236-.438 3.259-1.597 3.259-3.257 0-2.255-1.566-3.633-4.761-3.633H4.8v.658c.99.062 1.086.376 1.086 1.315v9.991c0 .908-.223 1.222-1.086 1.316v.657h5.208v-.657c-.862-.063-1.086-.408-1.086-1.316v-4.76h.287c.671 0 1.215.25 1.406.845.288.971.288 3.038.671 4.385.384 1.253 1.31 1.566 2.493 1.566.926 0 1.565-.282 1.821-.438l-.032-.658c-.799.188-1.118-.125-1.47-2.35-.351-2.41-1.182-3.288-2.971-3.664zM2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm-.2.8h16.4a1 1 0 011 1v16.4a1 1 0 01-1 1H1.8a1 1 0 01-1-1V1.8a1 1 0 011-1z"></path></svg>',
                login: '<svg viewBox="0 0 45 45" style="transform: translateY(-3px) scale(1.5);"><path d="M22.5 3.75c-10.313 0-18.75 8.437-18.75 18.75s8.438 18.75 18.75 18.75c10.313 0 18.75-8.438 18.75-18.75s-8.438-18.75-18.75-18.75zM6 22.5c0-9 7.313-16.5 16.5-16.5s16.5 7.313 16.5 16.5c0 3.938-1.313 7.5-3.563 10.313-2.813-1.5-5.813-2.25-9.188-2.25-5.062 0-9.75 2.062-13.312 5.25-4.125-3-6.938-7.875-6.938-13.312z"></path><path d="M31.875 22.5c0 3.107-2.518 5.625-5.625 5.625s-5.625-2.518-5.625-5.625c0-3.107 2.518-5.625 5.625-5.625s5.625 2.518 5.625 5.625z"></path></svg>'
            }
        };
    },
};
</script>

<style>
.navbar-button {
    height: 16px;
    width: fit-content;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 0 16px;
    cursor: pointer;
}

.navbar-button > .icon {
    height: 16px;
    width: 16px;
    margin-top: 4px;
    margin-right: 6px;
}

.navbar-button > .icon.nomargin {
    margin: 0;
}

.navbar-button svg {
    height: 16px;
    width: 16px;
}

.navbar-button > .text {
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.6px;
}

@media screen and (max-width: 1024px) {
    .navbar-button {
        padding: 0 8px;
    }
}

@media screen and (max-width: 780px) {
    .navbar-button {
        border: 0 !important;
    }

    .navbar-button > .text {
        display: none;
    }
}
</style>