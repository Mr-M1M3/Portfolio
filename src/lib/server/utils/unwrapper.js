// import pb specific properties
import { pb_specific_properties } from "$lib/server/lists/pb_specific_propeties";
export function unwrap_pb_data({items}){
    if(!items){
        return new Error('Probably not a valid pocketbase data. Don\'t forget to fetch data by official Pocketbase SDK')
    }
    return items.map((skill) => {
        const obj = {};
        for(let key of Object.keys(skill)){ //can't use fo...in loop to retrieve keys as that will return inherited properties too
            if(!pb_specific_properties.includes(key)){
                obj[key] = skill[key];
            }
        }
        return obj;
	});
}