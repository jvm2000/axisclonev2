<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { StarIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const { openFixRank, isFixRank, openConfirmFixRank } = modalFunctions()

const { objGrading, colorObj, getObjColor, updateGradingColor, getObjGrading, getConfirmGradingObj } = useGradingFunctions()

const belts = reactive([
  {name: 'White Belt', color: 'bg-white'},
  {name: 'Yellow Belt', color: 'bg-[#FEEB45]'},
  {name: 'Green Belt', color: 'bg-[#39D0B5]'},
  {name: 'Blue Belt', color: 'bg-[#5177FE]'},
  {name: 'Orange Belt', color: 'bg-[#FF900D]'},
  {name: 'Red Belt', color: 'bg-[#E02F2F]'}
])

</script>

<template>
    <TransitionRoot appear :show="isFixRank" as="template">
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
                class="w-auto transform overflow-hidden rounded-2xl bg-white py-2 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>
                <div class="text-2xl w-full border-b pl-8 py-2 relative flex place-items-center">
                    <p>Fix Rank</p>
                    <XMarkIcon 
                      class="w-[2rem] h-[2rem] absolute right-6 bottom-2 cursor-pointer"
                      @click="openFixRank"
                    />
                </div>
                <div class="pt-6 space-y-4 py-4">

                    <div class="grid space-y-6">
                      
                      <div class="flex space-x-4 place-items-center pl-8">
                        <img src="/illustrations/profilesvg.svg" alt="" class="w-[4rem] h-[4rem] rounded-full">
                        <p class="text-xl">{{ objGrading.firstname }} {{ objGrading.lastname }}</p>
                      </div>

                      <div class="grid space-y-2 w-full pl-8">

                        <div class="flex place-items-center space-x-14 text-lg">
                          <p class="text-[#9FB5D1]">Program:</p>
                          <p>Little Dragon</p>
                        </div>
                        <div class="flex place-items-center space-x-14 text-lg">
                          <p class="text-[#9FB5D1]">Syllabus:</p>
                          <p>Little Dragon 4-5 Years</p>
                        </div>

                      </div>

                      <div class="grid w-full space-y-6">
                        <div class="pl-10 flex place-items-center text-lg text-[#9FB5D1] text-[16px] space-x-[9rem] pr-10">
                          <p>RANKS</p>
                          <p>MAKE CURRENT</p>
                        </div>
                        <div 
                          v-for="belt, index in belts"
                          :key="index"
                          class="w-full flex place-items-center border-b border-[#E9F0FA] relative text-[16px] py-2"
                        >
                          <div class="flex place-items-center pl-8 space-x-4">
                            <span 
                              class="w-[1.5rem] h-[1.5rem] rounded-sm border border-black"
                              :class="`${belt.color}`"
                            ></span>
                            <p>{{ belt.name }}</p>
                          </div>
                          <StarIcon 
                            class="w-[1.5rem] h-[1.5rem] absolute right-24 cursor-pointer"
                            :class="[objGrading.rank == belt.name ? 'fill-[#FFE252]' : '']"
                            @click="getObjColor(belt), getConfirmGradingObj(objGrading), openConfirmFixRank()"
                          />
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