<script setup lang="ts">

    import { ChevronLeftIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    const categories = reactive([{ name: 'User Information'}, { name: 'Programs and Grading'}, { name: 'Attendance and Bookings'}, { name: 'Notes and Documents'}, { name: 'Communication'}, { name: 'History'}])

    const { menuActive, menuHoldOn, menuInactive, useActive, useHoldOn, useInactive } = useMenuDropdown()
    const router = useRouter()

    const closeProfileLead = () => {
        router.push('/lead/leadsDashboard')
    }

    const { leadViewItem, setStatus } = useViewProfile()
    const { isLeadOnHoldModalOpen, openOnHoldModal, isInactiveModal, openInactiveModal } = modalFunctions()

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
                    <div 
                        class="w-full h-[7.5rem] rounded-lg px-8 flex place-items-center"
                        :class="[leadViewItem.status == 'dead' ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-500 to-cyan-500']"
                    >
                        <div class="flex flex-row space-x-4">
                            <div>
                                <img 
                                    :src="leadViewItem.image" 
                                    alt="" 
                                    class="h-[5rem] w-[5rem] rounded-full border-2 border-white">
                            </div>
                            <div class="">
                                <div class="space-y-[1px] text-white">
                                    <div class="flex space-x-4 place-items-center">
                                        <p class="text-[31px]">{{ leadViewItem.firstname }} {{ leadViewItem.lastname }}</p>
                                        <div>
                                            <Menu as="div" class="relative inline-block text-left z-[20]">
                                            <div>
                                                <MenuButton
                                                class="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75"
                                                >
                                                <div v-if="leadViewItem.status == 'active'" class="flex space-x-2 place-items-center">
                                                    <ExclamationCircleIcon class="w-3 h-3 text-[#46DBA8] bg-[#46DBA8] rounded-full"/>
                                                    <p class="text-white font-semibold">Active</p>
                                                </div>
                                                <div v-if="leadViewItem.status == 'cold'" class="flex space-x-2 place-items-center">
                                                    <ExclamationCircleIcon class="w-3 h-3 text-[#FFCB24] bg-[#FFCB24] rounded-full"/>
                                                    <p class="text-white font-semibold">On Hold</p>
                                                </div>
                                                <div v-if="leadViewItem.status == 'dead'" class="space-x-2 flex place-items-center">
                                                    <ExclamationCircleIcon class="w-3 h-3 text-[#CDCDCD] bg-[#CDCDCD] rounded-full"/>
                                                    <p class="text-white font-semibold">Inactive</p>
                                                </div>
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
                                                class="absolute right-0 mt-2 w-[13.5rem] origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                <div class="px-1 py-1">
                                                    <p class="text-[16px] text-black px-6 py-2 cursor-default">Choose Status</p>
                                                    <MenuItem v-slot="{ active }">
                                                    <div 
                                                        class="flex place-items-center cursor-pointer"
                                                        @click="menuActive"
                                                    >
                                                        <button
                                                            :class="[
                                                            active ? 'bg-[#EAF3F9]' : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md py-2 text-[16px]',
                                                            ]"
                                                            @click="setStatus('active')"
                                                        >
                                                            <ExclamationCircleIcon class="ml-6 w-2 h-2 text-[#46DBA8] bg-[#46DBA8] rounded-full"/>
                                                            <EditIcon
                                                            :active="active"
                                                            class="mr-2 h-5 w-2 text-violet-400"
                                                            aria-hidden="true"
                                                            
                                                            />
                                                            Active
                                                        </button>
                                                    </div>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <div 
                                                        class="flex place-items-center"
                                                        @click="menuHoldOn"
                                                    >
                                                        <button
                                                            :class="[
                                                            active ? 'bg-[#EAF3F9]' : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md py-2 text-[16px]',
                                                            ]"
                                                            @click="openOnHoldModal()"
                                                        >
                                                            <ExclamationCircleIcon class="ml-6 w-2 h-2 text-[#FFCB24] bg-[#FFCB24] rounded-full"/>
                                                            <DuplicateIcon
                                                            :active="active"
                                                            class="mr-2 h-5 w-2 text-violet-400"
                                                            aria-hidden="true"
                                                            />
                                                            On Hold
                                                        </button>
                                                    </div>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <div 
                                                        class="flex place-items-center"
                                                        @click="openInactiveModal()"
                                                    >
                                                        <button
                                                            :class="[
                                                            active ? 'bg-[#EAF3F9]' : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md py-2 text-[16px]',
                                                            ]"
                                                        >
                                                            <ExclamationCircleIcon class="ml-6 w-2 h-2 text-[#CDCDCD] bg-[#CDCDCD] rounded-full"/>
                                                            <DuplicateIcon
                                                            :active="active"
                                                            class="mr-2 h-5 w-2 text-violet-400"
                                                            aria-hidden="true"
                                                            />
                                                            Inactive
                                                        </button>
                                                    </div>
                                                    </MenuItem>
                                                </div>
                                                </MenuItems>
                                            </transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div class="flex space-x-4">
                                        <p class="text-[14px]">{{ leadViewItem.email }}</p>
                                        <div class="flex space-x-2">
                                            <img src="/illustrations/badges/Frame1.svg" alt="">
                                            <img src="/illustrations/badges/Frame2.svg" alt="">
                                            <img src="/illustrations/badges/Frame3.svg" alt="">
                                        </div>
                                    </div>
                                </div>
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
                                        <Tab v-for="category, index in categories" 
                                            :key="index"
                                            v-slot="{ selected }">
                                            <button :class="[selected ? 'h-[2.6rem] w-auto border-b-4 border-blue-400 text-blue-400 ring-0 outline-none space-x-2' : 'w-auto space-x-2']">
                                                {{ category.name }}
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
                                        <LeadProfileUserInformation class="z-[10]"/>
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
        <DialogsLeadOnHoldModal :isLeadOnHoldModalOpen="openOnHoldModal"/>
        <DialogsLeadInactiveModal :isInactiveModal="openInactiveModal"/>
    </div>
</template>
