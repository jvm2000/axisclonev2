const state = reactive({
    subR1: '',
    subR2: '',
    subR3: '',
    subR4: '',
})

export default function () {

    const totalSubRanks = () => {
        state.subR1 + state.subR2 + state.subR3 + state.subR4
    }

    return {
        ...toRefs(state),
        totalSubRanks,
    }
}