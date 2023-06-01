<script setup lang="ts">

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { PlusIcon, CheckIcon } from '@heroicons/vue/24/outline'

const { isCreateClass, openCreateClass } = modalFunctions()
const { className, classProgram, classSyllabus, createClass, classColor, classRanks, ranksList } = useCreateClasses()
const { handleChange, image, preview } = useCreateClasses()

const upload = () => {
    document.getElementById('profile-photo')?.click()
}

const proceed = ref(false)
const nextStage = () => {
    if(className.value == ''){
        return alert('Input should not be empty!')
    }
    else{
        return proceed.value = true
    }
}

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


</script>

<template>
<TransitionRoot appear :show="isCreateClass" as="template">
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
            class="w-auto transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all rounded-lg"
            :class="{
                'py-0' : proceed,
                'py-2' : !proceed
            }"
          >
            <DialogTitle
              as="h3"
              class="text-[24px] font-medium leading-6 text-gray-900"
            >
            </DialogTitle>
            <div
                v-if="!proceed"
            >
                <div 
                    class="text-[20px] w-full py-2 pl-10 border-b border-gray-200 grid place-items-center"
                >
                    <p>Create Class</p>
                </div>
                <div class="grid place-items-center pt-6">
                    <div class="flex space-x-6 px-6 place-items-center">

                        <img
                            v-if="preview"  
                            :src="preview" 
                            alt=""
                            class="w-[10rem] h-[10rem] rounded-lg"
                            >
                            <div 
                            v-if="!preview"
                            class="w-[10rem] h-[10rem] bg-[#E7F3FF] rounded-lg border-[3px] border-dashed border-[#97B3C2]"
                            >
                                <div class="py-6 grid place-items-center space-y-2">
                                <label for="imageupload">
                                    <input
                                        ref="image"
                                        type="file"
                                        id="profile-photo"
                                        name="profile-photo"
                                        class="invisible z-[20] absolute cursor-pointer"
                                        accept=".jpeg, .jpg, .png, image/jpeg, image/png"
                                        @change="handleChange"
                                    />
                                    <div 
                                        class="px-2 py-2 bg-[#527AF5] rounded-full z-[10] cursor-pointer"
                                        @click="upload()"
                                    >
                                        <PlusIcon class="w-10 h-10 text-white" />
                                    </div>
                                    </label>
                                <p class="text-[#2E304F] text-[16px] text-center">Add Image <br>Here</p>
                                </div>
                            </div>

                            <div class="">
                            <p class="text-[16px]">Class Name</p>
                            <input 
                                type="text" 
                                class="mt-4 text-[18px] w-[29.7rem] border-b border-black ring-0 outline-none" placeholder="Enter Timetable Name"
                                v-model="className"
                            >
                            </div>

                        </div>
                        <div class="w-full relative text-white mt-8">
                            <div class="absolute right-6 flex space-x-4 place-items-center">
                                <p 
                                    class="text-[18px] px-8 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer" 
                                    @click="openCreateClass"
                                >
                                Cancel
                                </p>
                                <button 
                                    class="text-[18px] px-10 py-3 rounded-lg"
                                    :class="[className ? 'bg-blue-500 cursor-pointer' : 'bg-gray-300 cursor-not-allowed']"
                                    :disabled="className == ''"
                                    @click="nextStage"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    <div class="w-full h-[4rem]"></div>
                </div>
            </div>
            <div
                v-else
                class="relative w-[36rem] h-auto"
            >
                <div class="w-full h-[5.5rem] rounded-tl-lg rounded-tr-lg z-[10] bg-yellow-300"></div>

                <div class="w-full h-[3rem] z-[20] grid place-items-center">
                    <img 
                        v-if="preview"
                        :src="preview" 
                        alt=""
                        class="rounded-lg w-[7rem] h-[7rem] absolute mb-12 border-2 border-white"
                    />
                    <img
                        v-else 
                        src="/classess/profile.svg" 
                        alt=""
                        class="rounded-lg w-[7rem] h-[7rem] absolute mb-12 border-2 border-white"
                    >
                </div>

                <div class="w-full grid place-items-center h-auto pt-4 text-2xl">
                    <p>{{ className }}</p>
                </div>

                <div class="w-full h-auto space-y-10 px-8 pt-10">        

                    <div class="grid space-y-4">
                        <p class="text-[16px]">Choose class color</p>
                        <div class="flex space-x-6 place-items-center">
                            <span class="rounded-full h-[6.3rem] w-[6.3rem] bg-yellow-400"></span>
                            <div class="grid space-y-6">
                                <div class="flex space-x-8">
                                    <span 
                                        v-for="cols, index in colorsList"
                                        :key="index"
                                        :class="`w-6 h-6 rounded-full border border-[#D1E4EE] ${cols.color}`"
                                    ></span>    
                                </div>
                                <div class="flex space-x-8">
                                    <span 
                                        v-for="cols, index in colorsList2"
                                        :key="index"
                                        :class="`w-6 h-6 rounded-full border border-[#D1E4EE] ${cols.color}`"
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid space-y-2">
                        <p class="text-[16px]">Choose Program</p>
                        <select name="" id="" class="w-full h-[3rem] border border-[#CAD7E8] bg-[#FBFCFE] text-[16px] rounded-lg px-4">
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
                        <select name="" id="" class="w-full h-[3rem] border border-[#CAD7E8] bg-[#FBFCFE] text-[16px] rounded-lg px-4">
                            <option value="--" selected>Choose a Syllabus</option>
                            <option value="Syllabus Summer 001">Syllabus Summer 001</option>
                            <option value="Syllabus Summer 002">Syllabus Summer 002</option>
                            <option value="Syllabus Summer 003">Syllabus Summer 003</option>
                            <option value="Syllabus Summer 004">Syllabus Summer 004</option>
                            <option value="Syllabus Summer 005">Syllabus Summer 005</option>
                        </select>
                    </div>

                    <div class="grid space-y-4">
                        <div class="w-full relative flex text-[16px] place-items-center">
                            <p>Choose Ranks</p>
                            <div class="flex space-x-2 place-items-center absolute right-0">
                                <input 
                                    type="checkbox"
                                >
                                <p>Select All</p>
                            </div>
                        </div>
                        <div class="flex space-x-10">
                            <div 
                                v-for="ranks, index in ranksList"
                                :key="index"
                                class="grid space-y-2 place-items-center"
                            >
                                <div class="w-auto h-auto rounded-lg border-2 border-[#527AF5] px-[1px] py-[1px]">
                                    <div :class="`rounded-lg w-auto h-auto ${ranks.color} border border-[#DCF2F6]`">
                                        <div class="px-4 py-4">
                                            <CheckIcon class="w-6 h-auto text-white"/>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-xs">{{ ranks.value }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full relative">
                        <div class="">
                            test
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