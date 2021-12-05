import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Llaves} from '../config/llaves';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  EnviarNotificacionesSMS(telefono: string, nombre: string, correo: string, clave: string): void {
    console.log('Holaaa');

    const accountSid = Llaves.accountSid;
    const authToken = Llaves.authToken;

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `Hola ${nombre}, su nombre de usuario es ${correo} y su contraseña es ${clave}. ¡Bienvenido!`,
        from: '+12677988032', // from a valid twilio number
        to: telefono,  //text this number
      })
      .then((message: any) => console.log(message.sid));


  }
}
