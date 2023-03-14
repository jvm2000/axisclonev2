<script setup lang="ts">

    import { ChevronLeftIcon, ChevronDownIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    const categories = ref({User_Information: [], Programs_and_Grading: [], Attendance_and_Bookings: [], Notes_and_Documents: [], Communication: [], History: []})

    const router = useRouter()

    const closeProfileLead = () => {
        router.push('/lead/leadsDashboard')
    }

</script>

<template>
    <div class="h-screen w-screen bg-[#F2F6FB] overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <nav class="z-[20]">
                <BarMaxSideBar />
            </nav>
            <div class="z-[0] w-full sm:z-[10]">
                <!-- topbar -->
                <BarLeadTopBar />
                <!-- profile close -->
                <div class="px-12 py-4">
                    <div class="flex space-x-2 place-items-center py-2 space-y-2">
                        <div class="flex place-items-center space-x-2">
                            <ChevronLeftIcon class="text-blue-400 w-4 h-4"/>
                            <a @click="closeProfileLead" class="cursor-pointer text-[16ax]">Go back to all Leads</a>
                        </div>
                    </div>
                    <div class="bg-gradient-to-r from-blue-500 to-cyan-500 w-full h-[7.5rem] rounded-lg px-8 flex place-items-center">
                        <div class="flex flex-row space-x-4">
                            <div>
                                <img src="/illustrations/profile2.png" alt="" class="h-[5rem] w-[5rem] rounded-full border-2 border-white">
                            </div>
                            <div class="">
                                <div class="space-y-[1px] text-white">
                                    <p class="text-[31px]">Sample001</p>
                                    <div class="flex space-x-4">
                                        <p class="text-[14px]">Sample002</p>
                                        <div class="flex space-x-2">
                                            <img src="/illustrations/badges/Frame1.svg" alt="">
                                            <img src="/illustrations/badges/Frame2.svg" alt="">
                                            <img src="/illustrations/badges/Frame3.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                    class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                    >
                                    Options
                                    <ChevronDownIcon
                                        class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                                    class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                    <div class="px-1 py-1">
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]"
                                        >
                                            <EditIcon
                                            :active="active"
                                            class="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                            
                                            />
                                            Edit
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button
                                            :class="[
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]"
                                        >
                                            <DuplicateIcon
                                            :active="active"
                                            class="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                            />
                                            Duplicate
                                        </button>
                                        </MenuItem>
                                    </div>
                                    </MenuItems>
                                </transition>
                                </Menu>
                            </div>
                        </div>   
                    </div>
                     <!-- leadProfileTabs
                        leadProfileTabs
                        leadProfileTabs
                        leadProfileTabs
                        leadProfileTabs -->
                    <div>
                        <TabGroup>
                            <div class="px-2 py-10">
                                <div class="h-[2.5rem] w-full flex flex-row items-center border-b-2 border-gray-200">
                                    <TabList>
                                    <div class="text-[16px] space-x-8">
                                        <Tab v-for="category in Object.keys(categories)" 
                                            :key="category"
                                            v-slot="{ selected }">
                                            <button :class="[selected ? 'h-[2.6rem] w-auto border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-auto space-x-2']">
                                                {{ category }}
                                            </button>
                                        </Tab>
                                    </div>
                                    </TabList>
                                </div>
                                <TabPanels>
                                    <!-- User Information Content
                                    User Information Content
                                    User Information Content
                                    User Information Content
                                    User Information Content -->
                                    <TabPanel>
                                        <LeadProfileUserInformation/>
                                    </TabPanel>

                                    <TabPanel>Content 2</TabPanel>
                                    <TabPanel>Content 3</TabPanel>
                                    <TabPanel>Content 4</TabPanel>
                                    <TabPanel>Content 5</TabPanel>
                                    <TabPanel>Content 6</TabPanel>
                                </TabPanels>
                            </div>
                        </TabGroup>
                    </div>
                    <!-- end of tab
                    end of tab
                    end of tab
                    end of tab
                    end of tab -->
                </div>
            </div>
        </div>
    </div>
</template>
