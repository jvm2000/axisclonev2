const state = reactive({
    isStudModalOpen: false
})

export default function () {
    const openStudModal = () => {
        state.isStudModalOpen = true
    }

    const closeStudModal = () => {
        state.isStudModalOpen = false
    }

    return{
        ...toRefs(state),
        openStudModal,
        closeStudModal,
    }
}