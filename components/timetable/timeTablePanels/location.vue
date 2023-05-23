<script setup lang="ts">

    import { PlusIcon, XMarkIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
    const { locationList, add, locationN } = addLocation()

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
        <div class="table pt-8 w-[60rem] border-spacing-y-2">
            <div class="table-header-group" style="padding-left: 5%;">
                <div class="table-row text-[#9FB5D1]">
                    <div class="table-cell px-3 py-2">LOCATION</div>
                    <div class="table-cell px-3 py-2" style="padding-left: 2%;">CLASS AREA</div>
                </div>
            </div>

            <div class="table-row-group">

                <div 
                    class="table-row drop-shadow-sm"
                    v-for="locals,index in locationList"
                    :key="index"
                >
                    <div class="table-cell bg-white px-3 py-2 rounded-tl-lg rounded-bl-lg">
                        <div class="flex place-items-center space-x-2">
                            <ChevronRightIcon class="w-3 h-3 text-gray-400"/>
                            <p>{{ locals.name }}</p>
                        </div>
                    </div>
                    <div class="table-cell bg-white px-3 py-2 rounded-tr-lg rounded-br-lg">w</div>
                </div>

                <div 
                    v-if="isAddLocation"
                    class="table-row drop-shadow-sm"
                >
                    <div class="table-cell bg-white px-3 py-2 rounded-tl-lg rounded-bl-lg">
                        <input 
                            type="text" 
                            class="outline-none w-8/12 px-4"
                            v-model="locationN"
                            @keyup.enter="add(), openAddLocation()"
                        >
                        
                    </div>
                    <div class="table-cell bg-white px-3 py-2 rounded-tr-lg rounded-br-lg">
                        <div class="flex place-items-center">
                            <p class="invisible">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            <XMarkIcon class="w-4 h-4 text-[#9FB5D1] cursor-pointer" @click="openAddLocation"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="h-4"></div>
        <div 
            class="space-x-2 px-2 flex place-items-center text-[#5081F0] text-[16px] border-2 border-[#5081F0] rounded-lg w-[11.5rem] cursor-pointer"
            @click="openAddLocation"
            :class="[isAddLocation ? 'text-[#CAD7E8] border-[#CAD7E8]': '']"
            :disabled="isAddLocation"
        >
            <PlusIcon class="w-4 h-4"/>
            <p class="font-semibold">Add New Location</p>
        </div>
    </div>
</template>