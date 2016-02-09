// insert
Template.staffInset.helpers({
    dataList: function () {
        return Staff.find();
    },
    steps: function () {
        return [{
            id: 'general',
            title: 'General',
            template: 'staffGeneral',
            formId: 'staffGeneral',
            schema: Schemas.general
        }, {
            id: 'contact',
            title: 'Contact',
            template: 'staffContact',
            formId: 'staffContact',
            schema: Schemas.contact,
            onSubmit: function (data, wizard) {
                var self = this;
                var extend = _.extend(wizard.mergedData(), data);

                // Insert
                Staff.insert(extend, function (error, result) {
                    if (!error) {
                        wizard.show('general');
                        alert('Inserted Success!');
                    }
                });
            }
        }];
    }
});

Template.staffUpdate.helpers({
    steps: function () {
        // Get data for update form
        var staffId = FlowRouter.getParam('staffId');
        var data = Staff.findOne(staffId);

        return [{
            id: 'general',
            title: 'General',
            template: 'staffGeneral',
            formId: 'staffGeneral',
            schema: Schemas.general,
            data: data
        }, {
            id: 'contact',
            title: 'Contact',
            template: 'staffContact',
            formId: 'staffContact',
            schema: Schemas.contact,
            data: data,
            onSubmit: function (data, wizard) {
                var self = this;
                var extend = _.extend(wizard.mergedData(), data);

                console.log('Update:');
                console.log(self);
                console.log(extend);

                // Update
                Staff.update(self.docId, {$set: extend}, function (error, result) {
                    if (!error) {
                        FlowRouter.go('staffInsert');
                        alert('Updated Success!');
                    }
                });
            }
        }];
    }
});

