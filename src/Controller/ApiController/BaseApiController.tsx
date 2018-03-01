import AppGlobals from '../../Models/AppGlobals';
import { ResponseStatusDataModel, ResponseApiModel } from '../../Models/DataModel/ResponseApiModel';

export class BaseApiController
{
	protected Collection: firebase.database.Reference;
	
	public constructor(collectionName: string){
		this.Collection = AppGlobals.FirebaseApp.database().ref().child(collectionName);
	}
}
