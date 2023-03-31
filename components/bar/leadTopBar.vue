<script setup lang="ts">

    import { CalendarIcon, CalendarDaysIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/vue/24/outline'

    const { openMaxSideBar } = sideBarFunctionalities()
</script>

<template>
    <div class="h-[3rem] w-full bg-white flex flex-row items-center relative">
        <div class="flex flex-row items-center pl-8 space-x-2">
            <Bars3Icon 
                class="w-4 h-4 ml-4 cursor-pointer block sm:hidden"
                @click="openMaxSideBar"
            />
            <p class="text-[14px] font-semibold">Leads</p>
            <p class="text-[14px] text-gray-500">|</p>
            <p class="text-[13px]">Hapkido International</p>
        </div>
        <div class="flex items-center absolute right-0 mr-8 sm:mr-80">
            <div class="flex space-x-4 pr-5">
                <CalendarDaysIcon class="text-gray-500 w-6 h-6"/>
                <CalendarIcon class="text-gray-500 w-6 h-6"/>
                <BellIcon class="text-gray-500 ml-3 w-6 h-6"/>
                
            </div>
            <div class="flex flex-row space-x-2 space-y-1 pr-3">
                <img src="/illustrations/avatar.jpeg" class="w-8 h-8 rounded-lg"/>
                <p class="text-[14px] font-semibold">Pudge Kun</p>
            </div>
            <ChevronDownIcon class="text-gray-900 w-2 h-2"/>
        </div>
    </div>
</template>