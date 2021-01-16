

export function addUserData(userData){
    return {
        type : "USER_DATA",
        payload : {
            userData : userData
        }
    }
}