<script setup lang="ts">

    const inMessage = ref('')
    const inputEmpty = ref(false)
    const isInput = ref(false)
    const needInput = ref(false)

    const clearInput = () => {
        inMessage.value = ''
        isInput.value = false
    }

    const submitMsg = () => {
        if(inMessage.value == ''){
            return inputEmpty.value = true
        }
        isInput.value = !isInput.value
    }

    const returnNormal = () => {
        return inputEmpty.value = false
    }

</script>

<template>
    <div class="py-14 w-full">
        <div class="w-full flex space-x-6 place-items-start">
            <img src="/timetable/message_icon.svg" alt="" class="mt-2">
            <div class="grid space-y-6">

                <div class="grid space-y-4">
                    <p class="text-2xl">Custom Message</p>
                    <p class="text-sm text-gray-500">This pop message will appear once the checks in above the limited allowable checkins</p>
                </div>

                <div class="grid space-y-6">
                    <div>
                        <textarea
                            type="text"
                            class="w-[41rem] h-[15rem] rounded-lg border border-gray-300 px-6 py-4 text-[16px] resize-none"
                            :class="[isInput ? 'bg-white' : '',
                                    inputEmpty ? 'border-[#E73C3C] border-2' : 'border-gray-300']"
                            v-model="inMessage"
                            :disabled="isInput"
                            required
                            @click="returnNormal"
                        ></textarea>
                        <p 
                            v-if="inputEmpty"
                            class="text-[#E73C3C] text-[16px]"
                        >
                            Should have a custom message
                        </p>
                    </div>
                    <div class="w-full relative">
                        <button
                            class="text-[#5081F0] border rounded-lg border-[#5081F0] px-8 py-2 text-lg"
                            @click="clearInput"
                        >
                            Clear Text
                        </button>
                        <button
                            class="border rounded-lg border-[#5081F0] px-8 py-2 text-lg absolute right-0"
                            :class="[isInput ? 'text-[#CAD7E8] border-[#CAD7E8]' : 'text-[#5081F0]']"
                            :disabled="isInput"
                            @click="submitMsg"
                        >
                            Save and Publish
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>