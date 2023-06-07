<script setup lang="ts">

    import { ChevronRightIcon, ChevronLeftIcon, FunnelIcon, MagnifyingGlassIcon, BarsArrowDownIcon, CheckIcon } from '@heroicons/vue/24/outline'

    const { classObj } = useCreateClasses()
    const { studObj, getStudObj, checkStudObj } = useCheckClass()

    const { data: classStudents } = await import('@/assets/json/mock/student-profile-data/classesStudents.json');


    const days = reactive([
        {day: 'M', num: '1'},
        {day: 'T', num: '2'},
        {day: 'W', num: '3'},
        {day: 'Th', num: '4'},
        {day: 'F', num: '5'},
        {day: 'Sa', num: '6'},
        {day: 'Su', num: '7'},
        {day: 'M', num: '8'},
        {day: 'T', num: '9'},
        {day: 'W', num: '10'},
        {day: 'Th', num: '11'},
        {day: 'F', num: '12'},
        {day: 'Sa', num: '13'},
        {day: 'Su', num: '14'},
        {day: 'M', num: '15'},
        {day: 'T', num: '16'},
        {day: 'W', num: '17'},
        {day: 'Th', num: '18'},
        {day: 'F', num: '19'},
        {day: 'Sa', num: '20'},
        {day: 'Su', num: '21'},
        {day: 'M', num: '22'},
        {day: 'T', num: '23'},
        {day: 'W', num: '24'},
        {day: 'Th', num: '25'},
        {day: 'F', num: '26'},
        {day: 'Sa', num: '27'},
        {day: 'Su', num: '28'},
        {day: 'M', num: '29'},
        {day: 'T', num: '30'},
        {day: 'W', num: '31'},
    ])

    const router = useRouter()

    const openAllClasses = () => {
        router.push('/classes/classesDashboard')
    }

</script>

<template>
    <div class="w-full h-full px-10 py-6 space-y-6">

        <div class="flex text-[16px] space-x-4 place-items-center">
            <p 
                class="text-[#708FAB] cursor-pointer"
                @click="openAllClasses"
            >
                All Classes
            </p>
            <ChevronRightIcon class="w-5 h-5 text-[#527AF5]"/>
            <p class="text-[#527AF5]">{{ classObj.name }}</p>
        </div>

        <div class="w-full flex place-items-center relative">
            <div class="flex space-x-6 place-items-center">
                <img 
                    :src="classObj.image" 
                    alt=""
                    class="w-12 h-12 rounded-md"
                >
                <p class="text-2xl">{{ classObj.name }}</p>
            </div>
            <div class="absolute right-0 flex place-items-center">
                <div class="flex space-x-8 place-items-center">

                    <div class="flex space-x-4 place-items-center text-[16px]">
                        <FunnelIcon class="w-4 h-4 text-[#9FB5D1]"/>
                        <p>Filter</p>
                    </div>

                    <div class="flex place-items-center w-[23rem] h-[2.5rem] border border-[#CAD7E8] rounded-md text-[#CAD7E8] bg-white">
                        <div class="px-4 py-2 border-r border-[#CAD7E8]">
                            <MagnifyingGlassIcon class="w-5 h-5"/>
                        </div>
                        <input type="text" class="w-full outline-none text-black px-4">
                    </div>

                    <div class="flex place-items-center border-[#CAD7E8] text-[#CAD7E8] border rounded-md bg-white h-[2.5rem]">
                        <div class="px-2 py-3 border-r border-[#CAD7E8]">
                            <ChevronLeftIcon class="w-3 h-3"/>
                        </div>
                        <p class="text-[16px] text-black px-6">October 2023</p>
                        <div class="px-2 py-3 border-l border-[#CAD7E8]">
                            <ChevronRightIcon class="w-3 h-3"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="w-full h-[45rem] bg-white rounded-md border-b-2 border-white overflow-hidden">

            <div class="w-full h-[44rem] overflow-hidden">
                <div class="overflow-y-auto h-[40.5rem]">
                    <div class="table table-auto w-full border border-[#CAD7E8] rounded-lg">
                        <div class="table-header-group">
                            <div class="table-row bg-gradient-to-r from-blue-500 to-cyan-500">
                                <div class="table-cell border border-[#CAD7E8]">
                                    <div class="flex pl-6 text-white place-items-center space-x-4">
                                        <p class="font-semibold">STUDENTS</p>
                                        <div class="px-1 py-1 bg-[#2F84CF]">
                                            <BarsArrowDownIcon class="w-5 h-5"/>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                    v-for="att, index in days"
                                    :key="index"
                                    class="table-cell py-4 border border-[#CAD7E8]"
                                >
                                    <div class="grid place-items-center">
                                        <div class="grid space-y-2 place-items-center text-white text-sm w-[1.3rem]">
                                            <p>{{ att.day }}</p>
                                            <p>{{ att.num }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-cell border border-[#CAD7E8]">
                                    <div class="grid place-items-center">
                                        <p class="text-white text-sm">TOTAL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-row-group">
                            <div 
                                v-for="(studs, index) in classStudents"
                                :key="index"
                                class="table-row py-6"
                            >
                                <div class="table-cell">
                                    <div class="flex place-items-center space-x-4 px-2 border-b border-[#CAD7E8] py-2">
                                        <span class="w-5 h-5 rounded-full bg-[#E9F0FA]"></span>
                                        <p class="text-[16px]">{{ studs.Firstname }} {{ studs.Lastname }}</p>
                                    </div>
                                </div>
                                <div 
                                    class="table-cell border border-[#CAD7E8] hover:border-blue-400 cursor-pointer"
                                    v-for="(img, innerIndex) in studs.Days"
                                    :key="innerIndex"
                                    @click="getStudObj(img), checkStudObj(true)"
                                >
                                    <div class="grid place-items-center">
                                        <CheckIcon 
                                            class="w-4 h-4"
                                            :class="[img.checked ? 'visible' : 'invisible']"
                                        />
                                    </div>
                                </div>
                                <div class="table-cell border border-[#CAD7E8]">
                                    <div class="grid place-items-center text-[16px]">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4">
                    <div class="table w-full border-t-2 border-[#9FB5D1]">
                        <div class="table-row">
                            <div class="table-cell">
                                <div class="grid place-items-center py-3 pr-[7.5rem]">
                                    <p class="text-sm font-medium">DAILY TOTAL</p>
                                </div>
                            </div>
                            <div 
                                v-for="att, outerIndex in days"
                                :key="outerIndex"
                                class="table-cell py-4 border border-[#CAD7E8]"
                            >
                                <div class="grid place-items-center">
                                    <div class="grid space-y-2 place-items-center text-white text-sm w-[1.3rem]">
                                        <p class="invisible">{{ att.day }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="table-cell border border-[#CAD7E8]">
                                <div class="grid place-items-center">
                                    <p class="text-white text-sm">TOTAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <p class="text-sm text-[#5E6E82]">Showing 30 out of {{ classStudents.length }}</p>

    </div>
</template>