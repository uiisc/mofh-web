<template>
    <div class="support">
        <b-container>
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">{{ $t('router.support') }}</h1>
                <!-- <p class="lead">价格方案</p> -->
            </div>
            <b-card-group deck>
                <b-card no-body header="Free">
                    <b-list-group flush>
                        <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                        <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                    </b-list-group>
                    <b-card-body> Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. </b-card-body>
                </b-card>
                <b-card no-body header="Pro">
                    <b-list-group flush>
                        <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                        <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                    </b-list-group>
                    <b-card-body> Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. </b-card-body>
                </b-card>
                <b-card title="Title" header-tag="header" footer-tag="footer">
                    <template v-slot:header>
                        <h6 class="mb-0">Header Slot</h6>
                    </template>
                    <b-card-text>Header and footers using slots.</b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                    <template v-slot:footer>
                        <em>Footer Slot</em>
                    </template>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        makeToast(variant = null) {
            this.$bvToast.toast('Toast body content', {
                title: `Variant ${variant || 'default'}`,
                variant: variant,
                solid: true
                // 'no-auto-hide': true
            })
        }
    }
}
</script>
