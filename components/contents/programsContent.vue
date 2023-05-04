<style>
    .Vue-Toastification__toast {
        background: #FFFFFF;
        border-left: 5px solid green;
    }
    .Vue-Toastification__toast--success.success-toast {
        background: #FFFFFF;
        padding: 0;
        min-height: fit-content
    }
    /* reset toast body, to fully show content only */
    .Vue-Toastification__toast--error.error-toast {
        background: #FFFFFF;
        padding: 0;
        min-height: fit-content
    }
</style>


<script setup lang="ts">
    import { ChevronRightIcon, PlusIcon, UserPlusIcon, Square2StackIcon, TrashIcon } from '@heroicons/vue/24/outline'
    
    import Vue from "vue";
    import Toast, { useToast, POSITION } from "vue-toastification";
    import toasterDelete from "/components/toaster/deleteSyllabus.vue"

    const { isProgramsModal, openProgramsModal } = useProgramsModal()
    const {  openAssignStudentModal, isAssignStudentModalOpen } = modalFunctions()


    const { syllabusList, duplicateSyllabus, deleteSyllabus } = useAddSyllabus()
    const { clickViewProgram, programViewItem } = usePrograms()
    const router = useRouter()

    const openProgramsContent = () => {
        router.push('/programs/programsProfile')
    }


    const toast = useToast()
    const deleteSuccessfully = () => {
        toast.success(toasterDelete, {
            position: POSITION.BOTTOM_RIGHT,
            icon: false,
            timeout: 3000,
        });
    }

</script>

<template>
    <div class="px-20 py-10 flex flex-col space-y-8">
        <div class="flex flex-row text-[16px] text-[#9FB5D1] space-x-2 place-items-center">
            <p>All Programs</p>
            <ChevronRightIcon class="w-5 h-5"/>
            <p>Hapkido International</p>
            <ChevronRightIcon class="w-5 h-5"/>
            <p class="text-[#527AF5] font-semibold">Syllabus</p>
        </div>
        <div class="flex py-2 flex-row w-full relative place-items-center border-b-2 border-[#CAD7E8]">
            <div class="flex flex-row space-x-4 place-items-center">
                <img src="/icons/programapp.svg" alt="">
                <p class="text-[20px]">Hapkido International</p>
            </div>
            <div class="flex flex-row place-items-center space-x-2 absolute right-0 bg-[#2955DE] px-4 py-1 rounded-lg text-white cursor-pointer"
                @click="openProgramsModal"
            >
                <p class="">Add Syllabus</p>
                <PlusIcon class="w-4 h-4"/>
            </div>
        </div>
        <div 
            class="w-full h-auto border-[#CAD7E8] border-2 border-dashed place-items-center space-y-2 py-6"
            :class="[syllabusList.length > 0 ? 'hidden' : 'grid']"
        >
            <div class="py-2">
                <p class="text-[20px] text-[#9FB5D1] font-semibold">Syllabus list is empty. Add Syllabus for this Program</p>
            </div>
            <div class="flex flex-row place-items-center space-x-2 bg-[#2955DE] px-4 py-1 rounded-lg text-white cursor-pointer"
                @click="openProgramsModal"
            >
                <p class="">Add Syllabus</p>
                <PlusIcon class="w-4 h-4"/>
            </div>
        </div>
        <div 
            class="table w-full border-separate border-spacing-y-2"
            :class="[syllabusList.length > 0 ? 'block' : 'hidden']"
        >
            <div class="table-header-group">
                <div class="table-row text-gray-500">
                    <div class="table-cell" style="padding-left: 5%;">SYLLABUS NAME</div>
                    <div class="table-cell" style="padding-left: 1%;">STATUS</div>
                    <div class="table-cell" style="padding-left: 5%;">RANKS</div>
                    <div class="table-cell" style="padding-left: 5%;">LAST MODIFIED</div>
                    <div class="table-cell" style="padding-left: 8%;">ACTION</div>
                </div>
            </div>
            <div class="table-row-group">
                <div 
                    class="table-row"
                    v-for="(syllabus,index) in syllabusList"
                    :key="index"
                >
                    <div 
                        class="table-cell bg-white rounded-l-lg py-5 px-4 place-items-center space-x-4 cursor-pointer relative"
                        @click="openProgramsContent(), clickViewProgram(syllabus)"
                    >
                    <div class="flex">
                        <div class="w-[1.4rem] h-[1.4rem] bg-[#7099EA] z-[1] absolute"></div>
                        <p class="z-[2] pl-10">{{ syllabus.addedSyllabus }}</p>
                    </div>
                    </div>
                    <div class="table-cell bg-white py-4" style="padding-left: 1%;">
                        <div class="flex place-items-center space-x-4">
                            <div class="w-2 h-2 rounded-full"
                                :class="[syllabus.syllabusStatus == 'Draft' ? 'bg-[#FFE252]' : 'bg-[#00F327]', 
                                syllabus.syllabusStatus == 'Undefined' ? 'hidden' : '']"
                            ></div>
                            <p>{{ syllabus.syllabusStatus }}</p>
                        </div>
                    </div>
                    <div class="table-cell bg-white py-4" style="padding-left: 7%;">1</div>
                    <div class="table-cell bg-white py-4" style="padding-left: 6%;">Will Harvey</div>
                    <div class="table-cell bg-white rounded-r-lg py-4 space-x-2" style="padding-left: 7.5%;">
                        <div class="flex space-x-6">
                            <UserPlusIcon class="w-5 h-5 cursor-pointer" @click="openAssignStudentModal(), clickViewProgram(syllabus)"/>
                            <Square2StackIcon class="w-5 h-5 cursor-pointer" @click="duplicateSyllabus(syllabus)"/>
                            <TrashIcon class="w-5 h-5 cursor-pointer" @click="deleteSyllabus(syllabus), deleteSuccessfully(), clickViewProgram(syllabus)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DialogsAddProgramsModal :isProgramsModal="openProgramsModal"/>
        <DialogsAssignStudentModal :isAssignStudentModalOpen="openAssignStudentModal"/>

    </div>
</template>

