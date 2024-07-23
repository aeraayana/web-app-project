import React, { useReducer, useContext, useEffect } from 'react';
import { HOST_URL, CLIENT_ID, CLIENT_ID_SECRET } from './../configs/constants'
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
  TOGGLE_PROFILE_MODAL,
  GET_TEMATIK_KEGIATAN,
  GET_TEMATIK_KEGIATAN_ERROR,
} from './actions';

const user = localStorage.getItem('token');

const initialState = {
  user: user,
  userLoading: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  successMessage: '',
  /////////////////////////////////////////////////////////////////////////////////////////
  showAlert: false,
  showSidebar: false,
  isEditing: false,
  showProfileModal: false,
  showShareProfile: false,
  
};

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: HOST_URL,
    headers: {
      "Content-Type": "application/json",
      id: CLIENT_ID,
      secret: CLIENT_ID_SECRET,
      Authorization: `Bearer ${user}`,
    }
  });

  const unAuthFetch = axios.create({
    baseURL: HOST_URL,
    headers: {
      "Content-Type": "application/json",
      id: CLIENT_ID,
      secret: CLIENT_ID_SECRET,
    }
  });

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

  const loginUser = async ({ email, password }) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await unAuthFetch.post(
        `login`,
        { email_pic: email, password: password }
      );
      console.log(response);
      const { token, message } = response.data;
      // const user = data;
      const token_access = token;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { message: message, token: token_access },
      });
      addUserToLocalStorage({ token: token_access });
    } catch (error) {
      console.log(error);
      const { message, data } = error.response;
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: message, data: data },
      });
    }
  };

  const addUserToLocalStorage = ({ token }) => {
    localStorage.setItem('token', token)
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
  };

  const getCurrentUser = async () => {
    if (!state.userLoading) {
      dispatch({ type: GET_CURRENT_USER_BEGIN });
      try {
        const oldUser = state.user;
        if (oldUser) {
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

  const registerUser = async ({ category, email, name, identity_type, identity_number, phone_number }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await unAuthFetch.post(
        `register`, {
        kelompok_masyarakat_id: category,
        email_pic: email,
        nama_pic: name,
        jenis_identitas_pic: identity_type,
        nomor_identitas_pic: identity_number,
        nohp_pic: phone_number
      }
      );
      const { message } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { message: message },
      });
      return true;
    } catch (error) {
      const { message, data } = error.response;
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { message: message, data: data },
      });
    }
    return false;
  };

  const getTematikKegiatan = async () => {
    try {
      const response = await authFetch.get('tematikKegiatan')
      response.data.map((tematik_kegiatan) => {
        dispatch({
          type: GET_TEMATIK_KEGIATAN,
          payload: {
            id_tematik_kegiatan: tematik_kegiatan.id,
            tematik_kegiatan: tematik_kegiatan.tematik_kegiatan,
            deskripsi_tematik: tematik_kegiatan.deskripsi_tematik,
            image: tematik_kegiatan.image
          }
        })
      })
    } catch (error) {
      const { message, data } = error.response;
      dispatch({
        type: GET_TEMATIK_KEGIATAN_ERROR,
        payload: { message: message, data: data }
      });
    }
  }

  const forgotPassword = async ({ email }) => {
    dispatch({ type: FORGOT_PASSWORD_BEGIN });
    try {
      const response = await unAuthFetch.post(
        `/auth/forgot-password`, {
        "email": email,
      }
      );
      const { message } = response.data;

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

  const resetPassword = async ({ password, serial }) => {
    dispatch({ type: RESET_PASSWORD_BEGIN });
    try {
      const response = await unAuthFetch.post(
        `/auth/reset-password/${serial}`, {
        "password": password,
      }
      );
      const { message } = response.data;

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

  const verifyRegister = async ({ serial }) => {
    if (!state.isLoading) {
      dispatch({ type: VERIFY_REGISTER_BEGIN });
      try {
        const response = await unAuthFetch(
          `/auth/verify?token=${serial}`,
        );
        const { message } = response.data;

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



  const toggleProfileModal = () => {
    dispatch({ type: TOGGLE_PROFILE_MODAL });
  };

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
        logoutUser,
        ///////////////////////////////////////////////
        toggleProfileModal,
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
