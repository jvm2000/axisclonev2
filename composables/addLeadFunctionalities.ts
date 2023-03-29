import leadActivePanelVue from "~~/components/panel/leadActivePanel.vue"

const state = reactive({
    goalList: [],
    leadList: [],
    form : {
        leadFName: '',
        leadMName: '',
        leadLName: '',
        leadBirthdate: '',
        leadGender: '',
        leadMobileNo: '',
        leadDateAdded: '',
        leadEmailAddress: '',
        leadPhoneHome: '',
        leadPhoneHNum: '',
        leadPhoneWork: '',
        leadPhoneWNum: '',
        leadStreetAddress: '',
        leadSubUrb: '',
        leadState: '',
        leadCountry: '',
        leadZipCode: '',
        leadID: '',
        leadSource: '',
        descriptionText: '',
        leadPic: File,
        leadCondition: false,
        yesCondition: '',
        noCondition: '',
    },
    addAndGoals: '',
    index: {},
    canOpenLeadModal: false,
    leadStatus: false
})

export default function () {

    const router = useRouter()

    const addGoals = () => {

        let goalItem = {
            addedGoal: state.addAndGoals,
        }
        state.goalList.push(goalItem)
        state.addAndGoals = ''

    }

    const removeGoal = (index) => {
        state.goalList.splice(index, 1)
    }

    const addLead = () => {
        const { preview } = useUploadImage()
        if(state.form.leadFName == '' &&
            state.form.leadLName == '' &&
            state.form.leadBirthdate == '' &&
            state.form.leadGender == '' &&
            state.form.leadEmailAddress == '' &&
            state.form.leadMobileNo == '' &&
            state.form.leadPhoneHNum == '' &&
            state.form.leadPhoneHome == '' &&
            state.form.leadPhoneWNum == '' &&
            state.form.leadPhoneWork == '' &&
            state.form.leadCountry == '' &&
            state.form.leadSource == '' &&
            state.form.leadState == '' &&
            state.form.leadStreetAddress == '' &&
            state.form.leadSubUrb == '' &&
            state.form.leadID == '' &&
            state.form.leadDateAdded == '' &&
            state.form.leadZipCode == '' &&
            state.form.descriptionText == '' &&
            state.form.yesCondition == '' &&
            state.form.noCondition == ''
            
        ){
            state.canOpenLeadModal = true
            return alert('Input Field should not be empty')
        }

        let leadItem = {
            firstname: state.form.leadFName,
            middlename: state.form.leadMName,
            lastname: state.form.leadLName,
            birthdate: state.form.leadBirthdate,
            mobileno: state.form.leadMobileNo,
            dateadded: state.form.leadDateAdded,
            gender: state.form.leadGender,
            email: state.form.leadEmailAddress,
            phonehomenum: state.form.leadPhoneHNum,
            phonehome: state.form.leadPhoneHome,
            phoneworknum: state.form.leadPhoneWNum,
            phonework: state.form.leadPhoneWork,
            country: state.form.leadCountry,
            source: state.form.leadSource,
            state: state.form.leadState,
            street: state.form.leadStreetAddress,
            suburb: state.form.leadSubUrb,
            ID: state.form.leadID,
            zipcode: state.form.leadZipCode,
            image: preview.value,
            description: state.form.descriptionText,
            yesAgree: state.form.yesCondition,
            noAgree: state.form.noCondition,
            status: 'active',
            status2: false,
            status3: false
        }

        state.leadList.push(leadItem)

        state.form.leadFName = ''
        state.form.leadMName = ''
        state.form.leadLName = ''
        state.form.leadBirthdate = ''
        state.form.leadMobileNo = ''
        state.form.leadDateAdded = ''
        state.form.leadGender = ''
        state.form.leadEmailAddress = ''
        state.form.leadPhoneHNum = ''
        state.form.leadPhoneHome = ''
        state.form.leadPhoneWNum = ''
        state.form.leadPhoneWork = ''
        state.form.leadCountry = ''
        state.form.leadSource = ''
        state.form.leadState = ''
        state.form.leadStreetAddress = ''
        state.form.leadSubUrb = ''
        state.form.leadID = ''
        state.form.leadZipCode = ''
        state.form.descriptionText = ''
        state.form.yesCondition = '' 
        state.form.noCondition = ''

        clearInput()
    }
    const yesCondition = () => {
        state.form.leadCondition = false
    }
    const noCondition = () => {
        state.form.leadCondition = true
    }
    const clearInput = () => {
        const { preview } = useUploadImage()
        state.form = {
            leadFName: '',
            leadMName: '',
            leadLName: '',
            leadBirthdate: '',
            leadGender: '',
            leadMobileNo: '',
            leadDateAdded: '',
            leadEmailAddress: '',
            leadPhoneHome: '',
            leadPhoneHNum: '',
            leadPhoneWork: '',
            leadPhoneWNum: '',
            leadStreetAddress: '',
            leadSubUrb: '',
            leadState: '',
            leadCountry: '',
            leadZipCode: '',
            leadID: '',
            leadSource: '',
            leadCondition: false,
            descriptionText: '',
            yesCondition: '',
            noCondition: '',
        }
         state.goalList = []
         preview.value = null
    }
    const activeStatus = (leads: Object) => {
        state.leadStatus = true
        console.log("Testings...")
     }
    
    return {
        ...toRefs(state),
        addLead,
        noCondition,
        yesCondition,
        addGoals,
        removeGoal,
        clearInput,
        activeStatus,
    }
}