export const DBConfig = {
    name: 'address',
    version: 1,
    objectStoresMeta: [
      {
        store: 'address',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name'},
          { name: 'phone', keypath: 'phone'},
          { name: 'email', keypath: 'email'},
          { name: 'note', keypath: 'note'},
          { name: 'image', keypath: 'image'}
        ]
      }
    ]
  };