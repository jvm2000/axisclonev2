const state = reactive({
    useActive: false,
    useHoldOn: false,
    useInactive: false
})

export default function () {

    const menuActive = () => {
        state.useHoldOn = false
        state.useInactive = false
        state.useActive = true
    }

    const menuHoldOn = () => {
        state.useInactive = false
        state.useActive = false
        state.useHoldOn = true
    }

    const menuInactive = () => {
        state.useHoldOn = false
        state.useActive = false
        state.useInactive = true
    }

    return {
        ...toRefs(state),
        menuActive,
        menuHoldOn,
        menuInactive,
    }
}