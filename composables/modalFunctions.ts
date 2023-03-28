
const state = reactive({
    isHoldOnModal: false,
    isLeadModalOpen: false,
    isInactiveModal: false,
    isConfirmActiveModal: false,
    isLeadOnHoldModalOpen: false,
    isToogleReturnDate: false,
    isToogleReactivate: false
})

export default function () {

    const openConfirmHoldOnModal = () => {
        cancelOnHoldModal()
        state.isHoldOnModal = true
        setTimeout(() => {
            state.isHoldOnModal = false
        }, 2000);
    }

    const openConfirmInactiveModal = () => {
        closeInactiveModal()
        state.isInactiveModal = true
        setTimeout(() => {
            state.isInactiveModal = false
        }, 2000);
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

    const openInactiveModal = () => {
        state.isInactiveModal = true
    }

    const closeInactiveModal = () => {
        state.isInactiveModal = false
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
        openConfirmHoldOnModal,
        closeHoldOnModal,
        openInactiveModal,
        closeInactiveModal,
        openConfirmInactiveModal,
    }
}