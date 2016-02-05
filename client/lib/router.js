FlowRouter.route('/', {
    name: 'staffInsert',
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {content: 'staffInset'});
    }
});
FlowRouter.route('/:staffId', {
    name: 'staffUpdate',
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {content: 'staffUpdate'});
    }
});
