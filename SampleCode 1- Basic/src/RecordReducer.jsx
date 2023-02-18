export default function RecordsReducer(records, action) {
    // you can replace records with other names , i used records here as it is same with the records for the UseReducer parent
    // at here we define the case when we use dispatch function

    switch (action) {
        case 'add': {
            return [...records, "added"];
        }
        case 'delete': {
            records.splice(records.length - 1, 1);
            return [...records];
        }
        default:
            return records;
    }
}