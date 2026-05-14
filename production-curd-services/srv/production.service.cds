using production.management as db from '../db/schema';

service ProductionService {

    entity Production as projection on db.Production;

}