<script setup lang="ts">

    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import { PlusIcon } from '@heroicons/vue/24/outline'

    const categories = reactive([
            {name: 'List', img: '/timetable/tabs/icon1.svg'},
            {name: 'Archived', img: '/timetable/tabs/icon3.svg'},
    ])

    const 
    { 
        isCreateClass, isEditClass, isArchiveClasses, isRestoreClass,
        openCreateClass, openEditClass, openArchiveClass, openRestoreClass
    } = modalFunctions()

    const { classList, classListArchive } = useCreateClasses()

</script>

<template>
    <div class="px-10 sm:px-20 py-10 w-full h-full">
        <TabGroup>
        <div class="">
            <div class="h-[3.5rem] w-full flex flex-col sm:flex-row items-start sm:place-items-center border-b-2 relative">

                <TabList>
                <div class="text-[16px] space-x-6 ml-0 z-[20]">
                    <Tab v-for="category, index in categories" 
                        :key="index"
                        v-slot="{ selected }"
                    >
                        <div class="flex space-x-4 h-[3.6rem] w-auto place-items-center px-1"
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
                    v-if="classList.length == 0"
                    class="flex bg-[#2955DE] rounded-lg px-6 py-1 text-white space-x-4 place-items-center absolute right-0 cursor-pointer mt-3 sm:mt-0"
                    @click="openCreateClass"
                >
                    <p class="text-[16px]">Create Class</p>
                    <PlusIcon class="w-4 h-4"/>
                </div>
                <div v-else></div>

            </div>
        
            <TabPanels>
                <TabPanel>
                    <ClassesTabPanelsList/>
                </TabPanel>
                <TabPanel>
                    <ClassesTabPanelsArchivedClass/>
                </TabPanel>
            </TabPanels>
        </div>
    </TabGroup>
    <ClassesModalsAddClass :isCreateClass="openCreateClass" />
    <ClassesModalsEditClass :isEditClass="openEditClass"/>
    <ClassesModalsArchiveClass :isArchiveClasses="openArchiveClass" />
    <ClassesModalsRestoreClass :isRestoreClass="openRestoreClass"/>
    </div>
</template>