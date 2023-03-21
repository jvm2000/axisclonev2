
const state = reactive({
    isLeadModalOpen: false,
    isLeadOnHoldModalOpen: false
})

export default function () {
    const { addLead, canOpenLeadModal } = addLeadFunctionalities()

    const openLeadModal = () => {
        state.isLeadModalOpen = true
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
    }
}