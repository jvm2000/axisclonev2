<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const { isUnassignStudentModal, closeUnassignConfirm, isAssignStudentModalOpen } = modalFunctions()
const { programViewItem, assignedStudent, selectedID, viewAssignedStudents } = usePrograms()
</script>

<template>
    <div>
        <TransitionRoot appear :show="isUnassignStudentModal" as="template">
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
                    class="grid min-h-full items-center justify-center p-4 text-center place-items-center"
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
                        class="w-auto max-w-md transform overflow-hidden rounded-2xl bg-white py-2 text-left align-middle shadow-xl transition-all"
                    >
                        <DialogTitle
                        as="h3"
                        class="text-[24px] font-medium leading-6 text-gray-900"
                        >
                        </DialogTitle>

                        <div class="">
                            <div class="flex flex-col space-y-4">
                                <div class="w-full px-8 pt-2 flex relative space-x-4 place-items-center">
                                    <ExclamationTriangleIcon class="w-8 h-8 text-red-600"/>
                                    <p class="text-[20px]">Unassign Student</p>
                                <XMarkIcon class="absolute right-4 w-6 h-6 cursor-pointer"
                                    @click="closeUnassignConfirm"
                                />
                                </div>
                                <div class="w-full border-b-2 border-gray-400"></div>
                                <p class="text-[16px] w-[25rem] px-4">
                                    <div class="">
                                        <p>Are you sure you want to unassign selected student to {{ programViewItem.addedSyllabus }} as 
                                            <!-- <span class="flex space-x-2 place-items-center">
                                                <div class="w-4 h-4 bg-[#FFD600]"></div>
                                                <p class="font-semibold">Yellow Rank?</p>
                                            </span> -->
                                            <span class="font-semibold">
                                                <span class="w-4 h-3 bg-[#FFD600] text-[#FFD600]">;;;;</span> Yellow Rank?
                                            </span>
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div class="flex relative w-full pb-4 px-4 pt-10">
                                <div class="absolute right-4 space-x-4 text-white">
                                    <button class="bg-[#CAD7E8] px-6 py-3 cursor-pointer rounded-lg" @click="closeUnassignConfirm">Cancel</button>
                                    <button @click="closeUnassignConfirm(), viewAssignedStudents()" class="bg-red-400 px-6 py-3 cursor-pointer rounded-lg">Unassign</button>
                                </div>
                                <div class="invisible h-14"></div>
                            </div>
                        </div>
                    </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
  </template>