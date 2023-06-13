<script setup lang="ts">
    import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronUpIcon, HomeIcon, UsersIcon, Cog8ToothIcon, UserPlusIcon, ViewColumnsIcon, StarIcon, SquaresPlusIcon } from '@heroicons/vue/24/outline'


    const userManagementIsOpen = ref(false)

    const openUserManagementDropdown = () => {
        userManagementIsOpen.value = true
    }

    const closeUserManagementDropdown = () => {
        userManagementIsOpen.value = false
    }

    const isTimetable = ref(false)
    const openTimetable = () => {
        isTimetable.value = !isTimetable.value
    }

    const router = useRouter()

    const openDashboard = () => {
        router.push('/home/homeForm')
    }

    const openLeadsDashboard = () => {
        router.push('/lead/leadsDashboard')
    }

    const openStudDashboard = () => {
        router.push('/stud/studsDashboard')
    }

    const openProgramsDashboard = () => {
        router.push('/programs/programsDashboard')
    }

    const openTimeTableDashboard = () => {
        router.push('/timetable/timeTableDashboard')
    }

    const openClassesDashboard = () => {
        router.push('/classes/classesDashboard')
    }

    const { sideBarOpen, openMaxSideBar } = sideBarFunctionalities()
</script>


<template>
    <div 
        class="w-[20rem] h-screen p-4 bg-blue-900 text-white"
        :class="[sideBarOpen ? 'block absolute' : 'hidden']"
    >
        <div class="flex flex-col items-center">
            <ChevronDoubleLeftIcon class="block ml-[16rem] pt-1 w-6 h-6 text-blue-400 cursor-pointer"
                                    @click="openMaxSideBar"
            />
            <img src="/illustrations/logo_logo -axis 1.svg" alt="" class="block pt-4 pb-10 h-auto w-[13rem]">
        </div>
        <div class="space-y-8 ml-4">
            <div class="flex flex-row space-x-4 cursor-pointer" @click="openDashboard">
                <HomeIcon class="w-6 h-6"/>
                <a class="text-[18px] text-white">Dashboard</a>
            </div>
            <div class="flex flex-row cursor-pointer">
                <UsersIcon class="mr-4 w-6 h-6"/>
                <p class="block text-[18px] text-white mr-12">User Management</p>
                <ChevronDownIcon @click="openUserManagementDropdown" :class="[!userManagementIsOpen ? 'block w-6 h-6' : 'hidden']"/>
                <ChevronUpIcon @click="closeUserManagementDropdown" :class="[userManagementIsOpen ? 'block w-6 h-6' : 'hidden']"/>

            </div>
            <div>
            <div v-if="userManagementIsOpen" class="space-y-8 indent-16">
                <a class="text-[18px] cursor-pointer" @click="openLeadsDashboard">Leads</a>
                <p class="text-[18px] cursor-pointer" @click="openStudDashboard">Students</p>
                <p class="text-[18px] cursor-pointer">Instructor</p>
            </div>
            <div v-else></div>
            </div>
            <div class="flex flex-row">
                <Cog8ToothIcon class="mr-4 w-6 h-6"/>
                <p class="text-[18px] text-white mr-[5rem]">School Setting</p>
                <ChevronDownIcon class="block w-6 h-6"/>
            </div>
            <div class="flex flex-row">
                <UserPlusIcon class="mr-4 w-6 h-6"/>
                <p class="text-[18px] text-white mr-[6rem]">Membership</p>
                <ChevronDownIcon class="block w-6 h-6"/>
            </div>
            <div class="flex flex-row space-x-4 cursor-pointer" @click="openProgramsDashboard">
                <SquaresPlusIcon class="w-6 h-6"/>
                <p class="text-[18px] text-white">Programs</p>
            </div>
            <div 
                class="flex flex-row space-x-4 cursor-pointer place-items-center"
                @click="openTimetable"
            >
                <ViewColumnsIcon class="w-6 h-6"/>
                <p class="text-[18px] text-white">Timetable</p>
                <div class="w-[5.2rem]"></div>
                <ChevronDownIcon class="w-6 h-6"/>
            </div>
            <div v-if="isTimetable" class="space-y-8 indent-16">
                <a class="text-[18px] cursor-pointer" @click="openTimeTableDashboard">Timetables</a>
                <p class="text-[18px] cursor-pointer" @click="openClassesDashboard">Classes</p>
                <p class="text-[18px] cursor-pointer">Instructor</p>
            </div>
            <div class="flex flex-row space-x-4">
                <StarIcon class="w-6 h-6"/>
                <p class="text-[18px] text-white">Grading</p>
            </div>
        </div>
    </div>
</template>