const state = reactive({
    locationList: [],
    locationN: '',
    locationUp: '',
    classN: '',
    locationObj: {},
    nameObj: {},
    objName: {},
    isDup: false,
    class: []
})

export default function () {


    const objL = (locals: Object) => {
        state.locationObj = locals
    }

    const updateObj = (name: Object) => {
        state.nameObj.name = name
        state.locationUp = state.nameObj.name
    }

    const delLoc = (canDelete: Boolean) => {
        state.locationObj.canDelete = canDelete
    }

    const classAdd = (classes: Object) => {
        if(state.classN == '')
            return alert('Invalid! Input should not be empty.')

        state.locationObj.classes = classes

        let classesObj = {
            name: state.classN,
            canDelete: false
        }

        state.locationObj.classes.push(classesObj)
        state.classN = ''

    }

    const classDel = () => {
        let element = state.locationObj
        let found = state.locationList.findIndex(element)
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
            classInput: false,
            locUpdate: false,
            canDelete: false
        }
        state.locationList.push(location)
        state.locationN = ''
    }

    const updateLocation = (name: Object) => {
        state.locationObj.name = name
        state.locationObj.name = state.locationUp
        state.locationUp = ''
    }

    const onClass = (classOn: Boolean) => {
        state.locationObj.classOn = classOn
    }
    
    const isUpdate = (locUpdate: Boolean) => {
        state.locationObj.locUpdate = locUpdate
    }

    const onClassInput = (classInput: Boolean) => {
        state.locationObj.classInput = classInput
    }

    return{
        ...toRefs(state),
        add,
        objL,
        onClass,
        classAdd,
        onClassInput,
        classDel,
        updateLocation,
        isUpdate,
        updateObj,
        delLoc,
    }
}