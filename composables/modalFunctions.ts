
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
    isAssignStudentModalOpen: false,
    isConfirmAssignStudentModal: false,
    isAssignStudentModal: false,
    isUnassignStudentModal: false,
    isUnpublishModal: false,
    isUpdateModal: false,
    isCreateTimeTable: false,
    isArchiveTable: false,
    isEditTable: false,
    isRestoreTable: false,
    isClassTable: false
})

export default function () {

    const openClassTable = () => {
        state.isClassTable = !state.isClassTable
    }

    const openRestoreTable = () => {
        state.isRestoreTable = !state.isRestoreTable
    }

    const openEditTable = () => {
        state.isEditTable = !state.isEditTable
    }

    const openArchiveTable = () => {
        state.isArchiveTable = !state.isArchiveTable
    }

    const openCreateTimeTable = () => {
        state.isCreateTimeTable = !state.isCreateTimeTable
    }

    const openUpdateProgramModal = () => {
        state.isUpdateModal = !state.isUpdateModal
    }

    const openUnpublishModal = () => {
        state.isUnpublishModal = !state.isUnpublishModal
    }

    const openAssignConfirm = () => {
        state.isAssignStudentModal = true
    }

    const closeAssignConfirm = () => {
        state.isAssignStudentModal = false
    }

    const openUnassignConfirm = () => {
        state.isUnassignStudentModal = true
    }

    const closeUnassignConfirm = () => {
        state.isUnassignStudentModal = false
    }

    const closeAssignStudentModal = () => {
        state.isAssignStudentModalOpen = false
    }
    
    const openConfirmAssignStudent = () => {
        closeAssignStudentModal()
        state.isConfirmAssignStudentModal = true
        setTimeout(() => {
            state.isConfirmAssignStudentModal = false
        }, 2000);
    }

    const openAssignStudentModal = () => {
        state.isAssignStudentModalOpen = true
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
        openConfirmAssignStudent,
        openAssignConfirm,
        closeAssignConfirm,
        openUnassignConfirm,
        closeUnassignConfirm,
        openUnpublishModal,
        openUpdateProgramModal,
        openCreateTimeTable,
        openArchiveTable,
        openEditTable,
        openRestoreTable,
        openClassTable,
    }
}