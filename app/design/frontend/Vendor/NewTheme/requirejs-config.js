var config = {
    'map': {
        '*': {
            'loaded_heh':'js/log_when_loaded'
        }
    },
    'paths':{
        'title_1':'Magento_Theme/js/v1'
    },
    'shim': {
        'js/loaded_2':{
            'deps':['js/log_when_loaded']
                        }
           },
    'config':
        {
            'mixins':{
                'Magento_Catalog/js/catalog-add-to-cart': {
                    'Magento_Theme/js/add-to-cart-mixin': true
                }
            }
        }
};