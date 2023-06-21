<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'
    import { XMarkIcon } from '@heroicons/vue/24/outline';


    const { isConfirmUpdateSubrank, openConfirmUpdateSubrank } = modalFunctions()
    const { confirmGradingObj, colorObj, updateGradingColor, objSubranks, updateGradingSubrank } = useGradingFunctions()

</script>

<template>
    <TransitionRoot appear :show="isConfirmUpdateSubrank" as="template">
      <Dialog as="div" @close="" class="relative z-20">
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
                class="w-auto transform overflow-hidden rounded-2xl bg-white py-2 text-left shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>
                <div class="text-2xl w-full py-2 pl-4 border-b-2 border-gray-100 flex space-x-4 place-items-center relative">
                    <p class="invisible">Test</p>
                    <XMarkIcon 
                      class="w-[2rem] h-[2rem] cursor-pointer absolute right-4"
                      @click="openConfirmUpdateSubrank"
                    />
                </div>
                <div class="pt-6 text-[16px] px-10 space-y-6 place-items-start pb-4">
                    <div class="flex place-items-center space-x-4">
                      <img src="/grading/staricon.svg" alt="">
                      <p class="text-[16px] w-[20rem]">Are you sure you want <b>{{ objSubranks.name }}</b> to be {{ confirmGradingObj.firstname }}'s currrent Sub Rank?</p>
                    </div>
                </div>
                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-6 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer"
                            @click="openConfirmUpdateSubrank(), clearMessage()"
                        >
                            Cancel
                        </p>
                        <button 
                            class="px-8 py-3 rounded-lg bg-[#5081F0]"
                            @click="openConfirmUpdateSubrank(), updateGradingSubrank()"
                        >
                            Yes
                        </button>
                    </div>
                </div>
                <div class="invisible h-[4rem]"></div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>