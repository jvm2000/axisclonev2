const state = reactive({
    editBasicInfo: false,
    editOtherInfo: false,
    editStickyNote: false,
    editMedicalCondition: false,
    editUniform: false,
    editRelationships: false
})

export default function () {

    const useBasicInfo = () => {
        state.editBasicInfo = true
    }

    const saveBasicInfo = () => {
        state.editBasicInfo = false
    }

    return {
        ...toRefs(state),
        useBasicInfo,
        saveBasicInfo,
    }
}