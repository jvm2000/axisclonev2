<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'


    const { isConfirmFixRank, openConfirmFixRank, openFixRank } = modalFunctions()
    const { confirmGradingObj, colorObj, updateGradingColor } = useGradingFunctions()

    const confirmationMessage = ref('')
    const clearMessage = () => {
      confirmationMessage.value = ''
    }

</script>

<template>
    <TransitionRoot appear :show="isConfirmFixRank" as="template">
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
                <div class="text-2xl w-full py-2 pl-4 border-b-2 border-gray-100 flex space-x-4 place-items-center">
                    <img src="/grading/InformationCircle.svg" alt="">
                    <p>Fix Rank</p>
                </div>
                <div class="pt-6 text-[16px] px-10 space-y-6 place-items-start pb-4">
                    <p class="w-[24rem]">{{ confirmGradingObj.firstname }}'s rank will be changed to <b>Whitebelt</b>.
                    This will only update the rank, and not the sub ranks, attendances,
                     or days. Are you sure?</p>
                    <p>Type "sure" to confirm</p>
                    <input 
                        type="text" 
                        class="px-4 w-full h-[2.5rem] border drop-shadow rounded-lg"
                        v-model="confirmationMessage"
                    >
                    <p class="w-[24rem] text-gray-500"><span>NOTE: </span>
                      <span class="italic">The Fix Rank functionality should be used to move a student to the correct
                         rank. <span class="font-semibold text-gray-600">This should not be used for grading students.</span>
                      </span>
                    </p>
                </div>
                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-8 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer"
                            @click="openConfirmFixRank(), clearMessage()"
                        >
                            Cancel
                        </p>
                        <button 
                            class="px-10 py-3 rounded-lg"
                            :disabled="confirmationMessage != 'sure'"
                            :class="[confirmationMessage == 'sure' ? 'bg-[#5081F0] cursor-pointer' : 'bg-[#CAD7E8] cursor-not-allowed']"
                            @click="openConfirmFixRank(), updateGradingColor(), clearMessage(), openFixRank()"
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