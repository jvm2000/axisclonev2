<script setup lang="ts">

    import { PlusIcon, XMarkIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
    const { locationList, add, locationN, locationObj, objL, onClass } = addLocation()

    const isAddLocation = ref(false)
    const isClassLocation = ref(false)

    const openAddLocation = () => {
        isAddLocation.value = !isAddLocation.value
    }

    const openClassLocation = () => {
        isClassLocation.value = !isClassLocation.value
    }


</script>
<template>
    <div class="py-14 w-full">
        <div class="w-full flex space-x-6">
            <div>
                <div class="h-1"></div>
                <img src="/icons/location.svg" alt="">
            </div>
            <div class="grid space-y-4">
                <p class="text-2xl font-semibold">Set Location & Class Area</p>
                <p class="text-sm">Enter at least 1 school location. Once you entered location, you can add multiple class area. Class Area is somehow the more specific place the a class is held.
                </p>
            </div>    
        </div>

        <div class="space-y-4 h-auto pt-10 pl-10 w-[57rem]">
            <div class="pl-5 text-sm text-[#9FB5D1] font-semibold flex relative">
                <p>LOCATION</p>
                <p class="absolute right-[7rem]">CLASS AREA</p>
            </div>
            <div 
                class="w-full px-2 py-3 bg-white rounded-lg drop-shadow-sm place-items-center text-[16px] flex relative"
                v-for="(locals, index) in locationList"
                :key="index"
            >
                <div class="flex place-items-center w-[44rem]">
                    <ChevronRightIcon class="w-3 h-3 text-gray-400 mr-2"/>
                    <p class="text-[16px]">{{ locals.name }}</p>
                </div>
                <p class="text-[16px]">{{ locals.classes.length }}</p>
                <XMarkIcon class="w-4 h-4 text-[#9FB5D1] cursor-pointer absolute right-4"/>
            </div>
            <div 
                v-if="isAddLocation"
                class="drop-shadow-sm"
            >
                <div class="bg-white px-3 py-3 rounded-lg w-full relative flex place-items-center">
                    <input 
                        type="text" 
                        class="outline-none w-8/12 px-4"
                        v-model="locationN"
                        @keyup.enter="add(), openAddLocation()"
                    >
                    <XMarkIcon class="w-4 h-4 text-[#9FB5D1] cursor-pointer absolute right-4" @click="openAddLocation"/>
                    
                </div>
            </div>
        </div>

        <div class="h-4"></div>
        <div 
            class="space-x-2 px-2 flex place-items-center text-[#5081F0] text-[16px] border-2 border-[#5081F0] rounded-lg w-[11.5rem] cursor-pointer ml-10 mt-10"
            @click="openAddLocation"
            :class="[isAddLocation ? 'text-[#CAD7E8] border-[#CAD7E8]': '']"
            :disabled="isAddLocation"
        >
            <PlusIcon class="w-4 h-4"/>
            <p class="font-semibold">Add New Location</p>
        </div>
    </div>
</template>