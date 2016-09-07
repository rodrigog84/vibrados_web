Ext.define('Infosys_web.view.cotizaciones.CotizacionMail' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.cotizacionmail',
    

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Envio Cotizacion por Mail',
    layout: 'fit',
    autoShow: true,
    width: 450,
    height: 280,
    modal: true,
    iconCls: 'icon-sheet',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'idcotiza',
                        itemId : 'idCotizaId',
                        fieldLabel: 'id',
                        hidden:true
                    },{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelWidth: 70,
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Email',
                            width: 400,
                            allowBlank: false,
                            name: 'email',
                            itemId: 'email',
                            vtype: 'email'
                        }]
                    },{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelWidth: 70,
                        items: [{
                            xtype: 'combo',
                            itemId: 'tipoenvioId',
                            width: 290,
                            fieldCls: 'required',
                            maxHeight: 25,
                            fieldLabel: '<b>TIPO</b>',
                            forceSelection : true,
                            name : 'id_tipo',
                            valueField : 'id',
                            displayField : 'nombre',
                            emptyText : "Seleccione",
                            store : 'cotizacion.Select'
                        }]
                    },{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelWidth: 70,
                        items: [{
                            xtype: 'textareafield',
                            width: 400,
                            allowBlank: false,
                            rows: 8,
                            name: 'mensaje',
                            itemId: 'mensaje',
                            fieldLabel: 'Mensaje'
                        }]
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-email_send',
                text: 'Enviar',
                action: 'cotizacionemail'
            },'-',{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
