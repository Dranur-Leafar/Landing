//Importación de Clases
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js'
import { CuentaAhorro } from './CuentaAhorro.js';

const cliente = new Cliente("Leonardo","89456123","leona840927qh4");
const cliente2 = new Cliente('Rafael','123456','aha456789');

const cuentaDeLeonardo = new CuentaCorriente(cliente,"1", '258');
const cuentaDeRafael = new CuentaCorriente(cliente2,'2', '160');

const cuentaAhorroLeonardo = new CuentaAhorro('cliente', '1', 1000,'258');
const cuentaAhorroRafael = new CuentaAhorro('cliente2', '2', 2000,'160');

console.log(cuentaDeLeonardo);
console.log(cuentaAhorroLeonardo);