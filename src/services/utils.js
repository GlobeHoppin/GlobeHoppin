export const getTokenFromSessionStorage = () => {
    return sessionStorage.getItem("token");
}

export const saveTokenToSessionStorage = (token) => {
    try {
        sessionStorage.setItem("token", token);
    } catch (error) {
        console.log("Error saving token to session storage:", error);
    }
}

export const isSignedIn = () => {
    return getTokenFromSessionStorage() ? true : false;
}

export const saveProfileToSessionStorage = (profile) => {
    // Save user profile data to session storage
    // This function is not implemented yet
    try {
        sessionStorage.setItem("profile", JSON.stringify(profile));
    } catch (error) {
        console.log("Error saving profile data to session storage:", error);
    }
}

export const getProfileFromSessionStorage = () => {
    // Get user profile data from session storage
    // This function is not implemented yet
    try {
        return JSON.parse(sessionStorage.getItem("profile"));
    } catch (error) {
        console.log("Error getting profile data from session storage:", error);
        return null;
    }
}