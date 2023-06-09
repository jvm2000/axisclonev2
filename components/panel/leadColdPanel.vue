<script setup lang="ts">

import { MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, ArrowLongDownIcon, DocumentTextIcon, ShieldCheckIcon, PhotoIcon, HeartIcon } from '@heroicons/vue/24/outline'

const { leadList, form } = addLeadFunctionalities()

const { clickViewProfile } = useViewProfile()

    const page = ref(1)
    const pageClick = (a: number) => {
        page.value = a
    }

    const leadData = computed(() => {
        if(page.value == 1) {
            return leadList.value.slice(0, 8)
        }
        if(page.value == 2) {
            return leadList.value.slice(8, 19)
        }
        if(page.value == 3) return leadList.value.slice(19, 26)
    })

    const totalPage = computed(() => {
        let total = 0
        let page = leadList.value.length / 8
        let result = (page - Math.floor(page)) !== 0;
        if ( result ) {
            total = Math.round(page) + 1
        }
        return total
    })
</script>

<template>
    <div class="px-2">
        <div class="px-4 py-4 w-fit flex flex-col sm:flex-row space-y-2">
            <div class="text-[20px] font-semibold">
                <p>Cold Leads</p>
            </div>
            <div class="w-[40.9rem] hidden sm:block"></div>
            <div class="space-x-4 flex flex-row">
                <div class="flex place-items-center">
                    <MagnifyingGlassIcon class="ml-3 pr-2 w-7 h-7 absolute border-r-2 border-gray-200 text-gray-400"/>
                    <input type="text" class="text-[16px] w-[20rem] py-4 h-[2rem] rounded-lg border-2 border-gray-200 pl-14" placeholder="Search Name">
                </div>
                <div class="space-x-1 text-[16px] flex place-items-center">
                    <FunnelIcon class="w-5 h-5"/>
                    <p class="">Filter</p>
                </div>
            </div>
        </div>
        <div class="place-items-center justify-center pt-2">
            <div class="h-[42rem] w-full bg-white rounded-xl">
                <div class="w-full">
                    <div class="w-full h-[37rem] px-6 py-4">
                        <div class="table w-full border-separate border-spacing-y-6 text-sm">
                            <div class="table-header-group text-gray-400 [&_>_div]">
                                <div class="table-row font-semibold">
                                    <div class="table-cell ">
                                        <div class="flex place-items-center space-x-2">
                                            <p>LEADS</p>
                                            <BarsArrowDownIcon class="w-4 h-4"/>
                                        </div>
                                    </div>
                                    <div class="table-cell ">MOBILE NO.</div>
                                    <div class="table-cell">
                                        <div class="flex place-items-center space-x-2">
                                            <p>AGE</p>
                                            <ArrowLongDownIcon class="w-4 h-4"/>
                                        </div>
                                    </div>
                                    <div class="hidden sm:table-cell">BADGES</div>
                                    <div class="hidden sm:table-cell">ACTIVITY</div>
                                    <div class="hidden sm:table-cell">DATE ADDED</div>
                                    <div class="hidden sm:table-cell">LAST CHECK IN</div>
                                    <div class="hidden sm:table-cell">INSTRUCTOR</div>
                                    <div class="table-cell">TASK</div>
                                </div>
                            </div>
                            <div class="table-row-group w-full">
                                <div 
                                    class="table-row font-medium place-items-center border-b-2 border-gray-200"
                                    v-for="(leads,index) in leadList"
                                    :key="index"
                                    :class="[leads.status == 'cold' ? 'block' : 'hidden']"
                                >
                                    <div 
                                        class="table-cell cursor-pointer"
                                        @click="clickViewProfile(leads)"
                                    >
                                        <div class="flex space-x-2 place-items-center">
                                            <img
                                                :src="leads.image"
                                                alt=""
                                                class="w-4 h-4 rounded-full border border-[#CAD7E8]"
                                            >
                                            <p>{{ leads.firstname }} {{ leads.lastname }}</p>
                                        </div>
                                    </div>
                                    <div class="table-cell" v-if="leads.status == 'cold'">
                                        <p>{{ leads.mobileno }}</p>
                                    </div>
                                    <div class="table-cell" v-if="leads.status == 'cold'">15</div>
                                    <div class="hidden sm:table-cell" v-if="leads.status == 'cold'">
                                        <div class="flex space-x-2">
                                            <DocumentTextIcon class="w-5 h-5 text-[#1376D8]"/>
                                            <ShieldCheckIcon class="w-5 h-5 text-[#A85CEA]"/>
                                            <PhotoIcon class="w-5 h-5 text-[#34CE2C]"/>
                                            <HeartIcon class="w-5 h-5 text-[#01D7D7]"/>
                                        </div>
                                    </div>
                                    <div class="hidden sm:table-cell" v-if="leads.status == 'cold'">
                                        <div class="flex space-x-2 place-items-center">
                                            <p class="bg-[#FF1D1D] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">T</p>
                                            <p class="bg-[#A1BDD6] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">A</p>
                                            <p class="bg-[#E8EDF4] px-2 py-[2px] text-[14px] rounded-lg text-[#9FB5D1] font-semibold border-2 border-dashed border-gray-400">+</p>
                                        </div>
                                    </div>
                                    <div class="hidden sm:table-cell" v-if="leads.status == 'cold'">
                                        <p>{{ leads.dateadded }}</p>
                                    </div>
                                    <div class="hidden sm:table-cell" v-if="leads.status == 'cold'">
                                        <p>{{ leads.dateadded }}</p>
                                    </div>
                                    <div class="hidden sm:table-cell" v-if="leads.status == 'cold'">Annie Leonheart</div>
                                    <div class="flex place-items-center" v-if="leads.status == 'cold'">
                                        <img src="/illustrations/task.svg" class="" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b-2 border-gray-200"></div>
                    <div class="flex place-items-center h-[4rem] w-full px-8" v-if="totalPage >= 1">
                        <p class="text-[16px]" v-if="page == 1">Showing 1 to {{ leadList?.length }} of {{ leadList?.length }} results</p>
                        <p class="text-[16px]" v-if="page == 2">Showing 9 to {{ leadList?.length }} of {{ leadList?.length }} results</p>
                        <p class="text-[16px]" v-if="page == 3">Showing 17 to {{ leadList?.length }} of {{ leadList?.length }} results</p>
                        <div class="w-[5rem] sm:w-[40rem]"></div>
                        <div class="flex text-[16px]">
                            <button class="px-3 py-1 border border-gray-500">
                                <ChevronLeftIcon class="w-4 h-4"/>
                            </button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(1)"
                                v-if="totalPage >= 1"
                            >
                                1
                            </button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(2)" 
                                :disabled="leadList.length < 9"
                                v-if="totalPage > 1 && totalPage == 2"
                            >
                                2
                            </button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(3)"
                                :disabled="leadList.length < 17"
                                v-if="totalPage > 1 && totalPage == 3"
                            >
                                3
                            </button>
                            <!-- <button class="px-3 py-1 border border-gray-500" disabled>4</button>
                            <button class="px-3 py-1 border border-gray-500" disabled>5</button>
                            <button class="px-3 py-1 border border-gray-500" disabled>6</button>
                            <button class="px-3 py-1 border border-gray-500" disabled>7</button> -->
                            <button class="px-3 py-1 border border-gray-500" disabled>
                                <ChevronRightIcon class="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>