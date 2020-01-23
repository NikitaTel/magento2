define([
    'jquery',
    'matchMedia',
    'accordion'
], function ($, mediaCheck) {
    'use strict';

    $.widget('mage.my_accordion',{
        _init: function() {

            this._render();

        },

        _render: function() {
            if(true){
                mediaCheck({
                    media: '(min-width: 768px)',
                    entry: $.proxy(function(){
this._return();
                        this._destroy();
                    },this),
                    exit: $.proxy(function(){
                        this._return();
                    },this)
                });
            }

        },
        _destroy: function(){
            $(this.element).accordion("destroy");
        },
        _return: function(){

            $(this.element).accordion({
                active: [0,1,2],
                collapsible: true,
                openedState: "active",
                closedState: "closed",
                multipleCollapsible: true,
                animate: {"duration" : 500}
            });
        }

    });

    return $.mage.my_accordion;
});