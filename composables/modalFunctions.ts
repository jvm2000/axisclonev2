
const state = reactive({
    isHoldOnModal: false,
    isLeadModalOpen: false,
    isLeadOnHoldModalOpen: false,
    isToogleReturnDate: false,
    isToogleReactivate: false
})

export default function () {

    const timeOut = setTimeout(() => {
        state.isHoldOnModal = true
    }, 2000);

    const openHoldOnModal = () => {
        state.isHoldOnModal = true
        clearTimeout(timeOut)
    }

    const closeHoldOnModal = () => {
        state.isHoldOnModal = false
    }

    const openLeadModal = () => {
        state.isLeadModalOpen = true
    }

    const toogleReturnDate = () => {
        state.isToogleReturnDate = !state.isToogleReturnDate
    }

    const toogleReactivate = () => {
        state.isToogleReactivate = !state.isToogleReactivate
    }

    const closeLeadModal = () => {
        state.isLeadModalOpen = false
    }

    const openOnHoldModal = () => {
        setTimeout(() => {
            state.isLeadOnHoldModalOpen = true
        }, 1000);
    }

    const cancelOnHoldModal = () => {
        state.isLeadOnHoldModalOpen = false
    }

    const saveLead = () => {
        setTimeout(() => {
            openLeadModal()
        }, 1000);
    }
    return{
        ...toRefs(state),
        openLeadModal,
        closeLeadModal,
        saveLead,
        openOnHoldModal,
        cancelOnHoldModal,
        toogleReturnDate,
        toogleReactivate,
        openHoldOnModal,
        closeHoldOnModal,
    }
}