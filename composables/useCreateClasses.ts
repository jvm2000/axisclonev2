const state = reactive({
    classList: [],
    className: '',
    classProgram: '',
    classSyllabus: '',
    classColor: '',
    classRanks: [],
    image: null,
    file: null,
    preview: null,
    notEmpty: false,
    colorObj: {},
    valueObj: {},
    ranksObj: {},
})

export default function () {
    
    const createClass = () => {

        let item = {
            name: state.className,
            image: state.preview,
            color: state.colorObj.color,
            value: state.valueObj,
            program: state.classProgram,
            syllabus: state.classSyllabus,
            ranks: state.classRanks,
        }
        state.classList.push(item)
        state.image = null
        state.className = ''
        state.classProgram = ''
        state.classSyllabus = ''
        state.colorObj = {}
        state.classRanks = []
        state.preview = null

    }

    const getClassValue = (cvalue: Object) => {
        state.valueObj = cvalue
    }

    // const getClassColor = (color: Object) => {
    //     state.colorObj.color = color
    // }

    const getClassColor = (cols: Object) => {
        state.colorObj = cols
    }


    const getClassRanks = (ranks: Object) => {
        state.ranksObj = ranks
        state.classRanks.push(state.ranksObj)
    }

    const selectRank = (selected: Boolean) => {
        state.ranksObj.selected = selected
    }

    const handleChange = () => {
        if (!state.image.files.length) return
        
        if (state.image.files[0].size > 10000 * 1000) {
          useErrorToast({ message: 'File size exceeds 10MB' })
    
          return
        }
    
        const reader = new FileReader();
    
        reader.onload = (e) => {
          state.preview = e.target.result;
        };
    
        reader.readAsDataURL(state.image.files[0]);
        state.file = state.image.files[0]
      }
    
      const selectNewImage = () => {
        state.image.click();
      }

    return {
        ...toRefs(state),
        createClass,
        getClassColor,
        getClassValue,
        selectRank,
        getClassRanks,
        handleChange,
        selectNewImage,
    }
}