<script setup lang="ts">

    import { ref } from 'vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, ArrowLongDownIcon, DocumentTextIcon, ShieldCheckIcon, PhotoIcon, HeartIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
    import { react } from '@babel/types';

    const categories = reactive([{name: 'Active'}, {name: 'Imported Records'}])

    const { openAddStuds } = sideBarFunctionalities()

</script>

<template>
    <div>
        <TabGroup>
        <div class="px-10 py-10">
            <div class="h-[5rem] w-full flex flex-row items-center border-b-2">
                <TabList>
                <div class="text-[16px] space-x-6">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }">
                        <button
                            class="px-4" 
                            :class="[selected ? 'w-auto border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-auto space-x-2']">
                            {{ category.name }}
                        </button>
                    </Tab>
                </div>
                </TabList>
                <div class="w-[42rem]"></div>
                <div class="flex space-x-6 place-items-center">
                    <div class="flex space-x-2 text-[16px]">
                        <ArrowLeftOnRectangleIcon class="w-6 h-6 text-blue-700"/>
                        <p>Import</p>
                    </div>
                    <div 
                        class="flex space-x-2 text-[16px] cursor-pointer bg-[#5081F0] py-1 pl-4 pr-8 rounded-lg text-white place-items-center"
                        @click="openAddStuds()"
                    >
                        <PlusIcon class="w-4 h-4 font-semibold"/>
                        <p>Add Student</p>
                    </div>
                </div>
            </div>
        
            <TabPanels>
                <TabPanel>
                    <PanelStudsStudActivePanel/>
                </TabPanel>
                <TabPanel>
                    test
                </TabPanel>
                <TabPanel>
                    <PanelLeadDeadPanel/>
                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    </div>
</template>