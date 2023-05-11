<script setup lang="ts">
    const { timeTableList } = addListTimetable()

    import { PencilIcon, InboxArrowDownIcon } from '@heroicons/vue/24/outline'

    const { isArchiveTable, openArchiveTable, isEditTable, openEditTable } = modalFunctions()
    
    const { objList, objectList } = addListTimetable()
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
                        class="table-row bg-white h-[3.5rem] w-full rounded-lg drop-shadow-sm"
                        v-for="(list, index) in timeTableList"
                        :key="index"
                    >
                        <div class="table-cell place-items-center space-x-4" style="padding-left: 2%; padding-top: 0.8%;">
                            <div class="flex place-items-center space-x-6 absolute">
                                <img 
                                    v-if="list.image"
                                    :src="list.image"
                                    class="w-8 h-8 rounded-lg"
                                >
                                <img 
                                    v-else
                                    :src="list.default"
                                >
                                <p>{{ list.name }}</p>
                            </div>
                        </div>
                        <div class="table-cell place-items-center" style="margin-bottom: 5%;">
                            <p>{{ list.fromdate }} - {{ list.todate }}</p>
                        </div>
                        <div class="table-cell">
                            Will Harvey
                        </div>
                        <div class="table-cell place-items-center space-x-4 text-[#5E6E82]" style="padding-left: 8%;">
                            <div class="flex space-x-4 mt-4">
                                <PencilIcon 
                                    class="w-4 h-4 cursor-pointer"
                                    @click="openEditTable(), objList(list)"
                                />
                                <InboxArrowDownIcon 
                                    class="w-4 h-4 cursor-pointer"
                                    @click="openArchiveTable(), objList(list)"
                                />
                                <div class="w-8 invisible"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TimetableDialogsArchiveTable :isArchiveTable="openArchiveTable"/>
        <TimetableDialogsEditTimeTable :isEditTable="openEditTable"/>
    </div>
</template>