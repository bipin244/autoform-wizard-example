Staff = new Mongo.Collection('staff');

// Schema
Schemas = {};
Schemas.general = new SimpleSchema({
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
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    }
});
Schemas.contact = new SimpleSchema({
    telephone: {
        type: String,
        label: 'Telephone'
    },
    address: {
        type: String,
        label: 'Address'
    }
});


Staff.attachSchema([
    Schemas.general,
    Schemas.contact
]);