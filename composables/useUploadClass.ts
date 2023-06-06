const state = reactive({
    image: null,
    file: null,
    preview: null
  })
  
  export default function () {
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
      handleChange,
      selectNewImage
    }
  }