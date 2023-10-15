import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id = 1) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    unfollow(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}, );
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}



