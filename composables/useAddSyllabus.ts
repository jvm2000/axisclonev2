const state = reactive({
    syllabusList: [],
    syllabusName: '',
    isSyllabusAdded: false
})

export default function () {
    
    const addSyllabus = () => {

        if(state.syllabusName == ''){
            return alert('Input Field should not be empty')
        }
        let syllabusItem  = {
            addedSyllabus: state.syllabusName,
        }

        state.syllabusList.push(syllabusItem)
        state.syllabusName = ''

    }

    const populatSyllabus = () => {
        if(state.syllabusList.length) {
            let i = 1
            state.syllabusList  
                .forEach(studs => {
                    studs.id = i++
                })
        }
    }

    return{
        ...toRefs(state),
        addSyllabus,
    }
}