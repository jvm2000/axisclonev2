<script setup lang="ts">
import Vue from "vue";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { MagnifyingGlassIcon, XMarkIcon, ArrowLongRightIcon, ChevronDownIcon, ArrowLongLeftIcon, FunnelIcon } from '@heroicons/vue/24/outline'

const toastrRef = ref(null)

const { isAssignStudentModal, closeAssignConfirm, isAssignStudentModalOpen } = modalFunctions()
const { programViewItem, assignedStudent, selectedID, viewAssignedStudents } = usePrograms()
const successAssignStud = () => {
    
}

const toastrF = () => {
    this.toastrRef = this.$refs.toastr
}

</script>

<template>
    <div>
        <TransitionRoot appear :show="isAssignStudentModal" as="template">
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
                                <div class="w-full px-8 pt-2 flex relative">
                                    <p class="text-[20px]">Assign Student</p>
                                <XMarkIcon class="absolute right-4 w-6 h-6 cursor-pointer"
                                    @click="closeAssignConfirm"
                                />
                                </div>
                                <div class="w-full border-b-2 border-gray-400"></div>
                                <p class="text-[16px] w-[25rem] px-4">
                                    <div class="">
                                        <p>Are you sure you want to assign selected student to {{ programViewItem.addedSyllabus }} as 
                                            <!-- <span class="flex space-x-2 place-items-center">
                                                <div class="w-4 h-4 bg-[#FFD600]"></div>
                                                <p class="font-semibold">Yellow Rank?</p>
                                            </span> -->
                                            <span class="font-semibold">
                                                <span class="w-4 h-3 bg-[#FFD600] text-[#FFD600]">;;;</span> Yellow Rank?
                                            </span>
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div class="flex relative w-full pb-4 px-4 pt-10">
                                <div class="absolute right-4 space-x-4 text-white">
                                    <button class="bg-[#CAD7E8] px-6 py-3 cursor-pointer rounded-lg" @click="closeAssignConfirm">Cancel</button>
                                    <button @click="closeAssignConfirm(), viewAssignedStudents()" class="bg-[#5081F0] px-6 py-3 cursor-pointer rounded-lg">Assign</button>
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