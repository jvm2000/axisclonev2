<script setup lang="ts">
    import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    } from '@headlessui/vue'
    import { XMarkIcon } from '@heroicons/vue/24/outline'

    const { isSyllabusPreviewModalOpen, closeSyllabusPreviewModal } = modalFunctions()
    const { programViewItem } = usePrograms()   
    const { subR1, subR2, subR3, subR4, subD1, subD2, subD3, subD4, totalDays, totalRanks } = useBeltBlueYellow()
    const { GsubR1, GsubR2, GsubR3, GsubR4, GsubD1, GsubD2, GsubD3, GsubD4, GtotalDays, GtotalRanks } = useBeltGreen()
    const { OsubR1, OsubR2, OsubR3, OsubR4, OsubD1, OsubD2, OsubD3, OsubD4, OtotalDays, OtotalRanks } = useBeltOrange()
    const { PsubR1, PsubR2, PsubR3, PsubR4, PsubD1, PsubD2, PsubD3, PsubD4, PtotalDays, PtotalRanks } = useBeltPurple()
    const { YsubR1, YsubR2, YsubR3, YsubR4, YsubD1, YsubD2, YsubD3, YsubD4, YtotalDays, YtotalRanks } = useBeltYellow()


</script>

<template>
    <TransitionRoot appear :show="isSyllabusPreviewModalOpen" as="template">
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
                class="w-auto transform overflow-hidden rounded-2xl bg-white py-3 px-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>
                <div class="px-6 flex flex-col space-y-4 relative">
                    <XMarkIcon class="w-[2.5rem] h-[2.5rem] absolute right-0 mt-4 cursor-pointer" @click="closeSyllabusPreviewModal"/>
                    <div class="flex flex-row">
                        <div class="flex space-x-6 place-items-center px-4 pt-6">
                            <img src="/icons/syllabusicon.svg" alt="">
                            <div class="flex flex-col space-y-2">
                                <p class="text-[24px]">{{ programViewItem.addedSyllabus }}</p>
                                <p class="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div class="w-[10rem] invisible"></div>
                            <div class="absolute right-0 pl-10 space-y-14">
                                <div class=""></div>
                                <p class="text-[12px]">Version 1: Draft</p>
                            </div>
                        </div>
                    </div>
                  <div class="flex space-x-6">
                      <img src="/icons/blueyellowbelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Blue Yellow Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row text-sm text-gray-500">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subR1" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subD1" disabled>
                            
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subR2" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subD2" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subR3" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subD3" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subR4" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="subD4" disabled>
                        </div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="totalRanks" disabled>
                        </div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13 %;" v-model.number="totalDays" disabled>
                        </div>
                    </div>
                  </div>
                  <!-- GREEN BELT 
                  GREEN BELT 
                  GREEN BELT 
                  GREEN BELT  -->
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6">
                      <img src="/icons/greenbelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Green Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row text-sm text-gray-500 invisible">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubR1" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubD1" disabled>
                            
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubR2" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubD2" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubR3" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubD3" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubR4" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GsubD4" disabled>
                        </div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="GtotalRanks" disabled>
                        </div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13 %;" v-model.number="GtotalDays" disabled>
                        </div>
                    </div>
                  </div>
                  <!-- ORANGE BELT
                  ORANGE BELT
                  ORANGE BELT
                  ORANGE BELT
                  ORANGE BELT -->
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6">
                      <img src="/icons/orangebelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Orange Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row text-sm text-gray-500 invisible">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubR1" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubD1" disabled>
                            
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubR2" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubD2" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubR3" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubD3" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubR4" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OsubD4" disabled>
                        </div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="OtotalRanks" disabled>
                        </div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13 %;" v-model.number="OtotalDays" disabled>
                        </div>
                    </div>
                  </div>
                  <!-- PURPLE BELT
                  PURPLE BELT
                  PURPLE BELT
                  PURPLE BELT
                  PURPLE BELT -->
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6">
                      <img src="/icons/purplebelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Purple Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row text-sm text-gray-500 invisible">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubR1" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubD1" disabled>
                            
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubR2" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubD2" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubR3" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubD3" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubR4" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PsubD4" disabled>
                        </div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="PtotalRanks" disabled>
                        </div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13 %;" v-model.number="PtotalDays" disabled>
                        </div>
                    </div>
                  </div>
                  <!-- YELLOW BELT
                  YELLOW BELT
                  YELLOW BELT
                  YELLOW BELT
                  YELLOW BELT -->
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6">
                      <img src="/icons/yellowbelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Yellow Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row text-sm text-gray-500 invisible">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubR1" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubD1" disabled>
                            
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubR2" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubD2" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubR3" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubD3" disabled>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubR4" disabled>
                        </div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YsubD4" disabled>
                        </div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13.5%;" v-model.number="YtotalRanks" disabled>
                        </div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">
                            <input class="table-cell bg-white border-none disabled w-6" style="padding-left: 13 %;" v-model.number="YtotalDays" disabled>
                        </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="w-full h-4 invisible"></div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>