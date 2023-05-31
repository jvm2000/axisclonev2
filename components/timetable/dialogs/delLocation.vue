<style>
    .Vue-Toastification__toast {
        background: #FFFFFF;
        border-left: 5px solid green;
    }
    .Vue-Toastification__toast--success.success-toast {
        background: #FFFFFF;
        padding: 0;
        min-height: fit-content
    }
    /* reset toast body, to fully show content only */
    .Vue-Toastification__toast--error.error-toast {
        background: #FFFFFF;
        padding: 0;
        min-height: fit-content
    }
</style>

<script setup lang="ts">

    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    import { TrashIcon } from '@heroicons/vue/24/outline'
    import Vue from "vue";
    import Toast, { useToast, POSITION } from "vue-toastification";
    import toasterDelete from "/components/toaster/toastrDelLocation.vue"

    const { isDelLoc, openDelLoc } = modalFunctions()

    const confirm = ref('delete')
    const confirmationMessage = ref('')

    const canProceed = computed(() => confirmationMessage.value == confirm.value)

    const { locationObj, delLoc } = addLocation()

    const clearInput = () => {
        confirmationMessage.value = ''
    }

    const toast = useToast()
    const deleteSuccessfully = () => {
        toast.success(toasterDelete, {
            position: POSITION.BOTTOM_RIGHT,
            icon: false,
            timeout: 3000,
        });
    }

</script>

<template>
    <TransitionRoot appear :show="isDelLoc" as="template">
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
                <div class="text-2xl w-full py-2 pl-6 border-b-2 border-gray-100 flex space-x-4 place-items-center">
                    <TrashIcon class="w-7 h-7 text-[#E22E2E]"/>
                    <p>Delete Location</p>
                </div>
                <div class="pt-6 text-[16px] px-10 space-y-4 place-items-start pb-4">
                    <p>Are you sure you want to remove <b>{{ locationObj.name }}</b></p>
                    <p><span class="font-semibold">Warning! </span>If you delete this location, all classes
                        assigned to<br> the location will be deleted.</p>
                    <p>You must first edit the schedules and use a different<br>
                    location if you want to keep the schedule on the timetable<br>
                    currently assigned to this location.</p>
                    <div class="w-full pt-4 space-y-3">
                        <p>Type "delete" to confirm</p>
                        <input 
                            type="text" 
                            class="px-4 w-[12rem] h-[2.5rem] border drop-shadow rounded-lg"
                            v-model="confirmationMessage"
                        >
                    </div>
                </div>
                <div class="w-full relative pt-4">
                    <div class="flex absolute right-8 text-white space-x-4 text-[16px]">
                        <p 
                            class="px-10 py-3 bg-[#CAD7E8] rounded-lg cursor-pointer"
                            @click="openDelLoc"
                        >
                            Cancel
                        </p>
                        <button 
                            class="px-10 py-3 rounded-lg cursor-pointer"
                            :disabled="!canProceed"
                            :class="[canProceed ? 'bg-[#E26969]' : 'bg-[#CAD7E8]']"
                            @click="clearInput(),delLoc(true),openDelLoc(),deleteSuccessfully()"
                        >
                            Delete
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