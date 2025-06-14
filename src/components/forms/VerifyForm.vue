<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { h, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import {
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

const props = defineProps<{
  email?: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  (e: 'back-login', show: boolean): void
}>()

const { email } = props;
const router = useRouter();

// Text variables
const titleText = "Check your email"
const subtitleText = [
  "We have sent you a temporary login code. Please check your inbox"
]
const emailPlaceholder = "Enter code"
const submitText = "Continue with Login Code"
const submittingText = "Signing In..."


const formSchema = toTypedSchema(z.object({
  code: z
    .string()
    .trim()
    .min(6, 'Invalid Code')
    .max(6, 'Invalid Code')
    .transform((str) => { return str.toUpperCase() })
}));

const { handleSubmit, isSubmitting, isValidating } = useForm({
  validationSchema: formSchema,
  initialValues: {
    code: '',
  }
});

const onSubmit = handleSubmit(async (values) => {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  toast('OTP', {
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    duration: 5000,
    position: 'top-right',
  })
  // Redirect or show success message here
  router.push({ name: 'dashboard' });
})

const onBackToLogin = () => {
  emit('back-login', false);
}
</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)" @submit.prevent="onSubmit">
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">
        {{ titleText }}
      </h1>
      <p v-for="text of subtitleText" :key="text" class="text-muted-foreground text-sm text-balance">
        {{ text }}
      </p>
      <p class="text-muted-foreground text-sm font-semibold">
        {{ email }}
      </p>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-3">
        <FormField v-slot="{ componentField }" name="code">
          <FormItem>
            <FormControl>
              <Input type="text" class="text-center code tracking-widest uppercase" :placeholder="emailPlaceholder"
                v-bind="componentField" autocomplete="off" />
            </FormControl>
          </FormItem>
        </FormField>
      </div>
      <Button type="submit" class="w-full" size="lg" :disabled="isSubmitting || isValidating">
        <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        {{ isSubmitting ? submittingText : submitText }}
      </Button>
    </div>

  </form>
  <Button variant="link" class="text-center text-xs text-muted-foreground" @click="onBackToLogin">
    Back to Login
  </Button>
</template>
