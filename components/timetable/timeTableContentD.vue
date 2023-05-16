<script setup lang="ts">
    
    const time = reactive([{num: '5 AM'}, {num: '6 AM'}, {num: '7 AM'}, {num: '8 AM'}, {num: '9 AM'}, {num: '10 AM'}, {num: '11 AM'}, {num: '12 PM'}, {num: '1 PM'}, {num: '2 PM'}, {num: '3 PM'}, {num: '4 PM'}, {num: '5 PM'}, {num: '6 PM'}, {num: '7 PM'}, {num: '8 PM'}, {num: '9 PM'}, {num: '10 PM'}, {num: '11 PM'}, {num: '12 AM'}])

    const { isClassTable, openClassTable } = modalFunctions()

</script>

<template>
    <div class="h-[60rem] overflow-y-auto">
        <div class="pt-6 w-full table">
        
            <div class="table-header-group bg-gradient-to-r from-blue-500 to-cyan-500">
                <div class="table-row">
                    <div class="table-cell border border-gray-400 rounded-t-lg">
                        <div class="grid place-items-center text-white">
                            <div class="flex place-items-center space-x-4 py-2">
                                <p class="text-4xl">06</p>
                                <p class="text-2xl">Monday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                class="table-row-group"
                v-for="nums, index in time" 
            >
                <div class="table-row border border-gray-300">
                    <div 
                        class="table-cell border border-gray-300 hover:border-2 hover:border-blue-400 cursor-pointer"
                        @click="openClassTable"
                    >
                        <div class="py-4 text-sm pt-6 pl-6">{{ nums.num }}</div>
                        <div class="h-[5rem]"></div>
                    </div>
                </div>
            </div>

        </div>
        <div class="h-[14rem]"></div>
        <TimetableDialogsClassTable :isClassTable="openClassTable"/> 
    </div>
</template>