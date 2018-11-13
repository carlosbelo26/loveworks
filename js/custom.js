if (!window.x) x = {}

x.Selector = {}
x.Selector.getSelected = function() {
    var t = ''

    if (window.getSelection) {
        t = window.getSelection()
    } else if (document.getSelection) {
        t = document.getSelection()
    } else if (document.selection) {
        t = document.selection.createRange().text
    }
    return t
}

jQuery(function() {
    var $modal = jQuery(
        '<div class="modal fade" tabindex="-1" role="dialog">' +
            '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                        '<h4 class="modal-title">Marcações</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<p>Você deseja realmente salvar esta marcação?</p>' +
                        '<p id="markingPost"></p>' +
                        '<form>' +
                            '<div class="row">' +
                                '<div class="col-md-6">' +
                                    '<input type="text" required name="name" class="form-control" placeholder="Nome" />' +
                                '</div>' +
                                '<div class="col-md-6">' +
                                    '<input type="email" class="form-control" required name="email" placeholder="E-mail" />' +
                                '</div>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>' +
                        '<button type="button" class="btn btn-primary">Salvar</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    jQuery('.blog_post_text').bind('mouseup', function() {
        var mytext = x.Selector.getSelected().toString()

        if (mytext.length > 10) {
            $modal.find('#markingPost').html('<i>"' + mytext+ '"</i>')
            $modal.modal({show: true})
        }
    })
})