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
  TOGGLE_PROFILE_MODAL,
  /////////////////////////////////////////////////////////////////////////////////////////
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  GET_PAKET_KATEGORI_DATA,
  GET_PAKET_KATEGORI_DATA_BEGIN,
  GET_TEMATIK_KEGIATAN,
  GET_TEMATIK_KEGIATAN_BEGIN,
  GET_SUB_TEMATIK_KEGIATAN,
  GET_SUB_TEMATIK_KEGIATAN_BEGIN,
  GET_KECAMATAN,
  GET_KECAMATAN_BEGIN,
  GET_KELURAHAN,
  GET_KELURAHAN_BEGIN,
  GET_KOTA,
  GET_KOTA_BEGIN,
  GET_KELOMPOK_MASYARAKAT,
  GET_KELOMPOK_MASYARAKAT_BEGIN,
  GET_BIDANG_FOLU,
  GET_BIDANG_FOLU_BEGIN,
  POST_FORM_PENGAJUAN_BEGIN,
  POST_FORM_PENGAJUAN,
  POST_FORM_PENGAJUAN_ERROR,
  GET_PROVINSI_BEGIN,
  GET_PROVINSI,
  GET_DATA_VERIFIKASI_BEGIN,
  GET_DATA_VERIFIKASI,
  GET_DATA_VALIDASI_BEGIN,
  GET_DATA_VALIDASI,
  TOGGLE_FORM_MODAL,
  GET_PROGRESS_KEGIATAN,
  GET_PROGRESS_KEGIATAN_BEGIN,
  GET_RIWAYAT_PENGAJUAN,
  GET_RIWAYAT_PENGAJUAN_BEGIN,
  TOGGLE_DETAIL_PROGRESS_MODAL,
  TOGGLE_VERIFIKASI_MODAL,
  TOGGLE_VALIDASI_MODAL,
} from './actions';

const user = localStorage.getItem('token');

