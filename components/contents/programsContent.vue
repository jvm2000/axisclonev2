<script setup lang="ts">
    import { ChevronRightIcon, PlusIcon } from '@heroicons/vue/24/outline'
    
    const { isProgramsModal, openProgramsModal } = useProgramsModal()

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
        <div class="w-full h-auto border-[#CAD7E8] border-2 border-dashed hidden place-items-center space-y-2 py-6">
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
        <div class="table w-full">
            
        </div>
        <DialogsAddProgramsModal :isProgramsModal="openProgramsModal"/>
    </div>
</template>

