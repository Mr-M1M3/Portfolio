// import utils
import { unwrap_pb_data } from "$lib/server/utils/unwrapper";
import { handle_pocketbase } from "$lib/server/errors/pocketbase-error-handler.js";
import {error} from "@sveltejs/kit";

export async function load({locals}) {

	const {db} = locals;

	try{
		let skills = unwrap_pb_data(await db.collection('skills').getList(1, 10));
		const socials = unwrap_pb_data(await db.collection('socials').getList(1, 10));
		const projects = unwrap_pb_data(await db.collection('projects').getList(1, 10));
		
		return {
			skills,
			socials,
			projects,
		};
	}catch(e){
		const error_response = handle_pocketbase(e);
		throw error(error_response.status, {message: error_response.message});
	}
}