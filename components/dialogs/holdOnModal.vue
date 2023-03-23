<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const { openHoldOnModal, isHoldOnModal } = modalFunctions()
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
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                  Add More Lead?
                </DialogTitle>
                <div class="mt-4 w-full border-[0.5px] border-gray-300"></div>
                <div class="mt-2 px-20 py-4">
                  <img src="/illustrations/addleadmodalpic.svg" alt="">
                </div>
                <div class="mt-6 text-[16px]">
                    <p>Cheers! You have successfully added a new student!</p>
                    <p class="font-semibold">Do you wish to add more?</p>
                </div>
  
                <div class="mt-8 space-x-2 flex">
                    <div class="w-[9.5rem]"></div>
                    <button
                        type="button"
                        class="bg-[#CAD7E8] text-white rounded-lg px-4 py-2"
                        @click=""
                    >
                        Cancel
                    </button>
                        <button
                        type="button"
                        class="bg-[#527AF5] text-white rounded-lg px-4 py-2"
                        @click=""
                    >
                        Yes, Add More
                    </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>