/***
 * Editing for currency fields
 * Enabled when column is of type 'CURRENCY'
 * Supports following column options:
 *  - decimalSymbol
 *  - groupSymbol
 *  - currencyPrecision
 */

define(['override', 'jquery', 'utils', 'w2ui'], function(override, $) {

    "use strict";

    return {
        requires: {
            editing: {
                editors: {
                    currency: function(record, column, value) {
                        var input = $("<input>").w2field('money', {
                            autoFormat: true,
                            currencyPrefix: '',
                            currencyPrecision: column.precision,
                            precision: column.precision,
                            groupSymbol: i18n('groupingSeparator'),
                            decimalSymbol: i18n('decimalSeparator')
                        });
                        input.val(value);
                        
                        var w2 = input.data('w2field');
                        
                        var v = input.val.bind(input);
                        
                        input.val = function(x) {
                            return w2.clean(v());
                        };
                        
                        return input;
                    }
                }
            }
        }
    };
});