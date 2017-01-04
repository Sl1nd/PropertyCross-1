import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CacheService {
	private isIDBSupported: boolean;
	private db: any;
	public _dbInitialized: Subject<any>;
	public _dbPropertiesContent: Subject<any>;
	public _dbSearchResultContent: Subject<any>;
	
	constructor(){
	  this._dbInitialized = <Subject<any>> new Subject();
  	  this._dbPropertiesContent = <Subject<any>> new Subject();
	  this._dbSearchResultContent = <Subject<any>> new Subject();
	}

	public initDataBase(){
		document.addEventListener("DOMContentLoaded", () => {
		    if("indexedDB" in window) {
		        this.isIDBSupported = true;
		    }

		    if(this.isIDBSupported == true) {
		    	var openRequest = indexedDB.open("propertycross",4);
		    	openRequest.onupgradeneeded = (e:any) => {
				    let thisDB = e.target.result;

				    if(!thisDB.objectStoreNames.contains("SearchResults")) {
				            thisDB.createObjectStore("SearchResults", {autoIncrement:true});
				    }
				    if(!thisDB.objectStoreNames.contains("FavProperties")) {
				        	thisDB.createObjectStore("FavProperties", {autoIncrement:true});
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

	public removeData(data, table){
		console.log(data, table);
	}

	public getSearchResults(){
		let transaction = this.db.transaction(["SearchResults"], "readonly");
		let objectStore = transaction.objectStore("SearchResults");
		let cursorReuest = objectStore.openCursor();
		let searchResults = new Array();      
		cursorReuest.onsuccess = (evt) => {              
        	let cursor = evt.target.result;
        	if (cursor) {
            	searchResults.push(cursor.value);
            	cursor.continue();
        	}
        	this._dbSearchResultContent.next(searchResults);
    	};
    	
    	return this._dbSearchResultContent.asObservable();	
	}

	public getFavProperties(){
		let transaction = this.db.transaction("FavProperties");
		let objectStore = transaction.objectStore("FavProperties");
		let cursorReuest = objectStore.openCursor();
		let favsProperties = new Array();      
		cursorReuest.onsuccess = (evt) => {              
        	let cursor = evt.target.result;
        	if (cursor) {
            	favsProperties.push(cursor.value);
            	cursor.continue();
        	}
        	this._dbPropertiesContent.next(favsProperties);
    	};
    	
    	return this._dbPropertiesContent.asObservable();	
	}

}