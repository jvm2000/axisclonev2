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
    leadItem: {},
    addAndGoals: '',
    index: {},
    canOpenLeadModal: false,
    leadObject: {}
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
            image: state.form.leadPic,
            description: state.form.descriptionText,
            yesAgree: state.form.yesCondition,
            noAgree: state.form.noCondition,
            status: 'Active',
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
        state.form.leadStatus = ''

        clearInput()
    }
    const activeStatus = (leads: Object) => {
        state.form.leadStatus = 'Active'
    }
    const coldStatus = (leads: Object) => {
        state.form.leadStatus = 'Cold'
    }
    const deadStatus = (leads: Object) => {
        state.form.leadStatus = 'Dead'
    }
    const yesCondition = () => {
        state.form.leadCondition = false
    }
    const noCondition = () => {
        state.form.leadCondition = true
    }
    const clearInput = () => {
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
            leadPic: null,
            leadCondition: false,
            descriptionText: '',
            yesCondition: '',
            noCondition: '',
        }
         state.goalList = []

    }
    
    return {
        ...toRefs(state),
        addLead,
        noCondition,
        yesCondition,
        addGoals,
        removeGoal,
        clearInput,
    }
}