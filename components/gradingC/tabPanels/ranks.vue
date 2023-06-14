<script setup lang="ts">
    import { MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, CheckIcon } from '@heroicons/vue/24/outline'

    const { data: gradingStudents } = await import('@/assets/json/mock/student-profile-data/gradingStudents.json');

</script>

<template>
    <div class="w-full pt-14 place-items-center flex relative">

        <div class="flex space-x-4 place-items-center">
            <p class="text-xl font-semibold">Little Dragon <span class="font-light">|</span> Little Dragon 4-5 Years</p>
            <img src="/icons/grading/refreshicon.svg" alt="">
        </div>

        <div class="flex space-x-4 place-items-center absolute right-0">
            
            <div class="flex space-x-4 place-items-center">
                <div class="flex space-x-1 text-lg">
                    <p>Column</p>
                    <p>Visibility</p>
                </div>
                <select name="" id="" class="w-[6rem] py-3 px-2 rounded-lg border border-gray-400">
                    <option value="--" selected>20</option>
                    <option value="--">40</option>
                    <option value="--">60</option>
                    <option value="--">80</option>
                </select>
            </div>

            <div class="flex place-items-center h-[2.7rem] w-full bg-[#FBFCFE] border border-gray-400 rounded-lg px-4 space-x-4">
                <MagnifyingGlassIcon class="w-5 h-5"/>
                <input type="text" class="border-none bg-[#FBFCFE] text-[16px] ring-0 appearance-none outline-none" placeholder="Search name">
            </div>

            <div class="flex place-items-center space-x-4 text-gray-500">
                <FunnelIcon class="w-6 h-6"/>
                <BarsArrowDownIcon class="w-6 h-6"/>
            </div>

        </div>
    </div> 

    <div class="mt-8 w-full h-auto rounded-lg bg-white">

        <div class="table w-full table-auto border-spacing-y-6">
            <div class="table-header-group">
                <div class="table-row text-gray-400 place-items-center border-b  border-gray-400">
                    <div class="table-cell" style="padding-left: 3%;">
                        <div class="flex place-items-center space-x-4">
                            <input type="checkbox" class="w-5 h-5">
                            <div class="flex place-items-center space-x-2">
                                <p>STUDENT</p>
                                <BarsArrowDownIcon class="w-5 h-5"/>
                            </div>
                        </div>
                    </div>
                    <div class="table-cell">RANK</div>
                    <div class="table-cell">SUB RANK</div>
                    <div class="table-cell">ATT.</div>
                    <div class="table-cell"></div>
                    <div class="table-cell">DAYS</div>
                    <div class="table-cell">STATUS</div>
                    <div class="table-cell">ACTION</div>
                </div>
            </div>
            <div class="table-row-group">
                <div 
                    class="table-row text-gray-500"
                    v-for="students, index in gradingStudents"
                    :key="index"
                >
                    <div class="table-cell" style="padding-left: 3%;">
                        <div class="flex place-items-center space-x-4">
                            <input type="checkbox" class="w-5 h-5">
                            <div class="flex place-items-center space-x-2">
                                <img src="/illustrations/profilesvg.svg" alt="" class="w-6 h-6 rounded-full">
                            </div>
                            <p>{{ students.fullname }}</p>
                        </div>
                    </div>
                    <div class="table-cell">
                        <div class="flex place-items-center space-x-2">
                            <img src="/grading/whitebelt.svg" alt="" v-if="students.rank == 'White Belt'">
                            <img src="/grading/yellowbelt.svg" alt="" v-else-if="students.rank == 'Yello Belt'">
                            <img src="/grading/greenstripebelt.svg" alt="" v-else>
                            <p>{{ students.rank }}</p>
                        </div>
                    </div>
                    <div class="table-cell">
                        <div class="grid space-y-1">
                            <div class="flex space-x-2 place-items-center">
                                <p>{{ students.subrank }} / 5</p>
                                <CheckIcon class="w-4 h-4 font-semibold"/>
                            </div>
                            <input 
                                type="range"
                                v-model="students.subrank"
                                min="1"
                                max="5"
                                step="1"
                                class="w-20 h-2 read-only:border-[#46A6FF]"
                            >
                        </div>
                    </div>
                    <div class="table-cell">
                        <div class="grid space-y-1">
                            <div class="flex space-x-2 place-items-center">
                                <p>{{ students.att }} / 30</p>
                                <CheckIcon class="w-4 h-4 font-semibold"/>
                            </div>
                            <input 
                                type="range"
                                v-model="students.att"
                                min="1"
                                max="30"
                                step="2"
                                class="w-20 h-2 read-only:border-[#46A6FF]"
                            >
                        </div>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                </div>
            </div>
        </div>

    </div>
    
</template>