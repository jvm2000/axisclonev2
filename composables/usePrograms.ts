const state = reactive({
    programViewItem: {},
    studentViewItem: {},
    selectedID: [],
    assignedStudent: null,
    canViewAssignedStudents: false,
    assignedSelectedID: [],
    isAssignedStudent: false
})

export default function () {

    const clickViewProgram = (syllabus: Object) => {
        state.programViewItem = syllabus
    }

    const setSyllabusStatus = (syllabusStatus: string) => {
        state.programViewItem.syllabusStatus = syllabusStatus 
    }

    const viewAssignedStudents = () => {
        state.canViewAssignedStudents = !state.canViewAssignedStudents
    }

    const trueAssignStudent = () => {
        
    }

    return {
        ...toRefs(state),
        clickViewProgram,
        setSyllabusStatus,
        viewAssignedStudents,
    }
}