Ext.define('Infosys_web.view.preventaferreteria.Principal' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.preventaferreteriaprincipal',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Pre Venta',
    store: 'preventaferreteria',
    height: 300,
    viewConfig: {
        forceFit: true
    },
    columns: [{
        header: "Id",
        flex: 1,
        dataIndex: 'id',
        hidden: true
               
    },{
        header: "Ticket",
        flex: 1,
        dataIndex: 'num_ticket'
               
    },{
        header: "Tipo Documento",
        flex: 1,
        dataIndex: 'id_tip_docu',
        hidden : true
               
    },{
        header: "Forma de Pago",
        flex: 1,
        dataIndex: 'id_pago',
        hidden : true
               
    },{
        header: "Documento",
        flex: 1,
        dataIndex: 'nom_documento'
               
    },{
        header: "Fecha Venta",
        flex: 1,
        dataIndex: 'fecha_venta',
        type: 'date',
        renderer:Ext.util.Format.dateRenderer('d/m/Y') 
    },{
        header: "Rut",
        flex: 1,
        align: 'right',
        dataIndex: 'rut_cliente'
    },{
        header: "Razon Social",
        width: 390,
        dataIndex: 'nom_cliente'
    },{
        header: "Giro",
        width: 390,
        dataIndex: 'nom_giro',
        hidden: true
    },{
        header: "Direccion",
         width: 390,
        dataIndex: 'direccion',
        hidden: true
    },{
        header: "Vendedor",
        flex: 1,
        dataIndex: 'nom_vendedor'
    },{
        header: "Id_Vendedor",
        flex: 1,
        dataIndex: 'id_vendedor',
        hidden: true
    },{
        header: "Neto",
        flex: 1,
        dataIndex: 'neto',
        hidden: true,
        renderer: function(valor){return Ext.util.Format.number((valor),"0,00")},
        aling: 'rigth'
    },{
        header: "Descuento",
        flex: 1,
        dataIndex: 'desc',
        renderer: function(valor){return Ext.util.Format.number((valor),"0,00")},
        hidden: true
    },{
        header: "Total Venta",
        flex: 1,
        dataIndex: 'total',       
        renderer: function(valor){return Ext.util.Format.number((valor),"0,00")},
        align: 'right'        
    },{
        header: "Id Sucursal",
        flex: 1,
        dataIndex: 'id_sucursal',
        hidden: true
    },{
        header: "Direccion",
        flex: 1,
        dataIndex: 'direccion_sucursal',
        hidden: true
    },{
        header: "Comuna",
        flex: 1,
        dataIndex: 'comuna',
        hidden: true
    },{
        header: "Ciudad",
        flex: 1,
        dataIndex: 'ciudad',
        hidden: true
    }],
    
    initComponent: function() {
        var me = this

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                iconCls: 'icon-add',
                action: 'agregarpreventaferreteria',
                text : 'Nueva Venta'
            },{
                xtype: 'button',
                iconCls: 'icon-add',
                action: 'editarpreventaferreteria',
                text : 'Editar / Agregar'
            },{
                xtype: 'button',
                iconCls : 'icon-pdf',
                text: 'Imprimir PDF',
                action:'exportarpreventaferreteria'
            },{
                xtype: 'button',
                width: 120,
                iconCls : 'icon-exel',
                text: 'Exportar EXCEL',
                action:'exportarexcelpreventaferreteria'
            },{
                xtype: 'button',
                iconCls: 'icon-delete',
                action: 'eliminarpreventaferreteria',
                text : 'Eliminar'
            },'->',{
                xtype: 'combo',
                align: 'center',
                width: 260,
                labelWidth: 85,
                maxHeight: 25,
                matchFieldWidth: false,
                listConfig: {
                    width: 175
                },
                itemId: 'tipoDocumentoId',
                fieldLabel: '<b>DOCUMENTO</b>',
                fieldCls: 'required',
                store: 'Tipo_documento.Selector',
                valueField: 'id',
                displayField: 'nombre'
            },{
                xtype: 'combo',
                itemId: 'tipoSeleccionId',
                fieldLabel: '',
                width: 100,
                forceSelection : true,
                editable : false,
                valueField : 'id',
                displayField : 'nombre',
                emptyText : "Seleccione",
                store : 'facturas.Selector2'
            },{
                width: 200,
                xtype: 'textfield',
                itemId: 'nombreId',
                fieldLabel: ''
            },'-',{
                xtype: 'button',
                iconCls: 'icon-search',
                action: 'buscarpreventaferreteria',
                text : 'Buscar'
            },{
                xtype: 'button',
                iconCls: 'icon-delete',
                action: 'cerrarpreventaferreteria',
                text : 'Cerrar'
            }]      
        },{
            xtype: 'pagingtoolbar',
            dock:'bottom',
            store: 'preventaferreteria',
            displayInfo: true
        }];
        
        this.callParent(arguments);
    }
});
