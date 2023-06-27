<script setup lang="ts">
  import { MagnifyingGlassIcon, FunnelIcon, BarsArrowDownIcon, CheckIcon } from '@heroicons/vue/24/outline'

  const subranks = reactive([
    {id: 1, firstname: 'John Anthony', lastname: 'Gabutan', rank: 'White Belt', subrank: 'stripe 2', nsubrank: 'stripe 3', att: 10, days: 12, status: 'Requirements Not Met'},
    {id: 2, firstname: 'John Bayotas', lastname: 'Migo', rank: 'Green Belt', subrank: 'stripe 1', nsubrank: 'stripe 4', att: 10, days: 20, status: 'Requirements Not Met'},
    {id: 3, firstname: 'Juan Vicente', lastname: 'Miñoza', rank: 'Yellow Belt', subrank: 'stripe 1', nsubrank: 'stripe 2', att: 3, days: 10, status: 'Candidate for Promotion'},
    {id: 4, firstname: 'Adrian Paul', lastname: 'Casserva', rank: 'White Belt', subrank: 'stripe 4', nsubrank: 'stripe 1', att: 4, days: 10, status: 'Requirements Not Met'},
    {id: 5, firstname: 'Raidel', lastname: 'Ducay', rank: 'Green Belt', subrank: 'stripe 3', nsubrank: 'stripe 4',att: 16, days: 14, status: 'Requirements Not Met'},
    {id: 6, firstname: 'Nathaniel', lastname: 'Tiempo', rank: 'Yellow Belt', subrank: 'stripe 5', nsubrank: 'stripe 2', att: 20, days: 24, status: 'Requirements Not Met'},
    {id: 7, firstname: 'Sanny', lastname: 'Malubay', rank: 'White Belt', subrank: 'stripe 3', nsubrank: 'stripe 1', att: 10, days: 10, status: 'Candidate for Promotion'},
    {id: 8, firstname: 'John Kevin', lastname: 'Cadungog', rank: 'Green Belt', subrank: 'stripe 2', nsubrank: 'stripe 1', att: 12, days: 12, status: 'Requirements Not Met'},
    {id: 9, firstname: 'Donald Jr.', lastname: 'Roda', rank: 'White Belt', subrank: 'stripe 1', nsubrank: 'stripe 4', att: 15, days: 10, status: 'Requirements Not Met'},
    {id: 10, firstname: 'Mityak', lastname: 'Vasaya', rank: 'Yellow Belt', subrank: 'stripe 1', nsubrank: 'stripe 3', att: 16, days: 22, status: 'Requirements Not Met'},
    {id: 11, firstname: 'Kent', lastname: 'Armelia', rank: 'Green Belt', subrank: 'stripe 4', nsubrank: 'stripe 1', att: 20, days: 30, status: 'Requirements Not Met'},
    {id: 12, firstname: 'Chester Ace', lastname: 'Saagundo', rank: 'White Belt', subrank: 'stripe 2', nsubrank: 'stripe 2', att: 10, days: 20, status: 'Requirements Not Met'},
    {id: 13, firstname: 'Charles John', lastname: 'Canete', rank: 'Green Belt', subrank: 'stripe 1', nsubrank: 'stripe 2', att: 2, days: 14, status: 'Candidate for Promotion'},
    {id: 14, firstname: 'James', lastname: 'Kaiser', rank: 'White Belt', subrank: 'stripe 3', nsubrank: 'stripe 1', att: 3, days: 16, status: 'Candidate for Promotion'},
    {id: 15, firstname: 'Cathlyn Mae', lastname: 'Yap', rank: 'Green Belt', subrank: 'stripe 3', nsubrank: 'stripe 4', att: 4, days: 22, status: 'Requirements Not Met'},
    {id: 16, firstname: 'Christus', lastname: 'Damolo', rank: 'Green Belt', subrank: 'stripe 2', nsubrank: 'stripe 3', att: 5, days: 28, status: 'Candidate for Promotion'},
    {id: 17, firstname: 'Alfredo', lastname: 'Wayne', rank: 'Yellow Belt', subrank: 'stripe 4', nsubrank: 'stripe 2', att: 10, days: 30, status: 'Candidate for Promotion'},
    {id: 18, firstname: 'Trisha Ann', lastname: 'Cempron', rank: 'White Belt', subrank: 'stripe 1', nsubrank: 'stripe 1', att: 12, days: 15, status: 'Requirements Not Met'},
    {id: 19, firstname: 'Prince', lastname: 'Gimena', rank: 'Green Belt', subrank: 'stripe 3', nsubrank: 'stripe 3', att: 12, days: 10, status: 'Requirements Not Met'},
    {id: 20, firstname: 'Joross Daniel', lastname: 'Miñoza', rank: 'Yellow Belt', subrank: 'stripe 2', nsubrank: 'stripe 1', att: 10, days: 28, status: 'Requirements Not Met'}
   ])

    const { subrank_sort, subrank_sortby, getObjSubrankSort } = useGradingFunctions()
    const isOpenFiltered = ref(false)
    const openFilter = () => {
        isOpenFiltered.value = !isOpenFiltered.value
    }

    const sortingSubrankFilter = computed(() => {

        if(subrank_sortby.value == 'First name (asc)'){
            return [...subranks].sort((a,b) => {
                return a.firstname.localeCompare(b.firstname)
            })
        }
        if(subrank_sortby.value == 'Last name'){
            return [...subranks].sort((a,b) => {
                return a.lastname.localeCompare(b.lastname)
            })
        }
        if(subrank_sortby.value == 'Rank'){
            return [...subranks].sort((a,b) => {
                return a.rank.localeCompare(b.rank)
            })
        }
        if(subrank_sortby.value == 'Subrank'){
            return [...subranks].sort((a,b) => {
                return a.subrank.localeCompare(b.subrank)

            })
        }
        if(subrank_sortby.value == 'Next Subrank'){
            return [...subranks].sort((a,b) => {
              return a.nsubrank.localeCompare(b.nsubrank)
            })
        }
        if(subrank_sortby.value == 'Attendance'){
            return [...subranks].sort((a,b) => {
                return a.att - b.att
            })
        }
        if(subrank_sortby.value == 'Days'){
            return [...subranks].sort((a,b) => {
                return a.days - b.days
            })
        }
        if(subrank_sortby.value == 'Status'){
            return [...subranks].sort((a,b) => {
                return a.status.localeCompare(b.status)
            })
        }
        else{}


    })

