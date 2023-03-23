const state = reactive({
    leadStatusItem: {}
})

export default function () {

    const useActiveStatus = (leads: Object) => {
        state.leadStatusItem = leads
        state.leadStatusItem.status = 'Test'
    }

    const useColdStatus = (leads: Object) => {
        state.leadStatusItem = leads
        state.leadStatusItem.status = 'Cold'
    }

    const useDeadStatus = (leads: Object) => {
        state.leadStatusItem = leads
        state.leadStatusItem.status = 'Dead'
    }

    return{
        ...toRefs(state),
        useActiveStatus,
        useColdStatus,
        useDeadStatus,
    }
}