<script setup lang="ts">
    import { PencilIcon, InboxArrowDownIcon, ChevronRightIcon, ChevronDownIcon, ChevronLeftIcon, FunnelIcon } from '@heroicons/vue/24/outline'
    
    const { objectList } = addListTimetable()

    const router = useRouter()

    const backDashboard = () => {
        router.push('/timetable/timeTableDashboard')
    }

    const dropdown_c = ref('Week')
    const dropdown_click = (declare: string) => {
        dropdown_c.value = declare
        toogleDropdown()
    }

    const toogle = ref(false)
    const toogleDropdown = () => {
        toogle.value = !toogle.value
    }

</script>

<template>
    <div class="pt-20 px-10 grid space-y-6">

        <div class="flex space-x-4 place-items-center">
            <p 
                class="text-[16px] text-[#708FAB] cursor-pointer"
                @click="backDashboard"
            >
                All Timetables
            </p>
            <ChevronRightIcon class="w-6 h-6 text-[#527AF5]"/>
            <p class="text-[16px] text-[#527AF5]">{{ objectList.name }}</p>
        </div>

        <div class="space-y-6 w-[31rem] sm:w-full h-[52rem] bg-white rounded-lg px-4 py-4">

            <div class="flex">
                <div class="flex place-content-start sm:place-items-center w-full">
                    <img 
                        v-if="objectList.image"
                        :src="objectList.image" 
                        alt=""
                        class="w-[4rem] h-[4rem] rounded-lg"
                    >
                    <img 
                        v-else
                        :src="objectList.default" 
                        alt=""
                        class="w-[4rem] h-[4rem] rounded-lg"
                    >
                    <div class="flex flex-col space-y-2 pl-4">
                        <div class="flex space-x-4 place-items-center">
                            <p class="text-2xl font-semibold">{{ objectList.name }}</p>
                            <ChevronDownIcon class="w-4 h-4"/>
                        </div>
                        <p class="text-sm">{{ objectList.fromdate }} - {{ objectList.todate }}</p>
                    </div>

                    <div class="hidden sm:grid sm:grow place-items-center">
                        <div class="flex space-x-10 place-items-center">
                            <p class="text-2xl font-semibold">October 2023</p>
                            <div class="flex place-items-center border-2 border-gray-300 rounded-lg space-x-4 px-3 font-semibold">
                                <ChevronLeftIcon class="w-3 h-3"/>
                                <div class="block border-l-2 border-r-2 border-gray-300 px-4 py-3">
                                    <p class="text-[16px]">Today</p>
                                </div>
                                <ChevronRightIcon class="w-3 h-3"/>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-none space-x-4 place-items-center">
                        <div class="hidden sm:flex space-x-2">
                            <PencilIcon class="w-5 h-5 text-gray-500"/>
                            <InboxArrowDownIcon class="w-5 h-5 text-gray-500"/>
                        </div>
                        <div class="hidden sm:flex space-x-2 pr-6">
                            <FunnelIcon class="w-5 h-5 text-gray-500"/>
                            <p class="text-[16px]">Filter</p>
                        </div>

                        <div class="flex flex-col px-4 py-2 border-2 border-gray-300 rounded-lg place-items-center">
                            <div 
                                class="flex place-items-center space-x-3 cursor-pointer"
                                @click="toogleDropdown"
                            >
                                <p>{{ dropdown_c }} View</p>
                                <ChevronDownIcon class="w-4 h-4"/>
                            </div>
                            <div 
                                v-if="toogle"
                                class="border-2 border-gray-300 h-auto bg-white absolute mt-10 rounded-lg space-y-2 py-1 z-[10]"
                            >
                                <p 
                                    class="hover:bg-gray-200 w-full px-7 py-1 cursor-pointer"
                                    @click="dropdown_click('Week')"
                                >
                                    Week View
                                </p>
                                <p 
                                    class="hover:bg-gray-200 w-full px-7 py-1 cursor-pointer"
                                    @click="dropdown_click('Month')"
                                >
                                    Month View
                                </p>
                                <p 
                                    class="hover:bg-gray-200 w-full px-7 py-1 cursor-pointer"
                                    @click="dropdown_click('Day')"
                                >
                                    Day View
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TimetableTimeTableContentW :class="[dropdown_c == 'Week' ? 'block' : 'hidden']" class="z-[0]"/>
            <TimetableTimeTableContentM :class="[dropdown_c == 'Month' ? 'block' : 'hidden']" class="z-[0]"/>
            <TimetableTimeTableContentD :class="[dropdown_c == 'Day' ? 'block' : 'hidden']" class="z-[0]"/>
        </div>


    </div>
</template>