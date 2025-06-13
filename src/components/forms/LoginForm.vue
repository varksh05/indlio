<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const loginForm = toTypedSchema(
  z.object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: loginForm,
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const metaData = {
  title: 'Welcome to Indlio',
  description: 'Manage all your meetings, appointments, clients, classes in one place.',
  form: [
    {
      type: 'input',
      field_type: 'email',
      field: 'email',
      placeholder: 'name@example.com',
    },
    {
      type: 'button',
      field_type: 'submit',
      value: 'Continue to Login',
    },
  ],
  htmlRaw: `By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.`,
}
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <form @submit="onSubmit">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold">{{ metaData.title }}</h1>
          <div class="text-sm text-muted-foreground">{{ metaData.description }}</div>
        </div>
        <div v-for="(field, i) of metaData.form" :key="i" class="flex flex-col gap-6">
          <FormField
            v-if="field.type === 'input'"
            v-slot="{ componentField }"
            :name="field.field"
            class="grid gap-3"
          >
            <FormItem>
              <FormControl>
                <Input
                  :type="field.field_type"
                  :placeholder="field.placeholder"
                  v-bind="componentField"
                />
              </FormControl>
            </FormItem>
          </FormField>
          <Button v-if="field.type === 'button'" size="lg" :type="field.field_type" class="w-full">
            {{ field.value }}
          </Button>
        </div>
        <div
          class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
        >
          <span class="bg-background text-muted-foreground relative z-10 px-2"> Or </span>
        </div>
      </div>
    </form>
    <div
      class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
      v-html="metaData.htmlRaw"
    ></div>
  </div>
</template>
