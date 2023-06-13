<script setup lang="ts">

    import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    const categories = reactive([
            {name: 'Active', img: '/timetable/tabs/icon1.svg'},
            {name: 'Inactive', img: '/timetable/tabs/icon2.svg'},
            {name: 'Archived', img: '/timetable/tabs/icon3.svg'},
            {name: 'Location', img: '/timetable/tabs/icon4.svg'}, 
            {name: 'Custom Message', img: '/timetable/tabs/icon5.svg'}
    ])

    const {isCreateTimeTable, openCreateTimeTable } = modalFunctions()

    const { timeTableList } = addListTimetable()
    

</script>

<template>
    <div class="px-4 sm:px-20 py-20">
        <TabGroup>
        <div class="">
            <div class="h-[3.5rem] w-full flex flex-col sm:flex-row items-start sm:items-center border-b-2 relative space-y-4">
                <TabList>
                <div class="text-sm sm:text-[16px] space-x-2 sm:space-x-6 ml-0 sm:ml-0 z-[20]">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }"
                    >
                        <div class="flex space-x-0 sm:space-x-4 h-[3.6rem] w-auto place-items-center px-1"
                            :class="[selected ? 'border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'space-x-2']"
                        >
                            <img :src="category.img" alt="" class="w-4 h-4">
                            <p>
                                {{ category.name }}
                            </p>
                        </div>
                    </Tab>
                </div>
                </TabList>
                <div 
                    v-if="timeTableList.length == 0"
                    class="hidden sm:flex px-4 py-1 bg-[#5081F0] place-items-center text-white space-x-4 rounded-lg cursor-pointer absolute right-0"
                    @click="openCreateTimeTable"
                >
                    <PlusIcon class="w-4 h-4"/>
                    <p class="text-[16px]">Create Timetable</p>
                </div>
                <div 
                    v-if="timeTableList.length == 0"
                    class="flex sm:hidden px-4 py-1 bg-[#5081F0] place-items-center text-white space-x-4 rounded-lg cursor-pointer"
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
                    <TimetableTimeTablePanelsCustomMessage/>
                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    <TimetableDialogsAddTimeTable :isCreateTimeTable="openCreateTimeTable"/>
    </div>
</template>