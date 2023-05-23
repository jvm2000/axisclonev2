const state = reactive({
    locationList: [],
    locationN: ''
})

export default function () {

    const add = () => {
        
        if(state.locationN == '')
            return alert('Invalid! Please input a location.')

        let location = {
            name: state.locationN,
            classes: [],
        }
        state.locationList.push(location)
        state.locationN = ''
    }

    return{
        ...toRefs(state),
        add,
    }
}