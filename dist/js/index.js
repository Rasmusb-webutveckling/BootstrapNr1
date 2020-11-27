System.register([], function (exports_1, context_1) {
    "use strict";
    var myModal;
    var __moduleName = context_1 && context_1.id;
    function callModal() {
        myModal.modal('show');
    }
    return {
        setters: [],
        execute: function () {
            myModal = $('#badModal');
        }
    };
});
//# sourceMappingURL=index.js.map