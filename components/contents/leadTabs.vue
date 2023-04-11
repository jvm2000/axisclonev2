<script setup lang="ts">

import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

const categories = reactive([{name: 'Active'}, {name: 'Cold Leads'}, {name: 'Dead Leads'}])

const { openAddLeads } = sideBarFunctionalities()

</script>

<template>
    <div class="px-0 sm:lg:xl:px-20">
        <TabGroup>
        <div class="px-10 py-10">
            <div class="h-[5rem] w-full flex flex-col sm:flex-row items-start sm:items-center space-y-1 border-b-2 relative">
                <TabList>
                <div class="text-[16px] space-x-6 ml-24 sm:ml-0">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }">
                        <button :class="[selected ? 'w-[6rem] border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-[6rem] space-x-2']">
                            {{ category.name }}
                        </button>
                    </Tab>
                </div>
                </TabList>
                <div class="w-[32rem]"></div>
                <div class="flex space-x-6">
                    <div class="flex space-x-2 text-[16px] cursor-pointer">
                        <PlusIcon class="w-6 h-6 text-blue-700"/>
                        <a @click="openAddLeads">Add Lead</a>
                    </div>
                    <div class="flex space-x-2 text-[16px]">
                        <ArrowLeftOnRectangleIcon class="w-6 h-6 text-blue-700"/>
                        <p>Import</p>
                    </div>
                    <div class="flex space-x-2 text-[16px]">
                        <ArrowRightOnRectangleIcon class="w-6 h-6 text-blue-700"/>
                        <p>Export</p>
                    </div>
                </div>
            </div>
        
            <TabPanels>
                <TabPanel>
                    <PanelLeadActivePanel/>
                </TabPanel>
                <TabPanel>
                    <PanelLeadColdPanel/>
                </TabPanel>
                <TabPanel>
                    <PanelLeadDeadPanel/>
                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    </div>
</template>