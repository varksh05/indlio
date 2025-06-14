<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import { TreePalm, CalendarCheck, NotepadText, PanelsTopLeft, Clock4 } from 'lucide-vue-next'
import NavMain from '@/components/sidebar/NavMain.vue'
import NavUser from '@/components/sidebar/NavUser.vue'
import TeamSwitcher from '@/components/sidebar/TeamSwitcher.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { onMounted } from 'vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const { setOpen } = useSidebar()

onMounted(() => {
  // Set the sidebar to open on mount
  setOpen(false)
})

// This is sample data.
const data = {
  user: {
    name: 'Valliyappan',
    email: 'valliyappan@gememe.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'My Space',
      logo: TreePalm,
      plan: 'Plus',
    },
  ],
  items: [
    {
      name: 'Appointments',
      url: '/appointments',
      icon: CalendarCheck,
    },
    {
      name: 'Services',
      url: '/services',
      icon: NotepadText,
    },
    {
      name: 'Bookings Page',
      url: '/bookings_page',
      icon: PanelsTopLeft,
    },
    {
      name: 'Availability',
      url: '/availability',
      icon: Clock4,
    },
    // {
    //   name: 'Customers',
    //   url: '/customers',
    //   icon: Settings,
    // },
    // {
    //   name: 'Invoice',
    //   url: '/invoices',
    //   icon: Settings,
    // },
    // {
    //   name: 'Payment Transactions',
    //   url: '/payment_transactions',
    //   icon: Settings,
    // },
    // {
    //   name: 'Payment Transactions',
    //   url: '/payment_transactions',
    //   icon: Settings,
    // },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.items" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
