Ext.define('SignatureFieldExample.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet'
    ],
    config: {
        layout: 'vbox',
        scrollable: null,
        items:[{
            xtype: 'spacer',
            flex: 1
        },{
            xtype: 'formpanel',
            width: 600,
            height: 360,
            centered: true,
            items: [{
                xtype: 'toolbar',
                title: 'Signature Field'
                
            },{
                xtype: 'fieldset',
                margin: '1em 2em',
                items: [{
                    xtype: 'signaturefield',
                    name: 'signature',
                    label: 'Signature'
                }]
            },{
                xtype: 'button',
                text: 'Get Data',
                margin:'1em 2em',
                action: 'getSignature'
            },{
                xtype: 'button',
                text: 'Set Data',
                margin:'0 2em',
                action: 'setSignature'
            }]
        },{
            xtype: 'spacer',
            flex: 1
        }]
    }
});
