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

    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
    import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
    import Vue from "vue";
    import Toast, { useToast, POSITION } from "vue-toastification";
    import toasterDelete from "/components/toaster/deleteSyllabus.vue"

    const { syllabusList, duplicateSyllabus, deleteSyllabus, syllabusViewObject } = useAddSyllabus()
    const { programViewItem, clickViewProgram } = usePrograms()
    const { openUpdateProgramModal } = modalFunctions()

    const router = useRouter()

    const goToDashboard = () => {
        router.push('/programs/programsDashboard')
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
<div class="w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-end"
        >
          <EllipsisVerticalIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-[10rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#EAF3F9] text-black' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="openUpdateProgramModal(), clickViewProgram(programViewItem)"
              >
                Rename
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#EAF3F9] text-black' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="duplicateSyllabus(programViewItem), goToDashboard()"
              >
                Duplicate
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#EAF3F9] text-black' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="deleteSyllabus(programViewItem), goToDashboard(), deleteSuccessfully()"
              >
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    <DialogsUpdateProgramsModal :isUpdateModal="openUpdateProgramModal"/>
  </div>
</template>