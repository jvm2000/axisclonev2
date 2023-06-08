const state = reactive({
    studObj: {}
})

export default function () {

    const getStudObj = (img: Object) => {
        state.studObj.checked = img
    }

    const checkStudObj = (checked: Boolean) => {
        state.studObj.checked.checked = checked
    }

    return {
        ...toRefs(state),
        getStudObj,
        checkStudObj,
    }
}