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

    return {
        ...toRefs(state),
        clickViewProfile,
    }
}