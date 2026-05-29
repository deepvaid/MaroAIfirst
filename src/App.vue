<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppBar from '@/components/layout/AppBar.vue'
import MpDaVinciBot from '@/components/MpDaVinciBot.vue'
import { useAppTheme } from '@/composables/useAppTheme'
import { useCopilotStore } from '@/stores/useCopilot'

// Apply stored accent and theme to Vuetify on initial mount
const { accent, mode, setAccent, setMode } = useAppTheme()
setAccent(accent.value)
setMode(mode.value)

const route = useRoute()
const drawer = ref(true)
const rail = ref(true)
const copilot = useCopilotStore()
const { width, smAndDown } = useDisplay()

watch(width, (w, prevW) => {
  if (prevW === undefined) return
  const isNarrow = w < 1180
  const wasNarrow = prevW < 1180
  if (!wasNarrow && isNarrow && !rail.value) {
    rail.value = true
  }
  // Auto-close sidebar on mobile
  if (w < 768 && prevW >= 768) {
    drawer.value = false
  }
  // Auto-open on desktop return
  if (w >= 768 && prevW < 768) {
    drawer.value = true
  }
})

const isFullPage = computed(() => !!route.meta?.fullPage)
const isFlush = computed(() => !!route.meta?.flush)
const showJarvisHandoff = computed(() => route.query.jarvisHandoff === '1')
const isDashboardRoute = computed(() => route.name === 'Dashboard' || route.name === 'DashboardDetail')
// On mobile, sidebar is a temporary overlay (not permanent)
const sidebarTemporary = computed(() => smAndDown.value)
const sidebarRail = computed(() => rail.value)
const assistantPinned = computed(() => !smAndDown.value && (copilot.isPinned || isDashboardRoute.value))
const assistantDrawerOpen = computed({
  get: () => copilot.isOpen || assistantPinned.value,
  set: (value: boolean) => {
    if (value) copilot.open()
    else copilot.close()
  },
})
const copilotDrawerWidth = computed(() => {
  const target = copilot.isExpanded ? 880 : 480
  return Math.min(target, Math.max(320, width.value - 32))
})
</script>

<template>
  <v-app>
    <a v-if="!isFullPage" href="#main-content" class="skip-link">Skip to main content</a>

    <AppSidebar
      v-if="!isFullPage"
      v-model="drawer"
      :rail="sidebarRail"
      :temporary="sidebarTemporary"
      @update:rail="rail = $event"
    />

    <AppBar v-if="!isFullPage" />

    <v-alert
      v-if="showJarvisHandoff"
      class="jarvis-handoff-alert"
      color="info"
      variant="tonal"
      border="start"
      closable
    >
      Jarvis opened this screen so you can verify and continue in the classic UI.
    </v-alert>

    <v-main
      id="main-content"
      role="main"
      tabindex="-1"
      class="bg-background"
    >
      <v-container v-if="!isFullPage && !isFlush" fluid class="mp-main-shell">
        <router-view />
      </v-container>
      <router-view v-else />
    </v-main>

    <!-- Da Vinci Copilot Drawer -->
    <v-navigation-drawer
      v-if="!isFullPage && (assistantDrawerOpen || assistantPinned)"
      v-model="assistantDrawerOpen"
      location="right"
      :width="copilotDrawerWidth"
      :permanent="assistantPinned"
      :temporary="!assistantPinned"
      class="copilot-drawer"
    >
      <MpDaVinciBot
        @close="copilot.close()"
        @expand="copilot.toggleExpanded()"
      />
    </v-navigation-drawer>
  </v-app>
</template>

<style>
.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
  z-index: 1000;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  font-weight: 600;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 16px;
}

.mp-main-shell {
  padding: 32px 36px !important;
}

@media (max-width: 1024px) {
  .mp-main-shell {
    padding: 28px !important;
  }
}

@media (max-width: 640px) {
  .mp-main-shell {
    padding: 22px !important;
  }
}

.copilot-drawer {
  border-left: 1px solid var(--mp-border-subtle);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.copilot-drawer .v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
}

.jarvis-handoff-alert {
  position: fixed !important;
  top: 18px;
  left: 50%;
  z-index: 2500;
  width: min(560px, calc(100vw - 32px));
  transform: translateX(-50%);
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.18);
}
</style>
