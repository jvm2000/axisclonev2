<template>
    <!-- Background Image -->
    <div class="h-screen bg-no-repeat bg-cover grid place-items-center"  style="background-image: url('/illustrations/vector-bg.png')">
        <!-- padding -->
        <div class="bg-white h-[30rem] w-[24rem] sm:w-[30rem] max-w-sm rounded-lg shadow-xl">
        <!-- container -->
            <div class="grid justify-center pb-16">
                <img src="/illustrations/logo-axis.svg" alt="" class="pt-10 h-auto w-[10rem] sm:w-[12rem]">
            </div>
            <div class="ml-7 flex place-items-center">
                <UserIcon class="absolute ml-4 w-4 h-4 opacity-30"/>
                <input v-model="username" type="text" class="w-11/12 rounded-lg border-2 h-[3rem] pl-14 text-[14px]" placeholder="Username or email"/>
            </div>
            <div class="ml-7 flex place-items-center pt-6 pb-4">
                <LockClosedIcon class="absolute ml-4 w-4 h-4 opacity-30"/>
                <input v-model="password" :type="[!showPass ? 'text' : 'password']" class="w-11/12 rounded-lg border-2 h-[3rem] pl-14 text-[14px]" placeholder="Password"/>
                <EyeSlashIcon class="absolute ml-[18rem] sm:ml-[18rem] w-6 h-6 opacity-30" v-if="showPass"
                                @click="pressedShowPass"
                />
                <EyeIcon class="absolute ml-[18rem] sm:ml-[18rem] w-6 h-6 opacity-30" v-else
                                @click="pressedUnshowPass"
                />
            </div>
            <div class="ml-8 text-blue-800 text-[12px]">
                <a href="#" @click="routeForgotPassForm">Forgot Password?</a>
            </div>
            <div class="ml-7 flex place-items-center pt-6">
                <button class="w-11/12 rounded-lg bg-blue-900 h-[4rem] text-white text-[16px]"
                @click="pressedLogin"
                >Log In</button>
            </div>
            <div class="flex justify-center pt-6 pb-4 space-x-2 text-[14px]">
                <p>New to Axis? </p>
                <a href="https://youtu.be/dQw4w9WgXcQ" class="text-blue-800"
                >Sign Up!</a>
            </div>
            <div class="flex">
                <button 
                    class="text-[10px] font-semibold rounded-full px-4 py-1"
                    @click="displayCharlie"
                >
                    Charlie!!
                </button>
                <button 
                    class="text-[10px] font-semibold rounded-full px-4 py-1"
                    @click="displayChou"
                >
                    CHOU
                </button>
            </div>
            <div>{{ charliename }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { UserIcon } from '@heroicons/vue/24/outline'
    import { LockClosedIcon } from '@heroicons/vue/24/outline'
    import { EyeIcon } from '@heroicons/vue/24/outline'
    import { EyeSlashIcon } from '@heroicons/vue/24/outline'

    const router = useRouter()

    const { charliename, displayCharlie, displayChou } = useCharlie()

    const username = ref('')
    const password = ref('')

    const showPass = ref(true)

    const pressedShowPass = () => {
        showPass.value = false
    }

    const pressedUnshowPass = () => {
        showPass.value = true
    }

    const pressedLogin = () => {
        if(username.value == "user" && password.value == "pass"){
            router.push('/home/homeForm')
        }
    }

    const routeForgotPassForm = () => {
        router.push('/login/forgotPassForm')
    }
</script>