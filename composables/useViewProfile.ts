const state = reactive ({
    leadViewItem: {}
})


export default function () {

    const router = useRouter()
    
    const clickViewProfile = (leads: Object) => {
        state.leadViewItem = leads
        console.log('Test')
        router.push('/lead/leadsProfile')
    }

    const setStatus = (status: string) => {
        state.leadViewItem.status = status
    }

    return {    
        ...toRefs(state),
        clickViewProfile,
        setStatus,
    }
}