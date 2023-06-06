<script setup lang="ts">

    import { PencilIcon, InboxArrowDownIcon, PlusIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'
    const { classList, getClassObj } = useCreateClasses()
    const { isCreateClass, openCreateClass } = modalFunctions()

    const router = useRouter()
    const clickViewClass = () => {
        router.push('/classes/classView')
    }

</script>

<template>
    <div class="w-full pt-8">

        <div 
            v-if="classList.length == 0"
            class="grid w-full place-items-center space-y-10"
        >
            <img src="/classess/no_class.svg" alt="">
            <p class="text-2xl">You have not yet created any classes</p>
        </div>
        
        <div
            v-else
            class="grid space-y-4"
        >

            <div class="w-full px-[8rem] flex place-items-center text-[#5E6E82] text-sm space-x-[20rem] font-semibold">
                <div class="flex space-x-[18rem]">
                    <p>CLASS NAME</p>
                    <p>PROGRAM</p>
                </div>
                <div class="flex space-x-[15rem]">
                    <p>RANKS</p>
                    <p>ACTION</p>
                </div>
            </div>

            <div
                v-for="classes, index in classList" 
                :key="index"
                class="flex place-items-center space-x-4 w-full"   
            >
                <span :class="`h-3 w-3 rounded-full ${classes.color}`"></span>

                <div class="w-full flex place-items-center px-4 py-2 bg-white rounded-md text-[16px]">
                    <div 
                        class="flex place-items-center space-x-8 w-[29rem] cursor-pointer"
                        @click="clickViewClass(), getClassObj(classes)"
                    >
                        <img 
                            :src="classes.image"
                            class="w-12 h-12 bg-zinc-600 rounded-md"
                        />
                        <p>{{ classes.name }}</p>
                    </div>
                    <div class="flex place-items-center w-[24.5rem]">
                        <p>{{ classes.program }}</p>
                    </div>
                    <div 
                        class="flex place-items-center w-[18rem] space-x-4"
                    >
                        <span 
                            v-for="rnks, index in classes.ranks"
                            :key="index"
                            :class="`w-8 h-8 rounded-sm border-blue-400 border ${rnks.color}`"
                        ></span>
                    </div>
                    <div class="w-[8rem] flex space-x-6 place-items-center">
                        <img src="/icons/classes/calendar.svg" alt="" class="cursor-pointer">
                        <PencilIcon class="w-5 h-5 text-[#9FB5D1] cursor-pointer"/>
                        <InboxArrowDownIcon class="w-5 h-5 text-[#9FB5D1] cursor-pointer"/>
                    </div>
                </div>

            </div>

        </div>

        <div
            v-if="classList.length > 0"
            class="grid w-full space-y-20 pt-8 px-10"
        >

            <div 
                class="flex space-x-4 text-white bg-[#3CC7BC] rounded-lg place-items-center px-4 py-1 w-[11rem] cursor-pointer"
                @click="openCreateClass"
            >
                <p class="text-lg">Create Class</p>
                <PlusIcon class="w-6 h-6"/>
            </div>

            <div class="flex absolute right-20 place-items-center space-x-4">
                <p class="text-lg">If you wish to create <b>schedule</b> for these classes. Create your timetable now</p>
                <ArrowLongRightIcon class="w-4 h-4"/>
                <div class="flex place-items-center space-x-4 text-[#163BC1] text-lg border-2 border-[#163BC1] px-6 py-4 rounded-lg">
                    <p>Create Timetable</p>
                    <img src="/icons/classes/timeTable.svg" alt="">
                </div>
            </div>

        </div>
        <div v-else></div>
        <ClassesModalsCreateClass :isCreateClass="openCreateClass"/>
    </div>
</template>