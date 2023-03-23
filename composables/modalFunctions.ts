
const state = reactive({
    isHoldOnModal: false,
    isLeadModalOpen: false,
    isLeadOnHoldModalOpen: false,
    isToogleReturnDate: false,
    isToogleReactivate: false
})

export default function () {

    const openHoldOnModal = () => {
        
    }

    const openLeadModal = () => {
        setTimeout(() => {
            state.isLeadModalOpen = true
        }, 2000);
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
        state.isLeadOnHoldModalOpen = true
    }

    const cancelOnHoldModal = () => {
        state.isLeadOnHoldModalOpen = false
    }

    const saveLead = () => {
        addLead()

        setTimeout(() => {
            openLeadModal()
        }, 1000);
    }
    return{
        ...toRefs(state),
        openLeadModal,
        closeLeadModal,
        saveLead,
        addLead,
        openOnHoldModal,
        cancelOnHoldModal,
        toogleReturnDate,
        toogleReactivate,
    }
}