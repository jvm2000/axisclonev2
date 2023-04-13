<script setup lang="ts">

    import { ChevronRightIcon, PlusIcon, UserPlusIcon, TrashIcon } from '@heroicons/vue/24/outline'
    const { sideBarOpen, openAddLeads, closeAddLeads } = sideBarFunctionalities()
    const { programViewItem, setSyllabusStatus } = usePrograms()
    const router = useRouter()
    const { openSyllabusPreviewModal, isSyllabusPreviewModalOpen } = modalFunctions()

    const useAllSyllabus = () => {
        router.push('/programs/programsDashboard')
    }

</script>

<template>
    <div class="bg-[#F2F6FB] w-full h-full overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <!-- sidebar -->
            <nav class="z-[20]">
                <BarMinSideBar/>
                <BarMaxSideBar/>
            </nav>
            <div class="z-[0] w-full sm:z-[10]">
                <!-- topbar -->
                <BarStudTopBar />
                <!-- tab Leads -->
                <div class="px-20 py-10 flex flex-col space-y-8">
                    <div class="flex flex-row text-[16px] text-[#9FB5D1] space-x-2 place-items-center">
                        <p>All Programs</p>
                        <ChevronRightIcon class="w-5 h-5"/>
                        <p class="cursor-pointer" @click="useAllSyllabus">Hapkido International</p>
                        <ChevronRightIcon class="w-5 h-5"/>
                        <p>All Syllabus</p>
                        <ChevronRightIcon class="w-5 h-5"/>
                        <p class="text-[#527AF5] font-semibold">{{ programViewItem.addedSyllabus }}</p>
                    </div>
                    <div class="w-full h-auto flex flex-row relative place-items-center">
                        <div class="flex space-x-4 place-items-center">
                            <img src="/icons/syllabusIcon.svg" alt="">
                            <div class="flex space-y-2 flex-col">
                                <div class="flex flex-row space-x-2 place-items-center">
                                    <p class="text-[20px]">{{ programViewItem.addedSyllabus }}</p>
                                    <p class="border-2 rounded-full px-4"
                                        :class="[programViewItem.syllabusStatus == 'Draft' ? 'border-[#FFE252] bg-[#FFE2494D] text-[#FFE252]' : 'border-[#00F327] text-[#00F327] bg-[#c7ffd7]',
                                        programViewItem.syllabusStatus == 'Undefined' ? 'hidden' : '']"
                                    >
                                    {{ programViewItem.syllabusStatus }}
                                    </p>
                                </div>
                                <p class="text-[14px] text-gray-400">Version 0.1 Draft. Last edited by You</p>
                            </div>
                        </div>
                        <div class="absolute right-0 flex flex-col space-y-2 justify-end">
                            <div class="flex space-x-2 place-items-center">
                                <div class="w-48 invisible"></div>
                                <UserPlusIcon class="w-4 h-4"/>
                                <p>Assigned Student</p>
                            </div>
                            <div class="space-x-2 flex">
                                <p class="px-6 py-1 bg-[#D6E4F8] rounded-lg cursor-pointer" @click="setSyllabusStatus('Draft')">Save As Draft</p>
                                <p class="px-6 py-1 bg-[#D6E4F8] rounded-lg cursor-pointer" @click="openSyllabusPreviewModal">Preview</p>
                                <p class="px-6 py-1 bg-[#47D37F] rounded-lg cursor-pointer" @click="setSyllabusStatus('Publish')">Publish</p>
                            </div>
                        </div>
                    </div>
                    <div class="h-screen overflow-y-auto">
                        <div class="grid place-items-center overflow-y-auto space-y-6">
                            <SyllabusBlueYellowBelt/>
                            <SyllabusGreenBelt/>
                            <SyllabusOrangeBelt/>
                            <SyllabusPurpleBelt/>
                            <SyllabusYellowBelt/>
                            <SyllabusYellowBelt class="invisible"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SyllabusUsePreviewModal :isSyllabusPreviewModalOpen="openSyllabusPreviewModal"/>
    </div>
</template>
