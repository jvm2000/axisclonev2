<script setup lang="ts">

    const inMessage = ref('')
    const isInput = ref(false)
    const needInput = ref(false)

    const clearInput = () => {
        inMessage.value = ''
    }

    const submitMsg = () => {
        if(inMessage.value == ''){

        }
        isInput.value = !isInput.value
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
                    <textarea
                        type="text"
                        class="w-[41rem] h-[15rem] rounded-lg border border-gray-300 px-6 py-4 text-[16px] resize-none"
                        :class="[isInput ? 'bg-white' : '']"
                        v-model="inMessage"
                        :disabled="isInput"
                        required
                    ></textarea>
                    <div class="w-full relative">
                        <button
                            class="text-[#5081F0] border rounded-lg border-[#5081F0] px-8 py-2 text-lg"
                            :class="[isInput ? 'text-[#CAD7E8] border-[#CAD7E8]' : 'text-[#5081F0]']"
                            :disabled="isInput"
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