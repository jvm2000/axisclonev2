<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'


    const { isArchiveTable, openArchiveTable } = modalFunctions()
    const { timeTableList, timeTableName, addList, fromTimeTable, toTimeTable, objectList, objStatus } = addListTimetable()
    const { handleChange, image, preview } = useUploadList()

    const checkbox = ref(false)
    const checkSeasonal = ref(false)

    const toogle = () => {
      checkSeasonal.value = !checkSeasonal.value
    }

    const upload = () => {
        document.getElementById('profile-photo')?.click()
    }

    const confirm = ref('archive')
    const confirmationMessage = ref('')

    const canProceed = computed(() => confirmationMessage.value == confirm.value)

  
    

</script>

<template>
    <TransitionRoot appear :show="isArchiveTable" as="template">
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
                class="w-auto transform overflow-hidden rounded-2xl bg-white py-2 text-left shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-[24px] font-medium leading-6 text-gray-900"
                >
                </DialogTitle>
                <div class="text-2xl w-full py-2 pl-4 border-b-2 border-gray-100 flex space-x-4 place-items-center">
                    <img src="/timetable/exclamation_circle.svg" alt="">
                    <p>Archive Timetable</p>
                </div>
                <div class="pt-6 text-[16px] px-10 space-y-4 place-items-start pb-4">
                    <p>Are you sure you want to archive timetable <b>2 weeks Program?</b></p>
                    <p><span class="text-[#E22E2E] font-semibold">WARNING: </span>All schedules will not be displayed on AXIS Kiosk<br> for your students and lead to check-in.</p>
                    <p>Type “archive” to confirm</p>
                    <input 
                        type="text" 
                        class="px-4 w-[12rem] h-[2.5rem] border drop-shadow rounded-lg"
                        v-model="confirmationMessage"
                    >
                </div>
                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-10 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer"
                            @click="openArchiveTable"
                        >
                            Cancel
                        </p>
                        <button 
                            class="px-10 py-3 rounded-lg cursor-pointer"
                            :disabled="!canProceed"
                            :class="[canProceed ? 'bg-[#E26969]' : 'bg-[#CAD7E8]']"
                            @click="openArchiveTable(), objStatus('archived')"
                        >
                            Archive
                    </button>
                    </div>
                </div>
                <div class="invisible h-[4rem]"></div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>