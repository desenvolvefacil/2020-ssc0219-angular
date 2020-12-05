export class ProdutoModel{
  public IdProduto:string="";

  public Data:DataProdutoModel = new DataProdutoModel();
}



export class DataProdutoModel{

  public Alias:string="";
  public AliasCategoria:string="";
  public Nome:string="";
  public Descricao:string="";

  public Foto1:string="";

  public Foto2:string="";
  public Foto3:string="";
  public Foto4:string="";


  public Qtd:number = 0;

  public Valor:number = 0;

  
}