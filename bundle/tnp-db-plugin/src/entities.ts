
//// FILE GENERATED BY TNP /////
import { Morphi } from 'morphi';



import { PIES, IPIES } from './apps/pies/PIES';
export { PIES, IPIES } from './apps/pies/PIES';

import { TESTOWY, ITESTOWY } from './apps/testowy/TESTOWY';
export { TESTOWY, ITESTOWY } from './apps/testowy/TESTOWY';

export const Entities: Morphi.Base.Entity<any>[] = [
PIES,
TESTOWY
] as any;

//#region @backend




import { Repository } from 'typeorm';
export { Repository } from 'typeorm';
import * as _ from 'lodash'

export function entities<ADDITIONAL={}>(connection?: Morphi.Orm.Connection, decoratorsEntities?: ADDITIONAL) {
return _.merge({

PIES: Morphi.Orm.RepositoryFrom<PIES>(connection as any, PIES),

TESTOWY: Morphi.Orm.RepositoryFrom<TESTOWY>(connection as any, TESTOWY),
} , decoratorsEntities );
}
//#endregion
