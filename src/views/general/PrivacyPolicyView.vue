<script setup lang="ts">
import { TreePalm } from 'lucide-vue-next';

// Array of sections with headings and dummy content (content as array)
const sections = [
  {
    title: "Introduction",
    content: [
      "Welcome to Indlio! This Privacy Policy explains how we collect, use, and protect your personal data when you use our services.",
      "Please read it carefully. If you have any questions, feel free to contact us.",
      "We are committed to protecting your privacy and ensuring that your personal data is handled in accordance with applicable laws and regulations.",
      "We value your trust and strive to be transparent about our data practices.",
      "This Privacy Notice explains how we collect, use, and share your personal data when you use our services.",
      "It also explains your rights regarding your personal data and how you can exercise those rights.",
      "By using our services, you consent to the collection and use of your personal data as described in this Privacy Notice."
    ]
  },
  {
    title: "Scope of this Privacy Notice",
    content: [
      "This Privacy Notice applies to all users of Indlio’s products, services, and websites.",
      "It describes how we handle your information.",
      "By using our services, you agree to the collection and use of information in accordance with this policy.",
      "This Privacy Notice is designed to inform you about our practices regarding the collection, use, and disclosure of personal data that we receive from users of our services.",
      "It applies to all personal data collected through our websites, applications, and other interactions with you."
    ]
  },
  {
    title: "Personal data that we collect",
    content: [
      "We may collect information such as your name, email address, contact details, and usage data when you interact with our services.",
      "We may also collect technical data such as IP addresses, browser types, and device information.",
      "We collect personal data that you provide to us directly, such as when you create an account, fill out forms, or communicate with us.",
      "We may also collect information about your usage of our services, including your interactions with our websites, applications, and other services.",
      "This may include information about your device, browser type, IP address, and other technical details.",
      "We may also collect information about your preferences and interests based on your interactions with our services.",
      "We may also collect information from third-party sources, such as social media platforms or other services that you use to interact with us.",
      "This may include information about your profile, contacts, and other data that you choose to share with us.",
      "We may also collect information from third-party sources, such as social media platforms or other services that you use to interact with us."
    ]
  },
  {
    title: "How we use your personal data",
    content: [
      "Your personal data is used to provide and improve our services, communicate with you, and comply with legal obligations.",
      "We may use your personal data for various purposes, including:",
      "- Providing and maintaining our services",
      "- Communicating with you about your account or our services",
      "- Personalizing your experience",
      "- Analyzing usage patterns to improve our services",
      "- Complying with legal obligations",
      "- Preventing fraud and ensuring security",
      "- Sending you marketing communications if you have opted in to receive them",
      "We may also use your personal data for other purposes with your consent or as otherwise permitted by law.",
      "We may use your personal data for the following purposes:",
      "- To provide and maintain our services",
      "- To communicate with you about your account or our services",
      "- To personalize your experience and improve our services",
      "- To analyze usage patterns and trends to enhance our offerings",
      "- To comply with legal obligations and protect our rights",
      "- To prevent fraud and ensure the security of our services",
      "- To send you marketing communications if you have opted in to receive them",
    ]
  },
  {
    title: "Our Commitment to Data Privacy",
    content: [
      "We are committed to safeguarding your data and use industry-standard security measures to protect your information."
    ]
  },
  {
    title: "How we share your personal data",
    content: [
      "We do not sell your personal data.",
      "We may share it with trusted partners or service providers as necessary to deliver our services."
    ]
  },
  {
    title: "Your Choices",
    content: [
      "You have the right to access, update, or delete your personal data.",
      "Contact us if you wish to exercise these rights.",
      "You can also opt out of marketing communications at any time.",
      "You have the right to access, correct, or delete your personal data.",
      "You can also object to or restrict the processing of your personal data in certain circumstances.",
    ]
  }
];
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col space-y-3 mb-8">
      <div class="flex items-center">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background mr-4">
          <TreePalm class="size-6" />
        </div>
        <h1 class="text-3xl font-bold">Indlio Privacy Policy</h1>
      </div>
      <h2 class="text-lg text-muted-foreground">
        Effective as of March 30, 2025. View the prior version
        <span class="hover:underline text-primary cursor-pointer">here</span>.
      </h2>
    </div>
    <div class="space-y-8">
      <div v-for="section in sections" :key="section.title">
        <h2 class="text-xl font-semibold mb-2">{{ section.title }}</h2>
        <div class="space-y-2">
          <p v-for="(line, idx) in section.content" :key="idx" class="text-gray-700">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
