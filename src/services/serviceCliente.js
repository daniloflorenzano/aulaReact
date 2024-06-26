import Api from "../helpers/api";

export async function GetClientes() {
    return await Api.get("/Cliente");
}

export async function GetClienteById(id){
    return await Api.get(`/cliente/getclientesbyid/${id}`);
}

export async function PostCliente(cliente){
    return await Api.post("/cliente", cliente);
}

export async function PutCliente(cliente){
    return await Api.put("/cliente", cliente);
}