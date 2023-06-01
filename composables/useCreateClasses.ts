const state = reactive({
    classList: [],
    className: '',
    classProgram: '',
    classSyllabus: '',
    classColor: '',
    classRanks: '',
    image: null,
    file: null,
    preview: null,
    notEmpty: false,
    ranksList: 
    [
        {
            color: 'bg-[#FFFFFF]', 
            value: 'White Belt', 
            selected: false,
        },
        {
            color: 'bg-[#FFE351]', 
            value: 'Yellow Belt', 
            selected: false,
        },
        {
            color: 'bg-[#9BEA87]', 
            value: 'Green Belt', 
            selected: false,
        },
        {
            color: 'bg-[#5F7EEF]', 
            value: 'Blue Belt', 
            selected: false,
        },
        {
            color: 'bg-[#E075F1]', 
            value: 'Purple Belt', 
            selected: false,
        }
    ]
})

export default function () {
    
    const createClass = () => {

        let item = {
            name: state.className,
            image: state.preview,
            color: state.classColor,
            program: state.classProgram,
            syllabus: state.classSyllabus,
            ranks: state.classRanks,
        }
        state.classList.push(item)
        state.image = null
        state.className = ''
        state.classProgram = ''
        state.classSyllabus = ''
        state.classColor = ''
        state.classRanks = ''
        state.preview = null

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
        handleChange,
        selectNewImage,
    }
}