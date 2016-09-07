Ext.define('Infosys_web.model.Facturas.Item', {
    extend: 'Ext.data.Model',
    fields: [
      	{name: 'id'},
        {name: 'id_factura'},
        {name: 'id_cliente'},
        {name: 'nombre_cliente'},
        {name: 'rut_cliente'},
        {name: 'num_factura'},
        {name: 'id_vendedor'},
        {name: 'nom_vendedor'},
        {name: 'fecha_factura', type:'date',dateFormat:"Y-m-d"},
        {name: 'fecha_venc', type:'date',dateFormat:"Y-m-d"},
        {name: 'sub_total'},
        {name: 'descuento'},
        {name: 'neto'},
        {name: 'iva'},
        {name: 'totalfactura'}
        ]
});