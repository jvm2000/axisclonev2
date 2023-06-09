<script setup lang="ts">
    import { MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, CheckIcon } from '@heroicons/vue/24/outline'

   const gradingStudents = reactive([
    {id: 1, firstname: 'John Anthony', lastname: 'Gabutan', rank: 'White Belt', subrank: 5, att: 10, days: 12, status: 'Requirements Not Met'},
    {id: 2, firstname: 'John Bayotas', lastname: 'Migo', rank: 'Green Belt', subrank: 3, att: 10, days: 20, status: 'Requirements Not Met'},
    {id: 3, firstname: 'Juan Vicente', lastname: 'Miñoza', rank: 'Yellow Belt', subrank: 3, att: 3, days: 10, status: 'Candidate for Promotion'},
    {id: 4, firstname: 'Adrian Paul', lastname: 'Casserva', rank: 'White Belt', subrank: 3, att: 4, days: 10, status: 'Requirements Not Met'},
    {id: 5, firstname: 'Raidel', lastname: 'Ducay', rank: 'Green Belt', subrank: 1, att: 16, days: 14, status: 'Requirements Not Met'},
    {id: 6, firstname: 'Nathaniel', lastname: 'Tiempo', rank: 'Yellow Belt', subrank: 2, att: 20, days: 24, status: 'Requirements Not Met'},
    {id: 7, firstname: 'Sanny', lastname: 'Malubay', rank: 'White Belt', subrank: 3, att: 10, days: 10, status: 'Candidate for Promotion'},
    {id: 8, firstname: 'John Kevin', lastname: 'Cadungog', rank: 'Green Belt', subrank: 4, att: 12, days: 12, status: 'Requirements Not Met'},
    {id: 9, firstname: 'Donald Jr.', lastname: 'Roda', rank: 'White Belt', subrank: 3, att: 15, days: 10, status: 'Requirements Not Met'},
    {id: 10, firstname: 'Mityak', lastname: 'Vasaya', rank: 'Yellow Belt', subrank: 4, att: 16, days: 22, status: 'Requirements Not Met'},
    {id: 11, firstname: 'Kent', lastname: 'Armelia', rank: 'Green Belt', subrank: 3, att: 20, days: 30, status: 'Requirements Not Met'},
    {id: 12, firstname: 'Chester Ace', lastname: 'Saagundo', rank: 'White Belt', subrank: 4, att: 10, days: 20, status: 'Requirements Not Met'},
    {id: 13, firstname: 'Charles John', lastname: 'Canete', rank: 'Green Belt', subrank: 3, att: 2, days: 14, status: 'Candidate for Promotion'},
    {id: 14, firstname: 'James', lastname: 'Kaiser', rank: 'White Belt', subrank: 4, att: 3, days: 16, status: 'Candidate for Promotion'},
    {id: 15, firstname: 'Cathlyn Mae', lastname: 'Yap', rank: 'Green Belt', subrank: 4, att: 4, days: 22, status: 'Requirements Not Met'},
    {id: 16, firstname: 'Christus', lastname: 'Damolo', rank: 'Green Belt', subrank: 2, att: 5, days: 28, status: 'Candidate for Promotion'},
    {id: 17, firstname: 'Alfredo', lastname: 'Wayne', rank: 'Yellow Belt', subrank: 5, att: 10, days: 30, status: 'Candidate for Promotion'},
    {id: 18, firstname: 'Trisha Ann', lastname: 'Cempron', rank: 'White Belt', subrank: 5, att: 12, days: 15, status: 'Requirements Not Met'},
    {id: 19, firstname: 'Prince', lastname: 'Gimena', rank: 'Green Belt', subrank: 2, att: 12, days: 10, status: 'Requirements Not Met'},
    {id: 20, firstname: 'Joross Daniel', lastname: 'Miñoza', rank: 'Yellow Belt', subrank: 3, att: 10, days: 28, status: 'Requirements Not Met'}
   ])

    const { sortby, sort, getObjGrading, objGrading, updateGradingStatus, getObjSort, objSort, accessSubrankObj } = useGradingFunctions()

    // const canProceed = computed(() => confirmationMessage.value == confirm.value)
    const objSubRank = ref()
    const widthSubRank  = computed((students: Object) => 
        objSubRank.value = students
    )

    const isOpenFiltered = ref(false)
    const openFilter = () => {
        isOpenFiltered.value = !isOpenFiltered.value
    }

    const searchQuery = ref('')
    const sortingFilter = computed(() => {
        const query = searchQuery.value.toLowerCase().trim();

        if(sortby.value == 'First name (asc)'){
            return [...gradingStudents].sort((a,b) => {
                return a.firstname.localeCompare(b.firstname)
            })
        }
        if(sortby.value == 'Last name'){
            return [...gradingStudents].sort((a,b) => {
                return a.lastname.localeCompare(b.lastname)
            })
        }
        if(sortby.value == 'Rank'){
            return [...gradingStudents].sort((a,b) => {
                return a.rank.localeCompare(b.rank)
            })
        }
        if(sortby.value == 'Subrank'){
            return [...gradingStudents].sort((a,b) => {
                return a.subrank - b.subrank
            })
        }
        if(sortby.value == 'Attendance'){
            return [...gradingStudents].sort((a,b) => {
                return a.att - b.att
            })
        }
        if(sortby.value == 'Days'){
            return [...gradingStudents].sort((a,b) => {
                return a.days - b.days
            })
        }
        if(sortby.value == 'Status'){
            return [...gradingStudents].sort((a,b) => {
                return a.status.localeCompare(b.status)
            })
        }
        if(sortby.value == 'Action'){
            return [...gradingStudents].sort((a,b) => {
                return a.status.localeCompare(b.status)
            })
        } 
        if(searchQuery){
            return gradingStudents.filter(students => students.firstname.toLowerCase().includes(query));
        }
        else{
        }

    })

    const { openFixRank, openUpdateSubRank } = modalFunctions()

