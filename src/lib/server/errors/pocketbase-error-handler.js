import { ClientResponseError } from "pocketbase";

export function handle_pocketbase(error){
    if(!(error instanceof ClientResponseError)){
        // TODO:handle this kind of error
        console.log("Received an error which doesn't seem to be thrown from Pocketbase SDK");
        error = {
            status: 500
        }
    }
    if(error?.originalError?.cause?.code === "ECONNREFUSED"){ // if pocketbase instance not running or something
        console.log("ERROR: CONNREFUSED: It seems like pocketbase not running");
        return {status: 500, message: "Internal server Error"}
    }
    if((error.status >= 400) && (error.status < 500)){
        return {status: error.status, message: error.data.message};
    }else{
        console.log(error);
        return {status: 500, message: "Internal Server Error"};
    }
}