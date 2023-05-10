<script setup lang="ts">
    const { timeTableList } = addListTimetable()

    import { PencilIcon, InboxArrowDownIcon } from '@heroicons/vue/24/outline'

</script>

<template>
    <div class="mt-6">

        <div 
            v-if="timeTableList.length == 0"
            class="grid place-items-center space-y-8"
        >
            <img src="/timetable/empty_calendar.svg" alt="">
            <p class="text-lg text-[#2E304F]">You have not added timetable yet.</p>
        </div>

        <div
            v-else
        >
            <div class="table w-full text-[14px] border-spacing-y-4">
                <div class="table-header-group">
                    <div class="table-row text-[#9FB5D1]">
                        <div class="table-cell" style="padding-left: 5%;">TIMETABLE NAME</div>
                        <div class="table-cell">DATE RANGE</div>
                        <div class="table-cell">LAST MODIFIED</div>
                        <div class="table-cell" style="padding-left: 8%">ACTION</div>
                    </div>
                </div>
                <div class="table-row-group">
                    <div 
                        class="table-row bg-white h-[3.5rem] w-full rounded-lg"
                        v-for="(list, index) in timeTableList"
                        :key="index"
                    >
                        <div class="table-cell place-items-center space-x-4" style="padding-left: 2%; margin-top: 2px;">
                            <div class="flex place-items-center space-x-6">
                                <div class="w-4 h-4 bg-yellow-500"></div>
                                <p>{{ list.name }}</p>
                            </div>
                        </div>
                        <div class="table-cell place-items-center">
                            <p>{{ list.fromdate }} - {{ list.todate }}</p>
                        </div>
                        <div class="table-cell">
                            Will Harvey
                        </div>
                        <div class="table-cell place-items-center space-x-4 text-[#5E6E82]" style="padding-left: 8%;">
                            <div class="flex space-x-4 mt-4">
                                <PencilIcon class="w-4 h-4"/>
                                <InboxArrowDownIcon class="w-4 h-4"/>
                                <div class="w-8 invisible"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>