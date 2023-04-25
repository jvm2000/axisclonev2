const state = reactive({
    OsubR1: 0,
    OsubR2: 0,
    OsubR3: 0,
    OsubR4: 0,

    OsubD1: 0,
    OsubD2: 0,
    OsubD3: 0,
    OsubD4: 0,
})

export default function () {

    const OtotalRanks = computed(() => {
        return state.OsubR1 + state.OsubR2  + state.OsubR3  + state.OsubR4
    })

    const OtotalDays = computed(() => {
        return state.OsubD1 + state.OsubD2  + state.OsubD3  + state.OsubD4
    })


    return {
        ...toRefs(state),
        OtotalRanks,
        OtotalDays,
    }
}