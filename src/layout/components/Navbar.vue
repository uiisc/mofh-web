<template>
    <div class="app-navbar">
        <b-container>
            <b-navbar toggleable="sm" type="light" variant="light">
                <b-navbar-brand href="#">{{ title }}</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">{{ $t('router.home') }}</b-nav-item>
                        <b-nav-item to="/about">{{ $t('router.about') }}</b-nav-item>
                        <b-nav-item to="/solution">{{ $t('router.solution') }}</b-nav-item>
                        <b-nav-item to="/support">{{ $t('router.support') }}</b-nav-item>
                        <!-- <b-nav-item to="#" disabled>Disabled</b-nav-item> -->
                        <b-nav-item-dropdown :text="$t('common.more')">
                            <b-dropdown-item to="#">{{ $t('router.contact') }}</b-dropdown-item>
                            <b-dropdown-item to="#">{{ $t('router.help') }}</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item to="#">{{ $t('router.support') }}</b-dropdown-item>
                            <b-dropdown-item to="#">{{ $t('router.forum') }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item v-for="(item, index) in lang" :key="index" :active="item.key == locale" @click="changeLocale(item.key)">{{ item.name }}</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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

<style lang="less"></style>
