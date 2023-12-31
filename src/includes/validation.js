import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required, min, max, email, confirmed, numeric, url } from '@vee-validate/rules'

export const VeeValidatePlugin = {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('confirmed', confirmed)
    defineRule('decimal', numeric)
    defineRule('url', url)
  }
}