</script>

<template>
  <div class="py-8 w-full">

    <div class="w-full flex place-items-center relative px-4">

      <p class="text-lg">Dickson Inc-NEW</p>
      <div class="flex place-items-center space-x-6 absolute right-0">
        <div class="flex place-items-center h-[2.7rem] w-full bg-[#FBFCFE] border border-gray-400 rounded-lg px-10 space-x-4">
          <input 
              type="text" 
              class="border-none bg-[#FBFCFE] text-[16px] ring-0 appearance-none outline-none w-[16rem]" placeholder="Search name"
              v-model="searchQuery"
          >
        </div>
        <div class="grid">
          <div class="absoloute space-y-4 w-[9rem]">

            <div 
              class="flex place-items-center space-x-2 w-full cursor-pointer"
              @click="openFilter"
            >
              <BarsArrowDownIcon class="w-4 h-4"/>
              <p class="text-[16px]">{{ subrank_sortby }}</p>
            </div>

            <div 
                v-if="isOpenFiltered"
                class="grid w-[17rem] bg-white rounded-md h-auto absolute right-20 py-1"
            >
                <div class="w-full px-6 py-2 flex place-items-center text-base text-[#9FB5D1]">
                    <p>Sort by</p>
                </div>
                <div 
                    v-for="subrank_sorts, index in subrank_sort"
                    :key="index"
                    class="relative w-full py-3 hover:bg-[#EAF3F9] flex place-items-center cursor-pointer"
                    @click="getObjSubrankSort(subrank_sorts), openFilter()"
                >
                    <p class="text-base ml-6">{{ subrank_sorts.menu }}</p>
                    <CheckIcon 
                        class="w-5 h-5 text-[#5081F0] absolute right-6"
                        :class="[subrank_sorts.menu == subrank_sortby ? 'visible' : 'invisible']"
                    />
                </div>
            </div>
          </div>
        </div>
        <div class="flex place-items-center space-x-2">
          <FunnelIcon class="w-4 h-4"/>
          <p class="text-[16px]">Filter</p>
        </div>
        
      </div>

    </div>

    <div 
      v-if="!subranks.length"
      class="w-full grid place-items-center space-y-8 pt-20"
    >
      <img src="/grading/subrank.svg" alt="">
      <p class="text-2xl">You have not added subranks yet.</p>
    </div>
    <div
      v-else
      class="w-full place-items-center pt-10 text-sm text-[#9FB5D1] flex pl-8 py-3"
    >
      <div class="flex place-items-center space-x-8">
        <input 
          type="checkbox"
          class="w-4 h-4"
        >
        <p>STUDENT</p>
      </div>
      <p class="ml-[10rem]">RANK</p>
      <p class="ml-[8rem]">SUBRANK</p>
      <p class="ml-[6rem]">NEXT SUBRANK</p>
      <p class="ml-[6rem]">ATT.</p>
      <p class="ml-[5rem]">DAYS</p>
      <p class="ml-[6rem]">STATUS</p>
      <p class="ml-[13rem]">ACTION</p>
    </div>

    <div class="grid w-full space-y-2">
      <div 
        v-for="subranks_items, index in sortingSubrankFilter"
        :key="index"
        class="w-full py-3 bg-white place-items-center text-sm flex rounded-md"
      >
        <div class="flex place-items-center space-x-4 pl-8 w-[19.5rem]">
          <input 
            type="checkbox"
            class="w-4 h-4"
          >
          <img src="/illustrations/profilesvg.svg" alt="" class="w-6 h-6 rounded-full">
          <p>{{ subranks_items.firstname }} {{ subranks_items.lastname }}</p>
        </div>
        <div class="w-[10rem] flex">
          <span
            v-if="subranks_items.rank == 'Green Belt'"
            class="w-6 h-6 rounded-sm bg-[#00CD7C]"
          ></span>
          <span
            v-if="subranks_items.rank == 'White Belt'"
            class="w-6 h-6 rounded-sm border border-black bg-white"
          ></span>
          <span
            v-if="subranks_items.rank == 'Yellow Belt'"
            class="w-6 h-6 rounded-sm bg-[#FFDF34]"
          ></span>
        </div>
        <div class="w-[10rem] flex">
          <p>{{ subranks_items.subrank }}</p>
        </div>
        <div class="w-[12.5rem] flex">
          <p>{{ subranks_items.nsubrank }}</p>
        </div>
        <div class="grid space-y-1 w-[7rem]">
          <div class="flex space-x-2 place-items-center">
              <p>{{ subranks_items.att }} / 30</p>
              <CheckIcon
                  :class="[subranks_items.att == 30 ? 'visible' : 'invisible']"
                  class="w-4 h-4 font-semibold text-[#2BD4B6]"
              />
          </div>
          <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
            <div 
                class="h-2 bg-[#52EE75] rounded-lg"
                :class="[
                    subranks_items.att == 0 ? 'w-0' : '',
                    subranks_items.att == 1 ? 'w-[2px]' : '',
                    subranks_items.att == 2 ? 'w-[4px]' : '',
                    subranks_items.att == 3 ? 'w-[6px]' : '',
                    subranks_items.att == 4 ? 'w-[8px]' : '',
                    subranks_items.att == 5 ? 'w-[10px]' : '',
                    subranks_items.att == 6 ? 'w-[12px]' : '',
                    subranks_items.att == 7 ? 'w-[14px]' : '',
                    subranks_items.att == 8 ? 'w-[16px]' : '',
                    subranks_items.att == 9 ? 'w-[18px]' : '',
                    subranks_items.att == 10 ? 'w-[20px]' : '',
                    subranks_items.att == 11 ? 'w-[22px]' : '',
                    subranks_items.att == 12 ? 'w-[24px]' : '',
                    subranks_items.att == 13 ? 'w-[26px]' : '',
                    subranks_items.att == 14 ? 'w-[28px]' : '',
                    subranks_items.att == 15 ? 'w-[30px]' : '',
                    subranks_items.att == 16 ? 'w-[32px]' : '',
                    subranks_items.att == 17 ? 'w-[34px]' : '',
                    subranks_items.att == 18 ? 'w-[36px]' : '',
                    subranks_items.att == 19 ? 'w-[38px]' : '',
                    subranks_items.att == 20 ? 'w-[40px]' : '',
                    subranks_items.att == 21 ? 'w-[42px]' : '',
                    subranks_items.att == 22 ? 'w-[44px]' : '',
                    subranks_items.att == 23 ? 'w-[46px]' : '',
                    subranks_items.att == 24 ? 'w-[48px]' : '',
                    subranks_items.att == 25 ? 'w-[50px]' : '',
                    subranks_items.att == 26 ? 'w-[52px]' : '',
                    subranks_items.att == 27 ? 'w-[54px]' : '',
                    subranks_items.att == 28 ? 'w-[57px]' : '',
                    subranks_items.att == 29 ? 'w-[62px]' : '',
                    subranks_items.att == 30 ? 'w-full' : ''
                ]"
            >
            </div>
          </div>
        </div>
        <div class="grid space-y-1 w-[8rem]">
          <div class="flex space-x-2 place-items-center">
              <p>{{ subranks_items.days }} / 30</p>
              <CheckIcon
                  :class="[subranks_items.days == 30 ? 'visible' : 'invisible']"
                  class="w-4 h-4 font-semibold text-[#2BD4B6]"
              />
          </div>
          <div class="w-16 h-2 rounded-full bg-[#E2ECF5]">
            <div 
                class="h-2 bg-[#52EE75] rounded-lg"
                :class="[
                    subranks_items.days == 0 ? 'w-0' : '',
                    subranks_items.days == 1 ? 'w-[2px]' : '',
                    subranks_items.days == 2 ? 'w-[4px]' : '',
                    subranks_items.days == 3 ? 'w-[6px]' : '',
                    subranks_items.days == 4 ? 'w-[8px]' : '',
                    subranks_items.days == 5 ? 'w-[10px]' : '',
                    subranks_items.days == 6 ? 'w-[12px]' : '',
                    subranks_items.days == 7 ? 'w-[14px]' : '',
                    subranks_items.days == 8 ? 'w-[16px]' : '',
                    subranks_items.days == 9 ? 'w-[18px]' : '',
                    subranks_items.days == 10 ? 'w-[20px]' : '',
                    subranks_items.days == 11 ? 'w-[22px]' : '',
                    subranks_items.days == 12 ? 'w-[24px]' : '',
                    subranks_items.days == 13 ? 'w-[26px]' : '',
                    subranks_items.days == 14 ? 'w-[28px]' : '',
                    subranks_items.days == 15 ? 'w-[30px]' : '',
                    subranks_items.days == 16 ? 'w-[32px]' : '',
                    subranks_items.days == 17 ? 'w-[34px]' : '',
                    subranks_items.days == 18 ? 'w-[36px]' : '',
                    subranks_items.days == 19 ? 'w-[38px]' : '',
                    subranks_items.days == 20 ? 'w-[40px]' : '',
                    subranks_items.days == 21 ? 'w-[42px]' : '',
                    subranks_items.days == 22 ? 'w-[44px]' : '',
                    subranks_items.days == 23 ? 'w-[46px]' : '',
                    subranks_items.days == 24 ? 'w-[48px]' : '',
                    subranks_items.days == 25 ? 'w-[50px]' : '',
                    subranks_items.days == 26 ? 'w-[52px]' : '',
                    subranks_items.days == 27 ? 'w-[54px]' : '',
                    subranks_items.days == 28 ? 'w-[57px]' : '',
                    subranks_items.days == 29 ? 'w-[62px]' : '',
                    subranks_items.days == 30 ? 'w-full' : ''
                ]"
            >
            </div>
          </div>
        </div>
        <div class="flex place-items-center space-x-2 w-[15.5rem]">
          <span 
            v-if="subranks_items.status == 'Requirements Not Met'"
            class="w-2 h-2 bg-red-500 rounded-full"
          ></span>
          <span 
            v-else
            class="w-2 h-2 bg-[#52EE75] rounded-full"
          ></span>
          <p>{{ subranks_items.status }}</p>
        </div>
        <div class="bg-[#5BC773] px-6 py-2 text-white text-[16px] rounded-md">
          <p>Pass</p>
        </div>
      </div>
    </div>

  </div>
</template>