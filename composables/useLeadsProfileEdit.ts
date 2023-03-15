const state = reactive({
    editBasicInfo: false,
    editAddressInfo: false,
    editContactInfo: false,
    editOtherInfo: false,
    editStickyNote: false,
    editMedicalCondition: false,
    editUniform: false,
    addUniform: false,
    editRelationships: false,
    toogleBold: false,
    toogleItalic: false,
})

export default function () {

    const useBold = () => {
        state.toogleBold = !state.toogleBold
    }

    const useItalic = () => {
        state.toogleItalic = !state.toogleItalic
    }

    const useBasicInfo = () => {
        state.editBasicInfo = true
    }

    const saveBasicInfo = () => {
        state.editBasicInfo = false
    }

    const useAddressInfo = () => {
        state.editAddressInfo = true
    }

    const saveAddressInfo = () => {
        state.editAddressInfo = false
    }

    const useContactInfo = () => {
        state.editContactInfo = true
    }

    const saveContactInfo = () => {
        state.editContactInfo = false
    }

    const useOtherInfo = () => {
        state.editOtherInfo = true
    }

    const saveOtherInfo = () => {
        state.editOtherInfo = false
    }

    const useStickyNote = () => {
        state.editStickyNote = true
    }

    const saveStickyNote = () => {
        state.editStickyNote = false
    }

    const useMedicalCondition = () => {
        state.editMedicalCondition = true
    }

    const saveMedicalCondition = () => {
        state.editMedicalCondition = false
    }

    const useUniform = () => {
        state.editUniform = true
    }

    const saveUniform = () => {
        state.editUniform = false
    }

    const useAddUniform = () => {
        state.addUniform = true
    }

    const closeAddUniform = () => {
        state.addUniform = false
    }

    const useRelationship = () => {
        state.editRelationships = true
    }

    const saveRelationship = () => {
        state.editRelationships = false
    }

    return {
        ...toRefs(state),
        useBasicInfo,
        saveBasicInfo,
        useAddressInfo,
        saveAddressInfo,
        useContactInfo,
        saveContactInfo,
        useOtherInfo,
        saveOtherInfo,
        useStickyNote,
        saveStickyNote,
        useMedicalCondition,
        saveMedicalCondition,
        useBold,
        useItalic,
        useUniform,
        saveUniform,
        useAddUniform,
        useRelationship,
        saveRelationship,
        closeAddUniform,
    }
}