</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

<template>
    <div class="w-fit h-fit px-10">
        <div class="w-full pt-14 place-items-center flex relative">

            <div class="flex space-x-4 place-items-center">
                <p class="text-xl font-semibold">Little Dragon <span class="font-light">|</span> Little Dragon 4-5 Years</p>
                <img src="/icons/grading/refreshicon.svg" alt="">
            </div>

            <div class="flex space-x-4 place-items-center absolute right-0">
                
                <div class="flex space-x-4 place-items-center">
                    <div class="flex space-x-1 text-lg">
                        <p>Column</p>
                        <p>Visibility</p>
                    </div>
                    <select name="" id="" class="w-[6rem] py-3 px-2 rounded-lg border border-gray-400">
                        <option value="--" selected>20</option>
                        <option value="--">40</option>
                        <option value="--">60</option>
                        <option value="--">80</option>
                    </select>
                </div>

                <div class="flex place-items-center h-[2.7rem] w-full bg-[#FBFCFE] border border-gray-400 rounded-lg px-4 space-x-4">
                    <MagnifyingGlassIcon class="w-5 h-5"/>
                    <input 
                        type="text" 
                        class="border-none bg-[#FBFCFE] text-[16px] ring-0 appearance-none outline-none" placeholder="Search name"
                        v-model="searchQuery"
                    >
                </div>

                <div class="flex place-items-center space-x-4 text-gray-500">

                    <FunnelIcon class="w-6 h-6"/>

                    <div class="grid">
                        <div class="absoloute space-y-2 relative">
                            <div 
                                class="flex space-x-4 bg-[#EAF3F9] border rounded-md border-[#CAD7E8] w-[12rem] px-3 py-3 cursor-pointer"
                                @click="openFilter"
                            >
                                <BarsArrowDownIcon class="w-6 h-6 text-[#9FB5D1]"/>
                                <p class="text-[#5081F0] text-base">{{ sortby }}</p>
                            </div>

                            <div 
                                v-if="isOpenFiltered"
                                class="grid w-[17rem] bg-white rounded-md h-auto absolute right-0 py-1"
                            >
                                <div class="w-full px-6 py-2 flex place-items-center text-base text-[#9FB5D1]">
                                    <p>Sort by</p>
                                </div>
                                <div 
                                    v-for="sorts, index in sort"
                                    :key="index"
                                    class="relative w-full py-3 hover:bg-[#EAF3F9] flex place-items-center cursor-pointer"
                                    @click="getObjSort(sorts), openFilter()"
                                >
                                    <p class="text-base ml-6">{{ sorts.menu }}</p>
                                    <CheckIcon 
                                        class="w-5 h-5 text-[#5081F0] absolute right-6"
                                        :class="[sorts.menu == sortby ? 'visible' : 'invisible']"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </div> 

            <div class="mt-8 w-full h-auto rounded-lg overflow-hidden">

            <div class="grid w-full space-y-2">

                <div class="flex place-items-center py-4 pl-10 text-gray-400 bg-white">
                    <div class="flex place-items-center space-x-6 w-[19rem]">
                        <input type="checkbox" class="w-5 h-5">
                        <div class="flex place-items-center space-x-2">
                            <p>STUDENT</p>
                            <BarsArrowDownIcon class="w-5 h-5"/>
                        </div>
                    </div>
                    <div class="w-[14rem]">RANK</div>
                    <div class="w-[10rem]">SUB RANK</div>
                    <div class="w-[10rem]">ATT.</div>
                    <div class="w-[10rem]">DAYS</div>
                    <div class="w-[17rem]">STATUS</div>
                    <div>ACTION</div>
                </div>

                <div class="h-[44rem] space-y-2 overflow-y-auto">
                    <div 
                        v-for="students, index in sortingFilter"
                        :key="index"
                        class="flex place-items-center py-3 pl-10 bg-white"
                    >
                        <div class="flex place-items-center space-x-4 w-[19rem]">
                            <input type="checkbox" class="w-5 h-5">
                            <div class="flex place-items-center space-x-2">
                                <img src="/illustrations/profilesvg.svg" alt="" class="w-6 h-6 rounded-full">
                            </div>
                            <p v-if="sortby == 'First name (asc)'">{{ students.firstname }} {{ students.lastname }}</p>
                            <p v-else-if="sortby == 'Last name'">{{ students.lastname }}, {{ students.firstname }}</p>
                            <p v-else>{{ students.firstname }} {{ students.lastname }}</p>

                        </div>
                        <div 
                            class="flex place-items-center space-x-2 w-[14rem] cursor-pointer"
                            @click="openFixRank(), getObjGrading(students)"
                        >
                            <img src="/grading/whitebelt.svg" alt="" v-if="students.rank == 'White Belt'">
                            <img src="/grading/yellowbelt.svg" alt="" v-else-if="students.rank == 'Yellow Belt'">
                            <span v-else class="w-6 h-6 rounded-sm bg-[#00CD7C]"></span>
                            <p>{{ students.rank }}</p>
                        </div>
                        <div 
                            class="grid space-y-1 w-[10rem] cursor-pointer"
                            @click="openUpdateSubRank(), getObjGrading(students), accessSubrankObj()"
                        >
                            <div class="flex space-x-2 place-items-center">
                                <p>{{ students.subrank }} / 5</p>
                                <CheckIcon
                                    :class="[students.subrank == 5 ? 'visible' : 'invisible']"
                                    class="w-4 h-4 font-semibold text-[#E2ECF5]"
                                />
                            </div>
                            <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
                                <div 
                                    class="h-2 bg-[#46A6FF] rounded-lg"
                                    :class="[
                                        students.subrank == 1 ? 'w-3' : '',
                                        students.subrank == 2 ? 'w-6' : '',
                                        students.subrank == 3 ? 'w-9' : '',
                                        students.subrank == 4 ? 'w-12' : '',
                                        students.subrank == 5 ? 'w-full' : ''
                                    ]"
                                >
                                </div>
                            </div>
                            <div class="h-1"></div>
                        </div>
                        <div class="grid space-y-1 w-[6rem]">
                            <div class="flex space-x-2 place-items-center">
                                <p>{{ students.att }} / 30</p>
                                <CheckIcon
                                    :class="[students.att == 30 ? 'visible' : 'invisible']"
                                    class="w-4 h-4 font-semibold text-[#2BD4B6]"
                                />
                            </div>
                            <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
                                <div 
                                    class="h-2 bg-[#2BD4B6] rounded-lg"
                                    :class="[
                                        students.att == 0 ? 'w-0' : '',
                                        students.att == 1 ? 'w-[2px]' : '',
                                        students.att == 2 ? 'w-[4px]' : '',
                                        students.att == 3 ? 'w-[6px]' : '',
                                        students.att == 4 ? 'w-[8px]' : '',
                                        students.att == 5 ? 'w-[10px]' : '',
                                        students.att == 6 ? 'w-[12px]' : '',
                                        students.att == 7 ? 'w-[14px]' : '',
                                        students.att == 8 ? 'w-[16px]' : '',
                                        students.att == 9 ? 'w-[18px]' : '',
                                        students.att == 10 ? 'w-[20px]' : '',
                                        students.att == 11 ? 'w-[22px]' : '',
                                        students.att == 12 ? 'w-[24px]' : '',
                                        students.att == 13 ? 'w-[26px]' : '',
                                        students.att == 14 ? 'w-[28px]' : '',
                                        students.att == 15 ? 'w-[30px]' : '',
                                        students.att == 16 ? 'w-[32px]' : '',
                                        students.att == 17 ? 'w-[34px]' : '',
                                        students.att == 18 ? 'w-[36px]' : '',
                                        students.att == 19 ? 'w-[38px]' : '',
                                        students.att == 20 ? 'w-[40px]' : '',
                                        students.att == 21 ? 'w-[42px]' : '',
                                        students.att == 22 ? 'w-[44px]' : '',
                                        students.att == 23 ? 'w-[46px]' : '',
                                        students.att == 24 ? 'w-[48px]' : '',
                                        students.att == 25 ? 'w-[50px]' : '',
                                        students.att == 26 ? 'w-[52px]' : '',
                                        students.att == 27 ? 'w-[54px]' : '',
                                        students.att == 28 ? 'w-[57px]' : '',
                                        students.att == 29 ? 'w-[62px]' : '',
                                        students.att == 30 ? 'w-full' : ''
                                    ]"
                                >
                                </div>
                            </div>
                            <div class="h-1"></div>
                        </div>
                        <div class="w-[4rem] text-gray-400">and</div>
                        <div class="grid space-y-1 w-[10rem]">
                            <div class="flex space-x-2 place-items-center">
                                <p>{{ students.days }} / 30</p>
                                <CheckIcon
                                    :class="[students.days == 30 ? 'visible' : 'invisible']"
                                    class="w-4 h-4 font-semibold text-[#52EE75]"
                                />
                            </div>
                            <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
                                <div 
                                    class="h-2 bg-[#52EE75] rounded-lg"
                                    :class="[
                                        students.days == 0 ? 'w-0' : '',
                                        students.days == 1 ? 'w-[2px]' : '',
                                        students.days == 2 ? 'w-[4px]' : '',
                                        students.days == 3 ? 'w-[6px]' : '',
                                        students.days == 4 ? 'w-[8px]' : '',
                                        students.days == 5 ? 'w-[10px]' : '',
                                        students.days == 6 ? 'w-[12px]' : '',
                                        students.days == 7 ? 'w-[14px]' : '',
                                        students.days == 8 ? 'w-[16px]' : '',
                                        students.days == 9 ? 'w-[18px]' : '',
                                        students.days == 10 ? 'w-[20px]' : '',
                                        students.days == 11 ? 'w-[22px]' : '',
                                        students.days == 12 ? 'w-[24px]' : '',
                                        students.days == 13 ? 'w-[26px]' : '',
                                        students.days == 14 ? 'w-[28px]' : '',
                                        students.days == 15 ? 'w-[30px]' : '',
                                        students.days == 16 ? 'w-[32px]' : '',
                                        students.days == 17 ? 'w-[34px]' : '',
                                        students.days == 18 ? 'w-[36px]' : '',
                                        students.days == 19 ? 'w-[38px]' : '',
                                        students.days == 20 ? 'w-[40px]' : '',
                                        students.days == 21 ? 'w-[42px]' : '',
                                        students.days == 22 ? 'w-[44px]' : '',
                                        students.days == 23 ? 'w-[46px]' : '',
                                        students.days == 24 ? 'w-[48px]' : '',
                                        students.days == 25 ? 'w-[50px]' : '',
                                        students.days == 26 ? 'w-[52px]' : '',
                                        students.days == 27 ? 'w-[54px]' : '',
                                        students.days == 28 ? 'w-[57px]' : '',
                                        students.days == 29 ? 'w-[62px]' : '',
                                        students.days == 30 ? 'w-full' : ''
                                    ]"
                                >
                                </div>
                                <div class="h-1"></div>
                            </div>
                        </div>
                        <div class="flex place-items-center w-[14rem]">
                            <div class="flex space-x-4 place-items-center">
                                <span 
                                    class="w-2 h-2 rounded-full"
                                    :class="[students.status == 'Requirements Not Met' ? 'bg-[#EA5252]' : 'bg-[#61E866]']"
                                ></span>
                                <p>{{ students.status }}</p>
                            </div>
                        </div>
                        <div class="grid place-items-center w-[10rem]">
                            <div 
                                v-if="students.status == 'Requirements Not Met'"
                                class="rounded-md border border-[#5BC673] px-3 py-2 cursor-pointer"
                                @click="getObjGrading(students), updateGradingStatus('Candidate for Promotion')"
                            >
                                <p class="text-base text-[#5BC673]">Candidate</p>
                            </div>
                            <div 
                                v-else
                                class="rounded-md border bg-[#5BC673] px-4 py-2 cursor-pointer"
                            >
                                <p class="text-base text-white">Promote</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>