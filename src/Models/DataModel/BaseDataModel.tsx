export abstract class BaseDataModel
{
    public ID: string;
	public abstract ConvertToPlainObject(): any;
	
	public constructor()
	{
		this.ID = '';
	}
}