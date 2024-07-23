import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
  LOGOUT_USER,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  VERIFY_REGISTER_BEGIN,
  VERIFY_REGISTER_SUCCESS,
  VERIFY_REGISTER_ERROR,
/////////////////////////////////////////////////////////////////////////////////////////
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  DELETE_JOB_ERROR,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_LIST_USER_BEGIN,
  GET_LIST_USER_SUCCESS,
  SORT_COLUMN,
  SET_ITEM_PER_PAGE,
  MANAGE_USER_BEGIN,
  MANAGE_USER_SUCCESS,
  MANAGE_USER_ERROR,
  SET_SEARCH,
  GET_LIST_DATA_BEGIN,
  GET_LIST_DATA_SUCCESS,
  CREATE_DATA_BEGIN,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_ERROR,
  UPDATE_DATA_BEGIN,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  DELETE_DATA_BEGIN,
  DELETE_DATA_ERROR,
  TOGGLE_PROFILE_MODAL,
  TOGGLE_SHARE_PROFILE,
  GET_NOTIFICATIONS_USERNAME_BEGIN,
  GET_NOTIFICATIONS_USERNAME_SUCCESS,
  EDIT_USER_VIEW_RULE_BEGIN,
  EDIT_USER_VIEW_RULE_SUCCESS,
  EDIT_USER_VIEW_RULE_ERROR,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_BEGIN,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
        };
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            showAlert: false,
            alertType: '',
            alertText: '',
        };
    }

    if (action.type === GET_CURRENT_USER_BEGIN) {
        return { 
            ...state, 
            userLoading: true, 
            showAlert: false 
        };
    }
    if (action.type === GET_CURRENT_USER_SUCCESS) {
        return {
            ...state,
            userLoading: false,
            user: action.payload.user,
        };
    }
    if (action.type === GET_CURRENT_USER_FAILED) {
        return {
            ...state,
            userLoading: false,
            user: null,
        };
    }

    //Login State
    if( action.type === LOGIN_USER_BEGIN ){
        return { 
            ...state, 
            isLoading: true,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            errorDetail: {},
        };
    }
    if( action.type === LOGIN_USER_SUCCESS ){
        return {
            ...state, 
            isLoading: false,
            user: action.payload.user,
            isSuccess: true,
            successMessage: action.payload.message,
            token: action.payload.token,
        };
    }
    if( action.type === LOGIN_USER_ERROR ){
        return {
            ...state, 
            isLoading: false,
            isError: true,
            errorMessage: action.payload.message,
            errorDetail: action.payload.data,
        };
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            userLoading: false,
        };
    }

    //Register State
    if( action.type === REGISTER_USER_BEGIN ){
        return { 
            ...state, 
            isLoading: true,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            errorDetail: {},
        };
    }
    if( action.type === REGISTER_USER_SUCCESS ){
        return {
            ...state, 
            isLoading: false,
            isSuccess: true,
            successMessage: action.payload.message,
        };
    }
    if( action.type === REGISTER_USER_ERROR ){
        return {
            ...state, 
            isLoading: false,
            isError: true,
            errorMessage: action.payload.message,
            errorDetail: action.payload.data,
        };
    }

    //Forgot Password State
    if( action.type === FORGOT_PASSWORD_BEGIN ){
        return { 
            ...state, 
            isLoading: true,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            errorDetail: {},
        };
    }
    if( action.type === FORGOT_PASSWORD_SUCCESS ){
        return {
            ...state, 
            isLoading: false,
            isSuccess: true,
            successMessage: action.payload.message,
        };
    }
    if( action.type === FORGOT_PASSWORD_ERROR ){
        return {
            ...state, 
            isLoading: false,
            isError: true,
            errorMessage: action.payload.message,
            errorDetail: action.payload.data,
        };
    }

    //Reset Password State
    if( action.type === RESET_PASSWORD_BEGIN ){
        return { 
            ...state, 
            isLoading: true,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            errorDetail: {},
        };
    }
    if( action.type === RESET_PASSWORD_SUCCESS ){
        return {
            ...state, 
            isLoading: false,
            isSuccess: true,
            successMessage: action.payload.message,
        };
    }
    if( action.type === RESET_PASSWORD_ERROR ){
        return {
            ...state, 
            isLoading: false,
            isError: true,
            errorMessage: action.payload.message,
            errorDetail: action.payload.data,
        };
    }

    //Verify Register State
    if( action.type === VERIFY_REGISTER_BEGIN ){
        return { 
            ...state, 
            isLoading: true,
            isSuccess: false,
            successMessage: '',
            isError: false,
            errorMessage: '',
            errorDetail: {},
        };
    }
    if( action.type === VERIFY_REGISTER_SUCCESS ){
        return {
            ...state, 
            isLoading: false,
            isSuccess: true,
            successMessage: action.payload.message,
        };
    }
    if( action.type === VERIFY_REGISTER_ERROR ){
        return {
            ...state, 
            isLoading: false,
            isError: true,
            errorMessage: action.payload.message,
            errorDetail: action.payload.data,
        };
    }


