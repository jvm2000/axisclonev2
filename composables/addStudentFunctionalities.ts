const state = reactive({
    goalList: [],
    studList: [],
    form : {
        studFName: '',
        studMName: '',
        studLName: '',
        studBirthdate: '',
        studGender: '',
        studMobileNo: '',
        studDateAdded: '',
        studEmailAddress: '',
        studPhoneHome: '',
        studPhoneHNum: '',
        studPhoneWork: '',
        studPhoneWNum: '',
        studStreetAddress: '',
        studSubUrb: '',
        studState: '',
        studCountry: '',
        studZipCode: '',
        studID: '',
        studSource: '',
        descriptionText: '',
        studCondition: false,
        yesCondition: '',
        noCondition: '',
    },
    addAndGoals: '',
    index: {},
    canOpenstudModal: false,
    studStatus: false
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

    const addStud = () => {
        const { preview } = useUploadStudImage()
        if(state.form.studFName == '' &&
            state.form.studLName == '' &&
            state.form.studBirthdate == '' &&
            state.form.studGender == '' &&
            state.form.studEmailAddress == '' &&
            state.form.studMobileNo == '' &&
            state.form.studPhoneHNum == '' &&
            state.form.studPhoneHome == '' &&
            state.form.studPhoneWNum == '' &&
            state.form.studPhoneWork == '' &&
            state.form.studCountry == '' &&
            state.form.studSource == '' &&
            state.form.studState == '' &&
            state.form.studStreetAddress == '' &&
            state.form.studSubUrb == '' &&
            state.form.studID == '' &&
            state.form.studDateAdded == '' &&
            state.form.studZipCode == '' &&
            state.form.descriptionText == '' &&
            state.form.yesCondition == '' &&
            state.form.noCondition == ''
            
        ){
            // state.canOpenStudModal = true
            return alert('Input Field should not be empty')
        }

        let studItem = {
            firstname: state.form.studFName,
            middlename: state.form.studMName,
            lastname: state.form.studLName,
            birthdate: state.form.studBirthdate,
            mobileno: state.form.studMobileNo,
            dateadded: state.form.studDateAdded,
            gender: state.form.studGender,
            email: state.form.studEmailAddress,
            phonehomenum: state.form.studPhoneHNum,
            phonehome: state.form.studPhoneHome,
            phoneworknum: state.form.studPhoneWNum,
            phonework: state.form.studPhoneWork,
            country: state.form.studCountry,
            source: state.form.studSource,
            state: state.form.studState,
            street: state.form.studStreetAddress,
            suburb: state.form.studSubUrb,
            ID: state.form.studID,
            zipcode: state.form.studZipCode,
            image: preview.value,
            description: state.form.descriptionText,
            yesAgree: state.form.yesCondition,
            noAgree: state.form.noCondition,
            status: 'active',
            status2: false,
            status3: false
        }

        state.studList.push(studItem)

        state.form.studFName = ''
        state.form.studMName = ''
        state.form.studLName = ''
        state.form.studBirthdate = ''
        state.form.studMobileNo = ''
        state.form.studDateAdded = ''
        state.form.studGender = ''
        state.form.studEmailAddress = ''
        state.form.studPhoneHNum = ''
        state.form.studPhoneHome = ''
        state.form.studPhoneWNum = ''
        state.form.studPhoneWork = ''
        state.form.studCountry = ''
        state.form.studSource = ''
        state.form.studState = ''
        state.form.studStreetAddress = ''
        state.form.studSubUrb = ''
        state.form.studID = ''
        state.form.studZipCode = ''
        state.form.descriptionText = ''
        state.form.yesCondition = '' 
        state.form.noCondition = ''

        clearInput()
    }
    const yesCondition = () => {
        state.form.studCondition = false
    }
    const noCondition = () => {
        state.form.studCondition = true
    }
    const clearInput = () => {
        const { preview } = useUploadStudImage()
        state.form = {
            studFName: '',
            studMName: '',
            studLName: '',
            studBirthdate: '',
            studGender: '',
            studMobileNo: '',
            studDateAdded: '',
            studEmailAddress: '',
            studPhoneHome: '',
            studPhoneHNum: '',
            studPhoneWork: '',
            studPhoneWNum: '',
            studStreetAddress: '',
            studSubUrb: '',
            studState: '',
            studCountry: '',
            studZipCode: '',
            studID: '',
            studSource: '',
            studCondition: false,
            descriptionText: '',
            yesCondition: '',
            noCondition: '',
        }
         state.goalList = []
         preview.value = null
    }
    
    return {
        ...toRefs(state),
        addStud,
        noCondition,
        yesCondition,
        addGoals,
        removeGoal,
        clearInput,
    }
}