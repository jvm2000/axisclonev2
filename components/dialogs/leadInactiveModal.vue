<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const { cancelOnHoldModal, isLeadOnHoldModalOpen, isToogleReactivate, isToogleReturnDate, toogleReactivate, toogleReturnDate, isInactiveModal, isConfirmInactiveModal, openInactiveModal, openConfirmInactiveModal, closeInactiveModal, isToogleInactive, toogleInactive } = modalFunctions()
const { leadViewItem, setStatus } = useViewProfile()
const router = useRouter()
</script>

<template>
    <div>
      <TransitionRoot appear :show="isInactiveModal" as="template">
        <Dialog as="div" @close="cancelOnHoldModal" class="relative z-10">
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
                  class="w-[37rem] h-auto overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-[24px] leading-6 text-gray-900 pt-4 pl-4"
                  >
                    Make Student Inactive
                  </DialogTitle>
                  <div class="border-b border-gray-300 w-full mt-6"></div>
                  <div class="mt-4 w-full border-lg bg-[#4D8BE8] flex place-items-center px-6 py-2 space-x-4 rounded-lg">
                      <img 
                        :src="leadViewItem.image" 
                        alt="" 
                        class="rounded-full border-4 border-white w-[2.2rem] h-[2.2rem]"
                      >
                      <p class="text-[18px] text-white font-semibold">{{ leadViewItem.firstname }} {{ leadViewItem.lastname }}</p>
                  </div>
                  <div class="pl-6 mt-6 flex space-x-10 pb-8">
                      <div class="flex flex-col">
                            <div 
                                class="space-y-2 flex flex-col"
                                :class="[isToogleInactive ? 'text-gray-400' : '']"
                            >
                              <label for="" class="text-[16px]">Effective Date</label>
                              <input type="date" 
                              class="w-[14.5rem] py-2 text-[16px] bg-[#FBFCFE] border border-gray-300 rounded-lg px-4" 
                              :disabled="isToogleInactive"
                            />
                          </div>
                          <div class="flex space-x-2 place-items-center pt-4">
                              <input type="checkbox" id="datereturn" 
                                    class="border-[#CAD7E8] w-4 h-4 border cursor-pointer"
                                    @click="toogleInactive()"
                                >
                              <label for="datereturn" class="text-[16px]">
                                    Make Inactive Immediately
                              </label>
                          </div>
                      </div>
                      <div class="flex flex-col space-y-4">
                        <div class="space-y-2 flex flex-col">
                              <label for="" class="text-[16px]">Reason</label>
                              <select type="date" class="w-[14.5rem] py-3 text-[16px] bg-[#FBFCFE] border border-gray-300 rounded-lg px-4">
                                  <option value="--">Choose Reason</option>
                                  <option value="">Fever</option>
                                  <option value="">Diseased</option>
                                  <option value="">On Hospital</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div class="flex pt-6 pb-4">
                      <div class="w-[18.5rem]"></div>
                      <div class="space-x-4">
                          <button 
                              class="text-[16px] px-8 py-3 rounded-lg bg-[#CAD7E8] text-white"
                              @click="closeInactiveModal()"
                          >
                              Cancel
                          </button>
                          <button 
                              class="text-[16px] px-10 py-3 rounded-lg bg-[#5081F0] text-white"
                              @click="setStatus('dead'), openConfirmInactiveModal()"
                          >
                              Save
                          </button>
                      </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <DialogsConfirmInactiveModal :isConfirmInactiveModal="openConfirmInactiveModal"/>
    </div>
  </template>