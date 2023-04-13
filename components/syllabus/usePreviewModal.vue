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
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13.7%;">18</div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                  </div>
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6 place-items-center border-b border-gray-400 pb-4 text-[15px]">
                      <img src="/icons/orangebelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Orange Belt</p>
                      <div class="pl-[16.6rem] flex">
                        <p>18</p>
                        <p class="pl-16">And</p>
                        <p class="pl-12">20</p>
                      </div>
                  </div>
                  <div class="flex space-x-6">
                      <img src="/icons/blueyellowbelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Blue Yellow Belt</p>
                  </div>
                  <div class="table pl-20 border-spacing-2 text-sm">
                    <div class="table-header-group">
                        <div class="table-row invisible text-sm text-gray-500">
                            <div class="table-cell">SUB RANKS</div>
                            <div class="table-cell" style="padding-left: 10%;">SESSIONS</div>
                            <div class="table-cell invisible">CLASS</div>
                            <div class="table-cell">DAYS</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-cell">Sub Rank Dummy 001</div>
                        <div class="table-cell" style="padding-left: 13.5%;">18</div>
                        <div class="table-cell text-gray-500" style="padding-left: 3.5%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                    <div class="table-row-group text-[15px]">
                        <div class="table-cell text-sm" style="padding-left: 40%;">TOTAL</div>
                        <div class="table-cell" style="padding-left: 13.7%;">18</div>
                        <div class="table-cell" style="padding-left: 3.6%;">And</div>
                        <div class="table-cell" style="padding-left: 1.5%;">20</div>
                    </div>
                  </div>
                  <div class="border-t border-gray-400 w-full"></div>
                  <div class="flex space-x-6 place-items-center pb-4 text-[15px]">
                      <img src="/icons/purplebelt.svg" alt="" class="w-[2rem] h-[2rem] ml-6">
                      <p class="text-xl">Purple Belt</p>
                      <div class="pl-[17.5rem] flex">
                        <p>18</p>
                        <p class="pl-16">And</p>
                        <p class="pl-12">20</p>
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