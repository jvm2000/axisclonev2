<script setup lang="ts">

    import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    const categories = reactive([{name: 'Active'}, {name: 'Inactive'}, {name: 'Archived'}, {name: 'Location'}, {name: 'Custom Message'}])

    const {isCreateTimeTable, openCreateTimeTable } = modalFunctions()

    const { timeTableList } = addListTimetable()
    

</script>

<template>
    <div class="px-20 py-20">
        <TabGroup>
        <div class="">
            <div class="h-[3.5rem] w-full flex flex-col sm:flex-row items-start sm:items-center border-b-2 relative">
                <TabList>
                <div class="text-[16px] space-x-6 ml-24 sm:ml-0 z-[20]">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }">
                        <button :class="[selected ? 'w-auto h-[3.6rem] border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-auto space-x-2']">
                            {{ category.name }}
                        </button>
                    </Tab>
                </div>
                </TabList>
                <div class="w-[45rem]"></div>
                <div 
                    class="flex px-4 py-1 bg-[#5081F0] place-items-center text-white space-x-4 rounded-lg cursor-pointer"
                    @click="openCreateTimeTable"
                >
                    <PlusIcon class="w-4 h-4"/>
                    <p class="text-[16px]">Create Timetable</p>
                </div>
            </div>
        
            <TabPanels>
                <TabPanel>
                    <TimetableTimeTablePanelsList/>
                    <div 
                        v-if="timeTableList.length > 0"
                        class="flex px-4 py-1 bg-[#5081F0] place-items-center text-white space-x-4 rounded-lg cursor-pointer w-[12.2rem]"
                        @click="openCreateTimeTable"
                    >
                        <PlusIcon class="w-4 h-4"/>
                        <p class="text-[16px]">Create Timetable</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <TimetableTimeTablePanelsInactive/>
                </TabPanel>
                <TabPanel>
                    <TimetableTimeTablePanelsArchive/>
                </TabPanel>
                <TabPanel>
                    <TimetableTimeTablePanelsLocation/>
                </TabPanel>
                <TabPanel>

                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    <TimetableDialogsAddTimeTable :isCreateTimeTable="openCreateTimeTable"/>
    </div>
</template>