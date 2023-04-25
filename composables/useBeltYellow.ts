const state = reactive({
    YsubR1: 0,
    YsubR2: 0,
    YsubR3: 0,
    YsubR4: 0,

    YsubD1: 0,
    YsubD2: 0,
    YsubD3: 0,
    YsubD4: 0,
})

export default function () {

    const YtotalRanks = computed(() => {
        return state.YsubR1 + state.YsubR2  + state.YsubR3  + state.YsubR4
    })

    const YtotalDays = computed(() => {
        return state.YsubD1 + state.YsubD2  + state.YsubD3  + state.YsubD4
    })


    return {
        ...toRefs(state),
        YtotalRanks,
        YtotalDays,
    }
}