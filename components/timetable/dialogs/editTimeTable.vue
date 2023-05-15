<script setup lang="ts">

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'


const { isEditTable, openEditTable } = modalFunctions()
const { timeTableName, addList, fromTimeTable, toTimeTable, objectList, updateList, objList } = addListTimetable()
const { handleChange, image, preview } = useUploadList()

const checkbox = ref(false)
const checkSeasonal = ref(false)

const toogle = () => {
  checkSeasonal.value = !checkSeasonal.value
}

const upload = () => {
    document.getElementById('profile-photo')?.click()
}


</script>

<template>
<TransitionRoot appear :show="isEditTable" as="template">
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
            class="w-auto transform overflow-hidden rounded-2xl bg-white py-2 text-left align-middle shadow-xl transition-all"
          >
            <DialogTitle
              as="h3"
              class="text-[24px] font-medium leading-6 text-gray-900"
            >
            </DialogTitle>
            <div class="text-[20px] w-full py-2 pl-10 border-b border-gray-200">
                <p>Edit Timetable</p>
            </div>
            <div class="grid place-items-center pt-6">
                <div class="flex space-x-4 px-6">

                    <img
                      v-if="objectList.image"  
                      :src="objectList.image" 
                      alt=""
                      class="w-[10rem] h-[10rem] rounded-lg"
                    >
                    <img 
                      v-else
                      :src="objectList.default" 
                      alt=""
                      class="w-[10rem] h-[10rem] rounded-lg"
                    >
                    <div class="">
                      <p class="text-[16px]">Timetable</p>
                      <input 
                        type="text" 
                        class="mt-4 text-[18px] w-[29.7rem] border-b border-black ring-0 outline-none" placeholder="Enter Timetable Name"
                        v-model="timeTableName"
                      >

                      <div class="flex space-x-4 mt-8 place-items-center">
                        <input 
                          type="checkbox" 
                          class="h-4 w-4"
                          v-model="checkbox"
                        >
                        <p class="text-[16px]">Seasonal Timetable</p>
                      </div>

                      <div 
                        class="flex mt-4 text-gray-400 space-x-4"
                        :class="[checkbox ? 'block': 'hidden']"
                      >
                        <input 
                          type="date" 
                          class="w-[11.5rem] h-[3rem] px-4 border border-gray-400 rounded-lg" 
                          placeholder="From"
                          v-model="fromTimeTable"
                        >
                        <input 
                          type="date" 
                          class="w-[11.5rem] h-[3rem] px-4 border border-gray-400 rounded-lg" 
                          placeholder="To"
                          v-model="toTimeTable"
                        >
                      </div>
                    </div>

                </div>
                <div class="w-full relative text-white mt-8">
                  <div class="absolute right-6 flex space-x-4 place-items-center">
                    <p 
                      class="text-[18px] px-8 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer" 
                      @click="openEditTable"
                    >
                      Cancel
                    </p>
                    <p 
                      class="text-[18px] px-8 py-3 bg-[#527AF5] rounded-lg cursor-pointer"
                      @click="updateList(objectList)"
                    >
                      Update
                    </p>
                  </div>
                </div>
                <div class="w-full h-[4rem]"></div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</TransitionRoot>
</template>