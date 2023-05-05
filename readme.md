# RSEC-Basics

RSEC-Basics is a lightweight and flexible library that provides base components for building Repositories, Services, Entities, and Controllers in your Node.js applications. It streamlines the process of setting up a scalable application architecture by offering pre-built, extendable classes.

## Installation

To install RSEC-Basics, run the following command:

```sh
npm install rsec-basics
```

## Usage
First, import the required base components from the RSEC-Basics package:
```ts
import { BaseEntity, BaseRepository, BaseService, RequiredFields } from 'rsec-basics';
```

Next, create your custom classes by extending the base components:

```ts
interface MyEntityRequiredFields extends RequiredFields {
    my_reqired_field: any;
}

class MyEntity extends BaseEntity {
    required: MyEntityRequiredFields;

    my_reqired_field: any;

    constructor(id: UUID, my_reqired_field: any) {
        super(id);
        this.my_reqired_field = my_reqired_field;
    }

    // Your custom entity implementation
}

class MyRepository extends BaseRepository<MyEntity> {
    // Database fields for query
    stringFields: string[] = ['id', 'my_reqired_field'];
    
    constructor() {
        super((row: any) => new MyEntity(...Object.values(row)), mysqlPool);
    }

    tableName() {
        return 'MyEntityTable';
    }

    // Your custom repository implementation
}

class MyService extends BaseService<MyRepository, MyEntity> {
    constructor(repository: MyRepository) {
        super(repository);
    }
}

```