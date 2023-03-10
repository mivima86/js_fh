import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
/**
 * 
 * @param {String|Number} page
 * @returns {Promise<User>}
 */

export const getUserById = async(id) =>{

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();
  // console.log(data);
    //const users = data.map(userLike => localhostUserToModel(userLike));
    const user = localhostUserToModel(data);
 //   console.log(users);
  console.log({user});
    return user;


}