<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { type HTMLAttributes, onMounted } from 'vue'
import { cn } from '@/lib/utils'
import { Button, ButtonLoader } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { h } from 'vue'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { RiGoogleFill, RiMicrosoftFill } from '@remixicon/vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  (e: 'login-success', email: string): void
}>()

const route = useRoute()

// Text variables
const text = {
  title: 'Whats your email address?',
  subtitle: [{ normal: 'We suggest using your ' }, { bold: 'email address you use for work.' }],
  emailPlaceholder: 'name@your-email.com',
  submit: 'Continue with Email',
  submitting: 'Signing In...',
  orContinue: 'Or continue with',
  tos: 'Terms of Service',
  privacy: 'Privacy Policy',
  copyright: '© All rights reserved. Indlio Inc. 2025.',
}

// Social login buttons array
const socialButtons = [
  {
    icon: RiGoogleFill,
    text: 'Login with Google',
    class: '',
    onClick: () => {
      console.log('GitHub login clicked')
    },
  },
  {
    icon: RiMicrosoftFill,
    text: 'Login with Microsoft',
    class: '',
    onClick: () => {
      console.log('GitHub login clicked')
    },
  },
]

// Form schema
const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: 'Email is required.',
      })
      .email('Invalid email address'),
  }),
)

const { handleSubmit, isSubmitting, meta, setFieldValue } = useForm({
  name: 'login-form',
  validationSchema: formSchema,
  initialValues: {
    email: '',
  },
})

onMounted(() => {
  const queryEmail = route.query.email as string
  if (queryEmail) {
    setFieldValue('email', queryEmail)
  }
  const queryToken = route.query.token as string
  const queryRegion = route.query.region as string
  const queryWorkspace = route.query.workspace as string
  if (queryToken && queryRegion && queryWorkspace) {
    // You can handle the token and region as needed
    localStorage.setItem('token', queryToken)
    localStorage.setItem('region', queryRegion)
    localStorage.setItem('workspace', queryWorkspace)
  } else {
    console.warn('No token or region provided in query parameters.')
  }
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    emit('login-success', values.email)
    toast('Verification mail sent successfully', {
      description: h(
        'pre',
        { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
        h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
      ),
      duration: 5000,
      position: 'top-right',
    })
  } catch (error) {
    console.error('Submission error:', error)
  }
})

const onFormSubmit = (e: Event) => {
  e.preventDefault()
  if (meta.value.valid) {
    onSubmit()
  } else {
    console.warn('Form is invalid, submission prevented.')
  }
}
</script>

<template>
  <div>
    <form :class="cn('flex flex-col gap-6', props.class)" @submit="onFormSubmit">
      <div class="flex flex-col items-center gap-2 text-center">
        <h1 class="text-2xl font-bold">
          {{ text.title }}
        </h1>
        <p class="text-muted-foreground text-sm text-balance">
          <template v-for="(part, idx) in text.subtitle" :key="idx">
            <span v-if="part.normal">{{ part.normal }}</span>
            <span v-else-if="part.bold" class="font-bold">{{ part.bold }}</span>
          </template>
        </p>
      </div>
      <div class="grid gap-6">
        <FormField id="email" v-slot="{ componentField }" name="email" class="grid gap-3">
          <FormItem>
            <FormControl>
              <Input type="text" :placeholder="text.emailPlaceholder" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>
        <Button
          type="submit"
          class="w-full"
          size="lg"
          :disabled="isSubmitting || (meta.touched && !meta.valid)"
        >
          <ButtonLoader v-if="isSubmitting" class="mr-2" />
          {{ isSubmitting ? text.submitting : text.submit }}
        </Button>
        <div
          v-if="!isSubmitting"
          class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
        >
          <span class="bg-background text-muted-foreground relative z-10 px-2">
            {{ text.orContinue }}
          </span>
        </div>
        <template v-if="!isSubmitting">
          <Button
            v-for="(btn, idx) in socialButtons"
            :key="idx"
            variant="outline"
            class="w-full"
            size="lg"
            @click.prevent="btn.onClick"
          >
            <component :is="btn.icon" class="size-4" :class="btn.class" /> {{ btn.text }}
          </Button>
        </template>
      </div>
      <p class="text-center text-xs text-muted-foreground">
        By continuing, you agree to our
        <RouterLink to="/terms_of_service" class="underline">{{ text.tos }}</RouterLink>
        and
        <RouterLink to="/privacy_policy" class="underline">{{ text.privacy }}</RouterLink
        >.
      </p>
    </form>
  </div>
</template>
