import React, { useReducer, useContext, useEffect } from 'react';
import { HOST_URL } from './../configs/constants'
import reducer from './reducer';
import axios from 'axios';


import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    LOGOUT_USER,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAILED,
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
    CLEAR_DATA_VALUES,
    DELETE_DATA_BEGIN,
    DELETE_DATA_ERROR,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_BEGIN,
    UPDATE_DATA_ERROR,
    TOGGLE_PROFILE_MODAL,
    TOGGLE_SHARE_PROFILE,
    GET_NOTIFICATIONS_USERNAME_BEGIN,
    GET_NOTIFICATIONS_USERNAME_SUCCESS,
    EDIT_USER_VIEW_RULE_BEGIN,
    EDIT_USER_VIEW_RULE_ERROR,
    UPDATE_PROFILE_BEGIN,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_ERROR,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  user: user? JSON.parse(user) : null,
  token: token,
  userLoading: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  errorDetail: {},
  isSuccess: false,
  successMessage: '',
/////////////////////////////////////////////////////////////////////////////////////////
  showAlert: false,
  alertText: '',
  alertType: '',
  userLocation: '',
  showSidebar: false,
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  users: [],
  totalUsers: 0,
  numOfPages: 1,
  page: 1,
  data: [],
  totalData: 0,
  stats: {},
  monthlyApplications: [],
  search: '',
  searchColumn: '',
  searchStatus: 'all',
  searchType: 'all',
  sortBy: '',
  sortMethod: '',
  itemPerPage: 10,
  showProfileModal: false,
  showShareProfile: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: HOST_URL,
        headers: {
            Authorization: `Bearer ${state.token}`,
        }
    });
    
    const unAuthFetch = axios.create({
        baseURL: HOST_URL,
    });

    // request
    // authFetch.interceptors.request.use(
    //     (config) => {
    //       console.log( "CONFIG", config )
    //       config.headers['Authorization'] = `Bearer ${state.token}`
    //     },
    //     (request) => {
    //       console.log( "REQUEST", request )
    //       return request;
    //     },
    //     (error) => {
    //         return Promise.reject(error)
    //     }
    // );

    // response
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
          if (!error.response || error.response.status === 401) {
              logoutUser();
          }
          return Promise.reject(error);
        }
    );

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };

    const logoutUser = async () => {
        // await authFetch.get('/auth/logout');
        dispatch({ type: LOGOUT_USER });
        removeUserFromLocalStorage();
    };

    const loginUser = async ({email, password}) => {
        dispatch({ type: LOGIN_USER_BEGIN });
        try{
            const response = await unAuthFetch.post(
              `/auth/login`,
              { "email": email, "password": password }
            );
            const {access_token, data, message} = response.data;
            const user = data;
            const token = access_token;

            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: { user: user, message: message, token: token },
            });
            addUserToLocalStorage({user, token});
        } catch (error) {
            console.log(error);
            const { data } = error.response; 
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { message: data.message, data: data.data },
            });
        }
    };

    const addUserToLocalStorage = ({user, token}) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    };
   
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    };

    const getCurrentUser = async () => {
        if( !state.userLoading ){
            dispatch({ type: GET_CURRENT_USER_BEGIN });
            try {
                const oldUser = state.user;
                if( oldUser ){
                    const { data } = await authFetch(`/users/${oldUser._id}`);
                    const newUser = data.data;
    
                    dispatch({
                        type: GET_CURRENT_USER_SUCCESS,
                        payload: { user: newUser },
                    });
                }
            } catch (error) {
                dispatch({ type: GET_CURRENT_USER_FAILED });
                if (error.response.status === 401) 
                    return;
                logoutUser();
            }  
        }
    };

    const registerUser = async ({email, password, role}) => {
      dispatch({ type: REGISTER_USER_BEGIN });
      try{
          const response = await unAuthFetch.post(
              `/auth/register`, { 
                  "email": email, 
                  "password": password, 
                  "role": role.toLowerCase(), 
              }
          );
          const {message} = response.data;

          dispatch({
              type: REGISTER_USER_SUCCESS,
              payload: { message: message },
          });
          return true;
      } catch (error) {
          const { data } = error.response; 
          dispatch({
              type: REGISTER_USER_ERROR,
              payload: { message: data.message, data: data.data },
          });
      }
      return false;
    };

    const forgotPassword = async ({email}) => {
      dispatch({ type: FORGOT_PASSWORD_BEGIN });
      try{
          const response = await unAuthFetch.post(
              `/auth/forgot-password`, { 
                  "email": email, 
              }
          );
          const { message} = response.data;

          dispatch({
              type: FORGOT_PASSWORD_SUCCESS,
              payload: { message: message },
          });
          return true;
      } catch (error) {
          const { data } = error.response; 
          dispatch({
              type: FORGOT_PASSWORD_ERROR,
              payload: { message: data.message, data: data.data },
          });
      }
      return false;
    };

    const resetPassword = async ({password, serial}) => {
      dispatch({ type: RESET_PASSWORD_BEGIN });
      try{
          const response = await unAuthFetch.post(
              `/auth/reset-password/${serial}`, { 
                  "password": password, 
              }
          );
          const {message} = response.data;

          dispatch({
              type: RESET_PASSWORD_SUCCESS,
              payload: { message: message },
          });
          return true;
      } catch (error) {
          const { data } = error.response; 
          dispatch({
              type: RESET_PASSWORD_ERROR,
              payload: { message: data.message, data: data.data },
          });
      }
      return false;
    };

    const verifyRegister = async ({serial}) => {
      if( !state.isLoading ){
          dispatch({ type: VERIFY_REGISTER_BEGIN });
          try{
              const response = await unAuthFetch(
                  `/auth/verify?token=${serial}`,
              );
              const {message} = response.data;
    
              dispatch({
                  type: VERIFY_REGISTER_SUCCESS,
                  payload: { message: message },
              });
              return true;
          } catch (error) {
              const { data } = error.response; 
              dispatch({
                  type: VERIFY_REGISTER_ERROR,
                  payload: { message: data.message, data: data.data },
              });
          }
      }
      return false;
    };


    useEffect(() => {
        getCurrentUser();
    }, []);
   
