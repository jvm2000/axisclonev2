<script setup lang="ts">

    import { PencilIcon, InboxArrowDownIcon, PlusIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'
    const { classListArchive, getClassObj, indexObj, getIndex } = useCreateClasses()
    const 
    { 
        openRestoreClass 
    } = modalFunctions()

    const router = useRouter()
    const clickViewClass = () => {
        router.push('/classes/classView')
    }

    const openTimeTable = () => {
        router.push('/timetable/timeTableDashboard')
    }

</script>

<template>
    <div class="w-full pt-8">

        <div 
            v-if="classListArchive.length == 0"
            class="grid w-full place-items-center space-y-10"
        >
            <img src="/classess/no_class.svg" alt="">
            <p class="text-2xl">You have no archived classes yet.</p>
        </div>
        
        <div
            v-else
            class="grid space-y-4"
        >

            <div class="w-full px-20 sm:px-[8rem] flex place-items-center text-[#5E6E82] text-sm space-x-40 sm:space-x-[20rem] font-semibold">
                <div class="flex space-x-6 sm:space-x-[18rem]">
                    <p>CLASS NAME</p>
                    <p class="hidden sm:block">PROGRAM</p>
                </div>
                <div class="flex space-x-2 sm:space-x-[15rem]">
                    <p class="hidden sm:block">RANKS</p>
                    <p>ACTION</p>
                </div>
            </div>

            <div
                v-for="classes, index in classListArchive" 
                :key="index"
                class="flex place-items-center space-x-4 w-full"   
            >
                <span :class="`h-3 w-3 rounded-full ${classes.color}`"></span>

                <div class="w-full flex place-items-center px-4 py-2 bg-white rounded-md text-[16px]">
                    <div 
                        class="flex place-items-center space-x-4 sm:space-x-8 w-[18rem]"
                    >
                        <img 
                            :src="classes.image"
                            class="w-12 h-12 bg-zinc-600 rounded-md"
                        />
                        <p>{{ classes.name }}</p>
                    </div>
                    <div class="hidden sm:flex place-items-center w-[24.5rem]">
                        <p>{{ classes.program }}</p>
                    </div>
                    <div 
                        class="hidden sm:flex place-items-center w-[18rem] space-x-4"
                    >
                        <span 
                            v-for="rnks, ranks_index in classes.ranks"
                            :key="ranks_index"
                            :class="`w-8 h-8 rounded-sm border-blue-400 border ${rnks.color}`"
                        ></span>
                    </div>
                    <div class="w-[8rem] flex space-x-6 place-items-center">
                        <InboxArrowDownIcon 
                            class="ml-5 w-5 h-5 text-[#9FB5D1] cursor-pointer"
                            @click="openRestoreClass(), getClassObj(classes), getIndex(index)"
                        />
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>