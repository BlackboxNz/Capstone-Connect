import { DataStore } from '@aws-amplify/datastore';
import { Team } from './models';

await DataStore.save(
    new Team({
		"Students": []
	})
);


    
