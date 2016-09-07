Ext.define('Infosys_web.store.Loglibros', {
    extend: 'Ext.data.Store',
    model: 'Infosys_web.model.Loglibros',
    autoLoad: true,
    pageSize: 14,
    
    proxy: {
        type: 'ajax',
        api: {
            //create: preurl + 'cuentacorriente/save', 
            read: preurl + 'facturas/librosgetAll',
            //update: preurl + 'cuentacorriente/update'
            //destroy: 'php/deletaContacto.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'data'
        }
    }
})