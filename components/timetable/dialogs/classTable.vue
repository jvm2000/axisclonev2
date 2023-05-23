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
    const { dayPatterns, daySelected, selectDay, dayObjected, increment, limitStud, limitLead, classType, startDate, endDate, startTime, endTime, classLocation, classArea, classInstructor, studentsLimit, leadsLimit } = addClassTable()

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
                        <label for="class" class="pl-2 font-semibold">Choose Class</label>
                        <select 
                            name="" 
                            id="class" 
                            class="w-full border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                            v-model="classType"
                        >
                            <option value="" disabled selected>Select a Class</option>
                            <option value="Judo 101">Judo 101</option>
                            <option value="Taekwando 101">Taekwando 101</option>
                            <option value="Muay Thai 101">Muay Thai 101</option>
                            <option value="Boxing 101">Boxing 101</option>
                        </select>
                    </div>
                    <div class="flex space-x-8 w-full">
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2 font-semibold">Start Date</label>
                            <input 
                                type="date" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                v-model="startDate"
                            >
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2 font-semibold">End Date</label>
                            <input 
                                type="date" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                v-model="endDate"
                            >
                        </div>
                    </div>
                    <div class="flex space-x-8 w-full">
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2 font-semibold">Start Time</label>
                            <input 
                                type="time" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                v-model="startTime"
                            >
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2 font-semibold">End Time</label>
                            <input 
                                type="time" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                v-model="endTime"
                            >
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="class" class="pl-2 font-semibold">Day Pattern</label>
                        <div class="grid place-items-center ">
                          <div class="flex space-x-4 py-4 z-[20]">
                            <div 
                                v-for="days, index in dayPatterns" 
                                class="w-[3.5rem] grid place-items-center py-3 rounded-full text-2xl bg-[#CAD7E8] text-white cursor-pointer"
                                @click="selectDay(days)"
                            >
                                {{ days.d }}
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="class" class="pl-2 font-semibold">School Location</label>
                        <select 
                            name="" 
                            id="class" 
                            class="w-full border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                            v-model="classLocation"
                        >
                            <option value="" disabled selected>Select a Location</option>
                            <option value="Dojo 1">Dojo 1</option>
                            <option value="Dojo 2">Dojo 2</option>
                            <option value="Dojo 3">Dojo 3</option>
                            <option value="Dojo 4">Dojo 4</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label for="class" class="pl-2 font-semibold">Class Area</label>
                        <select 
                            name="" 
                            id="class" 
                            class="w-full border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                            v-model="classArea"
                        >
                            <option value="" disabled selected>Select a Location</option>
                            <option value="Open Area - A">Open Area - A</option>
                            <option value="Open Area - B">Open Area - B</option>
                            <option value="Open Area - C">Open Area - C</option>
                            <option value="Open Area - D">Open Area - D</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label for="class" class="pl-2 font-semibold">Instructor</label>
                        <select 
                            name="" 
                            id="class" 
                            class="w-full border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                            v-model="classInstructor"
                        >
                            <option value="" disabled selected>Select an Instructor</option>
                            <option value="Tyler Salmon">Tyler Salmon</option>
                            <option value="Taylor Swift">Taylor Swift</option>
                            <option value="John Wick">John Wick</option>
                            <option value="Johnny Sins">Johnny Sins</option>
                        </select>
                    </div>
                    <div class="flex space-x-8 w-full">
                        <div class="flex flex-col space-y-3">
                            <label for="start" class="pl-2 font-semibold">Limit Number of Students</label>
                            <p 
                              class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500 bg-[#E9F0FA]"
                              :class="[limitStud ? 'block' : 'hidden']"
                            >
                              No Limit
                            </p>
                            <input 
                                type="text" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                :class="[limitStud == '' ? 'block' : 'hidden']"
                                v-model="studentsLimit"
                            >
                            <div class="flex space-x-2 place-items-center">
                              <input v-model="limitStud" type="checkbox" class="ml-1 w-4 h-4">
                              <p class="text-sm">No Limit</p>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="start" class="pl-2 font-semibold">Limit Number of Leads</label>
                            <p 
                              class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500 bg-[#E9F0FA]"
                              :class="[limitLead ? 'block' : 'hidden']"
                            >
                              No Limit
                            </p>
                            <input 
                                type="text" 
                                id="start" 
                                class="w-[14.5rem] border border-gray-400 py-3 px-4 rounded-lg text-gray-500"
                                :class="[limitLead == '' ? 'block' : 'hidden']"
                                v-model="leadsLimit"
                            >
                            <div class="flex space-x-2 place-items-center">
                              <input v-model="limitLead" type="checkbox" class="ml-1 w-4 h-4">
                              <p class="text-sm">No Limit</p>
                            </div>
                        </div>
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