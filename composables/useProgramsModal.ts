const state = reactive({
    isProgramsModal: false
})

export default function () {

    const openProgramsModal = () => {
        state.isProgramsModal = true
    }

    const closeProgramsModal = () => {
        state.isProgramsModal = false
    }

    return {
        ...toRefs(state),
        openProgramsModal,
        closeProgramsModal,
    }
}