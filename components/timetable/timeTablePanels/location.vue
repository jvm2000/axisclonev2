<script setup lang="ts">

    import { PlusIcon, XMarkIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
    const { locationList, add, locationN, locationObj, objL, onClass, classN, classAdd, onClassInput, classDel, isUpdate, updateObj, locationUp, nameObj, updateLocation } = addLocation()

    const isAddLocation = ref(false)
    const isClassLocation = ref(false)

    const openAddLocation = () => {
        isAddLocation.value = !isAddLocation.value
    }

    const openClassLocation = () => {
        isClassLocation.value = !isClassLocation.value
    }

    const {isDelLoc, openDelLoc, isDelClassArea, openClassAreaDel} = modalFunctions()


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
                class="w-full h-auto px-2 py-3 bg-white rounded-lg drop-shadow-sm text-[16px] flex flex-col relative"
                v-for="(locals, index) in locationList"
                :key="index"
                :class="[locals.canDelete ? 'hidden' : '']"
            >
                <div 
                    v-if="locals.locUpdate"
                    class="h-auto w-full px-2 py-1 flex place-items-center space-x-1"
                >
                    <ChevronRightIcon class="w-3 h-3 text-gray-400"/>
                    <div class="w-full h-[2rem] flex place-items-center relative rounded-sm border-2">
                        <input 
                            type="text"
                            class="outline-none w-[20rem] px-4"
                            v-model="locationUp"
                            @keyup.enter="objL(locals),updateLocation(locals.name), isUpdate(false)"
                        >
                        <XMarkIcon 
                            class="w-4 h-4 text-[#9FB5D1] cursor-pointer absolute right-4 mt-1"
                            @click="objL(locals),isUpdate(false)"
                        />
                    </div>
                </div>

                <div 
                    v-else
                    class="flex place-items-center relative"
                >
                    <div 
                        class="flex w-[44rem] place-items-center cursor-pointer"
                    >
                        <ChevronRightIcon 
                            v-if="!locals.classOn"
                            class="w-3 h-3 text-gray-400 mr-2 cursor-pointer"
                            @click="objL(locals), onClass(true)"
                        />
                        <ChevronDownIcon 
                            v-else
                            class="w-3 h-3 text-gray-400 mr-2 cursor-pointer"
                            @click="objL(locals), onClass(false)"
                        />
                        <p 
                            class="text-[16px]"
                            @click="objL(locals),isUpdate(true),updateObj(locals.name)"
                        >
                            {{ locals.name }}
                        </p>
                    </div>
                    <p class="text-[16px]">
                        {{ locals.classes.length }}
                    </p>
                    <XMarkIcon 
                        class="w-4 h-4 text-[#9FB5D1] cursor-pointer absolute right-4 mt-1"
                        @click="openDelLoc(), objL(locals)"
                    />
                </div>

                <div
                    v-if="locals.classOn"
                    class="mt-4 w-full relative px-2"
                >
                <p class="text-sm text-[#9FB5D1] font-semibold mt-4 m-5">CLASS AREA</p>

                    <div 
                        class="relative bg-[#F1F6FC] h-auto space-y-4 grid rounded-lg"
                        :class="[locals.classes.length > 0 ? '' : '']"
                    >
                        <div 
                            v-for="classess, index in locals.classes"
                            :key="index"
                            class="w-full py-1 place-items-center border-b-2 border-[#E9F0FA]"
                            :class="[classess.canDelete ? 'hidden' : '']"
                        >
                            <div class="pl-4 flex place-items-center space-x-4 h-[2rem] text-sm relative">
                                <span class="w-2 h-2 bg-[#46DBA8]"></span>
                                <p>{{ classess.name }}</p>
                                <XMarkIcon 
                                    class="w-4 h-4 text-[#5E6E82] absolute right-6 cursor-pointer"
                                    @click="objL(classess),openClassAreaDel()"
                                />
                            </div>
                        </div>
                        <div 
                            v-if="locationObj.classInput"
                            class="w-full"
                            :class="locals.classes.length > 0 ? 'pb-4' : 'py-6'"
                        >
                            <div 
                                class="w-11/12 h-[2.5rem] rounded-lg border-2 drop-shadow-lg bg-[#F1F6FC] flex relative border-[#5081F0] place-items-center ml-8"
                            >
                                <input 
                                    type="text"
                                    class="w-6/12 text-sm outline-none bg-[#F1F6FC] pl-4"
                                    v-model="classN"
                                    @keyup.enter="objL(locals),classAdd(locals.classes)"
                                >
                                <XMarkIcon
                                    class="w-4 h-4 text-[#9FB5D1] absolute right-4 cursor-pointer"
                                    @click="objL(locals), onClassInput(false)"
                                />
                            </div>
                        </div>
                        <div v-else></div>
                    </div>
                    <div class="w-full relative h-[3rem]">
                        <div 
                            class="flex space-x-4 absolute right-4 pt-4 place-items-center font-semibold"
                            :class="locationObj.classInput ? 'text-[#CAD7E8]' : 'text-[#5081F0] cursor-pointer'"
                        >
                            <PlusIcon class="w-4 h-4"/>
                            <button
                                :disabled="locationObj.classInput"
                                @click="objL(locals), onClassInput(true)"
                            >
                                Add Class Area
                            </button>
                        </div>
                    </div>
                </div>

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
        <TimetableDialogsDelLocation :isDelLoc="openDelLoc"/>
        <!-- <TimetableDialogsDelClassArea :isDelClassArea="openClassAreaDel"/> -->
    </div>
</template>