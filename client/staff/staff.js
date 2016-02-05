// Schema
Schemas = {};
Schemas.step1 = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    gender: {
        type: String,
        label: 'Gender',
        autoform: {
            type: 'select',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    }
});
Schemas.step2 = new SimpleSchema({
    telephone: {
        type: String,
        label: 'Telephone'
    },
    address: {
        type: String,
        label: 'Address'
    }
});

// insert
Template.staffInset.helpers({
    steps: function () {
        return [{
            id: 'wizardStep1',
            title: 'General',
            template: 'staffStep1',
            formId: 'staffStep1',
            schema: Schemas.step1
        }, {
            id: 'wizardStep2',
            title: 'Contact',
            template: 'staffStep2',
            formId: 'staffStep2',
            schema: Schemas.step2,
            onSubmit: function (data, wizard) {
                var self = this;
                var extend = _.extend(wizard.mergedData(), data);

                Staff.insert(extend);

                alert('Inserted Success!');
            }
        }];
    }
});

// update
Template.staffUpdate.helpers({
    steps: function () {
        return [{
            id: 'step1',
            title: 'General',
            template: 'staffStep1',
            data: function () {
                var id = FlowRouter.getParams('clientId');
                return Staff.findOne(id);
            },
            schema: Schemas.step1
        }, {
            id: 'step2',
            title: 'Contact',
            template: 'staffStep2',
            data: function () {
                var id = FlowRouter.getParams('clientId');
                return Staff.findOne(id);
            },
            schema: Schemas.step2,
            onSubmit: function (data, wizard) {
                var self = this;
                var extend = _.extend(wizard.mergedData(), data);

                console.log(self);
                console.log(extend);

                //Staff.update(_id, {$set: extend});

                alert('Updated Success!');
            }
        }];
    }
});
