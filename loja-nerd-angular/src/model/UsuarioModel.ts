export class UsuarioModel{
    public IdUsuario:string="";

    public Data:DataUsuarioModel = new DataUsuarioModel();
}

export class DataUsuarioModel{
    public Nome = "";
    public Email = "";
    public Senha = "";

    public Endereco = new EnderecoUsuarioModel();
}

//esta classe tem os atributos minusculos para facilitar o retorno do WS deo CEP
export class EnderecoUsuarioModel{
    public cep= "";
    public logradouro= "";
    public complemento= "";
    public bairro= "";
    public localidade= "";
    public uf= "";
    public numero = ""
}