const initialState = {
  token: user,
  userLoading: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  successMessage: '',
  /////////////////////////////////////////////////////////////////////////////////////////
  kelompokMasyarakat: [],
  namaKelompokMasyarakat: [],
  tematikKegiatan: [],
  paketKategoriData: [],
  subTematikKegiatan: [],
  provinsi: [],
  kota: [],
  bidangFolu: [],
  kelurahan: [],
  kecamatan: [],
  /////////////////////////////////////////////////////////////////////////////////////////
  showAlert: false,
  showSidebar: false,
  isEditing: false,
  showProfileModal: false,
  showFormModal: false,
  showVerifikasiModal: false,
  showValidasiModal: false,
  showDetailProgressModal: false,
  /////////////////////////////////////////////////////////////////////////////////////////
  dataVerifikasi: [],
  dataValidasi: [],
  dataRiwayat: [],
  dataProgress: [],
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
      Authorization: `Bearer ${localStorage.getItem('token')}`,
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
      const { data, message } = response.data;
      // const user = data;
      const token_access = data.token;
      // console.log(token_access);

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { message: message, token: token_access },
      });
      addUserToLocalStorage({ token: token_access, user_data: data });
    } catch (error) {
      //console.log(error);
      const { message, data } = error.response;
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: message, data: data },
      });
    }
  };

  const addUserToLocalStorage = ({ token, user_data }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user_data', JSON.stringify(user_data));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_data');
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

  useEffect(() => {
    getCurrentUser();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////

  const getKelompokMasyarakat = async () => {

    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await unAuthFetch.get(`jenisKelompokMasyarakat`);
      
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const getNamaKelompokMasyarakat = async ({ id }) => {

    dispatch({ type: GET_KELOMPOK_MASYARAKAT_BEGIN });
    try {
      const { data } = await unAuthFetch.get(`kelompokMasyarakat/${id}/byIdJenisKelompokMasyarakat`);
      // console.log(data);
      dispatch({
        type: GET_KELOMPOK_MASYARAKAT,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const getTematikKegiatan = async () => {
    dispatch({ type: GET_TEMATIK_KEGIATAN_BEGIN });
    try {
      const { data } = await authFetch.get(`tematikKegiatan`);
      
      dispatch({
        type: GET_TEMATIK_KEGIATAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getSubTematikKegiatan = async ({ categoryId }) => {
    dispatch({ type: GET_SUB_TEMATIK_KEGIATAN_BEGIN });
    try {
      const { data } = await authFetch.post(
        `subTematikKegiatan`,
        { tematik_kegiatan_id: categoryId }
      );
      
      dispatch({
        type: GET_SUB_TEMATIK_KEGIATAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getPaketKategoriData = async ({ subId, id }) => {
    dispatch({ type: GET_PAKET_KATEGORI_DATA_BEGIN });
    try {
      const { data } = await authFetch.get(
        `paketKegiatan/${id}/${subId}`,
      );
      
      dispatch({
        type: GET_PAKET_KATEGORI_DATA,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getDataProgressKegiatan = async () => {
    dispatch({ type: GET_PROGRESS_KEGIATAN_BEGIN });
    try {
      const { data } = await authFetch.get(`getDataProsesKegiatan`);
      
      dispatch({
        type: GET_PROGRESS_KEGIATAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getDataRiwayatPengajuan = async () => {
    dispatch({ type: GET_RIWAYAT_PENGAJUAN_BEGIN });
    try {
      const { data } = await authFetch.get(`getDataRiwayatPengajuan`);
      
      dispatch({
        type: GET_RIWAYAT_PENGAJUAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getProvinsi = async () => {
    dispatch({ type: GET_PROVINSI_BEGIN });
    try {
      const { data } = await authFetch.get(`provinsi`);
      
      dispatch({
        type: GET_PROVINSI,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getKelurahan = async ({ id }) => {
    dispatch({ type: GET_KELURAHAN_BEGIN });
    try {
      const { data } = await authFetch.get(`kecamatan/${id}`);
      
      dispatch({
        type: GET_KELURAHAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getKota = async ({ id }) => {
    dispatch({ type: GET_KOTA_BEGIN });
    try {
      const { data } = await authFetch.get(`provinsi/${id}`);
      
      dispatch({
        type: GET_KOTA,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getKecamatan = async ({ id }) => {
    dispatch({ type: GET_KECAMATAN_BEGIN });
    try {
      const { data } = await authFetch.get(`kota/${id}`);
      
      dispatch({
        type: GET_KECAMATAN,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  // const getLokasiBidangFolu = async () => {
  //   dispatch({ type: GET_BIDANG_FOLU_BEGIN });
  //   try {
  //     const { data } = await authFetch.get(`getLokasiBidangFolu`);
      
  //     dispatch({
  //       type: GET_BIDANG_FOLU,
  //       payload: { data: data },
  //     });
  //   } catch (error) {
  //     logoutUser();
  //   }
  //   clearAlert();
  // }

  const toggleProfileModal = () => {
    dispatch({ type: TOGGLE_PROFILE_MODAL });
  };

  const toggleFormModal = () => {
    dispatch({ type: TOGGLE_FORM_MODAL });
  };

  const toggleDetailProgressModal = () => {
    dispatch({ type: TOGGLE_DETAIL_PROGRESS_MODAL });
  };

  const toggleValidasiModal = () => {
    dispatch({ type: TOGGLE_VALIDASI_MODAL });
  };

  const toggleVerifikasiModal = () => {
    dispatch({ type: TOGGLE_VERIFIKASI_MODAL });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const postVerifikasiFormProposal = async ({ catatan_log, status, _method, paket_kegiatan_id, id }) => {
    dispatch({ type: POST_FORM_PENGAJUAN_BEGIN });
    try {
      const response = await authFetch.put(
        `verifikasiPengajuanKegiatan/${id}`, {
          catatan_log, 
          status, 
      }
      );
      const { message } = response.data;

      dispatch({
        type: POST_FORM_PENGAJUAN,
        payload: { message: message },
      });
      return true;
    } catch (error) {
      const { message, data } = error.response;
      dispatch({
        type: POST_FORM_PENGAJUAN_ERROR,
        payload: { message: message, data: data },
      });
    }
    return false;
  };

  const postValidasiFormProposal = async ({ catatan_log, status, id }) => {
    dispatch({ type: POST_FORM_PENGAJUAN_BEGIN });
    try {
      const response = await authFetch.put(
        `validasiPengajuanKegiatan/${id}`, {
          catatan_log, 
          status, 
      }
      );
      const { message } = response.data;

      dispatch({
        type: POST_FORM_PENGAJUAN,
        payload: { message: message },
      });
      return true;
    } catch (error) {
      const { message, data } = error.response;
      dispatch({
        type: POST_FORM_PENGAJUAN_ERROR,
        payload: { message: message, data: data },
      });
    }
    return false;
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getDataValidasi = async () => {
    dispatch({ type: GET_DATA_VALIDASI_BEGIN });
    try {
      const { data } = await authFetch.get(`getDataValidasiPengajuan`);
      
      dispatch({
        type: GET_DATA_VALIDASI,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  }

  const getDataVerifikasi = async () => {
    dispatch({ type: GET_DATA_VERIFIKASI_BEGIN });
    try {
      const { data } = await authFetch.get(`getDataVerifikasiPengajuan`);
      
      dispatch({
        type: GET_DATA_VERIFIKASI,
        payload: { data: data },
      });
    } catch (error) {
      logoutUser();
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
        getNamaKelompokMasyarakat,
        getKelompokMasyarakat,
        ///////////////////////////////////////////////
        getTematikKegiatan,
        getSubTematikKegiatan,
        getPaketKategoriData,
        getDataProgressKegiatan,
        getDataRiwayatPengajuan,
        ///////////////////////////////////////////////
        getKelurahan,
        getKecamatan,
        getKota,
        getProvinsi,
        // getLokasiBidangFolu,
        ///////////////////////////////////////////////
        logoutUser,
        toggleProfileModal,
        toggleFormModal,
        toggleDetailProgressModal,
        toggleValidasiModal,
        toggleVerifikasiModal,
        ///////////////////////////////////////////////
        postVerifikasiFormProposal,
        postValidasiFormProposal,
        ///////////////////////////////////////////////
        getDataValidasi,
        getDataVerifikasi,
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