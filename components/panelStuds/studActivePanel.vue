<script setup lang="ts">

import { MagnifyingGlassIcon, FunnelIcon, BarsArrowUpIcon } from '@heroicons/vue/24/outline'

const { studList, form } = addStudentFunctionalities()

const { clickViewProfile } = useViewProfile()

</script>

<template>
    <div class="px-2">
        <div class="px-4 py-4 w-fit flex flex-row">
            <div class="text-[20px] font-semibold">
                <p>Active Students</p>
            </div>
            <div class="w-[28rem]"></div>
            <div class="space-x-6 flex flex-row">
                <div class="flex place-items-center">
                    <MagnifyingGlassIcon class="ml-3 pr-2 w-7 h-7 absolute border-r-2 border-gray-200 text-blue-600"/>
                    <input type="text" class="text-[16px] w-[20rem] py-4 h-[2rem] rounded-lg border-2 border-gray-200 pl-14" placeholder="Search Name">
                </div>
                <div class="space-x-1 text-[16px] flex place-items-center">
                    <BarsArrowUpIcon class="w-5 h-5 text-blue-600"/>
                    <p class="">Last name (asc)</p>
                </div>
                <div class="space-x-1 text-[16px] flex place-items-center">
                    <FunnelIcon class="w-5 h-5 text-blue-600"/>
                    <p class="">Filter</p>
                </div>
            </div>
        </div>
        <div class="place-items-center justify-center pt-2">
            <div class="w-full">
                <div class="w-full h-[37rem] px-6 py-4">
                    <div class="table w-full border-separate border-spacing-y-3 text-sm">
                        <div class="table-header-group text-gray-400 [&_>_div]">
                            <div class="table-row font-semibold" style="padding-left: ;">
                                <div class="table-cell" style="padding-left: 4rem;">STUDENTS</div>
                                <div class="table-cell" style="padding-right: 2.5rem;">AGE</div>
                                <div class="table-cell" style="padding-right: 4rem;">BADGES</div>
                                <div class="table-cell" style="padding-right: 4rem;">EMAIL</div>
                                <div class="table-cell">MOBILE NO</div>
                            </div>
                        </div>
                        <div class="table-row-group w-full">
                            <div 
                                class="table-row place-items-center"
                                v-for="(studs,index) in studList"
                                :key="index"
                            >
                                <div class="table-cell py-4 px-8 rounded-l-lg bg-white place-items-center">
                                    <div class="flex place-items-center space-x-4">
                                        <img 
                                            :src="studs.image" 
                                            alt=""
                                            class="w-4 h-4 rounded-full"
                                        >
                                        <p class="text-[14px]">{{ studs.firstname }} {{ studs.lastname }}</p>
                                    </div>
                                </div>
                                <div class="table-cell bg-white place-items-center" style="padding-right: 2.5rem;">12</div>
                                <div class="table-cell py-4 px-1 bg-white place-items-center" style="padding-right: 4rem;">
                                    <img src="/icons/studIcons.svg" alt="" class="w-auto h-5">
                                </div>
                                <div class="table-cell py-4 px-1 bg-white place-items-center" style="padding-right: 4rem;">{{ studs.email }}</div>
                                <div class="table-cell py-4 px-1 bg-white place-items-center rounded-r-lg">(02) {{ studs.mobileno }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b-2 border-gray-200"></div>
            </div>
        </div>
    </div>
</template>