<script setup lang="ts">
    import { ChevronRightIcon, PlusIcon, UserPlusIcon, TrashIcon } from '@heroicons/vue/24/outline'
    import { ref, watch } from 'vue';

    const isBeltRemove = ref(false)
    const removeBelt = () => {
        isBeltRemove.value = true
    }

    const { subR1, subR2, subR3, subR4, subD1, subD2, subD3, subD4, totalDays, totalRanks } = useBeltBlueYellow()

</script>

<template>
    <div 
        class="flex space-x-4"
        :class="[isBeltRemove ? 'hidden' : '']"
    >
        <div class="h-auto w-auto bg-white px-2 py-2 space-y-4 space-x-16 flex flex-col place-items-center rounded-lg">
            <div class="flex space-x-16 w-full border-b border-gray-400 py-4 px-4">
                <div class="flex flex-row place-items-center space-x-4">
                    <img src="/icons/blueyellowbelt.svg" alt="">    
                    <p class="text-[18px]">Blue Yellow Belt</p>
                </div>
                <div class="flex flex-row text-gray-500 space-x-4 place-items-center">
                    <div class="flex flex-col space-y-2">
                        <div class="invisible h-6"></div>
                        <p class="text-[14px]">TOTAL</p>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="text-[10px]">SESSIONS</p>
                        <input type="text" class="border border-gray-400 rounded-sm w-[3rem] h-[2rem] px-2" v-model="totalRanks" disabled>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <div class="invisible h-4"></div>
                        <select type="text" class="border border-gray-400 rounded-sm w-[4rem] h-[2rem] px-1 text-gray-500 text-[14px]">
                            <option value="">And</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="text-[10px]">DAYS</p>
                        <input type="text" class="border border-gray-400 rounded-sm w-[3rem] h-[2rem] px-2" v-model="totalDays" disabled>
                    </div>
                </div>
            </div>
            <div class="w-full flex text-[14px] pb-8">
                <div class="pl-10 flex flex-col space-y-6">
                    <p class="text-[#9FB5D1]">SUB RANKS</p>
                    <p>Sub Rank Dummy 001</p>
                    <p>Sub Rank Dummy 001</p>
                    <p>Sub Rank Dummy 001</p>
                    <p>Sub Rank Dummy 001</p>
                </div>
                <div class="pl-28 flex flex-row">
                    <div class="flex flex-col space-y-[1.30rem]">
                        <p class="text-[#9FB5D1]">SESSIONS</p>
                        <div class="flex space-x-4 place-items-center">
                            <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subR1">
                            <select type="text" class="border border-gray-400 rounded-sm w-[4rem] h-[1.5rem] px-1">
                                <option value="">And</option>
                            </select>
                        </div>
                        <div class="flex space-x-4 place-items-center">
                            <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subR2">
                            <select type="text" class="border border-gray-400 rounded-sm w-[4rem] h-[1.5rem] px-1">
                                <option value="">And</option>
                            </select>
                        </div>
                        <div class="flex space-x-4 place-items-center">
                            <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subR3">
                            <select type="text" class="border border-gray-400 rounded-sm w-[4rem] h-[1.5rem] px-1">
                                <option value="">And</option>
                            </select>
                        </div>
                        <div class="flex space-x-4 place-items-center">
                            <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subR4">
                            <select type="text" class="border border-gray-400 rounded-sm w-[4rem] h-[1.5rem] px-1">
                                <option value="">And</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="pl-4 flex flex-col space-y-[1.3rem]">
                    <p class="text-[#9FB5D1]">DAYS</p>
                    <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subD1">
                    <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subD2">
                    <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subD3">
                    <input type="number" class="border border-gray-400 rounded-sm w-[3rem] h-[1.5rem] px-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" v-model.number="subD4">
                </div>
                <div class="pl-20 flex flex-col place-items-end space-y-[1.7rem]">
                    <p class="text-[#9FB5D1]">ACTION</p>
                    <TrashIcon class="w-4 h-4"/>
                    <TrashIcon class="w-4 h-4"/>
                    <TrashIcon class="w-4 h-4"/>
                    <TrashIcon class="w-4 h-4"/>
                </div>
            </div>
        </div>
        <div>
            <img src="/icons/trash.svg" alt="" class="pt-4 cursor-pointer" @click="removeBelt">
        </div>
    </div>
</template>