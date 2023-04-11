<script setup lang="ts">
    import { ChevronLeftIcon, ChevronDownIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'

    const { closeAddStuds } = sideBarFunctionalities()

    const { form, noCondition, yesCondition, addGoals, addAndGoals, goalList, removeGoal, clearInput, addStud } = addStudentFunctionalities()

    const { saveStud, isStudModalOpen } = modalFunctions()
    const { handleChange, image, preview } = useUploadStudImage()
    const selected = ref({})
    const goalLists = reactive([])
    
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

    const isOpenAddAndGoals = ref(false)
    const openAddAndGoals = () => {
        isOpenAddAndGoals.value = true
    }

    const cancelAddAndGoals = () => {
        isOpenAddAndGoals.value = false
    }
  
    const upload = () => {
        document.getElementById('stud-photo')?.click()
    }
</script>

<template>
    <div class="h-screen w-full bg-[#F2F6FB] overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <nav class="z-[20]">
                <BarMaxSideBar />
            </nav>
            <div class="z-[0] w-full sm:z-[10]">
                <!-- topbar -->
                <BarLeadTopBar />
                <!-- tab Leads -->
                <div class="px-1 sm:px-20">
                    <div class="flex space-x-2 place-items-center px-10 py-2">
                        <ChevronLeftIcon class="text-blue-400 w-4 h-4"/>
                        <a @click="closeAddStuds" class="cursor-pointer text-[16ax]">Go back to list</a>
                    </div>
                    <div class="px-0 sm:px-[13rem] py-10 place-items-center">
                        <div class="w-[64rem] min-h-[103rem] bg-white rounded-xl px-8 py-4">
                            <div class="overflow-y-auto h-[50rem]">
                                <div class="flex flex-row place-items-center">
                                    <p class="text-[24px] text-blue-400 font-semibold">Add Lead</p>
                                    <div class="w-[20rem] sm:w-4/5"></div>
                                    <p class="text-[16px] text-blue-400 cursor-pointer"
                                        @click="clearInput"
                                    >Clear All</p>
                                </div>
                                <div class="flex pt-12 space-x-28 flex-col sm:flex-row">
                                    <div class="space-y-6">
                                        <div class="flex flex-row place-items-center space-x-14">
                                            <p class="text-[16px]">First Name</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter first name" required
                                                v-model="form.studFName"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[2.3rem]">
                                            <p class="text-[16px]">Middle Name</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter middle name"
                                                v-model="form.studMName"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[3.7rem]">
                                            <p class="text-[16px]">Last Name</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter last name" required
                                                v-model="form.studLName"    
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[4.4rem]">
                                            <p class="text-[16px]">Birthdate</p>
                                            <input type="date" class="text-[16px] border-2 border-gray-400 pl-6 w-[12rem] h-[3rem] rounded-lg text-gray-400 px-4" required
                                                v-model="form.studBirthdate"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[5.2rem] pb-[2rem]">
                                            <label for="gender" class="16px">Gender</label>
                                            <div class="flex flex-row">
                                                <select name="selected" id="gender" class="text-gray-400 px-6 text-[16px] border-2 border-gray-400 w-[12rem] h-[3rem] rounded-lg"
                                                    v-model="form.studGender"
                                                >
                                                    <option value="--">Choose gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-4 place-items-center px-10 sm:px-1 pb-4">
                                        <!-- <div v-if="preview"
                                            class="w-[12.3rem] h-[12.3rem] border-2 border-[#CAD7E8] border-dashed rounded-full px-20 py-20"
                                            :style="{ backgroundImage: `${preview}` }"
                                        > -->
                                        <img 
                                            v-if="preview"  
                                            :src="preview" 
                                            alt=""
                                            class="w-[12.3rem] h-[12.3rem] border-2 border-[#CAD7E8] rounded-full"
                                        >
                                        <div v-if="!preview"
                                            class="w-[12.3rem] h-[12.3rem] bg-[#EAF3F9] border-2 border-[#CAD7E8] border-dashed rounded-full px-20 py-20"
                                        >
                                            <div>
                                                <label for="imageupload">
                                                    <input
                                                        ref="image"
                                                        type="file"
                                                        id="stud-photo"
                                                        name="stud-photo"
                                                        class="invisible z-[20] absolute cursor-pointer"
                                                        accept=".jpeg, .jpg, .png, image/jpeg, image/png"
                                                        @change="handleChange"
                                                    />
                                                    <img src="/illustrations/camera.svg" alt="" class="z-[10] cursor-pointer"
                                                        @click="upload()"
                                                    >
                                                </label>
                                            </div>
                                        </div>
                                        <p class="text-[14px]">Image can be a PNG or or JPEG file</p>
                                    </div>
                                    <!-- contact info -->
                                </div>
                                <div class="rounded-lg w-full h-[3rem] place-items-center px-4 py-2 text-[18px] bg-slate-200">
                                    <p>Contact Information</p>
                                </div>
                                <div class="flex pt-12">
                                    <div class="space-y-6">
                                        <div class="flex flex-row place-items-center space-x-[2.4rem]">
                                            <p class="text-[16px]">Email Address</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter email address" required
                                                v-model="form.studEmailAddress"
                                            >
                                        </div>
                                        <div class="flex flex-row place-content-start sm:place-items-center space-x-0 sm:space-x-[2.5rem]">
                                            <div class="flex flex-col sm:flex-row space-y-4">
                                                <p class="text-[16px]">Phone <i>(home)</i></p>
                                                <div class="flex sm:flex-row px-2 border-2 border-gray-400 rounded-lg place-items-center ml-0 sm:ml-10 sm:pl-0 w-[14rem]">
                                                    <select class="h-[2rem] ring-0 outline-none"
                                                        v-model="form.studPhoneHNum"
                                                    >
                                                        <option value="+0">+0</option>
                                                        <option value="+1">+1</option>
                                                        <option value="+2">+2</option>
                                                        <option value="+3">+3</option>
                                                        <option value="+4">+4</option>
                                                        <option value="+5">+5</option>
                                                        <option value="+6">+6</option>
                                                        <option value="+7">+7</option>
                                                        <option value="+8">+8</option>
                                                        <option value="+9">+9</option>
                                                    </select>
                                                    <div class="w-2"></div>
                                                    <input type="text" class="text-[16px] pl-2 border-l-2 border-gray-400 w-full h-[3rem] outline-none ring-0" placeholder="XXX-XXX-XXXX"
                                                        v-model="form.studPhoneHome"
                                                    >
                                                </div>
                                            </div>
                                            <div class="w-0 sm:w-[2.5rem]"></div>
                                            <div class="flex flex-col sm:flex-row space-y-4 pl-8 sm:pl-0">
                                                <p class="text-[16px]">Phone <i>(work)</i></p>
                                                <div class="flex flex-row px-2 border-2 border-gray-400 rounded-lg place-items-center w-[14rem]">
                                                    <select class="h-[2rem] ring-0 outline-none"
                                                        v-model="form.studPhoneWNum"
                                                    >
                                                        <option value="+0">+0</option>
                                                        <option value="+1">+1</option>
                                                        <option value="+2">+2</option>
                                                        <option value="+3">+3</option>
                                                        <option value="+4">+4</option>
                                                        <option value="+5">+5</option>
                                                        <option value="+6">+6</option>
                                                        <option value="+7">+7</option>
                                                        <option value="+8">+8</option>
                                                        <option value="+9">+9</option>
                                                    </select>
                                                    <div class="w-2"></div>
                                                    <input type="text" class="text-[16px] pl-2 border-l-2 border-gray-400 w-full h-[3rem] outline-none ring-0" placeholder="XXX-XXX-XXXX"
                                                        v-model="form.studPhoneWork"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[5.6rem]">
                                            <p class="text-[16px]">Mobile</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter email address" required
                                                v-model="form.studMobileNo"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[6rem]">
                                            <p class="text-[16px]">Street</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter street" required
                                                v-model="form.studStreetAddress"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[5.5rem]">
                                            <p class="text-[16px]">Suburb</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter suburb"
                                                v-model="form.studSubUrb"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[6.3rem]">
                                            <label for="gender" class="16px">State</label>
                                            <div class="flex flex-row">
                                                <select name="selected" id="gender" class="text-gray-400 px-4 text-[16px] border-2 border-gray-400 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg"
                                                    v-model="form.studState"
                                                >
                                                    <option value="---" selected>Choose State</option>
                                                    <option value="America">America</option>
                                                    <option value="China">China</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="France">France</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Philippines">Philippines</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[5.2rem]">
                                            <label for="gender" class="16px">Country</label>
                                            <div class="flex flex-row">
                                                <select name="selected" id="gender" class="text-gray-400 px-4 text-[16px] border-2 border-gray-400 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg"
                                                    v-model="form.studCountry"
                                                >
                                                    <option value="---" selected>Choose State</option>
                                                    <option value="America">America</option>
                                                    <option value="China">China</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="France">France</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Philippines">Philippines</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[5.4rem] pb-[2rem]">
                                            <p class="text-[16px]">Zipcode</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[12rem] h-[3rem] rounded-lg" placeholder="Enter zipcode"
                                                v-model="form.studZipCode"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-lg w-full h-[3rem] place-items-center px-4 py-2 text-[18px] bg-slate-200">
                                    <p>Other Info</p>
                                </div>
                                <div class="flex pt-12">
                                    <div class="space-y-6">
                                        <div class="flex flex-row place-items-center space-x-[3.8rem]">
                                            <p class="text-[16px]">Joined Date</p>
                                            <input type="date" class="text-[16px] border-2 border-gray-400 pl-6 w-[12rem] h-[3rem] rounded-lg text-gray-400 px-4" required
                                                v-model="form.studDateAdded"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[4.5rem] sm:space-x-[5.7rem]">
                                            <p class="text-[16px]">Student ID</p>
                                            <input type="text" class="text-[16px] border-2 border-gray-400 pl-6 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg" placeholder="Enter Student ID"
                                                v-model="form.studID"
                                            >
                                        </div>
                                        <div class="flex flex-row place-items-center space-x-[6rem] pb-[2rem]">
                                            <label for="gender" class="16px">Source</label>
                                            <div class="flex flex-row">
                                                <select name="selected" id="gender" class="text-gray-400 px-2 text-[16px] border-2 border-gray-400 w-[22rem] sm:w-[24rem] h-[3rem] rounded-lg"
                                                    v-model="form.studSource"
                                                >
                                                <ChevronDownIcon class="w-4 h-4 absolute"/>
                                                    <option>Friends</option>
                                                    <option>Social Media</option>
                                                    <option>Posts</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-lg w-full h-[3rem] place-items-center px-4 py-2 text-[18px] bg-slate-200">
                                    <p>Medical Condition</p>
                                </div>
                                <div class="flex pt-12">
                                    <div class="space-y-6">
                                        <div class="flex place-items-center">
                                            <p class="text-[16px]">Is the Stud in good health and with no physical problems?</p>
                                        </div>
                                        <div class="flex flex-row place-items-center pb-[1rem]">
                                            <div class="space-x-[3rem] flex flex-row">
                                                <div class="flex space-x-2">
                                                    <input type="radio" class="" name="healthChecker"
                                                        @click="yesCondition"
                                                        v-model="form.yesCondition"
                                                    >
                                                    <label class="text-[16px]">Yes</label>
                                                </div>
                                                <div class="flex space-x-2">
                                                    <input type="radio" class="" name="healthChecker"
                                                        @click="noCondition"
                                                        v-model="form.noCondition"
                                                    >
                                                    <label for="" class="text-[16px]">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pb-10">
                                            <div v-if="form.studCondition" class="w-[31rem] sm:w-[44rem] h-[20rem] block bg-[#F9FCFD] px-8 py-4 space-y-6">
                                                <div class="space-y-4">
                                                    <p class="text-[16px]">Choose Status of Condition</p>
                                                    <div class="flex items-center space-x-3">
                                                        <div
                                                            v-for="(condition, index) in conditions" 
                                                            :key="index" 
                                                            class="px-4 py-1 rounded-full text-[16px] cursor-pointer border border-[#CAD7E8]" 
                                                            :class="{ 
                                                            'bg-[#2ABE89] text-white' : condition.id == selected.id,
                                                            'bg-[#EAF3F9] text-black' : condition.id != selected.id,
                                                            }"
                                                            @click="select(condition)"
                                                            type="button"
                                                        >
                                                            {{ condition.value }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="space-y-4">
                                                    <label for="studNote" class="text-[16px]">Type description or note</label>
                                                    <textarea id="studNote" type="text" class="p-4 w-[28rem] sm:w-[40rem] h-[8rem] text-[14px] border border-[#CAD7E8] rounded-lg resize-none"
                                                        v-model="form.descriptionText"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div v-else></div> 
                                        </div> 
                                    </div>
                                </div>
                                <div class="rounded-lg w-full h-[3rem] place-items-center px-4 py-2 text-[18px] bg-slate-200">
                                    <p>Needs & Goals</p>
                                </div>
                                <div class="flex pt-6">
                                    <div class="space-y-6">
                                        <div 
                                            v-for="(goals,index) in goalList" 
                                            :key="index"
                                            class="block"
                                        >
                                            <div class="flex space-x-4 place-items-center">
                                                <div class="w-[0.5rem] h-[0.5rem] bg-[rgb(80,129,240)]"></div>
                                                <div class="text-[16px]">{{ goals.addedGoal }}</div>
                                                <XMarkIcon 
                                                    class="w-4 h-4 text-red-500" 
                                                    @click="removeGoal"    
                                                />
                                            </div>
                                        </div>
                                        <div 
                                            :class="[!isOpenAddAndGoals ? 'border-[1px] px-2 py-1 space-x-2 border-blue-500 rounded-lg text-[16px] text-blue-500 flex flex-row place-items-center cursor-pointer' : 'hidden']"
                                            @click="openAddAndGoals"
                                        >
                                            <PlusIcon class="w-4 h-4"/>
                                            <p>Add Needs & Goals</p>
                                        </div>
                                        <div v-if="isOpenAddAndGoals && goalList.length < 3" class="flex space-x-2">
                                            <select name="" id=""
                                                class="w-[20rem] h-[3rem] border rounded-lg border-[#CAD7E8] text-[16px] px-4"
                                                v-model="addAndGoals"
                                            >
                                                <option value="--" selected>Select Needs & Goals</option>
                                                <option value="Self-Defense">Self-Defense</option>
                                                <option value="Training">Training</option>
                                                <option value="Fighting">Fighting</option>
                                                <option value="Kicking">Kicking</option>
                                            </select>
                                            <button class="px-4 py-1 text-[16px] text-white bg-[#CAD7E8] rounded-lg"
                                                @click="cancelAddAndGoals"
                                            >
                                                Cancel
                                            </button>
                                            <button class="px-4 py-1 text-[16px] text-white bg-[#5081F0] rounded-lg"
                                                @click="addGoals"
                                            >
                                                Add
                                            </button>
                                        </div>
                                        <div v-else></div>
                                    </div>
                                </div>
                                <div class="flex pt-6">
                                    <div class="w-[22rem] sm:w-[50rem]"></div>
                                    <button type="submit" class="bg-blue-500 rounded-lg h-[3rem] w-[8rem] px-[2.7rem] text-[18px] text-white font-semibold py-3"
                                        @click="saveStud(), addStud()"
                                    >
                                        Save
                                    </button>
                                </div>
                                <div class="h-[3rem]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DialogsAddStudsModal :isStudModalOpen="saveStud"/>
    </div>
</template>
