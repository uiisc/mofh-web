<template>
    <div class="contact">
        <b-container>
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">{{ $t('common.contact_us') }}</h1>
            </div>
            <p>If you have any problems or have the need to contact us to ask a question, you can use the integrated support system in your control panel to create a support ticket.</p>

            <p>We will reply to your question as soon as possible.</p>

            <p>For technical support please look at the Knowledge Base</p>
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
