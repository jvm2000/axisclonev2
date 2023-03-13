<template>
    <div class="w-[6rem] h-screen p-4 bg-blue-900 text-white">
        <div class="flex flex-col items-center">
            <ChevronDoubleRightIcon class="block pt-1 w-6 h-6 text-blue-400 mb-2' : 'hidden']"
                                    @click="closeMinimizeSideBar"
            />
            <img src="/illustrations/logo_logo -axis 2.svg" alt="" class="block pt-2 pb-10 h-auto w-[3rem]">
        </div>
        <div class="space-y-10 ml-4">
            <div class="flex flex-row space-x-4">
                <HomeIcon class="w-6 h-6" @click="openDashboard" href="#"/>
            </div>
            <div class="flex flex-row">
                <UsersIcon class="mr-4 w-6 h-6"/>
            </div>
            <div class="flex flex-row">
                <Cog8ToothIcon class="mr-4 w-6 h-6"/>
            </div>
            <div class="flex flex-row">
                <UserPlusIcon class="mr-4 w-6 h-6"/>
            </div>
            <div class="flex flex-row space-x-4">
                <ViewColumnsIcon class="w-6 h-6"/>
            </div>
            <div class="flex flex-row space-x-4">
                <StarIcon class="w-6 h-6"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronUpIcon, HomeIcon, UsersIcon, Cog8ToothIcon, UserPlusIcon, ViewColumnsIcon, StarIcon } from '@heroicons/vue/24/outline'


const userManagementIsOpen = ref(false)
const minimizeSideBar = ref(false)

const openUserManagementDropdown = () => {
    userManagementIsOpen.value = true
}

const closeUserManagementDropdown = () => {
    userManagementIsOpen.value = false
}

const { closeMinimizeSideBar } = sideBarFunctionalities()

const router = useRouter()

const openDashboard = () => {
    router.push('/home/homeForm')
}
</script>