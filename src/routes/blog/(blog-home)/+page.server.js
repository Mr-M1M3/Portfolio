// import utils
import { unwrap_pb_data } from "$lib/server/utils/unwrapper";
import { handle_pocketbase } from "$lib/server/errors/pocketbase-error-handler.js";
import {error} from "@sveltejs/kit";

export async function load({locals, url}) {

	const {db} = locals;
	let page = url.searchParams.get('page');
	try{
		let posts = await db.collection('posts').getList(page, 10);
		return {
			posts: unwrap_pb_data(posts)
		};
	}catch(e){
		const error_response = handle_pocketbase(e);
		throw error(error_response.status, {message: error_response.message});
	}
}