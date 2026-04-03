import { api } from '@/shared/lib/axios'
import { TEditPasswordSchema } from '../schemas/profile-form-schemas'

export const CreateUserProfile = async (data: FormData) => {
  try {
    const res = await api.post('/profile', data)
    const profileData = res.data.data ?? res.data
    return {
      ...profileData,
      phone_number: profileData.phoneNumber || profileData.phone_number,
      profile_picture:
        profileData.profilePicture || profileData.profile_picture,
    }
  } catch (error: unknown) {
    throw error
  }
}

export const UpdateUserProfile = async (data: FormData) => {
  try {
    const res = await api.put(`/profile`, data)
    const profileData = res.data.data ?? res.data
    return {
      ...profileData,
      phone_number: profileData.phoneNumber || profileData.phone_number,
      profile_picture:
        profileData.profilePicture || profileData.profile_picture,
    }
  } catch (error: unknown) {
    throw error
  }
}

export const GetUserProfile = async () => {
  try {
    const res = await api.get('/profile/me')
    const profileData = res.data.data ?? res.data

    if (!profileData) return null
    return {
      ...profileData,
      phone_number: profileData.phoneNumber || profileData.phone_number,
      profile_picture:
        profileData.profilePicture || profileData.profile_picture,
    }
  } catch (error: unknown) {
    const axiosError = error as { response?: { status?: number } }
    if (axiosError?.response?.status === 404) {
      return null
    }
    throw error
  }
}

export const GetUserById = async () => {
  const res = await api.get('/auth/me')
  return res.data.data ?? res.data
}

export const UpdatePassword = async (data: TEditPasswordSchema) => {
  const res = await api.put('/auth/update-password', data)
  return res.data.data ?? res.data
}
