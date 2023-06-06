<script setup lang="ts">

    import { ChevronRightIcon, ChevronLeftIcon, FunnelIcon, MagnifyingGlassIcon, BarsArrowDownIcon } from '@heroicons/vue/24/outline'

    const { classObj } = useCreateClasses()
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

</script>

<template>
    <div class="w-full h-full px-10 py-6 space-y-6">

        <div class="flex text-[16px] space-x-4 place-items-center">
            <p class="text-[#708FAB]">All Classes</p>
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

        <div class="w-full h-[45rem] bg-white rounded-md border-b-2 border-white">

            <div class="table w-full border border-[#CAD7E8] rounded-lg">
                <div class="table-header-group">
                    <div class="table-row bg-gradient-to-r from-blue-500 to-cyan-500">
                        <div class="table-cell">
                            <div class="flex pl-6 pr-10 py-6 text-white place-items-center space-x-4">
                                <p class="font-semibold">STUDENTS</p>
                                <div class="px-1 py-1 bg-[#2F84CF]">
                                    <BarsArrowDownIcon class="w-5 h-5"/>
                                </div>
                            </div>
                        </div>
                        <div 
                            v-for="att, index in days"
                            :key="index"
                            class="table-cell"
                        >
                            <div class="grid space-y-2 text-white text-sm">
                                <p>{{ att.day }}</p>
                                <p>{{ att.num }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-row-group">

                </div>
            </div>

        </div>

        <p class="text-sm text-[#5E6E82]">Showing 30 out of 57</p>

    </div>
</template>