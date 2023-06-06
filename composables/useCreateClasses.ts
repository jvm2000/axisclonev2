const state = reactive({
    classList: [],
    className: '',
    classProgram: '',
    classSyllabus: '',
    classColor: '',
    classRanks: [],
    notEmpty: false,
    colorObj: {},
    valueObj: {},
    ranksObj: {},
    classObj: {},
})

export default function () {
    
    const createClass = () => {
        const { preview } = useUploadClass()
        let item = {
            name: state.className,
            image: preview.value,
            color: state.colorObj.color,
            value: state.valueObj,
            program: state.classProgram,
            syllabus: state.classSyllabus,
            ranks: state.classRanks,
        }
        state.classList.push(item)
        state.className = ''
        state.classProgram = ''
        state.classSyllabus = ''
        state.colorObj = {}
        state.classRanks = []
        preview.value = null

    }
    const getClassObj = (classes: Object) => {
        state.classObj = classes
    }

    const getClassColor = (cols: Object) => {
        state.colorObj = cols
    }


    const getClassRanks = (ranks: Object) => {
        state.ranksObj = ranks
        state.classRanks.push(state.ranksObj)
    }

    const selectRank = (selected: Boolean) => {
        state.ranksObj.selected = selected
    }

    return {
        ...toRefs(state),
        createClass,
        getClassColor,
        selectRank,
        getClassRanks,
        getClassObj,
    }
}