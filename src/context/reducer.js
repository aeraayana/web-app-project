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
  GET_PAKET_KATEGORI_DATA_ERROR,

  GET_TEMATIK_KEGIATAN,
  GET_TEMATIK_KEGIATAN_BEGIN,
  GET_TEMATIK_KEGIATAN_ERROR,

  GET_SUB_TEMATIK_KEGIATAN,
  GET_SUB_TEMATIK_KEGIATAN_BEGIN,
  GET_SUB_TEMATIK_KEGIATAN_ERROR,

  GET_KECAMATAN,
  GET_KECAMATAN_BEGIN,
  GET_KECAMATAN_ERROR,

  GET_KELURAHAN,
  GET_KELURAHAN_BEGIN,
  GET_KELURAHAN_ERROR,

  GET_KOTA,
  GET_KOTA_BEGIN,
  GET_KOTA_ERROR,

  GET_PROVINSI_BEGIN,
  GET_PROVINSI,
  GET_PROVINSI_ERROR,

  GET_KELOMPOK_MASYARAKAT,
  GET_KELOMPOK_MASYARAKAT_BEGIN,

  GET_DATA_VERIFIKASI_BEGIN,
  GET_DATA_VERIFIKASI,

  GET_DATA_VALIDASI_BEGIN,
  GET_DATA_VALIDASI,

  GET_RIWAYAT_PENGAJUAN_BEGIN,
  GET_RIWAYAT_PENGAJUAN,
  GET_RIWAYAT_PENGAJUAN_ERROR,

  GET_PROGRESS_KEGIATAN,
  GET_PROGRESS_KEGIATAN_BEGIN,
  GET_PROGRESS_KEGIATAN_ERROR,

  
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_BEGIN,
  
  GET_DATA_DASHBOARD_VERIFIKATOR,
  GET_DATA_DASHBOARD_VERIFIKATOR_BEGIN,
 
  GET_RANGE_OPENING_BEGIN,
  GET_RANGE_OPENING,
  
  GET_DRAFT_PENGAJUAN,
  GET_DRAFT_PENGAJUAN_BEGIN,
  GET_DRAFT_PENGAJUAN_ERROR,
  
  /////////////////////////////////////////////////////////////////////////////////////////

  TOGGLE_FORM_MODAL,
  TOGGLE_DETAIL_PROGRESS_MODAL,
  TOGGLE_VERIFIKASI_MODAL,
  TOGGLE_VALIDASI_MODAL,
  TOGGLE_SURAT_KERJA_MODAL,

  ////////////////////////////////////////////////////////////////////////////////////////
  
  POST_FORM_PENGAJUAN_BEGIN,
  POST_FORM_PENGAJUAN,
  POST_FORM_PENGAJUAN_ERROR,
  POST_FORM_VERIFIKASI_BEGIN,
  POST_FORM_VERIFIKASI,
  POST_FORM_VERIFIKASI_ERROR,
  TOGGLE_PROPOSAL_MODAL,
  GET_DATA_PENCAIRAN_BEGIN,
  GET_DATA_PENCAIRAN,
  TOGGLE_RIWAYAT_TABLE_MODAL,
  GET_DATA_BANK_BEGIN,
  GET_DATA_BANK,
  GET_DATA_BANK_ERROR,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  
  //////////////////////////////////////////////////////////////////////
  if (action.type === GET_TEMATIK_KEGIATAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_TEMATIK_KEGIATAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      tematikKegiatan: action.payload.data,
    }
  }
  if (action.type === GET_TEMATIK_KEGIATAN_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_PAKET_KATEGORI_DATA_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_PAKET_KATEGORI_DATA) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      paketKategoriData: action.payload.data,
    }
  }
  if (action.type === GET_PAKET_KATEGORI_DATA_BEGIN){
    return { ...state, isLoading: true };
  }
  
  if (action.type === GET_SUB_TEMATIK_KEGIATAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_SUB_TEMATIK_KEGIATAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      subTematikKegiatan: action.payload.data,
    }
  }
  if (action.type === GET_SUB_TEMATIK_KEGIATAN_BEGIN){
    return { ...state, isLoading: true };
  }
  
  //////////////////////////////////////////////////////////////////////

  if (action.type === GET_KOTA_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_KOTA) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      kota: action.payload.data,
    }
  }
  if (action.type === GET_KOTA_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_KECAMATAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_KECAMATAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      kecamatan: action.payload.data,
    }
  }
  if (action.type === GET_KECAMATAN_BEGIN){
    return { ...state, isLoading: true };
  }
  
  if (action.type === GET_KELURAHAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_KELURAHAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      kelurahan: action.payload.data,
    }
  }
  if (action.type === GET_KELURAHAN_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_DATA_BANK_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_DATA_BANK) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      bank: action.payload.data,
    }
  }
  if (action.type === GET_DATA_BANK_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_PROGRESS_KEGIATAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_PROGRESS_KEGIATAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      dataProgress: action.payload.data,
    }
  }
  if (action.type === GET_PROGRESS_KEGIATAN_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_RIWAYAT_PENGAJUAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_RIWAYAT_PENGAJUAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      dataRiwayat: action.payload.data,
    }
  }
  if (action.type === GET_RIWAYAT_PENGAJUAN_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_DRAFT_PENGAJUAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_DRAFT_PENGAJUAN) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      dataDraft: action.payload.data,
    }
  }
  if (action.type === GET_DRAFT_PENGAJUAN_BEGIN){
    return { ...state, isLoading: true };
  }

  if (action.type === GET_PROVINSI_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }
  if (action.type === GET_PROVINSI) {
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      provinsi: action.payload.data,
    }
  }
  if (action.type === GET_PROVINSI_BEGIN){
    return { ...state, isLoading: true };
  }

  //////////////////////////////////////////////////////////////////////

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
            isSuccess: true,
            successMessage: action.payload.message,
            token: action.payload.token,
        };
    }

    if (action.type === GET_RANGE_OPENING_BEGIN) {
      return { ...state, isLoading: true };
    }
    if (action.type === GET_RANGE_OPENING) {
      return {
        ...state,
        isLoading: false,
        validDateRange: action.payload.data,
        isLoading: false,
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
  if (action.type === REGISTER_USER_BEGIN) {
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
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      successMessage: action.payload.message,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }

  //Forgot Password State
  if (action.type === FORGOT_PASSWORD_BEGIN) {
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
  if (action.type === FORGOT_PASSWORD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      successMessage: action.payload.message,
    };
  }
  if (action.type === FORGOT_PASSWORD_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }

  //Reset Password State
  if (action.type === RESET_PASSWORD_BEGIN) {
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
  if (action.type === RESET_PASSWORD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      successMessage: action.payload.message,
    };
  }
  if (action.type === RESET_PASSWORD_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMessage: action.payload.message,
      errorDetail: action.payload.data,
    };
  }


  /////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === POST_FORM_PENGAJUAN_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === POST_FORM_PENGAJUAN) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
    };
  }
  if (action.type === POST_FORM_PENGAJUAN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === POST_FORM_VERIFIKASI_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === POST_FORM_VERIFIKASI) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
    };
  }
  if (action.type === POST_FORM_VERIFIKASI_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      kelompokMasyarakat: action.payload.data,
    };
  }

  if (action.type === GET_KELOMPOK_MASYARAKAT_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_KELOMPOK_MASYARAKAT) {
    return {
      ...state,
      isLoading: false,
      namaKelompokMasyarakat: action.payload.data,
    };
  }

  if (action.type === GET_DATA_VALIDASI_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_DATA_VALIDASI) {
    return {
      ...state,
      isLoading: false,
      dataVerifikasi: action.payload.data,
    };
  }

  if (action.type === GET_DATA_VERIFIKASI_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_DATA_VERIFIKASI) {
    return {
      ...state,
      isLoading: false,
      dataVerifikasi: action.payload.data,
    };
  }

  if (action.type === GET_DATA_PENCAIRAN_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_DATA_PENCAIRAN) {
    return {
      ...state,
      isLoading: false,
      dataPencairan: action.payload.data,
    };
  }

  if (action.type === GET_DATA_DASHBOARD_VERIFIKATOR_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_DATA_DASHBOARD_VERIFIKATOR) {
    return {
      ...state,
      isLoading: false,
      dataDashboard: action.payload.data,
    };
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  if (action.type === TOGGLE_PROFILE_MODAL) {
    return {
      ...state,
      showProfileModal: !state.showProfileModal,
    };
  }

  if (action.type === TOGGLE_VALIDASI_MODAL) {
    return {
      ...state,
      showValidasiModal: !state.showValidasiModal,
    };
  }

  if (action.type === TOGGLE_PROPOSAL_MODAL) {
    return {
      ...state,
      showProposalModal: !state.showProposalModal,
    };
  }

  if (action.type === TOGGLE_VERIFIKASI_MODAL) {
    return {
      ...state,
      showVerifikasiModal: !state.showVerifikasiModal,
    };
  }

  if (action.type === TOGGLE_DETAIL_PROGRESS_MODAL) {
    return {
      ...state,
      showDetailProgressModal: !state.showDetailProgressModal,
    };
  }

  if (action.type === TOGGLE_RIWAYAT_TABLE_MODAL) {
    return {
      ...state,
      showRiwayatTableModal: !state.showRiwayatTableModal,
    };
  }

  if (action.type === TOGGLE_SURAT_KERJA_MODAL) {
    return {
      ...state,
      suratKerjaModal: !state.suratKerjaModal,
    };
  }

  if (action.type === TOGGLE_FORM_MODAL) {
    return {
      ...state,
      showFormModal: !state.showFormModal,
    };
  }

  if (action.type === GET_NOTIFICATIONS_BEGIN) {
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
  if (action.type === GET_NOTIFICATIONS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      notifications: action.payload.data,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
