<script setup lang="ts">
    
    const mon = reactive([{day: '31'}, {day: '1'}, {day: '2'}, {day: '3'}, {day: '4'}, {day: '5'}, {day: '6'}])
    const tue = reactive([{day: '7'}, {day: '8'}, {day: '9'}, {day: '10'}, {day: '11'}, {day: '12'}, {day: '13'}])
    const wed = reactive([{day: '14'}, {day: '15'}, {day: '16'}, {day: '17'}, {day: '18'}, {day: '19'}, {day: '20'}])
    const thu = reactive([{day: '21'}, {day: '22'}, {day: '23'}, {day: '24'}, {day: '25'}, {day: '26'}, {day: '27'}])
    const fri = reactive([{day: '28'}, {day: '29'}, {day: '30'}, {day: '31'}, {day: 'NOV 1'}, {day: '2'}, {day: '3'}])

    const { isClassTable, openClassTable } = modalFunctions()


</script>

<template>
    <div class="">
        <div class="pt-6 w-full table">
        
            <div class="table-header-group bg-gradient-to-r from-blue-500 to-cyan-500">
                <div class="table-row">
                    <div class="table-cell border border-gray-400 rounded-tl-lg">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <p>Mon</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <p>Tue</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <p>Wed</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <p>Thu</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <div class="flex">
                                <p>Fri</p>
                                <p class="invisible">s</p>
                            </div>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <div class="flex">
                                <p>Sat</p>
                            </div>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400 rounded-tr-lg">
                        <div class="grid place-items-center px-6 text-md text-white">
                            <p>Sun</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-row-group">
                <div class="table-row">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        v-for="monD, index in mon" 
                    >
                        <div class="h-[8rem] relative text-sm">
                            <p class="mt-1 absolute right-4">{{ monD.day }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        v-for="tueD, index in tue" 
                    >
                        <div class="h-[8rem] relative text-sm">
                            <p class="mt-1 absolute right-4">{{ tueD.day }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        v-for="wedD, index in wed" 
                    >
                        <div class="h-[8rem] relative text-sm">
                            <p class="mt-1 absolute right-4">{{ wedD.day }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        v-for="thuD, index in thu" 
                    >
                        <div class="h-[8rem] relative text-sm">
                            <p class="mt-1 absolute right-4">{{ thuD.day }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        v-for="friD, index in fri" 
                    >
                        <div class="h-[8rem] relative text-sm">
                            <p class="mt-1 absolute right-4">{{ friD.day }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="h-[2rem]"></div>
        <TimetableDialogsClassTable :isClassTable="openClassTable"/> 
    </div>
</template>