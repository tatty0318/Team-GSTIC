import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Persona} from '../models';
import {PersonaRepository} from '../repositories';

const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken")

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */
    @repository(PersonaRepository)
    public personaRepository: PersonaRepository
  ) { }

  /*
   * Add service methods here
   */

  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {

    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string) {
    try {
      let p = this.personaRepository.findOne({where: {email: usuario, clave: clave}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }
  GenerarTokenJWT(Persona: Persona) {
    let token = JWT.sign({
      data: {
        id: Persona.id,
        correo: Persona.email,
        nombre: Persona.nombres + " " + Persona.apellidos,
      }
    },
      Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string) {
    try {
      let datos = JWT.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }

  }
}
