<template>
    <div class="about">
        <b-container>
            <h1>This is an about page</h1>
            <b-button @click="makeToast()" class="mb-2">Default</b-button>
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
