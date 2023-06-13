<script setup lang="ts">

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { PlusIcon, CheckIcon } from '@heroicons/vue/24/outline'

const { isEditClass, openEditClass } = modalFunctions()

const { className, classProgram, classSyllabus, createClass, classColor, classRanks, getClassColor, colorObj, ranksObj, getClassRanks, selectRank, classList, classObj, getClassObjColor, getClassObj, updateClass } = useCreateClasses()


const colorsList = reactive([
    {color: 'bg-[#D4E2EF]'},
    {color: 'bg-[#EA4242]'},
    {color: 'bg-[#F28118]'},
    {color: 'bg-[#EEDD44]'},
    {color: 'bg-[#69B744]'},
    {color: 'bg-[#3C83C3]'},
    {color: 'bg-[#35529C]'},
])

const colorsList2 = reactive([
    {color: 'bg-[#8D3AB4]'},
    {color: 'bg-[#5812B1]'},
    {color: 'bg-[#7E7168]'},
    {color: 'bg-[#898A9E]'},
    {color: 'bg-[#E8E6E6]'},
    {color: 'bg-[#262525]'},
    {color: 'bg-[#FFFFFF]'},
])

const ranksList = reactive([
        {
            color: 'bg-[#FFFFFF]', 
            cvalue: 'White Belt', 
            selected: false,
        },
        {
            color: 'bg-[#FFE351]', 
            cvalue: 'Yellow Belt', 
            selected: false,
        },
        {
            color: 'bg-[#9BEA87]', 
            cvalue: 'Green Belt', 
            selected: false,
        },
        {
            color: 'bg-[#5F7EEF]', 
            cvalue: 'Blue Belt', 
            selected: false,
        },
        {
            color: 'bg-[#E075F1]', 
            cvalue: 'Purple Belt', 
            selected: false,
        }
    ])

</script>

<template>
<TransitionRoot appear :show="isEditClass" as="template">
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
            class="w-auto transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
          >
            <DialogTitle
              as="h3"
              class="text-[24px] font-medium leading-6 text-gray-900"
            >
            </DialogTitle>
            <div class="w-auto h-auto">

                <div>
                    <div class="w-full border-b border-[#E9F0FA] py-4 text-2xl">
                        <p class="ml-8">Edit Class</p>
                    </div>

                    <div class="w-full grid pt-6 space-y-4 px-8 text-[16px]">
                        <p>Class Name</p>
                        <input 
                            type="text"
                            class="w-full h-[3rem] border border-[#CAD7E8] bg-[#FBFCFE] text-[16px] rounded-lg px-4"
                            v-model="className"
                        >
                    </div>

                    <div class="w-full h-auto space-y-10 px-8 pt-10">        

                        <div class="grid space-y-4">
                            <p class="text-[16px]">Choose class color</p>
                            <div class="flex space-x-4 sm:space-x-6 place-items-center">
                                <span 
                                    class="rounded-full h-[6.3rem] w-[6.3rem]"
                                    :class="`${classObj.color}`"
                                ></span>
                                <div class="grid space-y-6">
                                    <div class="flex space-x-6 sm:space-x-8">
                                        <span 
                                            v-for="cols, index in colorsList"
                                            :key="index"
                                            :class="`w-6 h-6 rounded-full border border-[#D1E4EE] cursor-pointer ${cols.color}`"
                                            @click=""
                                        ></span>    
                                    </div>
                                    <div class="flex space-x-6 sm:space-x-8">
                                        <span 
                                            v-for="cols, index in colorsList2"
                                            :key="index"
                                            :class="`w-6 h-6 rounded-full border border-[#D1E4EE] cursor-pointer ${cols.color}`"
                                            @click=""
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid space-y-2">
                            <p class="text-[16px]">Choose Program</p>
                            <select 
                                name="" 
                                id="" 
                                class="w-full h-[3rem] border border-[#CAD7E8] bg-[#FBFCFE] text-[16px] rounded-lg px-4"
                                v-model="classProgram"
                            >
                                <option value="--" selected>Choose a Program</option>
                                <option value="Taeguk Summer 1">Taeguk Summer 1</option>
                                <option value="Taeguk Summer 2">Taeguk Summer 2</option>
                                <option value="Taeguk Summer 3">Taeguk Summer 3</option>
                                <option value="Taeguk Summer 4">Taeguk Summer 4</option>
                                <option value="Taeguk Summer 5">Taeguk Summer 5</option>
                            </select>
                        </div>

                        <div class="grid space-y-2">
                            <p class="text-[16px]">Choose Syllabus</p>
                            <select 
                                name="" 
                                id="" 
                                class="w-full h-[3rem] border border-[#CAD7E8] bg-[#FBFCFE] text-[16px] rounded-lg px-4"
                                v-model="classSyllabus"
                            >
                                <option value="--" selected>Choose a Syllabus</option>
                                <option value="Syllabus Summer 001">Syllabus Summer 001</option>
                                <option value="Syllabus Summer 002">Syllabus Summer 002</option>
                                <option value="Syllabus Summer 003">Syllabus Summer 003</option>
                                <option value="Syllabus Summer 004">Syllabus Summer 004</option>
                                <option value="Syllabus Summer 005">Syllabus Summer 005</option>
                            </select>
                        </div>

                        <div class="grid space-y-6">
                            <div class="w-full relative flex text-[16px] place-items-center">
                                <p>Choose Ranks</p>
                                <div class="flex space-x-2 place-items-center absolute right-0">
                                    <input 
                                        type="checkbox"
                                    >
                                    <p>Select All</p>
                                </div>
                            </div>
                            <div class="flex space-x-6 sm:space-x-10 w-full px-4">
                                <div 
                                    v-for="ranks, index in classObj.ranks"
                                    :key="index"
                                    class="grid space-y-2 place-items-center"
                                >
                                    <div 
                                        class="w-auto h-auto rounded-lg border-2 border-[#527AF5] px-[1px] py-[1px] cursor-pointer"
                                    >
                                        <div :class="`rounded-lg w-auto h-auto ${ranks.color} border border-[#DCF2F6]`">
                                            <div class="px-4 py-4 invisible">
                                                <CheckIcon 
                                                    class="w-6 h-auto"
                                                    :class="[ranks.selected ? 'text-black' : 'text-white']"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-xs">{{ ranks.value }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full relative flex h-[4rem] text-white">
                            <div class="absolute right-0 flex space-x-4 place-items-center">
                                <p 
                                    class="text-[18px] px-8 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer" 
                                    @click="openEditClass"
                                >
                                    Back
                                </p>
                                <button 
                                    class="text-[18px] px-10 py-3 rounded-lg bg-blue-500 cursor-pointer"
                                    @click="openEditClass(), updateClass(classObj)"
                                >
                                    Update
                                </button>
                            </div>
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