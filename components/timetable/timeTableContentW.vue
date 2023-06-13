<script setup lang="ts">
    
    const time = reactive([{num: '5 AM'}, {num: '6 AM'}, {num: '7 AM'}, {num: '8 AM'}, {num: '9 AM'}, {num: '10 AM'}, {num: '11 AM'}, {num: '12 PM'}, {num: '1 PM'}, {num: '2 PM'}, {num: '3 PM'}, {num: '4 PM'}, {num: '5 PM'}, {num: '6 PM'}, {num: '7 PM'}, {num: '8 PM'}, {num: '9 PM'}, {num: '10 PM'}, {num: '11 PM'}, {num: '12 AM'}])

    const { isClassTable, openClassTable } = modalFunctions()

</script>

<template>
    <div class="h-[44rem] sm:w-full overflow-auto">
        <div class="w-full h-full table overflow-auto">
        
            <div class="table-header-group bg-gradient-to-r from-blue-500 to-cyan-500">
                <div class="table-row">
                    <div class="table-cell border border-gray-400 rounded-tl-lg">
                        <p class="invisible">5 AM</p>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>7</p>
                            <p>Mon</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>8</p>
                            <p>Tue</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>9</p>
                            <p>Wed</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>10</p>
                            <p>Thu</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>11</p>
                            <p>Fri</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>12</p>
                            <p>Sat</p>
                        </div>
                    </div>
                    <div class="table-cell border border-gray-400 rounded-tr-lg">
                        <div class="grid place-items-center px-6 text-xl text-white">
                            <p>13</p>
                            <p>Sun</p>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                class="table-row-group"
                v-for="nums, index in time" 
            >
                <div class="table-row border border-gray-300">
                    <div class="table-cell border border-gray-300">
                        <div class="grid place-items-center py-4 bg-[#F5FAFF] text-sm">{{ nums.num }}</div>
                    </div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer" 
                        @click="openClassTable"
                    ></div>
                </div>
            </div>

        </div>
        <TimetableDialogsClassTable :isClassTable="openClassTable"/> 
    </div>
</template>