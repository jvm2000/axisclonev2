const { addLead, canOpenLeadModal } = addLeadFunctionalities()

const state = reactive({
    isLeadModalOpen: false,
})

export default function () {

    const openLeadModal = () => {
        state.isLeadModalOpen = true
    }

    const closeLeadModal = () => {
        state.isLeadModalOpen = false
    }

    const saveLead = () => {
        addLead()
        if(canOpenLeadModal.value){
        }
        else{
            openLeadModal()
        }
    }
    return{
        ...toRefs(state),
        openLeadModal,
        closeLeadModal,
        saveLead,
        addLead,
    }
}