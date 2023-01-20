// import error helper
import { error } from "@sveltejs/kit";
// import pocketbase error handler
import { handle_pocketbase } from "$lib/server/errors/pocketbase-error-handler.js";


export async function load({ locals, params, fetch }) {
    // destructure pb url and pb client instance from local vars
	const { db, PB_URL } = locals;
    /**
     * Every blog post has a unique field named body which is file type 
     * We grab which blog post user want to see from params.blog
     * The value of params.blog is the value of that unique value mentioned earlier
     * We search for a record which's value is params.blog
     * if no record found, we simply return 404
     * if the record was found, we grab that record and access body property which should contain the markdown file name
     * then we fetch the file and return it ( How the file url works: https://pocketbase.io/docs/api-files/ )
     * As the body property of the record is required while creating, the md file must exist on the server
        and as the file url is statically created on the server,
        the ony error that can occur while fetching the file is a server side error so we simply return 500
     *blog title and tags are also returned
     */
	try {
		const { id, body, tags, title } = await db
			.collection("posts")
			.getFirstListItem(`link="${params.blog}"`);

		try {
			const md = await (await fetch(`${PB_URL}/api/files/posts/${id}/${body}`)).text();
            return {
                tags,
                title,
                md
            }
		} catch (e) {
            console.error(e);
			throw error(500, "Something went wrong...");
		}


	} catch (e) {
		const error_response = handle_pocketbase(e);
		throw error(error_response.status, {message: error_response.message});
	}
}
