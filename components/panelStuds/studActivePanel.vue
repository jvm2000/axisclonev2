<script setup lang="ts">

    import { MagnifyingGlassIcon, FunnelIcon, BarsArrowUpIcon, ArrowLongDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/vue/24/outline'

    const { studList, form } = addStudentFunctionalities()

    const { openAddStuds } = sideBarFunctionalities()

    const page = ref(1)
    
    const pageClick = (a: number) => {
        page.value = a
    }

    const leadData = computed(() => {
        if(page.value == 1) {
            return studList.value.slice(0, 20)
        }
        if(page.value == 2) {
            return studList.value.slice(20, 40)
        }
        if(page.value == 3) return studList.value.slice(40, 60)
    })

    const totalPage = computed(() => {
        let total = 0
        let page = studList.value.length / 20
        let result = (page - Math.floor(page)) !== 0;
        if ( result ) {
            total = Math.round(page) + 1
        }
        return total
    })

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
            <div class="w-full h-[44rem] overflow-y-auto">
                <div class="w-full px-6 py-4">
                    <div class="table w-full border-separate border-spacing-y-3 text-sm">
                        <div class="table-header-group text-gray-400 [&_>_div]">
                            <div class="table-row font-semibold" style="padding-left: ;">
                                <div class="table-cell">
                                    <div class="flex place-items-center">
                                        <p>LAST NAME</p>
                                        <ArrowLongDownIcon class="w-4 h-4"/>
                                    </div>
                                </div>
                                <div class="table-cell">AGE</div>
                                <div class="table-cell">BADGES</div>
                                <div class="table-cell">EMAIL</div>
                                <div class="table-cell">MOBILE NO</div>
                            </div>
                        </div>
                        <div class="table-row-group w-full">
                            <div 
                                class="table-row place-items-center"
                                v-for="(studs,index) in leadData"
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
                <div class="flex place-items-center h-[4rem] w-full px-8" v-if="totalPage >= 1">
                    <div 
                        class="flex space-x-2 text-[16px] cursor-pointer bg-[#5081F0] py-1 pl-4 pr-8 rounded-lg text-white place-items-center"
                        @click="openAddStuds()"
                    >
                        <PlusIcon class="w-4 h-4 font-semibold"/>
                        <p>Add Student</p>
                    </div>
                    <div class="w-[40rem]"></div>
                    <div class="flex text-[14px]">
                        <button class="px-3 py-1 font-semibold">
                            Previous
                        </button>
                        <button 
                            class="px-3 py-1" @click="pageClick(1)"
                            v-if="totalPage >= 1"
                            :class="[page == 1 ? 'text-white rounded-full bg-[#5081F0]' : '']"
                        >
                            1
                        </button>
                        <button class="px-3 py-1 border border-gray-500" @click="pageClick(2)" 
                            :disabled="studList.length < 9"
                            v-if="totalPage > 1 && totalPage == 2"
                            :class="[page == 2 ? 'text-white rounded-full bg-[#5081F0]' : '']"

                        >
                            2
                        </button>
                        <button class="px-3 py-1 border border-gray-500" @click="pageClick(3)"
                            :disabled="studList.length < 17"
                            v-if="totalPage > 1 && totalPage == 3"
                            :class="[page == 3 ? 'text-white rounded-full bg-[#5081F0]' : '']"

                        >
                            3
                        </button>
                        <!-- <button class="px-3 py-1 border border-gray-500" disabled>4</button>
                        <button class="px-3 py-1 border border-gray-500" disabled>5</button>
                        <button class="px-3 py-1 border border-gray-500" disabled>6</button>
                        <button class="px-3 py-1 border border-gray-500" disabled>7</button> -->
                        <button class="px-3 py-1 text-[16px]" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>