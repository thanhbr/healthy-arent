
export const homeInitialState = {
  overview: {
    image: '',
    info: {
      conplete: 0,
      total: 0,
      percent: 0,
    },
    chart: []
  },
  foods: { 
    periods: [],
    listFood: [],
    listOriginFood: []
  },
  statistical: {
    myRecord: [],
    chartRecord: [],
    tableExercise: [],
    tableDiary: []
  },
  recommended: {
    category: [],
    list: []
  },
  footer: {
    list: [] 
  },
  scrollTop: false
}


export const homeAction = {
  UPDATE_OVERVIEW_CHART: 'UPDATE_OVERVIEW_CHART',

  UPDATE_FOOD_PERIODS: 'UPDATE_FOOD_PERIODS',
  UPDATE_FOOD_LIST_ORIGIN: 'UPDATE_FOOD_LIST_ORIGIN',

  UPDATE_STATISTICAL_RECORD: 'UPDATE_STATISTICAL_RECORD',
  UPDATE_STATISTICAL_CHART: 'UPDATE_STATISTICAL_CHART',
  UPDATE_STATISTICAL_EXERCISE: 'UPDATE_STATISTICAL_EXERCISE',
  UPDATE_STATISTICAL_DIARY: 'UPDATE_STATISTICAL_DIARY',

  UPDATE_RECOMMENDED_CATEGORY: 'UPDATE_RECOMMENDED_CATEGORY',
  UPDATE_RECOMMENDED_LIST: 'UPDATE_RECOMMENDED_LIST',

  UPDATE_FOOTER_LIST: 'UPDATE_FOOTER_LIST'
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case homeAction.UPDATE_OVERVIEW_CHART:
      return {
        ...state,
        overview: {
          ...state.overview,
          chart: action.payload
        } 
      }

    case homeAction.UPDATE_FOOD_PERIODS:
      return {
        ...state,
        foods: {
          ...state.foods,
          periods: action.payload
        } 
      }

    case homeAction.UPDATE_FOOD_LIST_ORIGIN:
      return {
        ...state,
        foods: {
          ...state.foods,
          listFood: action?.payload?.listFood || [],
          listOriginFood: action?.payload?.listOriginFood || [],
        } 
      }

    case homeAction.UPDATE_STATISTICAL_RECORD:
      return {
        ...state,
        statistical: {
          ...state.statistical,
          myRecord: action.payload
        } 
      }

    case homeAction.UPDATE_STATISTICAL_CHART:
      return {
        ...state,
        statistical: {
          ...state.statistical,
          chartRecord: action.payload
        } 
      }

    case homeAction.UPDATE_STATISTICAL_EXERCISE:
      return {
        ...state,
        statistical: {
          ...state.statistical,
          tableExercise: action.payload
        } 
      }

    case homeAction.UPDATE_STATISTICAL_DIARY:
      return {
        ...state,
        statistical: {
          ...state.statistical,
          tableDiary: action.payload
        } 
      }

    case homeAction.UPDATE_RECOMMENDED_CATEGORY:
      return {
        ...state,
        recommended: {
          ...state?.recommended,
          category: action.payload
        } 
      }

    case homeAction.UPDATE_RECOMMENDED_LIST:
      return {
        ...state,
        recommended: {
          ...state?.recommended,
          list: action.payload
        } 
      }

    case homeAction.UPDATE_FOOTER_LIST:
      return {
        ...state,
        footer: {
          ...state?.footer,
          list: action.payload
        } 
      }
    default: break
  }
}