<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const { isHoldOnModal } = modalFunctions()
const { leadViewItem } = useViewProfile()
</script>

<template>
    <TransitionRoot appear :show="isHoldOnModal" as="template">
      <Dialog as="div" @close="" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-auto max-w-md transform overflow-hidden rounded-2xl bg-white py-2 px-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>
                <div class="mt-2 px-20 py-4">
                  <img src="/icons/onHold.svg" alt="">
                </div>
                <div class="px-10">
                  <div class="flex flex-col w-full pb-4">
                    <p class="text-[24px] text-center">{{ leadViewItem.firstname }} {{ leadViewItem.lastname }}</p>
                    <p class="text-[24px] text-center">is now <b>on hold</b></p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>