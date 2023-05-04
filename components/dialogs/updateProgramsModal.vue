<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'


const { isUpdateModal, openUpdateProgramModal } = modalFunctions()
const { syllabusName, addSyllabus, updateSyllabus, syllabusUpdate } = useAddSyllabus()
const { programViewItem } = usePrograms()

</script>

<template>
    <TransitionRoot appear :show="isUpdateModal" as="template">
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
                <div class="text-[20px] w-full border-b pl-8 py-2">
                    <p>Rename Syllabus</p>
                </div>
                <div class="pt-12 px-8 space-y-8">
                    <div class="text-[16px] flex flex-col space-y-2">
                        <p>New Syllabus Name</p>
                        <input type="text" class="w-[28rem] border rounded-lg px-4 py-3" placeholder="Enter Syllabus Name"
                            v-model="syllabusUpdate"
                        >
                    </div>
                    <div class="w-full grid place-items-end pb-4">
                        <div class="flex flex-row space-x-2">
                            <button class="px-8 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg"
                                @click="openUpdateProgramModal"
                            >
                                Cancel
                            </button>
                            <button class="px-8 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg"
                                @click="updateSyllabus(programViewItem), openUpdateProgramModal()"
                            >
                                Create
                            </button>
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