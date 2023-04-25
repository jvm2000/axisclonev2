
const state = reactive({
    isHoldOnModal: false,
    isLeadModalOpen: false,
    isStudModalOpen: false,
    isInactiveModal: false,
    isConfirmInactiveModal: false,
    isConfirmActiveModal: false,
    isLeadOnHoldModalOpen: false,
    isToogleReturnDate: false,
    isToogleReactivate: false,
    isToogleInactive: false,
    isSyllabusPreviewModalOpen: false,
    isDraftModalOpen: false,
    isPublishModalOpen: false,
    isAssignStudentModalOpen: false
})

export default function () {

    const openAssignStudentModal = () => {
        state.isAssignStudentModalOpen = true
    }

    const closeAssignStudentModal = () => {
        state.isAssignStudentModalOpen = false
    }

    const openDraftModal = () => {
        state.isDraftModalOpen = true
        setTimeout(() => {
            state.isDraftModalOpen = false
        }, 2000);
    }

    const openPublishModal = () => {
        state.isPublishModalOpen = true
        setTimeout(() => {
            state.isPublishModalOpen = false
        }, 2000);
    }
    const openSyllabusPreviewModal = () => {
        state.isSyllabusPreviewModalOpen = true
    }
    
    const closeSyllabusPreviewModal = () => {
        state.isSyllabusPreviewModalOpen = false
    }
    
    const openConfirmHoldOnModal = () => {
        cancelOnHoldModal()
        state.isHoldOnModal = true
        setTimeout(() => {
            state.isHoldOnModal = false
        }, 2000);
    }

    const openConfirmInactiveModal = () => {
        closeInactiveModal()
        state.isConfirmInactiveModal = true
        setTimeout(() => {
            state.isConfirmInactiveModal = false
        }, 2000);
    }

    const closeHoldOnModal = () => {
        state.isHoldOnModal = false
    }

    const openLeadModal = () => {
        state.isLeadModalOpen = true
    }

    const openStudModal = () => {
        state.isStudModalOpen = true
    }

    const closeStudModal = () => {
        state.isStudModalOpen = false
    }

    const toogleReturnDate = () => {
        state.isToogleReturnDate = !state.isToogleReturnDate
    }

    const toogleReactivate = () => {
        state.isToogleReactivate = !state.isToogleReactivate
    }

    const toogleInactive = () => {
        state.isToogleInactive = !state.isToogleInactive
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
        setTimeout(() => {
            state.isInactiveModal = true
        }, 1000);
    }

    const closeInactiveModal = () => {
        state.isInactiveModal = false
    }

    const saveLead = () => {
        setTimeout(() => {
            openLeadModal()
        }, 1000);
    }

    const saveStud = () => {
        setTimeout(() => {
            openStudModal()
        }, 1000);
    }
    return{
        ...toRefs(state),
        openLeadModal,
        closeLeadModal,
        openStudModal,
        closeStudModal,
        saveLead,
        saveStud,
        openOnHoldModal,
        cancelOnHoldModal,
        toogleReturnDate,
        toogleReactivate,
        openConfirmHoldOnModal,
        closeHoldOnModal,
        openInactiveModal,
        closeInactiveModal,
        openConfirmInactiveModal,
        toogleInactive,
        openSyllabusPreviewModal,
        closeSyllabusPreviewModal,
        openDraftModal,
        openPublishModal,
        openAssignStudentModal,
        closeAssignStudentModal,
    }
}