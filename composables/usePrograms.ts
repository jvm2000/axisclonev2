const state = reactive({
    programViewItem: {}
})

export default function () {

    const clickViewProgram = (syllabus: Object) => {
        state.programViewItem = syllabus
    }

    const setSyllabusStatus = (syllabusStatus: string) => {
        state.programViewItem.syllabusStatus = syllabusStatus 
    }

    return {
        ...toRefs(state),
        clickViewProgram,
        setSyllabusStatus,
    }
}