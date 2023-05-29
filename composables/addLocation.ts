const state = reactive({
    locationList: [],
    locationN: '',
    locationObj: {},
    objName: {},
    isDup: false,
    i: 0,
})

export default function () {


    const objL = (locals: Object) => {
        state.locationObj = locals
    }

    const add = () => {
        
        for(state.i;state.i<=state.locationList.length; state.i++){
            if(state.locationN == state.locationList[state.i]){
                return alert('Invalid! Input already exists!')
            }
        }

        if(state.locationN == '')
            return alert('Invalid! Please input a location.')

        let location = {
            name: state.locationN,
            classes: [],
            classOn: false,
        }
        state.locationList.push(location)
        state.locationN = ''
    }

    const onClass = (classOn: Boolean) => {
        state.locationObj.classOn = classOn
    }

    return{
        ...toRefs(state),
        add,
        objL,
        onClass,
    }
}