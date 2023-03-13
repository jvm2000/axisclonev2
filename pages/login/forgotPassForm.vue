<template>
    <!-- Background Image -->
    <div class="h-screen bg-no-repeat bg-cover grid place-items-center"  style="background-image: url('/illustrations/vector-bg.png')">
        <!-- padding -->
        <div class="bg-white h-[30rem] w-[24rem] sm:w-[30rem] max-w-sm rounded-lg shadow-xl">
            <!-- container -->
            <div class="grid justify-center pb-8">
                <img src="/illustrations/logo-axis.svg" alt="" class="pt-10 h-auto w-[10rem] sm:w-[12rem]">
            </div>
            <div class="grid justify-center pb-1">
                <p class="text-[18px] font-semibold text-gray-900">Reset your password</p>
            </div>
            <div class="grid justify-center items-center">
                <p class="text-[13px] text-gray-400 text-center">
                    Please enter your new password below
                </p>
            </div>
            <div class="ml-7 flex place-items-center pt-8">
                <LockClosedIcon class="absolute ml-4 w-4 h-4 opacity-30"/>
                <input :type="[!showPass ? 'text' : 'password']" class="w-11/12 rounded-lg border-2 h-[3rem] pl-14 text-[14px]" placeholder="Enter New Password"/>
                <EyeSlashIcon class="absolute ml-[12rem] sm:ml-[18rem] w-4 h-4 opacity-30" v-if="showPass"
                                @click="pressedShowPass"
                />
                <EyeIcon class="absolute ml-[12rem] sm:ml-[18rem] w-4 h-4 opacity-30" v-else
                                @click="pressedUnshowPass"
                />
            </div>
            <div class="ml-7 flex place-items-center pt-4 pb-4">
                <LockClosedIcon class="absolute ml-4 w-4 h-4 opacity-30"/>
                <input :type="[!showConfirmPass ? 'text' : 'password']" class="w-11/12 rounded-lg border-2 h-[3rem] pl-14 text-[14px]" placeholder="Confirm Password"/>
                <EyeSlashIcon class="absolute ml-[12rem] sm:ml-[18rem] w-4 h-4 opacity-30" v-if="showConfirmPass"
                                @click="pressedConfirmShowPass"
                />
                <EyeIcon class="absolute ml-[12rem] sm:ml-[18rem] w-4 h-4 opacity-30" v-else
                                @click="pressedConfirmUnshowPass"
                />
            </div>
            <div class="ml-7 flex place-items-center pt-2">
                <button class="w-11/12 rounded-lg bg-blue-900 h-[3rem] text-white text-[16px]" @click="routerLoginForm">Save Password</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/24/outline'
import { EyeSlashIcon } from '@heroicons/vue/24/outline'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

const showPass = ref(true)
const showConfirmPass = ref(true)

const router = useRouter()

const pressedShowPass = () => {
    showPass.value = false
}

const pressedUnshowPass = () => {
    showPass.value = true
}
const pressedConfirmShowPass = () => {
    showConfirmPass.value = false
}

const pressedConfirmUnshowPass = () => {
    showConfirmPass.value = true
}

const routerLoginForm = () => {
    router.push('/login/loginForm')
}

</script>