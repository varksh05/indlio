<script lang="ts">
export const description = 'A login page with a muted background color.'
</script>

<script setup lang="ts">
import { TreePalm } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import LoginForm from '@/components/forms/LoginForm.vue'
import { ref } from 'vue'
import VerifyForm from '@/components/forms/VerifyForm.vue'

// Callback to switch to email form
const handleLoginSuccess = (email: string) => {
  emailParam.value = email
  showEmailForm.value = true
}

const handleBackToLogin = (show: boolean) => {
  showEmailForm.value = show
}

// Reactive state to control form visibility
const showEmailForm = ref(false)
const emailParam = ref('')
const copyright =
  "© All rights reserved. Indlio Inc. 2025."
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
      <RouterLink to="/login" class="flex items-center text-xl gap-2 self-center font-medium">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <TreePalm class="size-6" />
        </div>
        Indlio Inc.
      </RouterLink>
      <LoginForm v-if="!showEmailForm" @login-success="handleLoginSuccess" />
      <VerifyForm v-else :email="emailParam" @back-login="handleBackToLogin" />
    </div>
  </div>
  <p class="text-center text-xs text-muted-foreground px-3 py-5 absolute bottom-0 left-0 right-0">
    {{ copyright }}
  </p>
</template>
