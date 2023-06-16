<script setup lang=ts>

  import { SquaresPlusIcon } from '@heroicons/vue/24/outline'

  import { useRoute } from 'vue-router';

  const isDashboardOpen = ref(false)
  const isUserManagementOpen = ref(false)
  const isSchoolSettingOpen = ref(false)
  const isMembershipOpen = ref(false)
  const isProgramsOpen = ref(false)
  const isTimetableOpen = ref(false)
  const isGradingOpen = ref(false)

  const isLeadsOpen = ref(false)
  const isStudentOpen = ref(false)
  const isTimetablesOpen = ref(false)
  const isClassesOpen = ref(false)
  const isRanksOpen = ref(false)

  const router = useRouter()
  const route = useRoute()

  const openDashboard = () => {
    router.push('/home/homeForm')
  }

  const openPrograms = () => {
    router.push('/programs/programsDashboard')
  }

  const openUserManagement = () => {
    isUserManagementOpen.value = !isUserManagementOpen.value
  }

  const openSchoolSetting = () => {
    isSchoolSettingOpen.value = !isSchoolSettingOpen.value
  }

  const openMembership = () => {
    isMembershipOpen.value = !isMembershipOpen.value
  }

  const openTimetable = () => {
    isTimetableOpen.value = !isTimetableOpen.value
  }

  const openGrading = () => {
    isGradingOpen.value = !isGradingOpen.value
  }

  const openLeads = () => {
    router.push('/lead/leadsDashboard')
  }

  const openStudents = () => {
    router.push('/stud/studsDashboard')
  }

  const openTimetables = () => {
    router.push('/timetable/timeTableDashboard')
  }

  const openClasses = () => {
    router.push('/classes/classesDashboard')
  }

  const openRanks = () => {
    router.push('/grading/gradingDashboard')
  }

</script>

