Ext.define('Infosys_web.controller.preventaferreteria', {
    extend: 'Ext.app.Controller',

    //asociamos vistas, models y stores al controller

    stores: ['Preventa',
            'preventaferreteria',
            'preventaferreteria.Items',
            'preventaferreteria.Items2',
            'preventaferreteria.Editar',
            'Productosf',
            'preventaferreteriaeditar',
            'Correlativos',
            'Clientes',
            'Sucursales_clientes',
            'Tabladescuento',
            'Tipo_documento.Selector',
            'Preciosdescuentos',
            'facturas.Selector2'
             ],

    models: ['preventaferreteria',
             'preventaferreteria.Item',
             'Preciosdescuentos'],

    views: ['preventaferreteria.Preventaferreteria',
            'preventaferreteria.Principal',
            'preventaferreteria.BuscarClientes',
            'preventaferreteria.BuscarClientes2',
            'preventaferreteria.BuscarProductos2',
            'preventaferreteria.BuscarSucursales',
            'preventaferreteria.BuscarSucursales2',
            'preventaferreteria.Observaciones',
            'preventaferreteria.Observaciones2',
            'preventaferreteria.BuscarPrecios',
            'preventaferreteria.BuscarPrecios2',
            'preventaferreteria.Autoriza',
            'preventaferreteria.Eliminar',
            'preventaferreteria.Autoriza3',
            'preventaferreteria.Autoriza2',
            'preventaferreteria.IngresarClientes',
            'preventaferreteria.EditarPreventaferreteria'
            ],

    //referencias, es un alias interno para el controller
    //podemos dejar el alias de la vista en el ref y en el selector
    //tambien, asi evitamos enredarnos
    refs: [{
    
       ref: 'preventaferreteriaprincipal',
        selector: 'preventaferreteriaprincipal'
    },{    
        ref: 'preventaferreteriaingresar',
        selector: 'preventaferreteriaingresar'
    },{
        ref: 'topmenus',
        selector: 'topmenus'
    },{    
        ref: 'panelprincipal',
        selector: 'panelprincipal'
    },{    
        ref: 'buscarclientespreventaferreteria',
        selector: 'buscarclientespreventaferreteria'
    },{    
        ref: 'buscarclientespreventaferreteria2',
        selector: 'buscarclientespreventaferreteria2'
    },{
        ref: 'buscarproductospreventaferreteria',
        selector: 'buscarproductospreventaferreteria'
    },{
        ref: 'preventaferreteriaeditar',
        selector: 'preventaferreteriaeditar'
    },{
        ref: 'buscarproductospreventaferreteria2',
        selector: 'buscarproductospreventaferreteria2'
    },{
        ref: 'buscarsucursalespreventaferreteria',
        selector: 'buscarsucursalespreventaferreteria'
    },{
        ref: 'buscarsucursalespreventaferreteria2',
        selector: 'buscarsucursalespreventaferreteria2'
    },{
        ref: 'observacionespreventaferreteria2',
        selector: 'observacionespreventaferreteria2'
    },{
        ref: 'buscarpreciosferreteria',
        selector: 'buscarpreciosferreteria'
    },{
        ref: 'autorizacion',
        selector: 'autorizacion'
    },{
        ref: 'autorizacion2',
        selector: 'autorizacion2'
    },{
        ref: 'autorizacion3',
        selector: 'autorizacion3'
    },{
        ref: 'buscarprecios2',
        selector: 'buscarprecios2'
    },{
        ref: 'clientesingresarpreventaferreteria',
        selector: 'clientesingresarpreventaferreteria'
    },{
        ref: 'observacionespreventaferreteria',
        selector: 'observacionespreventaferreteria'
    },{
        ref: 'eliminarpreventaferreteria',
        selector: 'eliminarpreventaferreteria'
    }
  
    ],
    
    init: function() {
    	
        this.control({

            'preventaferreteriaprincipal button[action=exportarexcelpreventaferreteria]': {
                click: this.exportarexcelpreventaferreteria
            },
            'preventaferreteriaprincipal button[action=buscarpreventaferreteria]': {
                click: this.buscarpreventaferreteria
            },
            'topmenus menuitem[action=mpreventaferreteria]': {
                click: this.mpreventaferreteria
            },            
            'preventaferreteriaingresar button[action=grabarpreventaferreteria]': {
                click: this.grabarpreventaferreteria
            },
            'preventaferreteriaingresar button[action=agregarobservaciones]': {
                click: this.agregarobserva
            },
            'preventaferreteriaeditar button[action=agregarobservaciones2]': {
                click: this.agregarobserva2
            },
            'preventaferreteriaeditar button[action=grabarpreventaferreteria2]': {
                click: this.grabarpreventaferreteria2
            },
            'preventaferreteriaprincipal button[action=agregarpreventaferreteria]': {
                click: this.agregarpreventaferreteria
            },
            'agregarpreventaferreteria button[action=editarpreventaferreteria]': {
                click: this.editarpreventaferreteria
            },
            'preventaferreteriaprincipal button[action=cerrarpreventaferreteria]': {
                click: this.cerrarpreventaferreteria
            },
            'preventaferreteriaingresar button[action=validarut]': {
                click: this.validarut
            },
            'buscarclientespreventaferreteria button[action=seleccionarcliente]': {
                click: this.seleccionarcliente
            },
            'buscarclientespreventaferreteria2 button[action=seleccionarcliente2]': {
                click: this.seleccionarcliente2
            },
            'preventaferreteriaingresar button[action=buscarproductos]': {
                click: this.buscarproductos
            },
            'preventaferreteriaeditar button[action=buscarproductos2]': {
                click: this.buscarproductos2
            },
            'preventaferreteriaingresar button[action=buscarproductos]': {
                click: this.buscarproductos
            },
            'preventaferreteriaeditar button[action=buscarprecios2]': {
                click: this.autorizaprecios2
            },
            'preventaferreteriaingresar button[action=buscarprecios]': {
                click: this.buscarprecios
            },
            'buscarproductospreventaferreteria button[action=seleccionarproductos]': {
                click: this.seleccionarproductos
            },
            'buscarpreciosferreteria button[action=seleccionarprecios]': {
                click: this.seleccionarprecios
            },
            'buscarprecios2 button[action=seleccionarpreciosferreteria2]': {
                click: this.seleccionarprecios2
            },

            'buscarproductospreventaferreteria #nombreId': {
                specialkey: this.special
            },
            'preventaferreteriaingresar #codigoId': {
                specialkey: this.special3
            },
            'preventaferreteriaingresar #giroId': {
                select: this.grabarGiro
            },
            
            'preventaferreteriaingresar #tipocondpagoId': {
                select: this.condicionpago
            },
            'preventaferreteriaeditar #tipocondpagoId': {
                select: this.condicionpago2
            },
            'buscarproductospreventaferreteria button[action=buscar]': {
                click: this.buscarp
            },
            'buscarproductospreventaferreteria2 button[action=seleccionarproductos2]': {
                click: this.seleccionarproductos2
            },
            'buscarproductospreventaferreteria2 #nombreId': {
                click: this.special2
            },
            'buscarproductospreventaferreteria2 button[action=buscar2]': {
                click: this.buscarp2
            },
           
            'buscarclientespreventaferreteria button[action=buscar]': {
                click: this.buscar
            },
            'preventaferreteriaingresar button[action=grabarpreventaferreteria]': {
                click: this.grabarpreventaferreteria
            },
            'preventaferreteriaingresar #productoId': {
                select: this.selectItem
            },
             'preventaferreteriaeditar #productoId': {
                select: this.selectItem2
            },
            'preventaferreteriaingresar button[action=agregarItem]': {
                click: this.agregarItem
            },
            'preventaferreteriaeditar button[action=agregarItem2]': {
                click: this.agregarItem2
            },
            'preventaferreteriaingresar #tipoDescuentoId': {
                change: this.changedctofinal
            },
            
            'preventaferreteriaingresar #DescuentoproId': {
                change: this.changedctofinal3
            },
            'preventaferreteriaeditar #DescuentoproId': {
                change: this.changedctofinal4
            },
            'preventaferreteriaingresar #tipoDocumento2Id': {
                select: this.selectItemdocuemento
            },
            'preventaferreteriaprincipal button[action=exportarpreventaferreteria]': {
                click: this.exportarpreventaferreteria
            },
            'preventaferreteriaprincipal button[action=editarpreventaferreteria]': {
                click: this.editarpreventaferreteria
            },
            'preventaferreteriaingresar button[action=eliminaritem]': {
                click: this.eliminaritem
            },
             'preventaferreteriaeditar button[action=eliminaritem2]': {
                click: this.eliminaritem2
            },
            'preventaferreteriaingresar button[action=editaritem]': {
                click: this.editaritem
            },
             'preventaferreteriaeditar button[action=editaritem2]': {
                click: this.editaritem2
            },
            'preventaferreteriaingresar button[action=buscarsucursalpreventaferreteria]': {
                click: this.buscarsucursalpreventaferreteria
            },
            'preventaferreteriaeditar button[action=buscarsucursalpreventaferreteria2]': {
                click: this.buscarsucursalpreventaferreteria2
            },
            'buscarsucursalespreventaferreteria button[action=seleccionarsucursalpreventaferreteria]': {
                click: this.seleccionarsucursalpreventaferreteria
            },
            'buscarsucursalespreventaferreteria2 button[action=seleccionarsucursalpreventaferreteria2]': {
                click: this.seleccionarsucursalpreventaferreteria2
            },
            'observacionespreventaferreteria button[action=ingresaobs]': {
                click: this.ingresaobs
            },
            'observacionespreventaferreteria2 button[action=ingresaobs2]': {
                click: this.ingresaobs2
            },
            'autorizacion button[action=autoriza]': {
                click: this.autorizaprecios
            },
            //'autorizacion3 button[action=autoriza3]': {
               // click: this.autorizaprecios2
            //},
            //'preventaferreteriaingresar #tipoVendedorId': {
            //    select: this.autorizavendedor
            //},
            'autorizacion2 button[action=autoriza1]': {
                click: this.autorizaprecios2
            },
            'clientesingresarpreventaferreteria button[action=grabarclientespreventaferreteria]': {
                click: this.grabarclientes
            },
            'preventaferreteriaingresar #rutId': {
                specialkey: this.special7
            },
            'preventaferreteriaeditar button[action=validarutedita]': {
                click: this.validarutedita
            },
            'observacionespreventaferreteria button[action=validar]': {
                click: this.validarut2
            },
            'observacionespreventaferreteria2 button[action=validar2]': {
                click: this.validarut3
            },
            'eliminarpreventaferreteria button[action=salirpreventaferreteria]': {
                click: this.salirpreventaferreteria
            },
            'eliminarpreventaferreteria button[action=eliminar]': {
                click: this.eliminar
            },
            'preventaferreteriaprincipal button[action=eliminarpreventaferreteria]': {
                click: this.eliminarpreventaferreteria
            }

        });
    },

    eliminar: function(){

        var view = this.getEliminarpreventaferreteria()
        var idcliente = view.down('#idclienteID').getValue()
        var st = this.getPreventaferreteriaStore();
        Ext.Ajax.request({
            url: preurl + 'preventa/elimina2',
            params: {

                idcliente: idcliente
                
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) {
                    view.close();
                    st.load(); 
                    Ext.Msg.alert('Datos Eliminados Exitosamente');
                    return;                                   

                 }else{

                    view.close();
                    st.load();

                    Ext.Msg.alert('preventaferreteria Ya Cancelada No se Elimino');
                    return;
                   
                                         
                 };
        }
        });

        view.close();
        st.load();            
    },

    salirpreventaferreteria: function(){

       var view = this.getEliminarpreventaferreteria()
       view.close();

    },

    eliminarpreventaferreteria: function(){

        var view = this.getPreventaferreteriaprincipal()
       
        if (view.getSelectionModel().hasSelection()) {
            var row = view.getSelectionModel().getSelection()[0];
            var edit =   Ext.create('Infosys_web.view.preventaferreteria.Eliminar').show();
            edit.down('#idclienteID').setValue(row.data.id);
           
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
        
    },

    validarut2: function(){

        var view = this.getObservacionespreventaferreteria();
        var rut = view.down('#rutId').getValue();
        var okey = "SI";
        var cero = " ";
        
        if (!rut){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Rut');
                 return;
        };

        Ext.Ajax.request({
            url: preurl + 'preventa/validaRut?valida='+rut,
            params: {
                id: 1
            },
            
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) {
                    var rutm = resp.rut;
                    if (resp.existe == true){
                        var observa = resp.observa;
                        if (observa){
                         view.down("#nombreId").setValue(observa.nombre);
                         view.down("#rutId").setValue(observa.rut);
                         view.down("#rutmId").setValue(rut);
                         view.down("#camionId").setValue(observa.pat_camion);
                         view.down("#carroId").setValue(observa.pat_carro);
                         view.down("#fonoId").setValue(observa.fono);
                         view.down("#validaId").setValue(okey);
                         view.down("#observaId").focus();
                    }             
                    };
                    if (resp.existe == false){
                        view.down("#nombreId").focus();
                        view.down("#rutId").setValue(rutm);
                        view.down("#rutmId").setValue(rut);
                        view.down("#validaId").setValue(okey);
                    }  
                    
                }else{

                      Ext.Msg.alert('Informacion', 'Rut Incorrecto');                      
                      return false;
                     
                      
                }
               
            }

        });
    },

    validarut3: function(){

        var view = this.getObservacionespreventaferreteria2();
        var rut = view.down('#rutId').getValue();
        var okey = "SI";
        var cero = " ";
        
        if (!rut){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Rut');
                 return;
        };

        Ext.Ajax.request({
            url: preurl + 'preventa/validaRut?valida='+rut,
            params: {
                id: 1
            },
            
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) {
                    var rutm = resp.rut;
                    if (resp.existe == true){
                        var observa = resp.observa;
                        if (observa){
                         view.down("#nombreId").setValue(observa.nombre);
                         view.down("#rutId").setValue(observa.rut);
                         view.down("#rutmId").setValue(rut);
                         view.down("#camionId").setValue(observa.pat_camion);
                         view.down("#carroId").setValue(observa.pat_carro);
                         view.down("#fonoId").setValue(observa.fono);
                         view.down("#validaId").setValue(okey);
                         view.down("#observaId").focus();
                    }             
                    };
                    if (resp.existe == false){
                        view.down("#nombreId").focus();
                        view.down("#rutId").setValue(rutm);
                        view.down("#rutmId").setValue(rut);
                        view.down("#validaId").setValue(okey);
                    }  
                    
                }else{

                      Ext.Msg.alert('Informacion', 'Rut Incorrecto');                      
                      return false;
                     
                      
                }
               
            }

        });
    },

    buscarpreventaferreteria: function(){
        
        var view = this.getPreventaferreteriaprincipal();
        var st = this.getPreventaferreteriaStore()
        var tipo = view.down('#tipoDocumentoId').getValue();
        var opcion = view.down('#tipoSeleccionId').getValue()
        var nombre = view.down('#nombreId').getValue()
        st.proxy.extraParams = {nombre : nombre,
                                opcion : opcion,
                                documento: tipo}
        st.load();
    },

    validarutedita: function(){

        var view = this.getPreventaferreteriaeditar();
        var rut = view.down('#rutId').getValue();
        var idvendedor = view.down('#tipoVendedorId').getValue();
        var numero = rut.length;
        var cero = "";

                  
        if(numero==0){
            var edit = Ext.create('Infosys_web.view.preventaferreteria.BuscarClientes2');
        }else{
       
         if(numero>9){            
            Ext.Msg.alert('Rut Erroneo Ingrese Sin Puntos');
            return;            
        }else{
            if(numero>13){
            Ext.Msg.alert('Rut Erroneo Ingrese Sin Puntos');
            return;   
            }
        }        

        Ext.Ajax.request({
            url: preurl + 'clientes/validaRut?valida='+rut,
            params: {
                id: 1,
                tipo: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                
                if (resp.success == true) {                    
                    if(resp.cliente){
                        var cliente = resp.cliente;
                        view.down("#rutId").setValue(rut);
                        view.down("#id_cliente").setValue(cliente.id)
                        view.down("#nombre_id").setValue(cliente.nombres)
                        view.down("#tipoVendedorId").setValue(idvendedor)
                        view.down("#giroId").setValue(cliente.id_giro)
                        view.down("#direccionId").setValue(cliente.direccion)    
                        view.down("#rutId").setValue(rut)
                        view.down("#tipocondpagoId").setValue(cliente.id_pago)                        
                        view.down("#buscarproc").focus()  
                        var bolEnable = false;
                        if (cliente.id_pago == 1){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 2){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 4){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 6){

                             view.down('#DescuentoproId').setDisabled(bolEnable);
                             view.down('#tipoDescuentoId').setDisabled(bolEnable);
                             view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                        };
                        if (cliente.id_pago == 7){

                             view.down('#DescuentoproId').setDisabled(bolEnable);
                             view.down('#tipoDescuentoId').setDisabled(bolEnable);
                             view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                        };                      
                    }else{
                        var viewedit = Ext.create('Infosys_web.view.clientes.Ingresar').show();                        
                        viewedit.down("#rutId").setValue(rut);                         
                    }
                    
                }else{
                      Ext.Msg.alert('Informacion', 'Rut Incorrecto');
                      view.down("#rutId").setValue(cero);
                      return;
                      
                }
            }

        }); 
        
        }      
       
    },

    grabarGiro: function(){

        var busca = this.getPreventaferreteriaingresar();
        var id = busca.down('#id_cliente').getValue();
        var idgiro = busca.down('#giroId').getValue();
       
        Ext.Ajax.request({
            url: preurl + 'clientes/grabargiro',
            params: {
                id: id,
                idgiro: idgiro
            },
            success: function(response){
                 var resp = Ext.JSON.decode(response.responseText);
                            
            }
           
        });
    },

    special7: function(f,e){
        if (e.getKey() == e.ENTER) {
            this.validarut()
        }
    },

    grabarclientes: function(){
        var win    = this.getClientesingresarpreventaferreteria(),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

             
        if(!form.getForm().isValid()){
            Ext.Msg.alert('Informacion', 'Rellene todo los campos');
            return false;
        };

        var st = this.getClientesStore();
        
        var nuevo = false;
        
        if (values.id > 0){
            record.set(values);
        }else{
            record = Ext.create('Infosys_web.model.Cliente');
            record.set(values);
            st.add(record);
            nuevo = true;
        }
        
        win.close();
        st.sync({
            success: function(){
                st.load();
               
            }
        }

        );
        this.validarut();
    },

    autorizavendedor: function(){

        var busca = this.getPreventaferreteriaingresar()
        var id = busca.down('#tipoVendedorId').getValue();
       
        Ext.Ajax.request({
            url: preurl + 'vendedores/busca',
            params: {
                nombre: id
            },
            success: function(response){
                 var resp = Ext.JSON.decode(response.responseText);
                 if (resp.success == true){
                     var cliente= resp.cliente;
                     var estado = resp.estado;
                     var clave = (cliente);
                     
                    if (clave){                        
                           var view = Ext.create('Infosys_web.view.preventaferreteria.Autoriza').show();
                           //var view = this.getAutorizacion2();
                           view.down('#enterId').focus(); 
                    }else{
                        var bolEnable = true;
                        busca.down('#buscarprec').setDisabled(bolEnable);
                        

                    }                   
                 }                                   
            }                              
                     
        });      
            
    },

    ingresaobs2: function(){

        var view = this.getObservacionespreventaferreteria2();
        var viewIngresar = this.getPreventaferreteriaeditar();                
        var rut = view.down('#rutmId').getValue();
        var nombre = view.down('#nombreId').getValue();
        var camion = view.down('#camionId').getValue();
        var fono = view.down('#fonoId').getValue();
        var carro = view.down('#carroId').getValue();
        var observa = view.down('#observaId').getValue();
        var valida = view.down('#validaId').getValue();
        var numero = viewIngresar.down('#ticketId').getValue();
        var id = viewIngresar.down('#observaId').getValue();       
        
        var permite = "SI"

        if (!rut){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Rut');
                 return;
        };
        if (!nombre){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Nombre');
                 return;
        };       
       
        Ext.Ajax.request({
            url: preurl + 'preventa/saveobserva',
            params: {
                rut: rut,
                nombre: nombre,
                camion: camion,
                carro : carro,
                fono : fono,
                observa : observa,
                numero: numero,
                id: id
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                var idobserva = resp.idobserva;         
                view.close();
                viewIngresar.down("#observaId").setValue(idobserva);
                //viewIngresar.down("#permiteId").setValue(permite);
            }           
        });
    },

    agregarobserva2: function(){

         var viewIngresa = this.getPreventaferreteriaeditar();
         var observa = viewIngresa.down('#observaId').getValue();
         console.log(observa);
         if(observa){
         Ext.Ajax.request({
            url: preurl + 'preventa/getObserva',
            params: {
                idobserva: observa
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                console.log("llegamos")
                if (resp.success == true){                
                var observar = (resp.observar);
                var rut = (observar.rut);
                console.log(rut);
                var view = Ext.create('Infosys_web.view.preventaferreteria.Observaciones2').show();
                view.down('#rutmId').setValue(observar.rut);
                view.down('#rutId').setValue(observar.rutm);
                view.down('#nombreId').setValue(observar.nombre);
                view.down('#camionId').setValue(observar.pat_camion);
                view.down('#carroId').setValue(observar.pat_carro);
                view.down('#fonoId').setValue(observar.fono);
                view.down('#observaId').setValue(observar.observacion);
                }else{
                var edit = Ext.create('Infosys_web.view.preventaferreteria.Observaciones2').show();
                
                };
            }           
            });
        }else{
         var edit = Ext.create('Infosys_web.view.preventaferreteria.Observaciones2').show();
         view.down('#rutmId').setValue(observa);

         };

         
        
    },

    ingresaobs: function(){

        var view = this.getObservacionespreventaferreteria();
        var viewIngresar = this.getPreventaferreteriaingresar();                
        var rut = view.down('#rutmId').getValue();
        var nombre = view.down('#nombreId').getValue();
        var camion = view.down('#camionId').getValue();
        var fono = view.down('#fonoId').getValue();
        var carro = view.down('#carroId').getValue();
        var observa = view.down('#observaId').getValue();
        var valida = view.down('#validaId').getValue();
        var numero = viewIngresar.down('#ticketId').getValue();
        var id = viewIngresar.down('#observaId').getValue();       
        
        var permite = "SI"

        if (!rut){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Rut');
                 return;
        };
        if (!nombre){
             Ext.Msg.alert('Alerta', 'Debe Ingresar Nombre');
                 return;
        };       
       
        Ext.Ajax.request({
            url: preurl + 'preventa/saveobserva',
            params: {
                rut: rut,
                nombre: nombre,
                camion: camion,
                carro : carro,
                fono : fono,
                observa : observa,
                numero: numero,
                id: id
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                var idobserva = resp.idobserva;         
                view.close();
                viewIngresar.down("#observaId").setValue(idobserva);
                viewIngresar.down("#permiteId").setValue(permite);
            }           
        });
    },

    agregarobserva: function(){

        var viewIngresa = this.getPreventaferreteriaingresar();
        var observa = viewIngresa.down('#observaId').getValue();
        var numpreventaferreteria = viewIngresa.down('#ticketId').getValue();
        if (!observa){
            var view = Ext.create('Infosys_web.view.preventaferreteria.Observaciones').show();
            view.down("#rutId").focus();
            view.down("#preventaferreteriaId").setValue(numpreventaferreteria);          

        }else{
            Ext.Ajax.request({
            url: preurl + 'preventa/getObserva',
            params: {
                idobserva: observa
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                console.log("llegamos")
                if (resp.success == true){                
                var observar = (resp.observar);
                var rut = (observar.rut);
                var view = Ext.create('Infosys_web.view.preventaferreteria.Observaciones').show();
                view.down('#rutmId').setValue(observar.rut);
                view.down('#rutId').setValue(observar.rutm);
                view.down('#nombreId').setValue(observar.nombre);
                view.down('#camionId').setValue(observar.pat_camion);
                view.down('#carroId').setValue(observar.pat_carro);
                view.down('#fonoId').setValue(observar.fono);
                view.down('#observaId').setValue(observar.observacion);
                };
            }           
            });
        }

    },

    special: function(f,e){
        if (e.getKey() == e.ENTER) {
            this.buscarp()
        }
    },

    special2 : function(f,e){
        if (e.getKey() == e.ENTER) {
            this.buscarp2()
        }
    },

    special3 : function(f,e){
        if (e.getKey() == e.ENTER) {
            this.buscacodigo()
        }
    },

   
    buscacodigo : function() {

        var viewIngresa = this.getPreventaferreteriaingresar();
        var codigo = viewIngresa.down('#codigoId').getValue();
        var cero = " ";
        var cero1= 0;
        var cero2= 1;

        Ext.Ajax.request({
            url: preurl + 'productos/buscacodigo',
            params: {
                codigo: codigo
            },
            success: function(response){
                 var resp = Ext.JSON.decode(response.responseText);
                 if (resp.success == true){
                    var cliente= resp.cliente;
                    viewIngresa.down('#productoId').setValue(cliente.id);
                    viewIngresa.down('#nombreproductoId').setValue(cliente.nombre);
                    viewIngresa.down('#codigoId').setValue(cliente.codigo);
                    var precioventa = (cliente.p_venta);
                    if (cliente.stock < 0){
                        Ext.Msg.alert('Alerta', 'Producto Sin Stock');
                        viewIngresa.down('#codigoId').setValue(cero);
                        viewIngresa.down('#productoId').setValue(cero);
                        viewIngresa.down('#nombreproductoId').setValue(cero);
                        viewIngresa.down('#cantidadId').setValue(cero2);
                        viewIngresa.down('#DescuentoproId').setValue(cero1);
                        viewIngresa.down('#precioId').setValue(cero1);
                        viewIngresa.down('#cantidadOriginalId').setValue(cero1);
                        return;

                    }else{
                    if (precioventa == 0){
                        var bolEnable = false;
                        viewIngresa.down('#precioId').setDisabled(bolEnable);
                        viewIngresa.down('#precioId').setValue(precioventa);
                        viewIngresa.down('#cantidadOriginalId').setValue(cliente.stock);
                        viewIngresa.down("#precioId").focus();
                        
                    }else{
                        
                        if (cliente.estado == 3){
                        viewIngresa.down('#precioId').setValue(cero);
                        viewIngresa.down('#cantidadOriginalId').setValue(cliente.stock);
                        viewIngresa.down("#precioId").focus();              
                        }else{
                            viewIngresa.down('#precioId').setValue(cliente.p_venta);
                            viewIngresa.down('#cantidadOriginalId').setValue(cliente.stock);
                            viewIngresa.down("#cantidadId").focus();
                        }
                    }

                    }
                 }else{
                    Ext.Msg.alert('Alerta', 'Codigo producto no existe');
                    viewIngresa.down('#codigoId').setValue(cero);
                    viewIngresa.down('#productoId').setValue(cero);
                    viewIngresa.down('#nombreproductoId').setValue(cero);
                    viewIngresa.down('#cantidadId').setValue(cero2);
                    viewIngresa.down('#DescuentoproId').setValue(cero1);
                    viewIngresa.down('#precioId').setValue(cero1);
                    viewIngresa.down('#cantidadOriginalId').setValue(cero1);
                    return;
                }
                               
            }
           
        });        
    },

    seleccionarsucursalpreventaferreteria: function(){

        var view = this.getBuscarsucursalespreventaferreteria();
        var viewIngresa = this.getPreventaferreteriaingresar();
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            viewIngresa.down('#id_sucursalID').setValue(row.data.id);
            viewIngresa.down('#direccionId').setValue(row.data.direccion);
            view.close();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    seleccionarsucursalpreventaferreteria2: function(){

        var view = this.getBuscarsucursalespreventaferreteria2();
        var viewIngresa = this.getPreventaferreteriaeditar();
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            viewIngresa.down('#id_sucursalID').setValue(row.data.id);
            viewIngresa.down('#direccionId').setValue(row.data.direccion);
            view.close();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    buscarsucursalpreventaferreteria: function(){

       var busca = this.getPreventaferreteriaingresar()
       var nombre = busca.down('#id_cliente').getValue();
       if (nombre){
          var edit = Ext.create('Infosys_web.view.preventaferreteria.BuscarSucursales').show();
          var st = this.getSucursales_clientesStore();
          st.proxy.extraParams = {nombre : nombre};
          st.load();
       }else {
          Ext.Msg.alert('Alerta', 'Debe seleccionar ClienteS.');
            return;
       }
      
    },

    buscarsucursalpreventaferreteria2: function(){

       var busca = this.getPreventaferreteriaeditar()
       var nombre = busca.down('#id_cliente').getValue();
       if (nombre){
         var edit = Ext.create('Infosys_web.view.preventaferreteria.BuscarSucursales2').show();
          var st = this.getSucursales_clientesStore();
          st.proxy.extraParams = {nombre : nombre};
          st.load();
       }else {
          Ext.Msg.alert('Alerta', 'Debe seleccionar ClienteS.');
            return;
       }
      
    },


    grabarpreventaferreteria2: function(){

        var viewIngresa = this.getPreventaferreteriaeditar();
        var numeroticket = viewIngresa.down('#ticketId').getValue();
        var idticket = viewIngresa.down('#idId').getValue();
        var idtipo = viewIngresa.down('#tipoDocumento2Id').getValue();
        var idcliente = viewIngresa.down('#id_cliente').getValue();
        var sucursal = viewIngresa.down('#id_sucursalID').getValue();
        var producto = viewIngresa.down('#tipoVendedorId');
        if(!producto){
            Ext.Msg.alert('Seleccione Vendedor');
            return;   
        }
        var idpago = viewIngresa.down('#tipocondpagoId').getValue();
        var id = viewIngresa.down('#idId').getValue();
        var finalafectoId = viewIngresa.down('#finaltotalnetoId').getValue();
        var stCombo = producto.getStore();
        var record = stCombo.findRecord('id', producto.getValue()).data;
        var vendedor = record.id;
        var fechapreventaferreteria = viewIngresa.down('#fechaventaId').getValue();
        var stItem = this.getPreventaferreteriaeditarStore();
        var stpreventaferreteria = this.getPreventaferreteriaStore();
        var observa = viewIngresa.down('#observaId').getValue();
     
        if(!finalafectoId){
            Ext.Msg.alert('Ingrese Productos a la Venta');
            return;   
        }

        if(!idpago){
            Ext.Msg.alert('Ingrese Condicion Venta');
            return;   
        }

        
        var dataItems = new Array();
        stItem.each(function(r){
            dataItems.push(r.data)
        });

        Ext.Ajax.request({
            url: preurl + 'preventa/save2',
            params: {
                idcliente: idcliente,
                items: Ext.JSON.encode(dataItems),
                vendedor : vendedor,
                idtipo : idtipo,
                idpago : idpago,
                observa: observa,
                sucursal: sucursal,
                numeroticket : numeroticket,
                idticket : idticket,
                fechapreventa : fechapreventaferreteria,
                descuento : viewIngresa.down('#descuentovalorId').getValue(),
                neto : viewIngresa.down('#finalafectoId').getValue(),
                iva : viewIngresa.down('#finaltotalivaId').getValue(),
                afecto: viewIngresa.down('#finalafectoId').getValue(),
                total: viewIngresa.down('#finaltotalpostId').getValue()
            },
            success: function(response){
                 var resp = Ext.JSON.decode(response.responseText);
                 var id = resp.idpreventa;
                 viewIngresa.close();
                 stpreventaferreteria.load();
                 window.open(preurl + 'preventa/exportPDF/?idpreventa='+id);
               
            }
           
        });
       
    },

    selectItem2: function() {

        var view = this.getPreventaferreteriaeditar();
        var producto = view.down('#productoId');
        var stCombo = producto.getStore();
        var record = stCombo.findRecord('id', producto.getValue()).data;
        
        view.down('#precioId').setValue(record.p_venta);
        view.down('#codigoId').setValue(record.codigo);
        view.down('#cantidadOriginalId').setValue(record.stock);
          
    },

    agregarItem2: function() {

        var view = this.getPreventaferreteriaeditar();
        var tipo_documento = view.down('#tipoDocumento2Id').getValue();
        var rut = view.down('#rutId').getValue();
        var direccion = view.down('#direccionId').getValue();
        var stItem = this.getPreventaferreteriaeditarStore();
        var producto = view.down('#productoId').getValue();
        var nombre = view.down('#nombreproductoId').getValue();
        var cantidad = view.down('#cantidadId').getValue();
        var cantidadori = view.down('#cantidadOriginalId').getValue();
        var precio = ((view.down('#precioId').getValue()));
        var precioun = (Math.round(view.down('#precioId').getValue())/ 1.19);
        var secuencia = view.down('#secuenciaId').getValue();
        var bolEnable = true;
        var secuencia = secuencia + 1;
        
        if (secuencia > 21 & tipo_documento !=2 ){

           Ext.Msg.alert('Alerta', 'Ya sobrepaso el maximo de Registros');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero);
                view.down('#cantidadOriginalId').setValue(cero);
                view.down('#precioId').setValue(cero);
                return;           

        };

        if (secuencia > 8 & tipo_documento ==2 ){

           Ext.Msg.alert('Alerta', 'Ya sobrepaso el maximo de Registros');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero);
                view.down('#cantidadOriginalId').setValue(cero);
                view.down('#precioId').setValue(cero);
                return; 
            

        };                    
       
        var cero = "";
        var cero1= 0;
        var cero2= 0;
        
        var tot = ((cantidad * precio));
        var neto = (Math.round(tot / 1.19));
        var exists = 0;
        var iva = (tot - neto);
        var neto = (tot - iva);
        var total = ((neto + iva ));

        
        if(!producto){            
            Ext.Msg.alert('Alerta', 'Debe Seleccionar un Producto');
            return false;
        }

        if(precio==0){
            Ext.Msg.alert('Alerta', 'Debe Ingresar Precio Producto');
            return false;
        }

        if(cantidad>cantidadori){
            Ext.Msg.alert('Alerta', 'Cantidad Ingresada de Productos Supera El Stock');
            return false;
        }

        if(cantidad==0){
            Ext.Msg.alert('Alerta', 'Debe Ingresar Cantidad.');
            return false;
        }
        
        if(!direccion){  // se validan los datos sólo si es factura
            Ext.Msg.alert('Alerta', 'Debe Ingresar Datos a la Factura.');
            return false;           
        }

        stItem.each(function(r){
            if(r.data.id_producto == producto){
                Ext.Msg.alert('Alerta', 'El registro ya existe.');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero2);
                view.down('#descuentoId').setValue(cero1);
                view.down('#precioId').setValue(cero1);
                view.down('#totdescuentoId').setValue(cero); 
                view.down('#cantidadOriginalId').setValue(cero1);

                return; 
            }
        });
        if(exists == 1)
            return;
        
        stItem.add(new Infosys_web.model.preventaferreteria.Item({
            secuencia: secuencia,
            id_producto: producto,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            neto: neto,
            total: total,
            iva: iva         
            
        }));

        this.recalcular();

        cero="";
        cero1=0;
        cero2=0;
        view.down('#codigoId').setValue(cero);
        view.down('#productoId').setValue(cero);
        view.down('#nombreproductoId').setValue(cero);
        view.down('#cantidadId').setValue(cero2);
        view.down('#precioId').setValue(cero);
        view.down('#cantidadOriginalId').setValue(cero);
        
    },

    editarpreventaferreteria: function(){

        var stItms = Ext.getStore('preventaferreteriaeditar');
        stItms.removeAll();
       
        var view = this.getPreventaferreteriaprincipal();       
                   
        if (view.getSelectionModel().hasSelection()) {
            var row = view.getSelectionModel().getSelection()[0];
            var view = this.getPreventaferreteriaeditar();
            var stItem = this.getPreventaferreteriaeditarStore();
            var idpreventaferreteria = row.data.id;
            var idvendedor = row.data.id_vendedor;
            stItem.proxy.extraParams = {idpreventa : idpreventaferreteria};
            stItem.load();

            Ext.Ajax.request({
            url: preurl +'preventa/edita/?idpreventa=' + row.data.id,
            params: {
                id: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) {                    
                    var view = Ext.create('Infosys_web.view.preventaferreteria.EditarPreventaferreteria').show();                   
                    var cliente = resp.cliente;
                    var secuencia = resp.secuencia;
                    if (cliente.id_sucursal == 0){
                        view.down("#direccionId").setValue(cliente.direccion);
                    }else{
                        view.down("#id_sucursalID").setValue(cliente.id_sucursal);
                        view.down("#direccionId").setValue(cliente.direccion_sucursal);
                    };                            
                    view.down("#ticketId").setValue(cliente.num_ticket);
                    view.down("#giroId").setValue(cliente.nom_giro);
                    view.down("#idId").setValue(cliente.id);
                    view.down("#tipoDocumento2Id").setValue(cliente.id_tip_docu);
                    view.down("#fechaventaId").setValue(cliente.fecha_venta);                    
                    view.down("#id_cliente").setValue(cliente.id_cliente);
                    view.down("#rutId").setValue(cliente.rut_cliente);
                    view.down("#rutId").setValue(cliente.rut_cliente);
                    view.down("#nombre_id").setValue(cliente.nom_cliente);
                    view.down("#tipocondpagoId").setValue(cliente.id_pago);
                    view.down("#tipoVendedorId").setValue(idvendedor);
                    view.down("#observaId").setValue(cliente.id_observa);
                    var total = (cliente.total);
                    var neto = (cliente.neto);
                    var iva = (cliente.total - cliente.neto);
                    view.down('#finaltotalId').setValue(Ext.util.Format.number(total, '0,000'));
                    view.down('#finaltotalpostId').setValue(Ext.util.Format.number(total, '0'));
                    view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
                    view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
                    view.down('#finalafectoId').setValue(Ext.util.Format.number(neto, '0'));
                    view.down('#descuentovalorId').setValue(Ext.util.Format.number(cliente.desc, '0'));
                    view.down("#secuenciaId").setValue(secuencia);
                     
                }else{
                    Ext.Msg.alert('Correlativo no Existe');
                    return;
                }

            }
            
        });

        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
        
       
       
    },

    eliminaritem2: function() {
        var view = this.getPreventaferreteriaeditar();

        var total = view.down('#finaltotalpostId').getValue();
        var neto = view.down('#finaltotalnetoId').getValue();
        var iva = view.down('#finaltotalivaId').getValue();
        var grid  = view.down('#itemsgridId');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
         
            var total = ((total) - (row.data.total));
            var neto = ((neto) - (row.data.neto));
            var iva = ((iva) - (row.data.iva));
            var afecto = neto;
            view.down('#finaltotalId').setValue(Ext.util.Format.number(total, '0,000'));
            view.down('#finaltotalpostId').setValue(Ext.util.Format.number(total, '0'));
            view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
            view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
            view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
  
            grid.getStore().remove(row);

        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
    },


    eliminaritem: function() {
        var view = this.getPreventaferreteriaingresar();
        var grid  = view.down('#itemsgridId');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            grid.getStore().remove(row);
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }

        this.recalcularFinal();       
    },

    editaritem: function() {

        var view = this.getPreventaferreteriaingresar();
        var grid  = view.down('#itemsgridId');
        var cero = "";
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            var id_producto = row.data.id_producto;

            
            Ext.Ajax.request({
            url: preurl + 'productos/buscarp?nombre='+id_producto,
            params: {
                id: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) { 
                    if(resp.cliente){
                        var cliente = resp.cliente;
                        view.down('#precioId').setValue(cliente.p_venta);
                        view.down('#productoId').setValue(row.data.id_producto);
                        view.down('#nombreproductoId').setValue(row.data.nombre);
                        view.down('#codigoId').setValue(cliente.codigo);
                        view.down('#cantidadOriginalId').setValue(cliente.stock);
                        view.down('#cantidadId').setValue(row.data.cantidad);
                                                     
                    }
                }
            }

        });
        grid.getStore().remove(row);
        this.recalcularFinal();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    editaritem2: function() {
        var view = this.getPreventaferreteriaeditar();
        var total = view.down('#finaltotalpostId').getValue();
        var neto = view.down('#finaltotalnetoId').getValue();
        var afecto = view.down('#finalafectoId').getValue();
        var iva = view.down('#finaltotalivaId').getValue();
        var grid  = view.down('#itemsgridId');
        var cero = "";
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            var id_producto = row.data.id_producto;
            var totalnue = total - (row.data.total);
            var ivanue = iva - (row.data.iva);
            var afectonue = afecto - (row.data.neto);
            var netonue = neto - (row.data.neto);

            Ext.Ajax.request({
            url: preurl + 'productos/buscarp?nombre='+id_producto,
            params: {
                id: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                if (resp.success == true) { 
                    if(resp.cliente){
                        var cliente = resp.cliente;
                        view.down('#precioId').setValue(cliente.p_venta);
                        view.down('#productoId').setValue(row.data.id_producto);
                        view.down('#nombreproductoId').setValue(row.data.nombre);
                        view.down('#codigoId').setValue(cliente.codigo);
                        view.down('#cantidadOriginalId').setValue(cliente.stock);
                        view.down('#cantidadId').setValue(row.data.cantidad);                                                
                        view.down('#finaltotalId').setValue(Ext.util.Format.number(totalnue, '0,000'));
                        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(totalnue, '0'));
                        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(netonue, '0'));
                        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(ivanue, '0'));
                        view.down('#finalafectoId').setValue(Ext.util.Format.number(afectonue, '0'));
                        view.down('#descuentovalorId').setValue(Ext.util.Format.number(cero));
       
                    }
                }
            }

        });
        grid.getStore().remove(row);
        //this.recalcularFinal();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    exportarpreventaferreteria: function(){
        var view = this.getPreventaferreteriaprincipal();
        if (view.getSelectionModel().hasSelection()) {
            var row = view.getSelectionModel().getSelection()[0];
            window.open(preurl +'preventa/exportPDF/?idpreventa=' + row.data.id)
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
    },

    validaboleta: function(){

        var view =this.getPreventaferreteriaingresar();
        var rut = view.down('#rutId').getValue();
        
        Ext.Ajax.request({
            url: preurl + 'clientes/validaRut?valida='+rut,
            params: {
                id: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                var cero = "";
                if (resp.success == true) {                    
                    if(resp.cliente){
                        var cliente = resp.cliente;
                        view.down("#id_cliente").setValue(cliente.id)
                        view.down("#nombre_id").setValue(cliente.nombres)
                        view.down("#tipocondpagoId").setValue(cliente.id_pago)
                        view.down("#rutId").setValue(rut)
                        var bolEnable = false;
                    if (cliente.id_pago == 1){
                        view.down('#DescuentoproId').setDisabled(bolEnable);
                        view.down('#tipoDescuentoId').setDisabled(bolEnable);
                        view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                    };
                    if (cliente.id_pago == 2){
                        view.down('#DescuentoproId').setDisabled(bolEnable);
                        view.down('#tipoDescuentoId').setDisabled(bolEnable);
                        view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                    };
                    if (cliente.id_pago == 4){
                        view.down('#DescuentoproId').setDisabled(bolEnable);
                        view.down('#tipoDescuentoId').setDisabled(bolEnable);
                        view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                    };
                    if (cliente.id_pago == 6){

                         view.down('#DescuentoproId').setDisabled(bolEnable);
                         view.down('#tipoDescuentoId').setDisabled(bolEnable);
                         view.down('#descuentovalorId').setDisabled(bolEnable);
                        
                    };
                    if (cliente.id_pago == 7){

                         view.down('#DescuentoproId').setDisabled(bolEnable);
                         view.down('#tipoDescuentoId').setDisabled(bolEnable);
                         view.down('#descuentovalorId').setDisabled(bolEnable);
                        
                    };                   
                }
                    
                }
            }

        });       
       
    },

    selectItemdocuemento: function() {
        
        var view =this.getPreventaferreteriaingresar();
        var tipo_documento = view.down('#tipoDocumento2Id');
        var bolDisabled = tipo_documento.getValue() == 2 ? true : false; // campos se habilitan sólo en factura
        
        if(bolDisabled == true){  // limpiar campos
           view.down('#rutId').setValue('19');
           this.validaboleta();           
        }
        //view.down('#rutId').setDisabled(bolDisabled);
        //view.down('#buscarBtn').setDisabled(bolDisabled);
        //view.down('#nombre_id').setDisabled(bolDisabled);
        //view.down('#giroId').setDisabled(bolDisabled);
        //view.down('#sucursalId').setDisabled(bolDisabled);
        //view.down('#direccionId').setDisabled(bolDisabled);        
        view.down("#rutId").focus();

    },

    exportarexcelpreventaferreteria: function(){
        
        var jsonCol = new Array()
        var i = 0;
        var grid =this.getPreventaferreteriaprincipal()
        Ext.each(grid.columns, function(col, index){
          if(!col.hidden){
              jsonCol[i] = col.dataIndex;
          }          
          i++;
        })   
                         
        window.open(preurl + 'adminServicesExcel/exportarExcelpreventa?cols='+Ext.JSON.encode(jsonCol));
 
    },

    changedctofinal: function(){
        this.recalculardescuento();
    },

    changedctofinal3: function(){
        this.recalculardescuentopro();
    },

    changedctofinal4: function(){
        this.recalculardescuentopro2();
    },

    recalculardescuentopro: function(){

        var view = this.getPreventaferreteriaingresar();
        var precio = view.down('#precioId').getValue();
        var cantidad = view.down('#cantidadId').getValue();
        var total = ((precio * cantidad));
        var desc = view.down('#DescuentoproId').getValue();
       
        if (desc){
        var descuento = view.down('#DescuentoproId');
        var stCombo = descuento.getStore();
        var record = stCombo.findRecord('id', descuento.getValue()).data;
        var dcto = (record.porcentaje);
        totaldescuento = (((total * dcto)  / 100));
        view.down('#totdescuentoId').setValue(totaldescuento);
        };         
    },

    recalculardescuentopro2: function(){

        var view = this.getPreventaferreteriaeditar();
        var precio = view.down('#precioId').getValue();
        var cantidad = view.down('#cantidadId').getValue();
        var total = (precio * cantidad);
        var descu = view.down('#DescuentoproId').getValue();
        var descuento = view.down('#DescuentoproId');
       
        if (descu == ""){
            var totaldescuento = 0;
        }else{
        var stCombo = descuento.getStore();
        var record = stCombo.findRecord('id', descuento.getValue()).data;
        var dcto = (record.porcentaje);
        totaldescuento = (((total * dcto)  / 100));
        view.down('#totdescuentoId').setValue(totaldescuento);
        };   
    },

    changedctofinal2: function(){
        this.recalculardescuento2();
    },

    recalcular: function(){

        var view = this.getPreventaferreteriaeditar();
        var stItem = this.getPreventaferreteriaeditarStore();
        var grid2 = view.down('#itemsgridId');
        var pretotal = 0;
        var total = 0;
        var iva = 0;
        var neto = 0;
        var dcto = view.down('#finaldescuentoId').getValue();

        
        stItem.each(function(r){
            pretotal = pretotal + (parseInt(r.data.total));
            //iva = iva + r.data.iva
            //neto = neto + r.data.neto
        });

        neto = (Math.round(pretotal /1.19));
        iva = ((pretotal - neto));
        afecto = neto;
        neto = neto;
        pretotalfinal = pretotal;

        view.down('#finaltotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
        view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
        //view.down('#finalpretotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
    },
    
    recalcularFinal: function(){

        var view = this.getPreventaferreteriaingresar();
        var stItem = this.getPreventaferreteriaItemsStore();
        var grid2 = view.down('#itemsgridId');
        var pretotal = 0;
        var total = 0;
        var iva = 0;
        var neto = 0;
        var dcto = view.down('#finaldescuentoId').getValue();

        stItem.each(function(r){
            pretotal = pretotal + (parseInt(r.data.total))
            //iva = iva + r.data.iva
            //neto = neto + r.data.neto
        });

        neto = (Math.round(pretotal /1.19));
        iva = ((pretotal - neto));
        afecto = neto;
        neto = neto;
        pretotalfinal = pretotal;
        
        view.down('#finaltotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
        view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
        //view.down('#descuentovalorId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
    },

    recalculardescuento: function(){

        var view = this.getPreventaferreteriaingresar();
        var pretotal = view.down('#finalafectoId').getValue();
        var total = view.down('#finaltotalpostId').getValue();
        var iva = view.down('#finaltotalivaId').getValue();
        var neto = view.down('#finaltotalnetoId').getValue();
        var descuento = view.down('#tipoDescuentoId');
        var stCombo = descuento.getStore();
        var record = stCombo.findRecord('id', descuento.getValue()).data;
        var dcto = (record.porcentaje);

        afecto = (Math.round(total / 1.19));
        descuentopesos = (Math.round(neto * dcto) / 100);
        afecto = neto - descuentopesos;
        pretotal = (Math.round((afecto * 19) / 100) + afecto);
        iva = (pretotal - afecto);
        afecto = afecto;
        neto = neto;
        pretotalfinal = afecto + iva;

        view.down('#finaltotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
        view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
        view.down('#descuentovalorId').setValue(Ext.util.Format.number(descuentopesos, '0'));
    },

    recalculardescuento2: function(){

        var view = this.getPreventaferreteriaeditar();
        var pretotal = view.down('#finalafectoId').getValue();
        var total = view.down('#finaltotalpostId').getValue();
        var iva = view.down('#finaltotalivaId').getValue();
        var neto = view.down('#finaltotalnetoId').getValue();
        var descuento = view.down('#tipoDescuentoId');
        var stCombo = descuento.getStore();
        var record = stCombo.findRecord('id', descuento.getValue()).data;
        var dcto = (record.porcentaje);
       
        afecto = (Math.round(total / 1.19));
        descuentopesos = (Math.round((neto * dcto) / 100));
        afecto = neto - descuentopesos;
        pretotal = (Math.round((afecto * 19) / 100) + afecto);
        iva = (pretotal - afecto);
        afecto = afecto;
        neto = neto;
        pretotalfinal = afecto + iva;

        view.down('#finaltotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
        view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
        view.down('#descuentovalorId').setValue(Ext.util.Format.number(descuentopesos, '0'));
    },

    recalcularFinal2: function(){

        var view = this.getPreventaferreteriaeditar();
        var stItem = this.getPreventaferreteriaItemsStore();
        var grid2 = view.down('#itemsgridId');
        var pretotal = 0;
        var total = 0;
        var iva = 0;
        var neto = 0;
        var dcto = view.down('#finaldescuentoId').getValue();

         stItem.each(function(r){
            pretotal = pretotal + (parseInt(r.data.total))
            iva = iva + r.data.iva
            neto = neto + r.data.neto
        });

        neto = (Math.round(pretotal /1.19));
        iva = ((pretotal - neto));
        afecto = neto;
        neto = neto;
        pretotalfinal = pretotal;
        
        view.down('#finaltotalId').setValue(Ext.util.Format.number(pretotalfinal, '0,000'));
        view.down('#finaltotalpostId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
        view.down('#finaltotalnetoId').setValue(Ext.util.Format.number(neto, '0'));
        view.down('#finaltotalivaId').setValue(Ext.util.Format.number(iva, '0'));
        view.down('#finalafectoId').setValue(Ext.util.Format.number(afecto, '0'));
        view.down('#descuentovalorId').setValue(Ext.util.Format.number(pretotalfinal, '0'));
    },


    agregarItem: function() {

        var view = this.getPreventaferreteriaingresar();
        var tipo_documento = view.down('#tipoDocumento2Id').getValue();
        var rut = view.down('#rutId').getValue();
        var direccion = view.down('#direccionId').getValue();
        var stItem = this.getPreventaferreteriaItemsStore();
        var producto = view.down('#productoId').getValue();
        var nombre = view.down('#nombreproductoId').getValue();
        var cantidad = view.down('#cantidadId').getValue();
        var cantidadori = view.down('#cantidadOriginalId').getValue();
        var precio = ((view.down('#precioId').getValue()));
        var precioun = (Math.round(view.down('#precioId').getValue())/ 1.19);
        var secuencia = view.down('#secuenciaId').getValue();
        var bolEnable = true;
        var secuencia = secuencia + 1;
                  
        if (secuencia > 21 & tipo_documento !=2 ){

           Ext.Msg.alert('Alerta', 'Ya sobrepaso el maximo de Registros');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero);
                view.down('#cantidadOriginalId').setValue(cero);
                view.down('#precioId').setValue(cero);
                return;           

        };

        if (secuencia > 8 & tipo_documento ==2 ){

           Ext.Msg.alert('Alerta', 'Ya sobrepaso el maximo de Registros');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero);
                view.down('#cantidadOriginalId').setValue(cero);
                view.down('#precioId').setValue(cero);
                return; 
            

        };
        
        var tot = ((cantidad * precio));
        var neto = (Math.round(tot / 1.19));
        var exists = 0;
        var iva = (tot - neto);
        var neto = (tot - iva);
        var total = ((neto + iva ));
        
        if(!producto){            
            Ext.Msg.alert('Alerta', 'Debe Seleccionar un Producto');
            return false;
        }

        if(precio==0){
            Ext.Msg.alert('Alerta', 'Debe Ingresar Precio Producto');
            return false;
        }

        if(cantidad>cantidadori){
            Ext.Msg.alert('Alerta', 'Cantidad Ingresada de Productos Supera El Stock');
            return false;
        }

        if(cantidad==0){
            Ext.Msg.alert('Alerta', 'Debe Ingresar Cantidad.');
            return false;
        }

       
        if(!direccion){  // se validan los datos sólo si es factura
            Ext.Msg.alert('Alerta', 'Debe Ingresar Datos a la Factura.');
            return false;           
        }
        stItem.each(function(r){
            if(r.data.id_producto == producto){
                Ext.Msg.alert('Alerta', 'El registro ya existe.');
                exists = 1;
                cero="";
                view.down('#codigoId').setValue(cero);
                view.down('#productoId').setValue(cero);
                view.down('#nombreproductoId').setValue(cero);
                view.down('#cantidadId').setValue(cero);
                view.down('#cantidadOriginalId').setValue(cero);
                view.down('#totdescuentoId').setValue(cero);                
                view.down('#precioId').setValue(cero);
                return; 
            }
        });
        if(exists == 1)
            return;
        
        stItem.add(new Infosys_web.model.preventaferreteria.Item({
            id: secuencia,
            id_producto: producto,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            neto: neto,
            total: total,
            iva: iva
        }));
        this.recalcularFinal();

        cero="";
        cero1=0;
        cero2=0;
        view.down('#codigoId').setValue(cero);
        view.down('#productoId').setValue(cero);
        view.down('#nombreproductoId').setValue(cero);
        view.down('#cantidadId').setValue(cero2);
        view.down('#precioId').setValue(cero);
        view.down('#cantidadOriginalId').setValue(cero);
        view.down('#secuenciaId').setValue(secuencia);        
        view.down("#buscarproc").focus();
    },

    selectItem: function() {

        var view = this.getPreventaferreteriaingresar();
        var producto = view.down('#productoId');
        var stCombo = producto.getStore();
        var record = stCombo.findRecord('id', producto.getValue()).data;
        
        view.down('#precioId').setValue(record.p_venta);
        view.down('#codigoId').setValue(record.codigo);
        view.down('#cantidadOriginalId').setValue(record.stock);
          
    },

    buscar: function(){

        var view = this.getBuscarclientespreventaferreteria();
        var st = this.getClientesStore();
        var rut = view.down('#rutId').getValue();
        var nombre = view.down('#nombreId').getValue();

        if (!rut){            
             var opcion = "Nombre";
        };
      
        if (!nombre){
            var opcion = "Rut";
            var nombre = view.down('#rutId').getValue();
        };

        st.proxy.extraParams = {nombre : nombre,
                                opcion : opcion}
        st.load();
    },

    seleccionarprecios: function(){

        var view = this.getBuscarpreciosferreteria();
        var viewIngresa = this.getPreventaferreteriaingresar();
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            viewIngresa.down('#precioId').setValue(row.data.valor);
            view.close();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    seleccionarprecios2: function(){

        var view = this.getBuscarprecios2();
        var busca = this.getPreventaferreteriaeditar();            
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            busca.down('#precioId').setValue(row.data.valor);
            view.close();
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    seleccionarproductos: function(){

        var view = this.getBuscarproductospreventaferreteria();
        var viewIngresa = this.getPreventaferreteriaingresar();
        var estado = viewIngresa.down('#estadoId').getValue();        
        var cero = 0;
        var cero2 = "";
        var cero1 = "";
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            viewIngresa.down('#productoId').setValue(row.data.id);
            viewIngresa.down('#nombreproductoId').setValue(row.data.nombre);
            viewIngresa.down('#codigoId').setValue(row.data.codigo);
            var precioventa = (row.data.p_venta);
            if (row.data.stock < 0){
                        view.close();
                        Ext.Msg.alert('Alerta', 'Producto Sin Stock');
                        viewIngresa.down('#codigoId').setValue(cero);
                        viewIngresa.down('#productoId').setValue(cero);
                        viewIngresa.down('#nombreproductoId').setValue(cero);
                        viewIngresa.down('#cantidadId').setValue(cero2);
                        viewIngresa.down('#DescuentoproId').setValue(cero1);
                        viewIngresa.down('#precioId').setValue(cero1);
                        viewIngresa.down('#cantidadOriginalId').setValue(cero1);
                        return;

                           
            }else{
            if (precioventa == 0){
                var bolEnable = false;
                viewIngresa.down('#precioId').setDisabled(bolEnable);
                viewIngresa.down('#precioId').setValue(precioventa);
                viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                view.close();
                viewIngresa.down("#precioId").focus();
                
            }else{
                
                if (estado == 3){
                viewIngresa.down('#precioId').setValue(cero);
                viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                view.close();  
                viewIngresa.down("#precioId").focus();              
                }else{
                    viewIngresa.down('#precioId').setValue(row.data.p_venta);
                    viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                    view.close();
                    viewIngresa.down("#cantidadId").focus();
                }
            }
        }  
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
        var bolEnable = false;
        viewIngresa.down('#buscarprec').setDisabled(bolEnable);
                        
       
    },

    seleccionarproductos2: function(){

        var view = this.getBuscarproductospreventaferreteria2();
        var viewIngresa = this.getPreventaferreteriaeditar();
        var estado = viewIngresa.down('#estadoId').getValue();        
        var cero = 0;
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            viewIngresa.down('#productoId').setValue(row.data.id);
            viewIngresa.down('#nombreproductoId').setValue(row.data.nombre);
            viewIngresa.down('#codigoId').setValue(row.data.codigo);
            var precioventa = (row.data.p_venta);
            if (precioventa == 0){
                var bolEnable = false;
                viewIngresa.down('#precioId').setDisabled(bolEnable);
                viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                view.close();
                viewIngresa.down("#precioId").focus();                
            }else{                
                if (estado == 3){
                viewIngresa.down('#precioId').setValue(cero);
                viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                view.close();  
                viewIngresa.down("#precioId").focus();              
                }else{
                    viewIngresa.down('#precioId').setValue(row.data.p_venta);
                    viewIngresa.down('#cantidadOriginalId').setValue(row.data.stock);
                    view.close();
                    viewIngresa.down("#cantidadId").focus();
                }
            }
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
             
       
    },

    buscarproductos: function(){

        var st = this.getProductosfStore();
        st.load();
        Ext.create('Infosys_web.view.preventaferreteria.BuscarProductos').show();
      
    },

    buscarproductos2: function(){

        var st = this.getProductosfStore();
        st.load();
        Ext.create('Infosys_web.view.preventaferreteria.BuscarProductos2').show();
    },

    buscarprecios: function(){

        var busca = this.getPreventaferreteriaingresar()
        var id = busca.down('#productoId').getValue();
        var edit =  Ext.create('Infosys_web.view.preventaferreteria.BuscarPrecios').show();
        var st = this.getPreciosdescuentosStore();
        var nombre = busca.down('#nombreproductoId').getValue();
        st.proxy.extraParams = {nombre : id};
        st.load();
        edit.down('#nombreId').setValue(nombre);

       /*var busca = this.getpreventaferreteriaingresar()
       var id = busca.down('#productoId').getValue();
       if (id){
       var edit = Ext.create('Infosys_web.view.preventaferreteria.Autoriza').show();
       var view = this.getAutorizacion();
       //view.down("#enterId").focus();
       }else{
        Ext.Msg.alert('Alerta', 'Debe seleccionar Producto.');
        return;
           
       }*/

    },

    buscarprecios5: function(){

       var id = busca.down('#productoId').getValue();
       var nombre = busca.down('#nombreproductoId').getValue();

       if (id){
              var edit =  Ext.create('Infosys_web.view.preventaferreteria.BuscarPrecios').show();
              var st = this.getPreciosdescuentosStore();
              st.proxy.extraParams = {nombre : id};
              st.load();
              edit.down('#nombreId').setValue(nombre);
             
           }else {
              Ext.Msg.alert('Alerta', 'Debe seleccionar Producto.');
              return;
             
        };
      
    },
    
    buscarprecios2: function(){

       var busca = this.getPreventaferreteriaeditar();
       var id = busca.down('#productoId').getValue();
       if (id){
       var edit = Ext.create('Infosys_web.view.preventaferreteria.Autoriza3').show();
       var view = this.getAutorizacion();
       //view.down("#enterId").focus();
       }else{
        Ext.Msg.alert('Alerta', 'Debe seleccionar Producto.');
        return;
           
       }
      
    },    

    autorizaprecios: function(){

       var busca = this.getPreventaferreteriaingresar()
       var clave = this.getAutorizacion()
       var usua = clave.down('#enterId').getValue();
       var id = busca.down('#productoId').getValue();
       var nombre = busca.down('#nombreproductoId').getValue();

       if (usua == "12345"){
           clave.close();    
           if (id){
              var edit =  Ext.create('Infosys_web.view.preventaferreteria.BuscarPrecios').show();
              var st = this.getPreciosdescuentosStore();
              st.proxy.extraParams = {nombre : id};
              st.load();
              edit.down('#nombreId').setValue(nombre);
            }else {
              Ext.Msg.alert('Alerta', 'Debe seleccionar Producto.');
              return;
              clave.close();
           };
           
        }else{
            Ext.Msg.alert('Alerta', 'Clave no Autorizada');
            return;
            
        }; 
        clave.close();
    },

    autorizaprecios2: function(){

       var busca = this.getPreventaferreteriaeditar()
       var id = busca.down('#productoId').getValue();
       var nombre = busca.down('#nombreproductoId').getValue();
       var edit =  Ext.create('Infosys_web.view.preventaferreteria.BuscarPrecios2').show();
       var st = this.getPreciosdescuentosStore();
       st.proxy.extraParams = {nombre : id};
       st.load();
       edit.down('#nombreId').setValue(nombre);

           
    },

    buscarp: function(){
        var view = this.getBuscarproductospreventaferreteria();
        var st = this.getProductosfStore()
        var nombre = view.down('#nombreId').getValue()
        st.proxy.extraParams = {nombre : nombre}
        st.load();
    },

    buscarp2: function(){
        var view = this.getBuscarproductospreventaferreteria2();
        var st = this.getProductosfStore()
        var nombre = view.down('#nombreId').getValue()
        st.proxy.extraParams = {nombre : nombre}
        st.load();
    },

    condicionpago: function(){

        var viewIngresa = this.getPreventaferreteriaingresar();
        var idpago = viewIngresa.down('#tipocondpagoId').getValue();
        var bolEnable = false;
        var bolDisabel = true;
         
        if (idpago == 1){
            viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
            viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
            viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
                
        };
        if (idpago == 6){

             viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
             viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
            
        };
        if (idpago == 7){

             viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
             viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
            
        };
        if (idpago == 2){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 3){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 4){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 5){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };

    },

    condicionpago2: function(){

        var viewIngresa = this.getPreventaferreteriaeditar();
        var idpago = viewIngresa.down('#tipocondpagoId').getValue();
        var bolEnable = false;
        var bolDisabel = true;
         
        if (idpago == 1){
            viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
            viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
            viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
                
        };
        if (idpago == 6){

             viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
             viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
            
        };
        if (idpago == 7){

             viewIngresa.down('#DescuentoproId').setDisabled(bolEnable);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolEnable);
             viewIngresa.down('#descuentovalorId').setDisabled(bolEnable);
            
        };
        if (idpago == 2){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 3){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 4){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
        if (idpago == 5){

             viewIngresa.down('#DescuentoproId').setDisabled(bolDisabel);
             viewIngresa.down('#tipoDescuentoId').setDisabled(bolDisabel);
             viewIngresa.down('#descuentovalorId').setDisabled(bolDisabel);
            
        };
    },

    seleccionarcliente: function(){

        var view = this.getBuscarclientespreventaferreteria();
        var viewIngresa = this.getPreventaferreteriaingresar();
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            
            var estado = (row.data.estado);
            if (estado == 3) {

                Ext.Msg.alert('Cliente Bloqueado');
                 view.close();

                return;   
                 
                
            }else if (estado == 4){

                 Ext.Msg.alert('Cliente protestos Vigentes');
                 view.close();
            return;
              
                
            }else {

            viewIngresa.down('#id_cliente').setValue(row.data.id);
            viewIngresa.down('#nombre_id').setValue(row.data.nombres);
            viewIngresa.down('#rutId').setValue(row.data.rut);
            viewIngresa.down('#tipocondpagoId').setValue(row.data.id_pago);
            viewIngresa.down('#direccionId').setValue(row.data.direccion);
            viewIngresa.down('#giroId').setValue(row.data.giro);
            view.close();
            viewIngresa.down("#tipoVendedorId").focus();
            var bolEnable = true;
            /*if (cliente.id_pago == 1){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 2){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 4){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 6){

                 view.down('#DescuentoproId').setDisabled(bolEnable);
                 view.down('#tipoDescuentoId').setDisabled(bolEnable);
                 view.down('#descuentovalorId').setDisabled(bolEnable);
                
            };
            if (cliente.id_pago == 7){

                 view.down('#DescuentoproId').setDisabled(bolEnable);
                 view.down('#tipoDescuentoId').setDisabled(bolEnable);
                 view.down('#descuentovalorId').setDisabled(bolEnable);
                
            };*/
    
            };
           
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    seleccionarcliente2: function(){

        var view = this.getBuscarclientespreventaferreteria2();
        var viewIngresa = this.getPreventaferreteriaeditar();
        var grid  = view.down('grid');
        if (grid.getSelectionModel().hasSelection()) {
            var row = grid.getSelectionModel().getSelection()[0];
            
            var estado = (row.data.estado);
            if (estado == 3) {

                Ext.Msg.alert('Cliente Bloqueado');
                 view.close();

                return;   
                 
                
            }else if (estado == 4){

                 Ext.Msg.alert('Cliente protestos Vigentes');
                 view.close();
            return;
              
                
            }else {

            viewIngresa.down('#id_cliente').setValue(row.data.id);
            viewIngresa.down('#nombre_id').setValue(row.data.nombres);
            viewIngresa.down('#rutId').setValue(row.data.rut);
            viewIngresa.down('#tipocondpagoId').setValue(row.data.id_pago);
            viewIngresa.down('#direccionId').setValue(row.data.direccion);
            viewIngresa.down('#giroId').setValue(row.data.giro);
            view.close();
            viewIngresa.down("#tipoVendedorId").focus();
            var bolEnable = true;
            /*if (cliente.id_pago == 1){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 2){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 4){
                view.down('#DescuentoproId').setDisabled(bolEnable);
                view.down('#tipoDescuentoId').setDisabled(bolEnable);
                view.down('#descuentovalorId').setDisabled(bolEnable);
                    
            };
            if (cliente.id_pago == 6){

                 view.down('#DescuentoproId').setDisabled(bolEnable);
                 view.down('#tipoDescuentoId').setDisabled(bolEnable);
                 view.down('#descuentovalorId').setDisabled(bolEnable);
                
            };
            if (cliente.id_pago == 7){

                 view.down('#DescuentoproId').setDisabled(bolEnable);
                 view.down('#tipoDescuentoId').setDisabled(bolEnable);
                 view.down('#descuentovalorId').setDisabled(bolEnable);
                
            };*/
    
            };
           
        }else{
            Ext.Msg.alert('Alerta', 'Selecciona un registro.');
            return;
        }
       
    },

    validarut: function(){

        var view = this.getPreventaferreteriaingresar();
        var rut = view.down('#rutId').getValue();
        if (rut == ""){

            var edit = Ext.create('Infosys_web.view.preventaferreteria.BuscarClientes');            

        }else{
        var numero = rut.length;
        var cero = "";
                
        if(numero==0 ){
            var edit = Ext.create('Infosys_web.view.preventaferreteria.BuscarClientes');
        }else{
       
         if(numero>9){            
            Ext.Msg.alert('Rut Erroneo Ingrese Sin Puntos');
            return;            
        }else{
            if(numero>13){
            Ext.Msg.alert('Rut Erroneo Ingrese Sin Puntos');
            return;   
            }
        }        

        Ext.Ajax.request({
            url: preurl + 'clientes/validaRut?valida='+rut,
            params: {
                id: 1,
                tipo: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                
                if (resp.success == true) {                    
                    if(resp.cliente){
                        var cliente = resp.cliente;
                        view.down("#rutId").setValue(rut);
                        view.down("#id_cliente").setValue(cliente.id)
                        view.down("#nombre_id").setValue(cliente.nombres)
                        view.down("#tipoVendedorId").setValue(cliente.id_vendedor)
                        view.down("#giroId").setValue(cliente.id_giro)
                        view.down("#direccionId").setValue(cliente.direccion)    
                        view.down("#rutId").setValue(rut)
                        view.down("#tipocondpagoId").setValue(cliente.id_pago)                        
                        view.down("#buscarproc").focus()  
                        var bolEnable = false;
                        /*if (cliente.id_pago == 1){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 2){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 4){
                            view.down('#DescuentoproId').setDisabled(bolEnable);
                            view.down('#tipoDescuentoId').setDisabled(bolEnable);
                            view.down('#descuentovalorId').setDisabled(bolEnable);
                                
                        };
                        if (cliente.id_pago == 6){

                             view.down('#DescuentoproId').setDisabled(bolEnable);
                             view.down('#tipoDescuentoId').setDisabled(bolEnable);
                             view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                        };
                        if (cliente.id_pago == 7){

                             view.down('#DescuentoproId').setDisabled(bolEnable);
                             view.down('#tipoDescuentoId').setDisabled(bolEnable);
                             view.down('#descuentovalorId').setDisabled(bolEnable);
                            
                        };*/                      
                    }else{
                        var viewedit = Ext.create('Infosys_web.view.clientes.Ingresar').show();                        
                        viewedit.down("#rutId").setValue(rut);                         
                    }
                    
                }else{
                      Ext.Msg.alert('Informacion', 'Rut Incorrecto');
                      view.down("#rutId").setValue(cero);
                      return;
                      
                }
            }

        }); 
        
        }
        
        }      
       
    },

    mpreventaferreteria: function(){
       
        var viewport = this.getPanelprincipal();
        viewport.removeAll();
        viewport.add({xtype: 'preventaferreteriaprincipal'});
    },


    
    grabarpreventaferreteria: function(){

        var viewIngresa = this.getPreventaferreteriaingresar();
        var numeroticket = viewIngresa.down('#ticketId').getValue();
        var idtipo = viewIngresa.down('#tipoDocumento2Id').getValue();
        var idcliente = viewIngresa.down('#id_cliente').getValue();
        var sucursal = viewIngresa.down('#id_sucursalID').getValue();
        var idpago = viewIngresa.down('#tipocondpagoId').getValue();
        var vender = viewIngresa.down('#tipoVendedorId').getValue();
                
        if(!vender){
            Ext.Msg.alert('Seleccione Vendedor');
            return;   
        }
        var idpago = viewIngresa.down('#tipocondpagoId').getValue();
        var producto = viewIngresa.down('#tipoVendedorId');
        var stCombo = producto.getStore();
        var record = stCombo.findRecord('id', producto.getValue()).data;
        var finalafectoId = viewIngresa.down('#finaltotalnetoId').getValue();
        var vendedor = record.id;
        var fechapreventaferreteria = viewIngresa.down('#fechaventaId').getValue();
        var stItem = this.getPreventaferreteriaItemsStore();
        var stpreventaferreteria = this.getPreventaferreteriaStore();
        var observa = viewIngresa.down('#observaId').getValue();
     
        if(!finalafectoId){
            Ext.Msg.alert('Ingrese Productos a la Venta');
            return;   
        }
      

        if(!idpago){
            Ext.Msg.alert('Ingrese Condicion Venta');
            return;   
        }

        
        var dataItems = new Array();
        stItem.each(function(r){
            dataItems.push(r.data)
        });

        Ext.Ajax.request({
            url: preurl + 'preventa/save',
            params: {
                idcliente: idcliente,
                items: Ext.JSON.encode(dataItems),
                vendedor : vendedor,
                sucursal: sucursal,
                observa: observa,
                idtipo : idtipo,
                idpago : idpago,
                numeroticket : numeroticket,
                fechapreventa : fechapreventaferreteria,
                descuento : viewIngresa.down('#descuentovalorId').getValue(),
                neto : viewIngresa.down('#finalafectoId').getValue(),
                iva : viewIngresa.down('#finaltotalivaId').getValue(),
                afecto: viewIngresa.down('#finalafectoId').getValue(),
                total: viewIngresa.down('#finaltotalpostId').getValue()
            },
             success: function(response){
                 var resp = Ext.JSON.decode(response.responseText);
                 var idpreventaferreteria= resp.idpreventa;
                 viewIngresa.close();
                 stpreventaferreteria.load();
                 window.open(preurl + 'preventa/exportPDF/?idpreventa='+idpreventaferreteria);
            }
           
        });
       
    },

        
    
    agregarpreventaferreteria: function(){

         //var view = this.getpreventaferreteriaingresar();
         var nombre = "6";
         var tipo = "2";

         Ext.Ajax.request({

            url: preurl + 'correlativos/genera?valida='+nombre,
            params: {
                id: 1
            },
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);

                if (resp.success == true) {
                    var view = Ext.create('Infosys_web.view.preventaferreteria.Preventaferreteria').show();                   
                    var cliente = resp.cliente;
                    var correlanue = cliente.correlativo;
                    correlanue = (parseInt(correlanue)+1);
                    var correlanue = correlanue;
                    view.down("#ticketId").setValue(correlanue);
                    view.down("#tipoDocumento2Id").setValue(tipo);
                    view.down("#rutId").focus();
                }else{
                    Ext.Msg.alert('Correlativo YA Existe');
                    return;
                }



            }            
        });        
       
    },

    cerrarpreventaferreteria: function(){
        var viewport = this.getPanelprincipal();
        viewport.removeAll();
     
    },
  
});










