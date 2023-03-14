<script setup lang="ts">

    import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

    const { useBasicInfo, saveBasicInfo, editBasicInfo } = useLeadsProfileEdit()

</script>

<template>
    <div class="overflow-y-scroll h-screen space-y-2">
        <div class="pt-10 space-x-4 flex">
            <div class="flex flex-col space-y-4">
                <div class="bg-white rounded-lg h-auto w-[33rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userI.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">BASIC INFORMATON</p>
                        <div class="w-[13rem]"></div>
                        <PencilIcon 
                            class="w-4 h-4 text-gray-400 cursor-pointer"
                            @click="useBasicInfo"
                        />
                    </div>
                    <!-- Basic Info -->
                    <div class="">
                        <div v-if="!editBasicInfo" class="pt-6 pl-20 space-y-2">
                            <div class="flex space-x-20 text-[16px]">
                                <p class="text-[#5E6E82]">Full Name:</p>
                                <p>Matthew John Ferrell</p>
                            </div>
                            <div class="flex space-x-20 text-[16px]">
                                <p class="text-[#5E6E82]">Username:</p>
                                <p>matthewferrell12</p>
                            </div>
                            <div class="flex space-x-[3.3rem] text-[16px]">
                                <p class="text-[#5E6E82]">Email Address:</p>
                                <p>matthewferrell@gmail.com</p>
                            </div>
                            <div class="flex space-x-[5.5rem] text-[16px]">
                                <p class="text-[#5E6E82]">Birthdate:</p>
                                <p>23 / February / 2009</p>
                            </div>
                            <div class="flex space-x-[6.5rem] text-[16px]">
                                <p class="text-[#5E6E82]">Gender:</p>
                                <p>Male</p>
                            </div>
                        </div>
                        <div v-else class="pt-6 pl-20 place-items-center space-y-4">
                            <div class="flex flex-col space-y-2">
                                <label for="firstname" class="text-[16px]">First Name *</label>
                                <input 
                                    id="firstname"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="middlename" class="text-[16px]">Middle Name</label>
                                <input 
                                    id="middlename"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="lastname" class="text-[16px]">Last Name *</label>
                                <input 
                                    id="lastname"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="username" class="text-[16px]">Username</label>
                                <input 
                                    id="username"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="emailaddress" class="text-[16px]">Email Address</label>
                                <input 
                                    id="emailaddress"
                                    type="email" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex space-x-8">
                                <div class="flex flex-col space-y-2">
                                    <label for="birthdate" class="text-[16px]">Birthdate</label>
                                    <input 
                                        id="birthdate"
                                        type="date" 
                                        class="px-2 py-2 w-[12rem] border border-gray-500 rounded-lg"
                                    />
                                </div>
                                <div class="flex flex-col space-y-2">
                                    <label for="birthdate" class="text-[16px]">Birthdate</label>
                                    <select 
                                        id="birthdate"
                                        class="px-2 py-[0.7rem] w-[8rem] border border-gray-500 rounded-lg"
                                    >
                                        <option value="---">--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="pt-4 w-[10rem]"></div>
                                <div class="flex space-x-4">
                                    <p class="px-4 py-1 text-">Test</p>
                                    <p>Test</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-8"></div>
                        <p class="pl-20 pt-6 text-[14px] font-semibold">ADDRESS</p>
                        <div class="pt-6 pl-20 flex space-x-12">
                            <div class="flex flex-col text-[16px] space-y-2 text-[#5E6E82]">
                                <p>Street Address:</p>
                                <p>Suburb:</p>
                                <p>State:</p>
                                <p>Country:</p>
                                <p>Zipcode:</p>
                            </div>
                            <div class="flex flex-col text-[16px] space-y-2">
                                <p>46 Florabunda Lane   </p>
                                <p>Elderslie</p>
                                <p>New South Wales</p>
                                <p>Australia</p>
                                <p>2570</p>
                            </div>
                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-8"></div>
                        <p class="pl-20 pt-6 text-[14px] font-semibold">ADDRESS</p>
                        <div class="pt-6 pl-20 flex space-x-12 pb-8">
                            <div class="flex flex-col text-[16px] space-y-2 text-[#5E6E82]">
                                <p>Mobile No.</p>
                                <p>Phone No. (Home)</p>
                                <p>Phone No. (Work)</p>
                            </div>
                            <div class="flex flex-col text-[16px] space-y-2">
                                <p>46 Florabunda Lane   </p>
                                <p>Elderslie</p>
                                <p>New South Wales</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-[12rem] w-[33rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userCheck.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">OTHER INFORMATION</p>
                    </div>
                    <div class="pt-6 pl-20 flex space-x-12">
                        <div class="flex flex-col text-[16px] space-y-2 text-[#5E6E82]">
                            <p>Joined Date:</p>
                            <p>Student ID:</p>
                            <p>Source:</p>
                        </div>
                        <div class="flex flex-col text-[16px] space-y-2">
                            <p>01 Aug 2026</p>
                            <p>ABC123</p>
                            <p>Social Media</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <div class="bg-white rounded-lg h-[17rem] w-[42rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userMessage.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">STICKY NOTE</p>
                    </div>
                    <div class="pt-6 pl-8 flex space-x-12">
                        <div class="w-[26ren] h-[14rem] text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-[9rem] w-[42rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userH.svg" alt="" class="absolute pb-2">
                        <div class="flex place-items-center space-x-4">
                            <p class="pl-14 pt-5 text-[14px] font-semibold">MEDICAL CONDITION</p>
                            <img src="/icons/userHButton.svg" alt="" class="pt-5">
                        </div>
                    </div>
                    <div class="pt-6 pl-8 flex space-x-12">
                        <div class="w-[26ren] h-[10rem] text-[16px]">
                            Has Severe Asthma - Allergic to Dog fur and dust can be fatal
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-[17rem] w-[42rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userClothes.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">UNIFORM</p>
                    </div>
                    <div class="flex pl-8 pt-8 space-x-4">
                        <p class="text-[16px]">1</p>
                        <p class="text-[16px]">Muai Thai Shorts ADB</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Size: S</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Belt Size: M</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Bust Size: 32</p>
                    </div>
                    <div class="w-full border-b border-[#E9F0FA] pt-4"></div>
                    <div class="flex pl-8 pt-2 space-x-4">
                        <p class="text-[16px]">2</p>
                        <p class="text-[16px]">Taekwondo GI Uniform</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Size: S</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Belt Size: M</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Bust Size: 32</p>
                    </div>
                    <div class="w-full border-b border-[#E9F0FA] pt-4"></div>
                    <div class="flex pl-8 pt-2 space-x-4">
                        <p class="text-[16px]">3</p>
                        <p class="text-[16px]">BJJ Gi Uniform with Belt</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Size: S</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Belt Size: M</p>
                        <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Bust Size: 32</p>
                    </div>
                </div>
                <!-- RELATIONSHIP
                RELATIONSHIP
                RELATIONSHIP
                RELATIONSHIP -->
                <div class="bg-white rounded-lg h-[38rem] w-[42rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userH.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">RELATIONSHIPS</p>
                    </div>
                    <div class="pt-2 flex pl-8">
                        <div class="flex flex-col">
                            <p class="text-[16px] text-[#9FB5D1]">NAME</p>
                            <div class="space-y-2">
                                <div class="flex pt-6 space-x-4">
                                    <p class="text-[16px]">Josephine Ferrell</p>
                                    <p class="px-6 py-[1px] border border-[#23D374] text-[14px] text-[#23D374] bg-[#d8f5e7e5] rounded-full">Main Contact</p>
                                </div>
                                <div class="flex pt-4 space-x-4">
                                    <p class="text-[16px]">Daniel John Ferrell</p>
                                    <p class="px-4 py-[1px] border border-[#E26969] text-[14px] text-[#E26969] bg-[#f9cdcdd1] rounded-full">Emergency Contact</p>
                                </div>
                                <p class="pt-4 text-[16px]">Daniel John Ferrell</p>
                            </div>
                        </div>
                        <div class="flex flex-col pl-4">
                            <p class="text-[16px] text-[#9FB5D1]">RELATIONSHIP</p>
                            <div class="space-y-6 pt-6">
                                <p class="text-[16px]">Mother</p>
                                <p class="text-[16px]">Father</p>
                                <p class="text-[16px]">Brother</p>
                            </div>
                        </div>
                        <div class="flex flex-col pl-16">
                            <p class="text-[16px] text-[#9FB5D1]">ACTION</p>
                            <div class="space-y-8 pt-7">
                                <div class="flex space-x-4">
                                    <PencilIcon class="w-4 h-4 text-gray-400"/>
                                    <TrashIcon class="w-4 h-4 text-gray-400"/>
                                </div>
                                <div class="flex space-x-4">
                                    <PencilIcon class="w-4 h-4 text-gray-400"/>
                                    <TrashIcon class="w-4 h-4 text-gray-400"/>
                                </div>
                                <div class="flex space-x-4">
                                    <PencilIcon class="w-4 h-4 text-gray-400"/>
                                    <TrashIcon class="w-4 h-4 text-gray-400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>