/////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      jobLocation: state.userLocation,
      jobType: 'full-time',
      status: 'pending',
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Job Updated!',
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
/////////////////////////////////////////////////////////////////////////////////////////

  if( action.type === GET_LIST_USER_BEGIN ){
    return { 
        ...state, 
        isLoading: true,
        isSuccess: false,
        successMessage: '',
        isError: false,
        errorMessage: '',
        errorDetail: {},
    };
  }
  if( action.type === GET_LIST_USER_SUCCESS ){
    return {
        ...state, 
        isLoading: false,
        users: action.payload.data,
        totalUsers: action.payload.total,
        numOfPages: action.payload.totalPage,
    };
  }
  if(action.type === SORT_COLUMN){
    return{
      ...state,
      sortBy: action.payload.sortBy,
      sortMethod: action.payload.sortMethod,
    }
  }
  if(action.type === SET_ITEM_PER_PAGE){
    return{
      ...state,
      itemPerPage: action.payload.itemPerPage
    }
  }
  if (action.type === MANAGE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === MANAGE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.msg,
    };
  }
  if (action.type === MANAGE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if(action.type === SET_SEARCH){
    return{
      ...state,
      search: action.payload.search,
      searchColumn: action.payload.searchColumn,
      searchType: action.payload.searchType
    }
  }
  if( action.type === GET_LIST_DATA_BEGIN ){
    return { 
        ...state, 
        isLoading: true,
        isSuccess: false,
        successMessage: '',
        isError: false,
        errorMessage: '',
        errorDetail: {},
    };
  }
  if( action.type === GET_LIST_DATA_SUCCESS ){
    return {
        ...state, 
        isLoading: false,
        data: action.payload.data,
        totalData: action.payload.total,
        numOfPages: action.payload.totalPage,
    };
  }

  if (action.type === CREATE_DATA_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_DATA_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
      data: action.payload.data
    };
  }
  
  if (action.type === CREATE_DATA_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if( action.type === GET_LIST_DATA_SUCCESS ){
    return {
        ...state, 
        isLoading: false,
        data: action.payload.data,
        totalData: action.payload.total,
        numOfPages: action.payload.totalPage,
    };
  }

  if (action.type === UPDATE_DATA_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_DATA_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === UPDATE_DATA_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  
  if (action.type === DELETE_DATA_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_DATA_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_PROFILE_MODAL) {
    return {
      ...state,
      showProfileModal: !state.showProfileModal,
    };
  }

  if (action.type === TOGGLE_SHARE_PROFILE) {
    return {
      ...state,
      showShareProfile: !state.showShareProfile,
    };
  }

  if( action.type === GET_NOTIFICATIONS_USERNAME_BEGIN ){
    return { 
        ...state, 
        isLoading: true,
        isSuccess: false,
        successMessage: '',
        isError: false,
        errorMessage: '',
        errorDetail: {},
    };
  }
  if( action.type === GET_NOTIFICATIONS_USERNAME_SUCCESS ){
    return {
        ...state, 
        isLoading: false,
        data: action.payload.data,
        totalData: action.payload.total,
        numOfPages: action.payload.totalPage,
    };
  }
  if (action.type === EDIT_USER_VIEW_RULE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_USER_VIEW_RULE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User View Rule Updated!',
    };
  }
  if (action.type === EDIT_USER_VIEW_RULE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === UPDATE_PROFILE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_PROFILE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
