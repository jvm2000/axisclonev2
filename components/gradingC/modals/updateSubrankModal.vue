<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    import { StarIcon, XMarkIcon } from '@heroicons/vue/24/outline'

    const { isUpdateSubrank, openUpdateSubRank, openConfirmUpdateSubrank } = modalFunctions()
    const { objGrading, colorObj, updateGradingColor, getObjGradingSubrank, getConfirmGradingObj, subranks } = useGradingFunctions()

    const limitSubranks = computed(() => {
    if(subranks.value.length > 5){
      subranks.value.splice(1)
    }
  })

</script>

<template>
    <TransitionRoot appear :show="isUpdateSubrank" as="template">
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
                    <div class="w-full grid place-items-center text-2xl relative">
                      <p>Sub Ranks</p>
                      <XMarkIcon 
                        class="w-[2rem] h-[2rem] cursor-pointer absolute right-4"
                        @click="openUpdateSubRank"
                      />
                    </div>
                </div>
                <div class="w-full pt-2 grid space-y-4">

                  <div class="flex place-items-center relative px-6">

                    <div class="flex place-items-center space-x-8">
                      <div class="flex place-items-center space-x-4">
                        <img src="/illustrations/profilesvg.svg" alt="" class="w-[2.3rem] h-[2.3rem] rounded-full">
                        <p class="text-[16px]">{{ objGrading.firstname }} {{ objGrading.lastname }}</p>
                      </div>
                      <div class="flex place-items-center space-x-4">
                        <img src="/grading/whitebelt.svg" alt="" v-if="objGrading.rank == 'White Belt'">
                        <img src="/grading/yellowbelt.svg" alt="" v-else-if="objGrading.rank == 'Yellow Belt'">
                        <span v-else class="w-6 h-6 rounded-sm bg-[#00CD7C]"></span>
                        <p class="text-[16px]">{{ objGrading.rank }}</p>
                      </div>
                    </div>

                    <div class="flex place-items-center space-x-8 absolute right-4">
                      <div class="flex place-items-center space-x-4">
                        <p class="text-[16px]">Litle Dragon</p>
                        <p class="text-lg">|</p>
                        <p class="text-[16px]">Litle Dragon 4-5 Years</p>
                      </div>
                    </div>

                  </div>

                  <div class="grid w-full space-y-2 pt-4">

                    <div class="flex place-items-center text-sm text-[#9FB5D1]">
                      <div class="flex place-items-center space-x-14 font-semibold pl-[5rem]">
                        <p>SUB RANK NAME</p>
                        <p>ATTENDANCE</p>
                        <p>DAYS</p>
                        <p>STATUS</p>
                      </div>
                      <div class="flex place-items-center space-x-20 font-semibold pl-[6rem]">
                        <p>DATE PASSED</p>
                        <p>PASSED BY</p>
                        <p class="w-[10rem]">ACTION</p>
                      </div>
                    </div>

                    <div 
                      v-for="subs, index in subranks"
                      :key="index"
                      class="flex py-2 w-full place-items-center border-t border-gray-400"
                    >
                      <div class="flex place-items-center w-[14rem] space-x-6 ml-8">
                        <StarIcon 
                          class="w-[1.5rem] h-[1.5rem] hover:fill-[#FFE252] cursor-pointer"
                          :class="[subs.att == objGrading.att ? 'fill-[#FFE252]' : '']"
                          @click="openConfirmUpdateSubrank(), getObjGradingSubrank(subs), getConfirmGradingObj(objGrading)"
                        />
                        <p class="text-sm">{{ subs.name }}</p>
                      </div>
                      <div class="grid space-y-2 w-[6rem]">
                        <p class="text-sm text-[#9FB5D1]">{{ subs.att }} / 30</p>
                        <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
                          <div 
                              class="h-2 bg-[#00C7F2] rounded-lg"
                              :class="[
                                  subs.att == 0 ? 'w-0' : '',
                                  subs.att == 1 ? 'w-[2px]' : '',
                                  subs.att == 2 ? 'w-[4px]' : '',
                                  subs.att == 3 ? 'w-[6px]' : '',
                                  subs.att == 4 ? 'w-[8px]' : '',
                                  subs.att == 5 ? 'w-[10px]' : '',
                                  subs.att == 6 ? 'w-[12px]' : '',
                                  subs.att == 7 ? 'w-[14px]' : '',
                                  subs.att == 8 ? 'w-[16px]' : '',
                                  subs.att == 9 ? 'w-[18px]' : '',
                                  subs.att == 10 ? 'w-[20px]' : '',
                                  subs.att == 11 ? 'w-[22px]' : '',
                                  subs.att == 12 ? 'w-[24px]' : '',
                                  subs.att == 13 ? 'w-[26px]' : '',
                                  subs.att == 14 ? 'w-[28px]' : '',
                                  subs.att == 15 ? 'w-[30px]' : '',
                                  subs.att == 16 ? 'w-[32px]' : '',
                                  subs.att == 17 ? 'w-[34px]' : '',
                                  subs.att == 18 ? 'w-[36px]' : '',
                                  subs.att == 19 ? 'w-[38px]' : '',
                                  subs.att == 20 ? 'w-[40px]' : '',
                                  subs.att == 21 ? 'w-[42px]' : '',
                                  subs.att == 22 ? 'w-[44px]' : '',
                                  subs.att == 23 ? 'w-[46px]' : '',
                                  subs.att == 24 ? 'w-[48px]' : '',
                                  subs.att == 25 ? 'w-[50px]' : '',
                                  subs.att == 26 ? 'w-[52px]' : '',
                                  subs.att == 27 ? 'w-[54px]' : '',
                                  subs.att == 28 ? 'w-[57px]' : '',
                                  subs.att == 29 ? 'w-[62px]' : '',
                                  subs.att == 30 ? 'w-full' : ''
                              ]"
                          >
                          </div>
                        </div>
                      </div>
                      <p class="text-sm text-[#9FB5D1] w-[3rem]">and</p>
                      <div class="grid space-y-2 w-[6rem]">
                        <p class="text-sm text-[#9FB5D1]">{{ subs.days }} / 30</p>
                        <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
                          <div 
                              class="h-2 bg-[#00C7F2] rounded-lg"
                              :class="[
                                  subs.days == 0 ? 'w-0' : '',
                                  subs.days == 1 ? 'w-[2px]' : '',
                                  subs.days == 2 ? 'w-[4px]' : '',
                                  subs.days == 3 ? 'w-[6px]' : '',
                                  subs.days == 4 ? 'w-[8px]' : '',
                                  subs.days == 5 ? 'w-[10px]' : '',
                                  subs.days == 6 ? 'w-[12px]' : '',
                                  subs.days == 7 ? 'w-[14px]' : '',
                                  subs.days == 8 ? 'w-[16px]' : '',
                                  subs.days == 9 ? 'w-[18px]' : '',
                                  subs.days == 10 ? 'w-[20px]' : '',
                                  subs.days == 11 ? 'w-[22px]' : '',
                                  subs.days == 12 ? 'w-[24px]' : '',
                                  subs.days == 13 ? 'w-[26px]' : '',
                                  subs.days == 14 ? 'w-[28px]' : '',
                                  subs.days == 15 ? 'w-[30px]' : '',
                                  subs.days == 16 ? 'w-[32px]' : '',
                                  subs.days == 17 ? 'w-[34px]' : '',
                                  subs.days == 18 ? 'w-[36px]' : '',
                                  subs.days == 19 ? 'w-[38px]' : '',
                                  subs.days == 20 ? 'w-[40px]' : '',
                                  subs.days == 21 ? 'w-[42px]' : '',
                                  subs.days == 22 ? 'w-[44px]' : '',
                                  subs.days == 23 ? 'w-[46px]' : '',
                                  subs.days == 24 ? 'w-[48px]' : '',
                                  subs.days == 25 ? 'w-[50px]' : '',
                                  subs.days == 26 ? 'w-[52px]' : '',
                                  subs.days == 27 ? 'w-[54px]' : '',
                                  subs.days == 28 ? 'w-[57px]' : '',
                                  subs.days == 29 ? 'w-[62px]' : '',
                                  subs.days == 30 ? 'w-full' : ''
                              ]"
                          >
                          </div>
                        </div>
                      </div>
                      <div class="flex place-items-center space-x-4 w-[9.5rem]">
                        <span 
                          class="w-2 h-2 rounded-full"
                          :class="[subs.status == 'Eligible to Pass' ? 'bg-[#00F18C]' : 'bg-[#EA5252]']"
                        ></span>
                        <p class="text-sm">{{ subs.status }}</p>
                      </div>
                      <p class="text-sm w-[11rem]">{{ subs.date }}</p>
                      <p class="text-sm w-[10rem]">{{ subs.passedby }}</p>
                      <div class="bg-[#04DC74] text-[16px] text-white px-6 py-2 rounded-md">
                        <p>Pass</p>
                      </div>
                    </div>

                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>