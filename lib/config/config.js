AccountsTemplates.addFields([

    {
        _id: 'Name',
        type: 'text',
        displayName: "Name",
        errStr: 'enter full name',
        required: true,
    },
    {
        _id: 'address',
        type: 'text',
        displayName: "Adress",
        errStr: 'enter Address',
        required: true,
    },
    {
        _id: 'birthday',
        type: 'text',
        displayName: "Birthday",
        required: false,
        template: 'dateInput'
    },
    {
        _id: "gender",
        type: "select",
        displayName: "Gender",
        select: [
            {
                text: "Male",
                value: "Male",
            },
            {
                text: "Female",
                value: "Female",
            },
        ],
        required: true,
    },
 
]);