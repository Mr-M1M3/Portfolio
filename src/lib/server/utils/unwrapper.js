// import pb specific properties
import { pb_specific_properties } from "$lib/server/lists/pb_specific_propeties";
export function unwrap_pb_data(obj){
    if(!obj.items){
        return new Error('Probably not a valid pocketbase data. Don\'t forget to fetch data by official Pocketbase SDK')
    }
    const filtered = obj.items.map((obj) => {
        const _ = {};
        for(let key of Object.keys(obj)){ //can't use fo...in loop to retrieve keys as that will return inherited properties too
            if(!pb_specific_properties.includes(key)){
                _[key] = obj[key];
            }
        }
        return _;
	});
    obj.items = filtered;
    return {...obj};
}