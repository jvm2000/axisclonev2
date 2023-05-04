const state = reactive({
    syllabusList: [],
    syllabusName: '',
    isSyllabusAdded: false,
    syllabusViewObject: {},
    indexToDelete: 0,
    syllabusUpdate: ''
})

export default function () {

    const addSyllabus = () => {

        if(state.syllabusName == ''){
            return alert('Input Field should not be empty')
        }
        let syllabusItem  = {
            id: 0,
            addedSyllabus: state.syllabusName,
            syllabusStatus: 'Undefined'
        }

        state.syllabusList.push(syllabusItem)
        state.syllabusName = ''

    }

    const populatSyllabus = () => {
        if(state.syllabusList.length) {
            let i = 0
            state.syllabusList  
                .forEach(syllabus => {
                    syllabus.id = i++
                })
        }
    }

    const duplicateSyllabus = (syllabus: Object) => {
        state.syllabusViewObject = syllabus
        let syllabusItem = {
            id: 1,
            addedSyllabus: state.syllabusViewObject.addedSyllabus,
            syllabusStatus: state.syllabusViewObject.syllabusStatus
        }
        state.syllabusList.push(syllabusItem)
        state.syllabusName = ''
    }

    const deleteSyllabus = (syllabus: Object) => {
        state.syllabusViewObject = syllabus
        state.syllabusList.splice(state.indexToDelete, 1)
    }

    const clickViewSyllabus = (syllabus: Object) => {
        state.syllabusViewObject = syllabus
    }

    const updateSyllabus = (syllabus: Object) => {
        state.syllabusViewObject = syllabus
        state.syllabusViewObject.addedSyllabus = state.syllabusUpdate
        console.log('UPDATED!')
    }

    return{
        ...toRefs(state),
        addSyllabus,
        duplicateSyllabus,
        deleteSyllabus,
        clickViewSyllabus,
        updateSyllabus,
    }
}