
export const homeInitialState = {
  showMenu: false,
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
    activePeriod: 'all',
    periods: [],
    listFood: [],
    listOriginFood: []
  },
  statistical: {
    myRecord: [],
    chartRecord: [],
    tableExercise: [],
    tableDiary: [],
    tableDiaryOrigin: [],
  },
  recommended: {
    category: [],
    list: [],
    listOrigin: [],
  },
  footer: {
    list: [] 
  },
  scrollTop: false
}


export const homeAction = {
  SHOW_MENU: 'SHOW_MENU',
  UPDATE_OVERVIEW_CHART: 'UPDATE_OVERVIEW_CHART',

  UPDATE_FOOD_PERIODS: 'UPDATE_FOOD_PERIODS',
  UPDATE_FOOD_LIST: 'UPDATE_FOOD_LIST',
  UPDATE_FOOD_LIST_ORIGIN: 'UPDATE_FOOD_LIST_ORIGIN',
  UPDATE_FOOD_ACTIVE_PERIODS: 'UPDATE_FOOD_ACTIVE_PERIODS',

  UPDATE_STATISTICAL_RECORD: 'UPDATE_STATISTICAL_RECORD',
  UPDATE_STATISTICAL_CHART: 'UPDATE_STATISTICAL_CHART',
  UPDATE_STATISTICAL_EXERCISE: 'UPDATE_STATISTICAL_EXERCISE',
  UPDATE_STATISTICAL_DIARY_ORIGIN: 'UPDATE_STATISTICAL_DIARY_ORIGIN',
  UPDATE_STATISTICAL_DIARY: 'UPDATE_STATISTICAL_DIARY',

  UPDATE_RECOMMENDED_CATEGORY: 'UPDATE_RECOMMENDED_CATEGORY',
  UPDATE_RECOMMENDED_LIST: 'UPDATE_RECOMMENDED_LIST',
  UPDATE_RECOMMENDED_LIST_ORIGIN: 'UPDATE_RECOMMENDED_LIST_ORIGIN',

  UPDATE_FOOTER_LIST: 'UPDATE_FOOTER_LIST',
  SCROLL_TO_TOP: 'SCROLL_TO_TOP'
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case homeAction.SHOW_MENU:
      return {
        ...state,
        showMenu: action.payload || false
      }

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

    case homeAction.UPDATE_FOOD_LIST:
      return {
        ...state,
        foods: {
          ...state.foods,
          listFood: action?.payload || [],
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

    case homeAction.UPDATE_FOOD_ACTIVE_PERIODS:
      return {
        ...state,
        foods: {
          ...state.foods,
          activePeriod: action.payload
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

    case homeAction.UPDATE_STATISTICAL_DIARY_ORIGIN:
      return {
        ...state,
        statistical: {
          ...state.statistical,
          tableDiary: action.payload.tableDiary,
          tableDiaryOrigin: action.payload.tableDiaryOrigin
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

    case homeAction.UPDATE_RECOMMENDED_LIST_ORIGIN:
      return {
        ...state,
        recommended: {
          ...state?.recommended,
          list: action.payload?.list,
          listOrigin: action.payload?.listOrigin
        } 
      }

    case homeAction.UPDATE_RECOMMENDED_LIST:
      console.log('action.payload', action.payload);
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

    case homeAction.SCROLL_TO_TOP:
      return {
        ...state,
        scrollTop: action.payload
      }
    default: break
  }
}