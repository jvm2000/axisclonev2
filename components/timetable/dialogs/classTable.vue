<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    import { ExclamationTriangleIcon, MapPinIcon } from '@heroicons/vue/24/outline'


    const { isClassTable, openClassTable } = modalFunctions()
    const { timeTableList, timeTableName, addList, fromTimeTable, toTimeTable, objectList, objStatus } = addListTimetable()
    const { handleChange, image, preview } = useUploadList()

    const checkbox = ref(false)
    const checkSeasonal = ref(false)

</script>

<template>
    <TransitionRoot appear :show="isClassTable" as="template">
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
                class="w-[34rem] h-[60rem] rounded-2xl bg-white py-2 text-left shadow-xl transition-all overflow-hidden"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>

                <div class="py-4 text-2xl pl-6 border-b-2 border-gray-200 w-full font-semibold">
                    Create Class
                </div>

                <div class="pt-4 w-full px-6 space-y-6 text-[16px] overflow-y-auto h-[50rem]">
                    <div class="space-y-2">
                        <label for="class" class="pl-2">Choose Class</label>
                        <select name="" id="class" class="w-full border border-gray-400 py-3 px-4 rounded-lg text-gray-500">
                            <option value="" disabled selected>Select a Class</option>
                            <option value="Judo 101">Judo 101</option>
                            <option value="Taekwando 101">Taekwando 101</option>
                            <option value="Muay Thai 101">Muay Thai 101</option>
                            <option value="Boxing 101">Boxing 101</option>
                        </select>
                    </div>
                    <div class="flex space-x-8 w-full">
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2">Start Date</label>
                            <input type="date" id="start" class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2">End Date</label>
                            <input type="date" id="start" class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500">
                        </div>
                    </div>
                    <div class="flex space-x-8 w-full">
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2">Start Time</label>
                            <input type="time" id="start" class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2">End Time</label>
                            <input type="time" id="start" class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="class" class="pl-2">Day Pattern</label>
                        
                    </div>
                    <div class="text-sm"><b>NOTE: </b>If you enter '0' (zero), no students/leads can check in.</div>
                    <div class="h-[2rem]"></div>
                </div>

                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-5 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer font-semibold"
                            @click="openClassTable"
                        >
                            Cancel
                        </p>
                        <p 
                            class="px-5 py-3 bg-[#527AF5] rounded-lg cursor-pointer font-semibold"
                            @click="openClassTable"
                        >
                            Create
                        </p>
                    </div>
                </div>
                <div class="invisible h-[3.5rem]"></div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>