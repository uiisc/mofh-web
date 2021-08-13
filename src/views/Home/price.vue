<template>
    <div class="about">
        <b-container>
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">{{ $t('router.price') }}</h1>
                <p class="lead">价格方案</p>
            </div>
            <b-card-group deck>
                <b-card class="text-center">
                    <template v-slot:header>
                        <h6 class="mb-0">Free</h6>
                    </template>
                    <b-card-body>
                        <h1 class="card-title">$0 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <b-button block variant="outline-primary">{{ $t('user.signup_for_free') }}</b-button>
                    </b-card-body>
                </b-card>
                <b-card class="text-center">
                    <template v-slot:header>
                        <h6 class="mb-0">Pro</h6>
                    </template>
                    <b-card-body>
                        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <b-button block variant="primary" @click="waitToast()">Get started</b-button>
                    </b-card-body>
                </b-card>
                <b-card class="text-center">
                    <template v-slot:header>
                        <h6 class="mb-0">Enterprise</h6>
                    </template>
                    <b-card-body>
                        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <b-button block variant="primary" @click="waitToast()">{{ $t('common.contact_us') }}</b-button>
                    </b-card-body>
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
        waitToast() {
            this.$bvToast.toast(this.$t('msg.in_preparation'), {
                title: this.$t('common.tips'),
                variant: 'info',
                solid: true
            })
        }
    }
}
</script>
