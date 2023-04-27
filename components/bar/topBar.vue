<script setup lang="ts">
import { CalendarIcon, CalendarDaysIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const { openMaxSideBar } = sideBarFunctionalities()

</script>

<template>
    <div class="h-[3rem] w-screen bg-white flex flex-row items-center relative z-[20]">
        <Bars3Icon 
            class="w-4 h-4 ml-4 cursor-pointer"
            @click="openMaxSideBar"
        />
        <div class="flex items-center absolute right-0">
            <div class="flex space-x-1 pr-5">
                <CalendarDaysIcon class="text-gray-500 w-6 h-6"/>
                <CalendarIcon class="text-gray-500 w-6 h-6"/>
                <CalendarDaysIcon class="text-gray-500 w-6 h-6"/>
            </div>
            <div class="flex flex-row pr-1">
                <ChatBubbleOvalLeftEllipsisIcon class="text-gray-500 w-6 h-6"/>
            </div>
            <div class="flex flex-row pr-5">
                <BellIcon class="text-gray-500 ml-3 w-6 h-6"/>
            </div>
            <div class="flex flex-row space-x-2 space-y-1 pr-0">
                <img src="/illustrations/avatar.jpeg" class="w-8 h-8 rounded-lg"/>
                <p class="text-[14px] font-semibold">Pudge Kun</p>
            </div>
            <ChevronDownIcon class="text-gray-900 w-2 h-2"/>
            <div class="pr-[4rem] sm:pr-64 pr-"></div>

        </div>
    </div>
</template>