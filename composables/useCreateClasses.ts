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
    classListArchive: [],
    indexObj: {}
})

export default function () {

    const clearClass = () => {
        state.className = ''
        state.classProgram = ''
        state.classSyllabus = ''
        state.colorObj = {}
        state.classRanks = []
    }

    const createClass = () => {
        const { preview } = useUploadClass()
        let item = {
            name: state.className,
            image: preview.value,
            color: state.colorObj.color,
            value: state.valueObj,
            program: state.classProgram,
            syllabus: state.classSyllabus,
            ranks: state.classRanks.splice(0,5),
        }
        state.classList.push(item)
        clearClass()
        preview.value = null

    }

    const archiveClass = (classes: Object) => {
        state.classObj = classes
        let item = {
            name: state.classObj.name,
            image: state.classObj.image,
            color: state.classObj.color,
            program: state.classObj.program,
            syllabus: state.classObj.syllabus,
            ranks: state.classObj.ranks,
        }
        state.classListArchive.push(item)
        state.classList.splice(state.indexObj, 1)
        clearClass()
    }

    const restoreClass = (classes: Object) => {
        state.classObj = classes
        let item = {
            name: state.classObj.name,
            image: state.classObj.image,
            color: state.classObj.color,
            program: state.classObj.program,
            syllabus: state.classObj.syllabus,
            ranks: state.classObj.ranks,
        }
        state.classList.push(item)
        state.classListArchive.splice(state.indexObj, 1)
        clearClass()
    }

    const getIndex = (index: Object) => {
        state.indexObj = index
    }

    const getClassObj = (classes: Object) => {
        state.classObj = classes
        state.className = state.classObj.name
        state.classProgram = state.classObj.program
        state.classSyllabus = state.classObj.syllabus
    }

    const updateClass = (classes: Object) => {
        state.classObj = classes
        state.classObj.name = state.className
        state.classObj.syllabus = state.classSyllabus
        state.classObj.program = state.classProgram
        state.className = ''
        state.classSyllabus = ''
        state.classProgram = ''

    }

    const getClassColor = (cols: Object) => {
        state.colorObj = cols
    }

    const getClassObjColor = (cols: Object) => {
        state.classObj = cols
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
        updateClass,
        clearClass,
        archiveClass,
        restoreClass,
        getClassColor,
        getClassObjColor,
        selectRank,
        getClassRanks,
        getClassObj,
        getIndex,
    }
}