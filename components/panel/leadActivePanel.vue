<script setup lang="ts">

    import { MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, ArrowLongDownIcon, DocumentTextIcon, ShieldCheckIcon, PhotoIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

    const { leadList, form } = addLeadFunctionalities()

    const { clickViewProfile } = useViewProfile()

    const currentPage = ref(1)
    const itemsPerPage = 3

    const pageCount = computed(() => Math.ceil(leadList.value.length / itemsPerPage))

    const paginatedleadList = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return leadList.value.slice(startIndex, endIndex)
    })

    const nextPage = () => {
      currentPage.value += 1
    }

    const prevPage = () => {
      currentPage.value -= 1
    }

    const page = ref(1)
    const pageOne = ref(false)
    const pageTwo = ref(false)
    const pageThree = ref(false)
    const pageClick = (a: number) => {
        page.value = a
    }

    const leadData = computed(() => {
        if(page.value == 1) return leadList.value.slice(1, 9)
        if(page.value == 2) return leadList.value.slice(9, 18)
        if(page.value == 3) return leadList.value.slice(19, 26)
    })


</script>

<template>
    <div class="px-2">
        <div class="px-4 py-4 w-fit flex flex-row">
            <div class="text-[20px] font-semibold">
                <p>Active Leads</p>
            </div>
            <div class="w-[40rem]"></div>
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
            <div class="h-[42rem] w-[78rem] bg-white rounded-xl">
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
                                    <div class="table-cell">BADGES</div>
                                    <div class="table-cell">ACTIVITY</div>
                                    <div class="table-cell">DATE ADDED</div>
                                    <div class="table-cell">LAST CHECK IN</div>
                                    <div class="table-cell">INSTRUCTOR</div>
                                    <div class="table-cell">TASK</div>
                                </div>
                            </div>
                            <div class="table-row-group w-full">
                                <div 
                                    class="table-row font-medium place-items-center border-b-2 border-gray-200"
                                    v-for="(leads,index) in leadData"
                                    :key="index"
                                    :class="[leads.status == 'active' ? 'block' : 'hidden']"
                                >
                                    <div 
                                        class="table-cell cursor-pointer border-b border-gray-200 pb-2"
                                        @click="clickViewProfile(leads)"
                                    >
                                        <div class="flex space-x-2 place-items-center ">
                                            <img
                                                :src="leads.image"
                                                alt=""
                                                class="w-4 h-4 rounded-full border border-[#CAD7E8]"
                                            >
                                            <p>{{ leads.firstname }} {{ leads.lastname }}</p>
                                        </div>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">
                                        <p>{{ leads.mobileno }}</p>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">15</div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">
                                        <div class="flex space-x-2">
                                            <DocumentTextIcon class="w-5 h-5 text-[#1376D8]"/>
                                            <ShieldCheckIcon class="w-5 h-5 text-[#A85CEA]"/>
                                            <PhotoIcon class="w-5 h-5 text-[#34CE2C]"/>
                                            <HeartIcon class="w-5 h-5 text-[#01D7D7]"/>
                                        </div>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">
                                        <div class="flex space-x-2 place-items-center">
                                            <p class="bg-[#FF1D1D] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">T</p>
                                            <p class="bg-[#A1BDD6] px-2 py-[2px] text-[14px] rounded-lg text-white font-semibold">A</p>
                                            <p class="bg-[#E8EDF4] px-2 py-[2px] text-[14px] rounded-lg text-[#9FB5D1] font-semibold border-2 border-dashed border-gray-200 pb-2">+</p>
                                        </div>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">
                                        <p>{{ leads.dateadded }}</p>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">
                                        <p>{{ leads.dateadded }}</p>
                                    </div>
                                    <div class="table-cell border-b border-gray-200 pb-2" v-if="leads.status == 'active'">Annie Leonheart</div>
                                    <div class="table-cell place-items-center border-gray-200 pb-2 border-b pl-3" v-if="leads.status == 'active'">
                                        <img src="/illustrations/task.svg" class="" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b-2 border-gray-200"></div>
                    <div class="flex place-items-center h-[4rem] w-full px-8">
                        <p class="text-[16px]">Showing 1 to {{ leadData?.length }} of {{ leadData?.length }} results</p>
                        <div class="w-[40rem]"></div>
                        <div class="flex text-[16px]">
                            <button class="px-3 py-1 border border-gray-500">
                                <ChevronLeftIcon class="w-4 h-4"/>
                            </button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(1)">1</button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(2)">2</button>
                            <button class="px-3 py-1 border border-gray-500" @click="pageClick(3)">3</button>
                            <button class="px-3 py-1 border border-gray-500">4</button>
                            <button class="px-3 py-1 border border-gray-500">5</button>
                            <button class="px-3 py-1 border border-gray-500">6</button>
                            <button class="px-3 py-1 border border-gray-500">7</button>
                            <button class="px-3 py-1 border border-gray-500">
                                <ChevronRightIcon class="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>