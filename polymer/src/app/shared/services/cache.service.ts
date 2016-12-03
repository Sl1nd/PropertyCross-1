import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CacheService {
	private isIDBSupported: boolean;
	private db: any;
	public _dbInitialized: Subject<any>;
	public _dbContent: Subject<any>;
	
	constructor(){
	  this._dbInitialized = <Subject<any>> new Subject();
  	  this._dbContent = <Subject<any>> new Subject();
	}

	public initDataBase(){
		document.addEventListener("DOMContentLoaded", () => {
		    if("indexedDB" in window) {
		        this.isIDBSupported = true;
		    }

		    if(this.isIDBSupported == true) {
		    	var openRequest = indexedDB.open("propertycross",4);
		    	console.log(openRequest);
		    	openRequest.onupgradeneeded = (e:any) => {
    				console.log("running onupgradeneeded");
				    let thisDB = e.target.result;

				    if(!thisDB.objectStoreNames.contains("SearchResults")) {
				        thisDB.createObjectStore("SearchResults", {autoIncrement:true});
				    }
				}

		    	openRequest.onsuccess = (e: any) => {
           			this.db = e.target.result;
           			this._dbInitialized.next();
		    	}
		    }
		},false);

		return this._dbInitialized.asObservable();
	}

	public addData(data, table){
		let transaction = this.db.transaction([table],"readwrite");
		let store = transaction.objectStore(table);
		let dbRequest = store.add(data);
		
		dbRequest.onsuccess = (e:any) => {
			console.log("data successfully written to DB");
		}
	}

	public getData(table){
		let transaction = this.db.transaction([table], "readonly");
		let objectStore = transaction.objectStore(table);
		let items = new Array();
		let cursorReuest = objectStore.openCursor();
		
		cursorReuest.onsuccess = (evt) => {                    
        	let cursor = evt.target.result;
        	if (cursor) {
            	items.push(cursor.value);
            	cursor.continue();
        	}

        	this._dbContent.next(items);
    	};
    	
    	return this._dbContent.asObservable();	
	}
}