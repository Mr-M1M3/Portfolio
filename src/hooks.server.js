// import modules
import {pocketbase_route} from "$lib/server/lists/pocketbase-client-routes.js";
import Pocketbase from "pocketbase";
import {POCKETBASE_URL} from '$env/static/private';
// handle hook
export async function handle({event, resolve}){
    const {locals, url} = event;
    // add pb instance to local variable if the requested path uses pb
    if(pocketbase_route.includes(url.pathname)){
        locals.db = new Pocketbase(POCKETBASE_URL);
    }

    const RESPONSE = await resolve(event);
    return RESPONSE;
}