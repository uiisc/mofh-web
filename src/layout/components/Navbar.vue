<template>
    <div class="app-navbar">
        <b-container>
            <b-navbar toggleable="md" type="light" variant="light">
                <b-navbar-brand to="/">{{ title }}</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">{{ $t('home') }}</b-nav-item>
                        <b-nav-item to="/price" :active="$route.path == '/price'">{{ $t('price') }}</b-nav-item>
                        <b-nav-item to="/about" :active="$route.path == '/about'">{{ $t('about') }}</b-nav-item>
                        <b-nav-item-dropdown :text="$t('more')">
                            <b-dropdown-item to="/contact" :active="$route.path == '/contact'">{{ $t('contact') }}</b-dropdown-item>
                            <b-dropdown-item to="/help" :active="$route.path == '/help'">{{ $t('help') }}</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item to="/support" :active="$route.path == '/support'">{{ $t('support') }}</b-dropdown-item>
                            <b-dropdown-item to="/forum" :active="$route.path == '/forum'">{{ $t('forum') }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/login" :active="$route.path == '/login'">{{ $t('login') }}</b-nav-item>
                        <b-nav-item to="/signup" :active="$route.path == '/signup'">{{ $t('signup') }}</b-nav-item>
                        <!-- <b-nav-item>{{ $t('signout') }}</b-nav-item> -->
                        <b-nav-item-dropdown text="Language" right>
                            <template v-slot:button-content>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="b-icon bi bi-translate" viewBox="0 0 16 16">
                                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                                    <path
                                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
                                    />
                                </svg>
                            </template>
                            <b-dropdown-item v-for="(item, index) in lang" :key="index" :active="item.key == locale" @click="changeLocale(item.key)">{{ item.name }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
import { title } from '@/settings.js'

export default {
    name: 'Navbar',
    components: {},
    props: {},
    data() {
        return {
            title
        }
    },
    watch: {},
    activated() {},
    computed: {
        lang() {
            // 所有可选翻译
            return Object.values(this.$i18n.messages).map((i) => {
                return i.lang
            })
        },
        locale() {
            // 当前语言
            return this.$i18n.locale
        }
    },
    created() {},
    mounted() {},
    methods: {
        changeLocale(x) {
            this.$i18n.locale = x || this.lang[0].key
        }
    }
}
</script>

<style lang="less">
.app-navbar {
    margin-top: 10px;
}
</style>
