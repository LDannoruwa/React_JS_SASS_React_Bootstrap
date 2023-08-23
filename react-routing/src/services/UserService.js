//aceess api end point.
export const getUsers = async () =>{
    try {
        const response = await fetch("http://localhost:9000/users"); // getting users from backend
        return await response.json(); // return result as json
    } catch (error) {
        return error;
    }
}


export const getUserById = async (id) =>{
    try {
        const response = await fetch("http://localhost:9000/users/" +id);
        return await response.json();
    } catch (error) {
        return error;;
    }
}