///////////////////////////////////////////////////////////////////////////////////////////

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, location, alertText },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      const { user, location } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post('/jobs', {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getJobs = async () => {
    const { page, search, searchStatus, searchType, sort } = state;

    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });

    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.patch(`/jobs/${state.editJobId}`, {
        company,
        position,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: EDIT_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      await authFetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: DELETE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch('/jobs/stats');
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

///////////////////////////////////////////////////////////////////////////////////////////
  const getAllUsers = async (option = undefined) => {
    const { page, itemPerPage, search, searchColumn, searchType, sortBy, sortMethod } = state;

    let optionUrl = (option)? `/${option}`: '';

    let url = `/users${optionUrl}?take=${itemPerPage}&page=${page}`
    if(searchColumn !== '' && searchType !== '' && search !== ''){
      url = url + `&filter=${searchColumn}:${searchType}:${search}`
    }
    if(sortBy !== '' && sortMethod !== ''){
      url = url + `&order_by=${sortBy}&order_method=${sortMethod}`
    }

    dispatch({ type: GET_LIST_USER_BEGIN });
    try {
      const result = await authFetch(url);
      const { data, pagination } = result.data;
      const{ total, totalPage } = pagination;
      dispatch({
        type: GET_LIST_USER_SUCCESS,
        payload: {
          data,
          total,
          totalPage,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const manageUser = async (id, manageType, successMsg, body = undefined) => {
    dispatch({ type: MANAGE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch(`/users/${manageType}/${id}`,body);

      dispatch({
        type: MANAGE_USER_SUCCESS,
        payload: { msg: successMsg },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: MANAGE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }

  const sortColumn = async (sortBy, sortMethod) => {
    dispatch({ type: SORT_COLUMN, payload: { sortBy, sortMethod }});
  }

  const setTake = async (itemPerPage) =>{
    dispatch({ type: SET_ITEM_PER_PAGE, payload: {itemPerPage}})
  }

  const setSearch = async (search, searchColumn, searchType) =>{
    await dispatch({ type: SET_SEARCH, payload: {search, searchColumn, searchType}})
  }

  const getAllData = async (route, extraFilter='') => {
    const { page, itemPerPage, search, searchColumn, searchType, sortBy, sortMethod } = state;

    let url = `/${route}?take=${itemPerPage}&page=${page}`
    if(searchColumn !== '' && searchType !== '' && search !== ''){
      url = url + `&filter=${searchColumn}:${searchType}:${search}`+extraFilter
    }
    if(sortBy !== '' && sortMethod !== ''){
      url = url + `&order_by=${sortBy}&order_method=${sortMethod}`
    }

    dispatch({ type: GET_LIST_DATA_BEGIN });
    try {
      const result = await authFetch(url);
      const { data, pagination } = result.data;
      const{ total, totalPage } = pagination;
      dispatch({
        type: GET_LIST_DATA_SUCCESS,
        payload: {
          data,
          total,
          totalPage,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getOneData = async (route, id) => {
    let url = `/${route}/${id}`

    dispatch({ type: GET_LIST_DATA_BEGIN });
    try {
      const result = await authFetch(url);
      const { data, pagination } = result.data;
      const{ total, totalPage } = pagination;
      dispatch({
        type: GET_LIST_DATA_SUCCESS,
        payload: {
          data,
          total,
          totalPage,
        },
      });
      return data;
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }


  const deleteData = async (wordId, route) => {
    dispatch({ type: DELETE_DATA_BEGIN });
    try {
      await authFetch.delete(`/${route}/${wordId}`);
      getAllData(route);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: DELETE_DATA_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const createData = async (toBeInsert, route, successText, options=undefined) => {
    dispatch({ type: CREATE_DATA_BEGIN });
    try {
      const result = await authFetch.post(`/${route}`, toBeInsert, options);
      const {data} = result.data
      dispatch({ type: CREATE_DATA_SUCCESS, payload: { alertText: successText, data: data } });
      return data;
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_DATA_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const updateData = async (toBeInsert, route, successText, id='') => {
    dispatch({ type: UPDATE_DATA_BEGIN });
    try {
      await authFetch.patch(`/${route}${(id === ''? '' : `/${id}`)}`, toBeInsert);
      dispatch({ type: UPDATE_DATA_SUCCESS, payload: {alertText: successText} });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_DATA_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getNotificationUsername = async () => {
    const { user } = state
    if (user.notifications && user.notifications.length > 0) {
      dispatch({ type: GET_NOTIFICATIONS_USERNAME_BEGIN });
      try {
        const result = await authFetch('/userviewrules/get-request?filter=rule_status:equals:pending');
        const { data, pagination } = result.data;
        const{ total, totalPage } = pagination;
        dispatch({
          type: GET_NOTIFICATIONS_USERNAME_SUCCESS,
          payload: {
            data,
            total,
            totalPage,
          },
        });
      } catch (error) {
        logoutUser();
      }
      clearAlert();
    }
  }

  const getUserVisibility = async () => {
    const { user } = state
    dispatch({ type: GET_LIST_DATA_BEGIN });
    try {
      const result = await authFetch('/userviewrules/get-request');
      const { data, pagination } = result.data;
      const{ total, totalPage } = pagination;
      dispatch({
        type: GET_LIST_DATA_SUCCESS,
        payload: {
          data,
          total,
          totalPage,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const updateUserViewRule = async (status, id) => {
    dispatch({ type: EDIT_USER_VIEW_RULE_BEGIN });
    try {
      await authFetch(`/userviewrules/${status}/${id}`);
      dispatch({type:EDIT_JOB_SUCCESS})
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_USER_VIEW_RULE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  }

  const toggleProfileModal = () => {
    dispatch({ type: TOGGLE_PROFILE_MODAL });
  };

  const toggleShareProfile = () => {
    dispatch({ type: TOGGLE_SHARE_PROFILE });
  };

  const updateProfile = async (toBeUpdate) => {
    dispatch({ type: UPDATE_PROFILE_BEGIN });
    try {
      const { data } = await authFetch.patch('/users/update-profile', toBeUpdate);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { user: data.data },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_PROFILE_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }

  
  const updateParent = async (toBeUpdate) => {
    dispatch({ type: UPDATE_PROFILE_BEGIN });
    try {
      const { data } = await authFetch.patch('/users/update-parent', toBeUpdate);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { user: data.data },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_PROFILE_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        loginUser,
        registerUser,
        forgotPassword,
        resetPassword,
        verifyRegister,
///////////////////////////////////////////////
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        showStats,
        clearFilters,
        changePage,
///////////////////////////////////////////////
        getAllUsers,
        sortColumn,
        setTake,
        manageUser,
        setSearch,
        getAllData,
        getOneData,
        updateData,
        deleteData,
        createData,
        toggleProfileModal,
        toggleShareProfile,
        getNotificationUsername,
        getUserVisibility,
        updateUserViewRule,
        updateProfile,
        updateParent
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
