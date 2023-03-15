<script setup lang="ts">

    import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/vue/24/outline'

    const { useBasicInfo, saveBasicInfo, useAddressInfo, saveAddressInfo, useContactInfo, saveContactInfo, useOtherInfo, useMedicalCondition, useStickyNote, saveMedicalCondition, saveOtherInfo, saveStickyNote, useBold, useItalic, useUniform, saveUniform, useAddUniform, useRelationship,
    editAddressInfo, editBasicInfo, editContactInfo, editMedicalCondition, editOtherInfo, editRelationships, editStickyNote, toogleBold, toogleItalic, addUniform, editUniform } = useLeadsProfileEdit()

    const selected = ref({})

    const conditions = reactive([
    {
        value: 'Mild',
        id: 1,
    },
    {
        value: 'Moderate',
        id: 2,
    },
    {
        value: 'Severe',
        id: 3,
    },
    ])

    const select = (condition: Object) => {
        selected.value = condition
    }

</script>

<template>
    <div class="overflow-y-scroll h-screen space-y-2">
        <div class="pt-10 space-x-4 flex">
            <div class="flex flex-col space-y-4">
                <div class="bg-white block rounded-lg h-auto w-[33rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userI.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">BASIC INFORMATON</p>
                        <div class="w-[13rem]"></div>
                        <PencilIcon 
                            class="w-4 h-4 text-gray-400 cursor-pointer"
                            :class="[!editBasicInfo ? 'block' : 'hidden']"
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
                            <div class="flex pt-4">
                                <div class="w-[12rem]"></div>
                                <div class="flex space-x-4">
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                        @click="saveBasicInfo"
                                    >
                                        Cancel
                                    </p>
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                        @click="saveBasicInfo"
                                    >
                                        Save
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-8"></div>
                        <div class="flex">
                            <p class="pl-20 pt-6 text-[14px] font-semibold">ADDRESS</p>
                            <div class="w-[20rem]"></div>
                            <PencilIcon 
                                class="w-4 h-4 mt-4 text-gray-400 cursor-pointer"
                                :class="[!editAddressInfo ? 'block' : 'hidden']"
                                @click="useAddressInfo"
                            />
                        </div>
                        <div v-if="!editAddressInfo" class="pt-6 pl-20 flex space-x-12">
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
                        <div v-else class="pt-6 pl-20 place-items-center space-y-4">
                            <div class="flex flex-col space-y-2">
                                <label for="streetaddress" class="text-[16px]">Street Address</label>
                                <input 
                                    id="streetaddress"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="suburb" class="text-[16px]">Suburb</label>
                                <input 
                                    id="suburb"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="state" class="text-[16px]">State</label>
                                <input 
                                    id="state"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="country" class="text-[16px]">Country</label>
                                <input 
                                    id="country"
                                    type="text" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="zipcode" class="text-[16px]">Zipcode</label>
                                <input 
                                    id="zipcode"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex pt-4">
                                <div class="w-[12rem]"></div>
                                <div class="flex space-x-4">
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                        @click="saveAddressInfo"
                                    >
                                        Cancel
                                    </p>
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                        @click="saveAddressInfo"
                                    >
                                        Save
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-8"></div>
                        <div class="flex">
                            <p class="pl-20 pt-6 text-[14px] font-semibold">CONTACT</p>
                            <div class="w-[20rem]"></div>
                            <PencilIcon 
                                class="w-4 h-4 mt-4 text-gray-400 cursor-pointer"
                                :class="[!editContactInfo ? 'block' : 'hidden']"
                                @click="useContactInfo"
                            />
                        </div>
                        <div v-if="!editContactInfo" class="pt-6 pl-20 flex space-x-12 pb-12">
                            <div class="flex flex-col text-[16px] space-y-2 text-[#5E6E82]">
                                <p>Mobile No.</p>
                                <p>Phone No. (Home)</p>
                                <p>Phone No. (Work)</p>
                            </div>
                            <div class="flex flex-col text-[16px] space-y-2">
                                <p>(03) 6208 3069</p>
                                <p>(03) 5340 2101</p>
                                <p>(03) 6208 3069</p>
                            </div>
                        </div>
                        <div v-else class="pt-6 pl-20 place-items-center space-y-4 block">
                            <div class="flex flex-col space-y-2">
                                <label for="mobileno" class="text-[16px]">Mobile No.</label>
                                <input 
                                    id="mobileno"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="homeno" class="text-[16px]">Phone No. (Home)</label>
                                <input 
                                    id="homeno"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="workno" class="text-[16px]">Phone No. (Work)</label>
                                <input 
                                    id="workno"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                            </div>
                            <div class="flex pt-4">
                                <div class="w-[12rem]"></div>
                                <div class="flex space-x-4 pb-10">
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                        @click="saveContactInfo"
                                    >
                                        Cancel
                                    </p>
                                    <p 
                                        class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                        @click="saveContactInfo"
                                    >
                                        Save
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-auto w-[33rem] block px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userCheck.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">OTHER INFORMATON</p>
                        <div class="w-[12rem]"></div>
                        <PencilIcon 
                            class="mt-2 w-4 h-4 text-gray-400 cursor-pointer"
                            :class="[!editOtherInfo ? 'block' : 'hidden']"
                            @click="useOtherInfo"
                        />
                    </div>
                    <div v-if="!editOtherInfo" class="pt-6 pl-20 flex space-x-12">
                        <div class="flex flex-col text-[16px] space-y-2 text-[#5E6E82]">
                            <p>Joined Date:</p>
                            <p>Student ID:</p>
                            <p>Source:</p>
                        </div>
                        <div class="flex flex-col text-[16px] space-y-2 pb-8">
                            <p>01 Aug 2026</p>
                            <p>ABC123</p>
                            <p>Social Media</p>
                        </div>
                    </div>
                    <div v-else class="pt-6 pl-10 flex flex-col place-items-center">
                        <div class="flex flex-col space-y-2">
                                <label for="joineddate" class="text-[16px]">Joined Date.</label>
                                <input 
                                    id="joineddate"
                                    type="date" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                        </div>
                        <div class="flex flex-col space-y-2">
                                <label for="studentid" class="text-[16px]">Student ID</label>
                                <input 
                                    id="studentid"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                        </div>
                        <div class="flex flex-col space-y-2">
                                <label for="source" class="text-[16px]">Source</label>
                                <input 
                                    id="source"
                                    type="number" 
                                    class="px-2 py-2 w-[22rem] border border-gray-500 rounded-lg"
                                />
                        </div>
                        <div class="flex pt-4">
                            <div class="w-[12rem]"></div>
                            <div class="flex space-x-4 pb-6">
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                    @click="saveOtherInfo"
                                >
                                    Cancel
                                </p>
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                    @click="saveOtherInfo"
                                >
                                    Save
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <div class="bg-white rounded-lg h-auto w-[54rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userMessage.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">STICKY NOTE</p>
                        <div class="w-[36rem]"></div>
                        <PencilIcon 
                            class="mt-2 w-4 h-4 text-gray-400 cursor-pointer"
                            :class="[!editStickyNote ? 'block' : 'hidden']"
                            @click="useStickyNote"
                        />
                    </div>
                    <div v-if="!editStickyNote" class="pt-6 pl-8 flex space-x-12">
                        <div class="w-11/12 h-[14rem] text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </div>
                    </div>
                    <div v-else class="pt-4 pl-8">
                        <div class="flex space-x-10">
                            <img src="/icons/SNMenu.svg" alt="">
                            <img src="/icons/SNBold.svg" alt="" 
                                @click="useBold"
                                class="cursor-pointer"
                            >
                            <img src="/icons/SNItaliic.svg" alt="" 
                                class="cursor-pointer"
                                @click="useItalic"    
                            >
                            <img src="/icons/SNBullet.svg" alt="">
                        </div>
                        <div class="h-auto">
                            <textarea type="text" 
                                class="w-full border-b border-t border-gray-400 h-auto min-h-[8rem] px-4 py-4 ring-0 outline-none resize-none"
                                :class="[toogleBold ? 'font-semibold' : '', toogleItalic ? 'italic' : '']"
                            ></textarea>
                        </div>
                        <div class="flex pt-4 pb-4">
                            <div class="w-[38rem]"></div>
                            <div class="flex space-x-4 pb-2">
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                    @click="saveStickyNote"
                                >
                                    Cancel
                                </p>
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                    @click="saveStickyNote"
                                >
                                    Save
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-auto w-[54rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userH.svg" alt="" class="absolute pb-2">
                        <div class="flex place-items-center space-x-4">
                            <p class="pl-14 pt-5 text-[14px] font-semibold">MEDICAL CONDITION</p>
                            <img src="/icons/userHButton.svg" alt="" class="pt-5">
                            <div class="w-[25rem]"></div>
                            <PencilIcon 
                                class="mt-2 w-4 h-4 text-gray-400 cursor-pointer"
                                :class="[!editMedicalCondition ? 'block' : 'hidden']"
                                @click="useMedicalCondition"
                            />
                        </div>
                    </div>
                    <div v-if="!editMedicalCondition" class="pt-6 pl-8 flex space-x-12">
                        <div class="w-[26ren] h-[4rem] text-[16px]">
                            Has Severe Asthma - Allergic to Dog fur and dust can be fatal
                        </div>
                    </div>
                    <div v-else class="space-y-4 pt-4 pl-8">
                        <p class="text-[16px]">Choose Status of Condition</p>
                        <div class="flex items-center space-x-3">
                            <div
                                v-for="(condition, index) in conditions" 
                                :key="index" 
                                class="px-6 py-2 rounded-full text-[16px] cursor-pointer border border-[#CAD7E8]" 
                                :class="{ 
                                'bg-[#FF7E21] border-2 drop-shadow-xl border-white text-white' : condition.id == selected.id,
                                'bg-[#EAF3F9] text-black' : condition.id != selected.id,
                                }"
                                @click="select(condition)"
                                type="button"
                            >
                                {{ condition.value }}
                            </div>
                        </div>
                        <div class="space-y-4 pl-3 pt-2">
                            <textarea id="leadNote" type="text" class="p-4 w-11/12 h-[8rem] text-[14px] border border-[#CAD7E8] rounded-lg resize-none drop-shadow-md"
                            ></textarea>
                        </div>
                        <div class="flex pt-2 pb-4">
                            <div class="w-[35rem]"></div>
                            <div class="flex space-x-4 pb-2">
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                    @click="saveMedicalCondition"
                                >
                                    Cancel
                                </p>
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                    @click="saveMedicalCondition"
                                >
                                    Save
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-auto w-[54rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userClothes.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">UNIFORM</p>
                        <div class="w-[36rem]"></div>
                            <PencilIcon 
                                class="mt-2 w-4 h-4 text-gray-400 cursor-pointer"
                                :class="[!editMedicalCondition ? 'block' : 'hidden']"
                                @click="useUniform"
                            />
                    </div>
                    <div>
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
                            <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Belt Size: M</p>

                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-4"></div>
                        <div class="flex pl-8 pt-2 space-x-4">
                            <p class="text-[16px]">3</p>
                            <p class="text-[16px]">BJJ Gi Uniform with Belt</p>
                            <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Size: S</p>
                            <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Belt Size: M</p>
                            <p class="text-[14px] rounded-full text-[#5081F0]  border-[#5081F0] border bg-[#EAF3F9] cursor-pointer py-[1px] px-6">Bust Size: 32</p>
                        </div>
                        <div class="w-full border-b border-[#E9F0FA] pt-4"></div>
                        <div v-if="editUniform" class="pt-6 pl-8 flex space-x-4 place-items-center">
                            <div class="flex place-items-center space-x-2 cursor-pointer pb-4"
                                :class="[!addUniform ? 'text-[#5081F0]' : '']"
                                @click="useAddUniform"
                            >
                                <PlusIcon class="w-4 h-4"/>
                                <p class="text-[16px]">Add Uniform</p>
                            </div>
                            <div class="w-[28rem]"></div>
                            <div 
                                class="flex space-x-4 pb-2"
                                :class="[addUniform ? 'hidden' : 'block']"
                            >
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#CAD7E8] rounded-lg cursor-pointer"
                                    @click="saveUniform"
                                >
                                    Cancel
                                </p>
                                <p 
                                    class="px-4 py-2 text-[16px] text-white bg-[#5081F0] rounded-lg cursor-pointer"
                                    @click="saveUniform"
                                >
                                    Save
                                </p>
                            </div>
                        </div>
                        <div v-if="addUniform" class="pt-2 pl-8 flex pb-4 space-x-4 place-items-center">
                            <div class="flex flex-col space-y-2">
                                <label for="productname" class="text-[16px]">Product Name</label>
                                <select name="" id="productname" class="w-[16rem] h-[3rem] rounded-lg border border-[#CDD9DF] px-4 py-1">
                                    <option value="--">--</option>
                                    <option value="">Muai Thai Shorts ADB</option>
                                    <option value="">Taekwondo GI Uniform</option>
                                    <option value="">BJJ Gi Uniform with Belt</option>
                                    <option value="">Muay Thai for Kids AA </option>
                                </select>
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="productname" class="text-[16px]">Product Name</label>
                                <select name="" id="productname" class="w-[14.7rem] h-[3rem] rounded-lg border border-[#CDD9DF] px-4 py-1">
                                    <option value="--">--</option>
                                    <option value="">XL</option>
                                    <option value="">L</option>
                                    <option value="">M</option>
                                    <option value="">S</option>
                                    <option value="">XS</option>
                                </select>
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label for="productname" class="text-[16px]">Value</label>
                                <input type="number" class="w-[8rem] h-[3rem] rounded-lg border border-[#CDD9DF] px-4 py-1">
                            </div>
                            <div class="flex flex-col">
                                <p class="invisible">test</p>
                                <p class="px-6 py-1 text-white rounded-lg bg-[#81D3F7] text-[16px]">Add</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- RELATIONSHIP
                RELATIONSHIP
                RELATIONSHIP
                RELATIONSHIP -->
                <div class="bg-white rounded-lg h-[42rem] w-[54rem] px-4 overflow-visible relative">
                    <div class="flex place-items-center space-x-6">
                        <img src="/icons/userH.svg" alt="" class="absolute pb-2">
                        <p class="pl-14 pt-5 text-[14px] font-semibold">RELATIONSHIPS</p>
                    </div>
                    <div class="pt-8 flex pl-8 space-x-20">
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
                        <div class="flex flex-col pl-8">
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