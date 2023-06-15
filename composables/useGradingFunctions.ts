const state = reactive({
  objGrading: {}
})

export default function () {

  const getObjGrading = (students: Object) => computed(() =>
    state.objGrading = students
  )

  return {
    ...toRefs(state),
    getObjGrading,
  }
}