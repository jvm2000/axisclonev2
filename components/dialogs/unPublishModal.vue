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

import Vue from "vue";
import Toast, { useToast, POSITION } from "vue-toastification";
import toasterUnpublish from "/components/toaster/unpublishSyllabus.vue"

const { isUnpublishModal, openUnpublishModal } = modalFunctions()
const { syllabusName, addSyllabus } = useAddSyllabus()
const { programViewItem, setSyllabusStatus } = usePrograms()

const toast = useToast()
const successUnpublish = () => {
    toast.success(toasterUnpublish, {
        position: POSITION.BOTTOM_RIGHT,
        icon: false,
        timeout: 3000,
    });
}

</script>

<template>
    <TransitionRoot appear :show="isUnpublishModal" as="template">
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
                    <p>Unpublish Syllabus</p>
                </div>
                <div class="pt-12 px-8 space-y-8">
                    <div class="text-[16px] flex flex-col space-y-2">
                        <p class="text-sm w-[22rem]">Are you sure you want to unpublish <b>{{ programViewItem.addedSyllabus }}</b>?</p>                        
                    </div>
                    <div class="w-full grid place-items-end pb-4">
                        <div class="flex flex-row space-x-2">
                            <button class="px-8 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg"
                                @click="openUnpublishModal"
                            >
                                Cancel
                            </button>
                            <button class="px-8 py-2 text-[16px] text-white bg-[#E2816B] rounded-lg"
                                @click="setSyllabusStatus('Undefined'), openUnpublishModal(), successUnpublish()"
                            >
                                Unpublish
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