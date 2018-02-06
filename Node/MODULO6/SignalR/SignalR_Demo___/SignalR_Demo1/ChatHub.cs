using Microsoft.AspNet.SignalR;

namespace SignalR_Demo1
{
    public class ChatHub : Hub
    {
        public void Enviar(string nombre, string mensaje)
        {
            // Llamar a enviarMensaje para actualizar los clientes.
            Clients.All.enviarMensaje(nombre, mensaje);
          
        }
    }
}