<template>
    <div class="w-[20rem] h-screen p-4 bg-[#334D9B] text-white z-[30] hidden sm:block px-1">

        <div class="pt-2 grid place-items-center w-full h-auto space-y-8">

          <img src="/menubar/logoaxis.svg" alt="">

          <div class="grid w-full space-y-1 px-1">
            <div class="w-full grid space-y-2 cursor-pointer">

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                :class="[route.path == '/home/homeForm' ? 'bg-[#1E2A80]' : '']"
                @click="openDashboard"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img src="/menubar/dashboard.svg">
                  <p class="text-white text-base">Dashboard</p>
                </div>
              </div>

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                @click="openUserManagement"
              >
                <div class="pl-6 flex space-x-4 place-items-center]">
                  <img src="/menubar/usermanagement.svg">
                  <p class="text-white text-base">User Management</p>
                </div>
                <div class="absolute right-5">
                  <img
                    v-if="!isUserManagementOpen"
                    src="/menubar/menunotclick.svg" 
                    alt=""
                  >
                  <img
                    v-else
                    src="/menubar/menuclick.svg" 
                    alt=""
                  >
                </div>
              </div>
              <div 
                v-if="isUserManagementOpen"
                class="grid w-full space-y-1"
              >
                <div 
                  class="w-full rounded-md py-2 hover:bg-[#1E2A80]"
                  :class="[route.path == '/lead/leadsDashboard' ? 'bg-[#1E2A80]' : '']"
                  @click="openLeads"
                >
                  <p class="text-base text-white ml-[5rem]">Leads</p>
                </div>
                <div
                  class="w-full rounded-md py-2 hover:bg-[#1E2A80]"
                  :class="[route.path == '/stud/studsDashboard' ? 'bg-[#1E2A80]' : '']"
                  @click="openStudents"
                >
                  <p class="text-base text-white ml-[5rem]">Students</p>
                </div>
                <div class="w-full rounded-md py-2 hover:bg-[#1E2A80]">
                  <p class="text-base text-white ml-[5rem]">Instructors</p>
                </div>
              </div>

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                @click="openSchoolSetting"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img src="/menubar/schoolsetting.svg">
                  <p class="text-white text-base">School Setting</p>
                </div>
                <div class="absolute right-5">
                  <img
                    v-if="!isSchoolSettingOpen"
                    src="/menubar/menunotclick.svg" 
                    alt=""
                  >
                  <img
                    v-else
                    src="/menubar/menuclick.svg" 
                    alt=""
                  >
                </div>
              </div>
              <div 
                v-if="isSchoolSettingOpen"
                class="grid w-full space-y-1"
              >
                <div class="w-full rounded-md py-2 hover:bg-[#1E2A80]">
                  <p class="text-base text-white ml-[5rem]">Sample</p>
                </div>
              </div>

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                @click="openMembership"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img src="/menubar/membership.svg">
                  <p class="text-white text-base">Membership</p>
                </div>
                <div class="absolute right-5">
                  <img
                    v-if="!isMembershipOpen"
                    src="/menubar/menunotclick.svg" 
                    alt=""
                  >
                  <img
                    v-else
                    src="/menubar/menuclick.svg" 
                    alt=""
                  >
                </div>
              </div>
              <div 
                v-if="isMembershipOpen"
                class="grid w-full space-y-1"
              >
                <div class="w-full rounded-md py-2 hover:bg-[#1E2A80]">
                  <p class="text-base text-white ml-[5rem]">Sample</p>
                </div>
              </div>

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                :class="[route.path == '/programs/programsDashboard' ? 'bg-[#1E2A80]' : '']"
                @click="openPrograms"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <SquaresPlusIcon class="w-5 h-5 text-[#81D3F7]"/>
                  <p class="text-white text-base">Programs</p>
                </div>
              </div>


              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                @click="openTimetable"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img src="/menubar/timetable.svg">
                  <p class="text-white text-base">Timetable</p>
                </div>
                <div class="absolute right-5">
                  <img
                    v-if="!isTimetableOpen"
                    src="/menubar/menunotclick.svg" 
                    alt=""
                  >
                  <img
                    v-else
                    src="/menubar/menuclick.svg" 
                    alt=""
                  >
                </div>
              </div>
              <div 
                v-if="isTimetableOpen"
                class="grid w-full space-y-1"
              >
                <div 
                  class="w-full rounded-md py-2 hover:bg-[#1E2A80]"
                  :class="[route.path == '/timetable/timeTableDashboard' ? 'bg-[#1E2A80]' : '']"
                  @click="openTimetables"
                >
                  <p class="text-base text-white ml-[5rem]">Timetables</p>
                </div>
                <div 
                  class="w-full rounded-md py-2 hover:bg-[#1E2A80]"
                  :class="[route.path == '/classes/classesDashboard' ? 'bg-[#1E2A80]' : '']"
                  @click="openClasses"
                >
                  <p class="text-base text-white ml-[5rem]">Classes</p>
                </div>
              </div>

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center hover:bg-[#1E2A80]"
                @click="openGrading"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img src="/menubar/grading.svg">
                  <p class="text-white text-base">Grading</p>
                </div>
                <div class="absolute right-5">
                  <img
                    v-if="!isGradingOpen"
                    src="/menubar/menunotclick.svg" 
                    alt=""
                  >
                  <img
                    v-else
                    src="/menubar/menuclick.svg" 
                    alt=""
                  >
                </div>
              </div>
              <div 
                v-if="isGradingOpen"
                class="grid w-full space-y-1"
              >
                <div 
                  class="w-full rounded-md py-2 hover:bg-[#1E2A80]"
                  :class="[route.path == '/grading/gradingDashboard' ? 'bg-[#1E2A80]' : '']"
                  @click="openRanks"
                >
                  <p class="text-base text-white ml-[5rem]">Ranks</p>
                </div>
                <div class="w-full rounded-md py-2 hover:bg-[#1E2A80]">
                  <p class="text-base text-white ml-[5rem]">Classes</p>
                </div>
              </div>

            </div>
          </div>

        </div>

    </div>
</template>