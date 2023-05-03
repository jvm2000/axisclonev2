const state = reactive({
    syllabusList: [],
    syllabusName: '',
    isSyllabusAdded: false,
    syllabusViewObject: {}
})

export default function () {
    
    const addSyllabus = () => {

        if(state.syllabusName == ''){
            return alert('Input Field should not be empty')
        }
        let syllabusItem  = {
            addedSyllabus: state.syllabusName,
            syllabusStatus: 'Undefined'
        }

        state.syllabusList.push(syllabusItem)
        state.syllabusName = ''

    }

    const populatSyllabus = () => {
        if(state.syllabusList.length) {
            let i = 1
            state.syllabusList  
                .forEach(syllabus => {
                    syllabus.id = i++
                })
        }
    }

    const duplicateSyllabus = (syllabus: Object) => {
        state.syllabusViewObject = syllabus
        let syllabusItem = {
            addedSyllabus: state.syllabusViewObject.addedSyllabus,
            syllabusStatus: 'Undefined'
        }
        state.syllabusList.push(syllabusItem)
        state.syllabusName = ''
    }

    return{
        ...toRefs(state),
        addSyllabus,
        duplicateSyllabus,
    }
}