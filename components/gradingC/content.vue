<script setup lang="ts">

    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'

    const categories = reactive([
        {name: 'Ranks'},
        {name: 'Sub Ranks'},
        {name: 'Grading Prep'},
        {name: 'Statistics'},
    ])

    const { isFixRank, openFixRank, isConfirmFixRank, openConfirmFixRank, isUpdateSubrank, openUpdateSubRank, isConfirmUpdateSubrank, openConfirmUpdateSubrank } = modalFunctions()

</script>

<template>
    <div class="px-10 sm:px-10 py-10 w-full h-full">
        <TabGroup>
        <div class="">
            <div class="h-[3.5rem] w-full flex flex-col sm:flex-row items-start sm:place-items-center border-b-2 relative">

                <TabList>
                <div class="text-[16px] space-x-6 ml-0 z-[20]">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }"
                    >
                        <div class="flex space-x-4 h-[3.6rem] w-auto place-items-center px-3"
                            :class="[selected ? 'border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'space-x-2']"
                        >
                            <p>
                                {{ category.name }}
                            </p>
                        </div>
                    </Tab>
                </div>
                </TabList>

                <div class="absolute right-0">
                    <EllipsisHorizontalIcon class="w-8 h-8 text-blue-900"/>
                </div>
            </div>
        
            <TabPanels>
                <TabPanel>
                    <GradingCTabPanelsRanks/>
                </TabPanel>
                <TabPanel>
                    <GradingCTabPanelsSubranks/>
                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    <GradingCModalsFixRankModal :isFixRank="openFixRank"/>
    <GradingCModalsConfirmFixRankModel :isConfirmFixRank="openConfirmFixRank"/>
    <GradingCModalsUpdateSubrankModal :isUpdateSubrank="openUpdateSubRank"/>
    <GradingCModalsConfirmUpdateSubrank :isConfirmUpdateSubrank="openConfirmUpdateSubrank"/>
    </div>
</template>