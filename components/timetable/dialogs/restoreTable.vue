<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'


    const { isRestoreTable, openRestoreTable } = modalFunctions()
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
    <TransitionRoot appear :show="isRestoreTable" as="template">
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

                <div class="flex pt-4 px-8">
                    <ExclamationTriangleIcon class="w-[2.5rem] h-[2.5rem] text-red-600 px-2 py-2 rounded-full bg-red-200"/>
                    <div class="grid space-y-2 pl-4">
                        <p class="text-[18px] font-semibold">Restore timetable</p>
                        <p class="text-[14px]">Are you sure you want to restore this timetable 2-weeks<br> program?</p>
                    </div>
                </div>

                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-4 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer font-semibold"
                            @click="openRestoreTable"
                        >
                            Cancel
                        </p>
                        <div 
                            class="px-1 py-1 rounded-lg cursor-pointer bg-red-400"
                            @click="openRestoreTable(), objStatus('default')"
                        >
                            <p class="border-2 border-white rounded-md px-3 py-[6px] font-semibold">Restore</p>
                        </div>
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