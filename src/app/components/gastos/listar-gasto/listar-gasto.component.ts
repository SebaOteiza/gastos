import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listarGastos: any[] = [];


  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
   this.subscription = this._presupuestoService.getGastos().subscribe(data =>{
     this.restante = this.restante - data.cantidad;
      this.listarGastos.push(data); //inserta esos  gastos al listado
    })
  }


ngOnInit(): void {
  this.presupuesto = this._presupuestoService.presupuesto;
  this.restante = this._presupuestoService.restante;

}

//eliminar la subscripcion
ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

aplicarColorrestante(){
  if(this.presupuesto / 4 > this.restante){
    return 'alert alert-danger';
  }else if(this.presupuesto / 2 > this.restante){
    return 'alert alert-warning';
  }else{
    return 'alert alert-secondary';
  }

  
}

}
