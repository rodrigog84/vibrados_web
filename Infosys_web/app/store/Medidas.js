Ext.define('Infosys_web.store.Medidas', {
    extend: 'Ext.data.Store',
    model: 'Infosys_web.model.Medida',
    autoLoad: true,
    pageSize: 14,
    
    proxy: {
        type: 'ajax',

        api: {
            create: preurl + 'medidas/save', 
            read: preurl + 'medidas/getAll',
            update: preurl + 'medidas/update'
            //destroy: 'php/deletaContacto.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'data'
        }
    }
});