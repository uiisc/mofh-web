<template>
    <div class="login">
        <b-container>
            <b-card :header="$t('login')">
                <b-form v-if="show" class="login-form pt-md-5 pb-md-5 mx-auto text-center" @submit.stop.prevent @submit="onSubmit" @reset="onReset">
                    <b-form-group>
                        <b-form-input v-model="formData.username" type="text" :placeholder="$t('username_input')"></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input v-model="formData.password" :placeholder="$t('password_input')"></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-select v-model="formData.language" :options="languages"></b-form-select>
                    </b-form-group>

                    <b-button type="submit" block variant="primary">{{ $t('login') }}</b-button>
                </b-form>
            </b-card>

            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ formData }}</pre>
            </b-card>
        </b-container>
    </div>
</template>

<script>
import { languages } from '../../i18n'
export default {
    data() {
        return {
            show: true,
            formData: {
                username: '',
                password: '',
                language: null
            }
        }
    },
    computed: {
        languages() {
            // 所有可选翻译
            return [{ text: this.$t('select_language'), value: null }, ...languages]
        }
    },
    methods: {
        onSubmit(evt) {
            if (!this.formData.username) {
                this.$bvToast.toast(this.$t('username_input'), {
                    title: this.$t('tips'),
                    variant: 'error',
                    solid: true
                })
                return
            }
            if (!this.formData.password) {
                this.$bvToast.toast(this.$t('password_input'), {
                    title: this.$t('tips'),
                    variant: 'error',
                    solid: true
                })
                return
            }
            evt.preventDefault()
            this.$bvToast.toast(JSON.stringify(this.formData), {
                title: this.$t('tips'),
                variant: 'info',
                solid: true
            })
            console.log('formData', this.formData)
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.formData = this.$options.data.formData
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style lang="less">
.login-form {
    max-width: 300px;
}
</style>
