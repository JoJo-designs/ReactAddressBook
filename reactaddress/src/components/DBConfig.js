export const DBConfig = {
    name: 'AddressDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'address',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                {name: 'name', keyPath: 'name'},
                {name: 'phone', keyPath: 'phone'},
                {name: 'email', keyPath: 'email'}
            ]
        }
    ]
};