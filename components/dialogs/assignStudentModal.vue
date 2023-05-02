<script setup lang="ts">
import { reactive, computed } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { MagnifyingGlassIcon, XMarkIcon, ArrowLongRightIcon, ChevronDownIcon, ArrowLongLeftIcon, FunnelIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'


import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const { isAssignStudentModalOpen, closeAssignStudentModal, openConfirmAssignStudent, isConfirmAssignStudentModal,
    openAssignConfirm, isAssignStudentModal, isUnassignStudentModal, openUnassignConfirm
} = modalFunctions()
const { programViewItem, selectedID, assignedStudent, canViewAssignedStudents, viewAssignedStudents } = usePrograms()
const categories = reactive([{name: 'Assigned'}, {name: 'Not Assigned'}])
const { data: syllabusStudents } = await import('@/assets/json/mock/student-profile-data/syllabusStudents.json');

const assign = () => {
    selectedID.value
        .forEach(ID => {
            let data = syllabusStudents.find(student => student.id == ID);
            if(data) {
                data['studentStatus'] = 'Assigned';
            }
        })
    selectedID.value = []
}

const deassign = () => {
    selectedID.value
    .forEach(ID => {
        let data = syllabusStudents.find(student => student.id == ID);
        if(data) {
            data['studentStatus'] = 'Not Assigned';
        }
    })
    selectedID.value = []
}

const totalAssignedStudent = reactive([])
const initializeAssignedStudents = () => {
    let total = syllabusStudents.filter(student => student.studentStatus == 'Assigned')
    assignedStudent.value = total
    totalAssignedStudent.push(assignedStudent)

}


</script>

<template>
    <div>
        <TransitionRoot appear :show="isAssignStudentModalOpen" as="template">
            <Dialog as="div" @close="" class="relative z-10">
                <TransitionChild
                as="template"
                enter="duration-0 ease-out"
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
                        class="w-[52rem] transform overflow-hidden rounded-2xl bg-white py-2 px-6 text-left align-middle shadow-xl transition-all"
                    >
                        <DialogTitle
                        as="h3"
                        class="text-[24px] font-medium leading-6 text-gray-900"
                        >
                        </DialogTitle>
                        <div class="mt-4 px-6">
                        <div class="w-full pb-10 relative">
                            <XMarkIcon class="w-8 h-8 absolute right-0 cursor-pointer"
                                @click="closeAssignStudentModal"
                            />
                            <p class="text-[25px]">Assign Students for this {{ programViewItem.addedSyllabus }}</p>
                            <div class="w-full border-b-2 border-[#E9F0FA] pt-2"></div>

                            <!-- Seee Assigned Students
                            Seee Assigned Students
                            Seee Assigned Students
                            Seee Assigned Students -->

                            <div 
                                class="absolute right-0 flex space-x-4 place-items-center mt-4 cursor-pointer"
                                v-if="!canViewAssignedStudents"
                                @click="viewAssignedStudents"
                            >
                                <p class="text-[16px] text-[#5081F0]">See Assigned Students</p>
                                <ArrowLongRightIcon class="w-6 h-6 text-[#5081F0]"/>
                            </div>
                            <div
                                v-else
                                class="space-x-4 flex place-items-center mt-4 cursor-pointer"
                                @click="viewAssignedStudents"
                            >
                                <ArrowLongLeftIcon class="w-6 h-6 text-[#5081F0]"/>
                                <p class="text-[16px] text-[#5081F0]">See Unassigned Students</p>
                            </div>
                        </div>
                        <div 
                            v-if="canViewAssignedStudents"
                            class="flex relative place-items-center"
                        >
                            <p class="text-[20px]">All Assigned Students</p>
                            <div class="flex space-x-4 absolute right-0 mt-2">
                                <FunnelIcon class="w-5 h-5"/>
                                <p class="text-[16px]">Filter</p>
                            </div>
                        </div>
                        <div v-if="canViewAssignedStudents" class="w-full h-[1.1rem] invisible"></div>
                        <div 
                            v-if="!canViewAssignedStudents"
                            class="flex flex-col space-y-4"
                        >
                            <p class="text-[16px]">Choose a Rank for the student to assign with:</p>
                            <!-- Menu Dropdown
                            Menu Dropdown
                            Menu Dropdown
                            Menu Dropdown
                            Menu Dropdown -->
                            <div class="top-16 w-[18rem]">
                                <Menu as="div" class="relative">
                                <div>
                                    <MenuButton
                                    class="inline-flex w-full rounded-md bg-[#FBFCFE] bg-opacity-20 px-4 py-2 place-items-center text-[16px] text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 space-x-4 border border-[#CAD7E8] relative h-[3rem]"
                                    >
                                    <div class="w-5 h-5 rounded-sm bg-[#FFD600] mr-4"></div>
                                    Yellow Belt
                                    <ChevronDownIcon class="w-4 h-4 absolute right-4"/>
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
                                    class="absolute right-0 mt-2 w-[18rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[20] text-[16px] hover:bg-white"
                                    >
                                    <div class="px-2 py-1">
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'text-black' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2',
                                            ]"
                                        >
                                            <div class="w-5 h-5 rounded-sm bg-[#84d984] mr-4"></div>
                                            Green Belt
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'text-black' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2',
                                            ]"
                                        >
                                            <div class="w-5 h-5 rounded-sm bg-[#ff966f] mr-4"></div>
                                            Orange Belt
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'text-black' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2',
                                            ]"
                                        >
                                            <div class="w-5 h-5 rounded-sm bg-[#84b3d9] mr-4"></div>
                                            Blue Belt
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'text-black' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2',
                                            ]"
                                        >
                                            <div class="w-5 h-5 rounded-sm bg-[#e145aa] mr-4"></div>
                                            Purple Belt
                                        </button>
                                        </MenuItem>
                                    </div>
                                    </MenuItems>
                                </transition>
                                </Menu>
                            </div>
                        </div>
                        <div class="w-full h-[40rem] flex flex-col space-y-6 z-[10]">
                            <!-- SEARCH
                            SEARCH
                            SEARCH
                            SEARCH -->
                            <div class="flex place-items-center h-[3rem] w-full bg-[#FBFCFE] border border-gray-400 rounded-lg px-4 space-x-4 mt-8">
                                <MagnifyingGlassIcon class="w-5 h-5"/>
                                <input type="text" class="border-none bg-[#FBFCFE] text-[16px] ring-0 appearance-none outline-none">
                            </div>
                            <!-- Tab Panels
                            Tab Panels
                            Tab Panels
                            Tab Panels -->
                            <div v-if="!canViewAssignedStudents" class="">
                                <div 
                                    class="flex-col space-y-10 h-[25rem] overflow-y-auto appearance-none"
                                >
                                    <div v-for="student, index in syllabusStudents"
                                        :key="index"
                                        class="mt-2"
                                        :class="[student.studentStatus == 'Not Assigned' ? 'block' : 'hidden']"
                                    >
                                        <div class="w-full flex place-items-center space-x-4 relative h-3"
                                        >
                                            <div class="w-7 h-7 border-full rounded-full bg-[#39D0B5]"></div>
                                            <p class="text-[16px]">{{ student.fullname }}</p>
                                            <input type="checkbox" v-model="selectedID" :value="student.id" class="absolute mb-[0.1px] right-4 w-5 h-5">
                                        </div>
                                        <div class="w-full border-b pt-4"></div>
                                    </div>
                                    
                                </div>
                                <div class="text-white relative mt-10">
                                    <div class="absolute right-0 space-x-2">
                                        <button class="bg-[#CAD7E8] px-6 py-3 cursor-pointer rounded-lg" @click="closeAssignStudentModal">Cancel</button>
                                        <button @click="assign(), openAssignConfirm()" class="bg-[#527AF5] px-6 py-3 cursor-pointer rounded-lg">Assign</button>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div 
                                    class="flex-col space-y-10 h-[25rem] mt-2 overflow-y-auto appearance-none"
                                >
                                    <div v-for="student, index in syllabusStudents"
                                        :key="index"
                                        class="mt-2"
                                        :class="[student.studentStatus == 'Assigned' ? 'block' : 'hidden']"
                                    >
                                        <div 
                                            class="w-full flex place-items-center space-x-4 relative h-4 border-gray-200"
                                        >
                                            <div class="w-7 h-7 rounded-full bg-[#39D0B5]"></div>
                                            <p class="text-[16px]">{{ student.fullname }}</p>
                                            <div class="absolute flex right-0 place-items-center">
                                                <div class="flex place-items-center mr-[14rem] place-content-center">
                                                    <div class="w-5 h-5 rounded-sm bg-[#FFD600] mr-4"></div>
                                                    <p class="text-[16px]">Yellow Belt</p>
                                                </div>
                                                <input type="checkbox" v-model="selectedID" :value="student.id" class="w-5 h-5">
                                            </div>
                                        </div>
                                        <div class="w-full border-b pt-2"></div>
                                    </div>
                                    
                                </div>
                                <div class="text-white relative mt-10">
                                    <div class="absolute right-0 space-x-2">
                                        <button class="bg-[#CAD7E8] px-6 py-3 cursor-pointer rounded-lg" @click="closeAssignStudentModal">Cancel</button>
                                        <button @click="deassign(), openUnassignConfirm()" class="bg-[#E26969] px-6 py-3 cursor-pointer rounded-lg">Unassign</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
        </TransitionRoot>
        <!-- <DialogsConfirmAssigned :isConfirmAssignStudentModal="openConfirmAssignStudent"/> -->
        <DialogsConfirmAssignStudent :isAssignStudentModal="openAssignConfirm" />
        <DialogsConfirmUnassignStudent :isUnassignStudentModal="openUnassignConfirm" />
    </div>
</template>