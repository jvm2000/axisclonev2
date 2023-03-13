<script setup lang="ts">

import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import { PlusIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, ArrowLongDownIcon, DocumentTextIcon, ShieldCheckIcon, PhotoIcon, HeartIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'

const categories = ref({Active: [], ColdLeads: [], DeadLeads: [] })

const { openAddLeads } = sideBarFunctionalities()

const { leadList } = addLeadFunctionalities()
</script>

<template>
    <div>
        <TabGroup>
        <div class="px-10 py-10">
            <div class="h-[5rem] w-full flex flex-row items-center border-b-2">
                <TabList>
                <div class="text-[16px] space-x-6">
                    <Tab v-for="category in Object.keys(categories)" 
                        :key="category"
                        v-slot="{ selected }">
                        <button :class="[selected ? 'w-[6rem] border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-[6rem] space-x-2']">
                            {{ category }}
                        </button>
                    </Tab>
                </div>
                </TabList>
                <div class="w-[32rem]"></div>
                <div class="flex space-x-6 float-right">
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
                <div class="px-2">
                    <div class="px-4 py-4 w-fit flex flex-row">
                        <div class="text-[20px] font-semibold">
                            <p>Active Leads</p>
                        </div>
                        <div class="w-[40rem]"></div>
                        <div class="space-x-4 flex flex-row">
                            <div class="flex place-items-center">
                                <MagnifyingGlassIcon class="ml-3 pr-2 w-7 h-7 absolute border-r-2 border-gray-200 text-gray-400"/>
                                <input type="text" class="text-[16px] w-[20rem] py-4 h-[2rem] rounded-lg border-2 border-gray-200 pl-14" placeholder="Search Name">
                            </div>
                            <div class="space-x-1 text-[16px] flex place-items-center">
                                <FunnelIcon class="w-5 h-5"/>
                                <p class="">Filter</p>
                            </div>
                        </div>
                    </div>
                    <div class="place-items-center justify-center pt-2">
                        <div class="h-[42rem] w-[78rem] bg-white rounded-xl">
                            <div class="w-full">
                                <div class="w-full h-[37rem] px-6 py-4">
                                    <div class="table w-full border-separate border-spacing-y-6 text-sm">
                                        <div class="table-header-group text-gray-400 [&_>_div]">
                                            <div class="table-row font-semibold">
                                                <div class="table-cell ">
                                                    <div class="flex place-items-center space-x-2">
                                                        <p>LEADS</p>
                                                        <BarsArrowDownIcon class="w-4 h-4"/>
                                                    </div>
                                                </div>
                                                <div class="table-cell ">MOBILE NO.</div>
                                                <div class="table-cell">
                                                    <div class="flex place-items-center space-x-2">
                                                        <p>AGE</p>
                                                        <ArrowLongDownIcon class="w-4 h-4"/>
                                                    </div>
                                                </div>
                                                <div class="table-cell">BADGES</div>
                                                <div class="table-cell">ACTIVITY</div>
                                                <div class="table-cell">DATE ADDED</div>
                                                <div class="table-cell">LAST CHECK IN</div>
                                                <div class="table-cell">INSTRUCTOR</div>
                                                <div class="table-cell">TASK</div>
                                            </div>
                                        </div>
                                        <div class="table-row-group py-4 w-full">
                                            <div 
                                                class="table-row font-medium h-4 place-items-center border-b-2 border-gray-200"
                                                v-for="(leads,index) in leadList"
                                                :key="index"
                                            >
                                                <div class="table-cell">
                                                    <p>{{ leads.firstname }} {{ leads.lastname }}</p>
                                                </div>
                                                <div class="table-cell">
                                                    <p>{{ leads.mobileno }}</p>
                                                </div>
                                                <div class="table-cell">15</div>
                                                <div class="table-cell">
                                                    <div class="flex space-x-2">
                                                        <DocumentTextIcon class="w-5 h-5 text-[#1376D8]"/>
                                                        <ShieldCheckIcon class="w-5 h-5 text-[#A85CEA]"/>
                                                        <PhotoIcon class="w-5 h-5 text-[#34CE2C]"/>
                                                        <HeartIcon class="w-5 h-5 text-[#01D7D7]"/>
                                                    </div>
                                                </div>
                                                <div class="table-cell">
                                                    <div class="flex space-x-2 place-items-center">
                                                        <p class="bg-[#FF1D1D] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">T</p>
                                                        <p class="bg-[#A1BDD6] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">A</p>
                                                        <p class="bg-[#E8EDF4] px-2 py-[2px] text-[14px] rounded-lg text-[#9FB5D1] font-semibold border-2 border-dashed border-gray-400">+</p>
                                                    </div>
                                                </div>
                                                <div class="table-cell">
                                                    <p>{{ leads.dateadded }}</p>
                                                </div>
                                                <div class="table-cell">
                                                    <p>{{ leads.dateadded }}</p>
                                                </div>
                                                <div class="table-cell">Annie Leonheart</div>
                                                <div class="flex place-items-center">
                                                    <img src="/illustrations/task.svg" class="" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-2 border-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </TabPanel>

                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    </div>
</template>